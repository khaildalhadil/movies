import { useState, useEffect } from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Header from './components/Header.js';
import LeftRow from './components/LeftRow.js';
import RightRow from './components/RightRow.js';
import ListOfItem from './components/RightRow.js';

export default function App() {
  
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [query, setQuery] = useState('')
  const [watched, setWatched] = useState([]);
  const [isRetedBefor, setIsRetedBefor] = useState(false);

  // state to hold fetched data
  // const [watched, setListOfMoviesRight] = useState([]);
  const [listOfMovies, setListOfMovies] = useState([]);
  // const [isresponse, setIsResponse] = useState(false);
  const [targetImgId, setTargetImgId] = useState('');
  const [infoClicedId, setInfoClicedId] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [title, setTitle] = useState('تقييم الافلام');


  function deleteTheItem(id) {
    setWatched(watched.filter((el) => el.id !== id));
  }

  function handleChangeTitle() {
    document.title = title;

    // cleanup function not working right now 🔥❌
    return function() {
      document.title = 'تقييم الافلام';
      console.log('HIIIIIIIIII')
    }
  }

  useEffect(()=> {
    handleChangeTitle();
  }, [title])

  function sendIdToParant(id) {
    const targetElement = listOfMovies.find((el) => el.imdbID === id);
    setTitle(targetElement.Title)
    
    if (watched.map((el) => el.id).find((el) => el  === id)){
      setIsRetedBefor(true);
    } else {
      setIsRetedBefor(false);
    }
    // <PageTitle title={el.Poster} />
    setInfoClicedId(targetElement);
    setIsShow(true);
  }

  function handleChangeOnHidden() {
    setIsShow(false);
    
  }

  // const query = "interstellar";
  // const query = "Everything Everywhere All at Once";
useEffect(() => {
  
  const fetchMove = async () => {
    const controller = new AbortController();
    setIsLoading(true);
    try {
      setIsError(false);
      setErrorMessage('');
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=fff7c1be&s=${query}`,
        {signal: controller.signal}
      );

      //  404
      if (!res.ok) {
        let error = "You don't have a net 404"
        throw error;
      }
      
      if (query === '') {
        let error = "Enter movie name";
        throw error;
      }
      
      const data = await res.json();
      setListOfMovies(data.Search);
      setIsLoading(false);

      // if I enter Invalid name in fetch it will run
      if (data.Response === 'False') {
        setListOfMovies([]);
        let error = data.Error;
        throw error;
      }

    } catch(error) {
      setErrorMessage(error);
      setIsError(true);
    }

    
    return function () {
      controller.abort();
      console.log('abort❌❌❌❌❌❌❌❌')
    }
  }
  fetchMove();

  // assencronz so it is non block
  
  }, [query]);

  function handleDataWatch(stars, objectOfDataMoves) {
    setWatched((moves) => [...moves, {
      stars,
      runTime: objectOfDataMoves.Runtime,
      rating: objectOfDataMoves.imdbRating,
      img: objectOfDataMoves.Poster,
      id: objectOfDataMoves.imdbID,
      movieName: objectOfDataMoves.Title
    }])
    setIsShow(false);
  }

  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} >
        <li>
          <h3>result {listOfMovies.length}</h3>
        </li>
      </Header>
      <div className='content_in_center' >
        {/* <LeftRow listOfMovies={listOfMovies} />
        <RightRow watched={watched} /> */}
      {!isError ? <>
        {isLoading ? <Loader /> : <LeftRow sendIdToParant={sendIdToParant} setTargetImgId={setTargetImgId} listOfMovies={listOfMovies}/>}
        </>: <Error errorMessage={errorMessage} />}
        <RightRow 
          handleChangeOnHidden={handleChangeOnHidden} 
          infoClicedId={infoClicedId} 
          isShow={isShow} 
          targetImgId={targetImgId} 
          watched={watched} 
          dataToAddToWatchList={handleDataWatch}
          isRetedBefor={isRetedBefor}
          deleteTheItem={deleteTheItem}
          setTitle={setTitle}
          />
      </div>
    </div>
  );
}

function Loader() {
  return <h1 className='loader loaderLo'  >Loadding...</h1>
}

function Error({errorMessage}) {
  return <div className='loader'><h1>{errorMessage} 🎬</h1></div>
}