import Button from './Button';
const {useState} = require('react');

export default function LeftRow({listOfMovies}) {

  const [onHidden, setOnHidden] = useState(false);

  return(
    <section className="left center_content_div" >
      <Button onHidden={onHidden} setOnHidden={setOnHidden} />
      {!onHidden && 
        <ListOfItem listOfMovies={listOfMovies} />
      }
    </section>
  )
}

function ListOfItem({listOfMovies}) {
  return(
  <ul className="List_of_items" >
    {listOfMovies.map((itmeInfo, i) => {
      return(
        <ListItme 
          itmeInfo={itmeInfo} 
          key={i} 
        />
      );
    })}
  </ul>
  )
}

function ListItme({itmeInfo}) {
  return(
    <li className="list_item">
      <img src={itmeInfo.img} alt='img_of_movie' />
      <div className="name_releaseYear" >
        <p>{itmeInfo.movieName}</p>
        <p>📝{itmeInfo.releaseYear}</p>
      </div>
    </li>
  )
}
