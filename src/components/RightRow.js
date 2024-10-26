import RatingReview from './RatingReview';
import Button from './Button';
const {useState, useEffect} = require('react');

export default function RightRow(
  {
  deleteTheItem,
  isRetedBefor,
  watched,
  dataToAddToWatchList,
  handleChangeOnHidden,
  isShow,
  setIsShow,
  infoClicedId,
  setTitle
  }){

  const [isLoading, setIsLoading] = useState(false);
  const [infoFromFetch, setInfoFromFetch] = useState('')
  

  const fetchById = async() => {
    setIsLoading(true)
    const res = await fetch(`http://www.omdbapi.com/?apikey=fff7c1be&i=${infoClicedId.imdbID}`)
    const data = await res.json();
    setInfoFromFetch(data)
    setIsLoading(false)
  }

  useEffect(()=> {
    fetchById()} 
  , [infoClicedId])

  // for (-) in left top
  const [onHidden, setOnHidden] = useState(false);
  const [stars, setStars] = useState(0);
  const [ratringClick, setRatringClick] = useState(false);
  
  function addListToWatch() {
    dataToAddToWatchList(stars, infoFromFetch)
  }

  return(
    <div className='center_content_div' >
      <Button onHidden={onHidden} setOnHidden={setOnHidden} />
      {!onHidden &&
        <>
          {!isShow ? 
            <>
              <TopRightMove watched={watched} />
              <ListOfItem watched={watched} deleteTheItem={deleteTheItem} />
            </>:
            <>
              {isLoading ? <Loading/>: 
                <div className='content__more__info' >
                  <ShowTORate
                    setIsShow={setIsShow}
                    isShow={isShow}
                    infoFromFetch={infoFromFetch} 
                    handleChangeOnHidden={handleChangeOnHidden}/>
                  <div className='content__more__info__botton' >
                  <div className='content__start__btn' >
                  {!isRetedBefor ?
                  <>
                    <RatingReview 
                      className="stars" 
                      maxRating="10" 
                      bg="#25292d"
                      onUserClickStars={setStars}
                      setRatringClick={setRatringClick}
                    />
                      {ratringClick && <ButtonRat 
                        watched={watched}
                        infoClicedId={infoClicedId} 
                        onUserClick={setRatringClick} 
                        addListToWatch={addListToWatch} 
                        setTitle={setTitle}
                        />}
                    </>
                      :<p className='rated' >You rated with movie</p>
                    }
                  </div>
                    <Samerry infoFromFetch={infoFromFetch}  />
                  </div>
                </div>
              }
            </>
          }
        </>
      }
    </div>
  )

}

function Loading(){
  return(
    <div className='' >
      <h1 className='testLoddin'  >loading....</h1>
    </div>
  )
}

function ButtonRat(
  {
    setTitle,
    isRetedBefor,
    watched,
    addListToWatch,
    onUserClick,
    infoClicedId
  }) {

  function addListToWatchIn() {

    addListToWatch();
    onUserClick(false);

  }

  return(
    <button
      onClick={addListToWatchIn}
      className='add_list' >+ Add to list</button>
  )
}

function ListOfItem({watched, deleteTheItem}) {
  return(
    <ul className="List_of_items">
      {watched.map(item => {
        return(<Item item={item} deleteTheItem={deleteTheItem} key={item.id} />);
      })}
    </ul>
  )
}

function Item({item, deleteTheItem}) {
  return(
    <li className="list_item right_list" >
      <img src={item.img} alt='img_of_movie' />
      <div className="name_releaseYear" >
        <h3>{item.movieName}</h3>
        <div className="pargrphs" >
          <p>⭐{item.rating}</p>
          <p>🌟{item.stars}</p>
          <p>⏳{item.runTime}</p>
        </div>
      </div>
      <div className='btn-to-delet' >
        <button 
        onClick={() => deleteTheItem(item.id)}
        className='btn-deleted' >x</button>
      </div>
    </li>
  )
}

function TopRightMove({watched}) {
  let length = watched.length;

  const totoalOfRating = watched
    .map(el => +el.rating)
    .reduce((acc, next)=> acc+next ,0) / length;

  const totoalOfStars = watched
    .map(el => +el.stars)
    .reduce((acc, next)=> acc+next ,0) / length;

  const totoalOfMin =  watched
  .map((el) => +el.runTime.substring(0, el.runTime.indexOf(' ')))
  .reduce((cur, next) =>  cur + next,0) / length;

  return(
    <div className="firest_list">
      <h2>MOVIES YOU WATCHED</h2>
      <div>
        <p># {length} movies</p>
        <p>⭐ {length > 0? totoalOfRating.toFixed(1): 0 }</p>
        <p>🌟 {length > 0? totoalOfStars.toFixed(1): 0 }</p>
        <p>⏳ {length > 0? totoalOfMin.toFixed(1)+' min': 0 }</p>
        {/* 
        {!length === 0? watched.stars / length: 0  } */}
        {/* {!length === 0?  watched.runTime / length: 0} */}
      </div>
    </div>
  )
}

function ShowTORate({setIsShow, isShow, infoFromFetch, handleChangeOnHidden}) {

  // i have problom there ❌❌❌
useEffect(
  function() {
    function handleOnKeyDown(e){
      if(e.key === 'Escape') {
        setIsShow(false);
        console.log("Close")
      }
    }

    document.addEventListener('keydown',handleOnKeyDown)

    // clean up fucntion work ✔✔✔✔✔✔✔
    return function() {
      document.removeEventListener('keydown', handleOnKeyDown);
    };
  }, [isShow])

  return(
    <div className='header_of_right_Row' >
      <p 
        className='arrow' 
        onClick={handleChangeOnHidden} 
      >&larr;</p>
      <div className='content--img' > 
        <img src={infoFromFetch.Poster} alt={infoFromFetch.imdbID} />
      </div>
      <div className='content--info' >
        <h2>{infoFromFetch.Title}</h2>
        <p>{infoFromFetch.Released} . <span>{infoFromFetch.Runtime}</span></p>
        <p>{infoFromFetch.Director}, {infoFromFetch.Genre}</p>
        <p>⭐ {infoFromFetch.imdbRating} rating</p>
      </div>
    </div>
  )

}

function Samerry({infoFromFetch}) {
  return(
    <div>
      <p>{infoFromFetch.Plot}</p>
      <p>{infoFromFetch.Actors}</p>
      <p>{infoFromFetch.Director}</p>
    </div>
  )
}

// RatingReview