import Button from './Button';
const {useState} = require('react');

export default function LeftRow({listOfMovies, setTargetImgId, sendIdToParant}) {

  const [onHidden, setOnHidden] = useState(false);

  return(
    <section className="left center_content_div" >
      <Button onHidden={onHidden} setOnHidden={setOnHidden} />
      {!onHidden && 
        <ListOfItem sendIdToParant={sendIdToParant} setTargetImgId={setTargetImgId} listOfMovies={listOfMovies}/>
      }
    </section>
  )
}

function ListOfItem({listOfMovies, setTargetImgId, sendIdToParant}) {
  
  return(
  <ul className="List_of_items" >
    {listOfMovies.map((itmeInfo, i) => {
      return(
        <ListItme sendIdToParant={sendIdToParant} setTargetImgId={setTargetImgId} itmeInfo={itmeInfo} key={i} />
      );
    })}
  </ul>
  )
}

function ListItme({itmeInfo, setTargetImgId, sendIdToParant}) {

  function handleTargetClick(imdbID) {
    sendIdToParant(imdbID)
  }

  return(
    <li className="list_item item_left"
      onClick={()=> handleTargetClick(itmeInfo.imdbID) }>
      <img src={itmeInfo.Poster} alt='img_of_movie' />
      <div className="name_releaseYear" >
        <p>{itmeInfo.Title}</p>
        <p>📝{itmeInfo.Year}</p>
      </div>
    </li>
  )
}
