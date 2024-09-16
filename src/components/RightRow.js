import Button from './Button';
const {useState} = require('react');

export default function RightRow({listOfMoviesRight}) {

  const [onHidden, setOnHidden] = useState(false);

  return(
    <div className="center_content_div" >
    <Button onHidden={onHidden} setOnHidden={setOnHidden} />
      {!onHidden && <>
        <TopRightMove/>
        <ListOfItem listOfMoviesRight={listOfMoviesRight} />
    </>
    }
    </div>
  )
}

function ListOfItem({listOfMoviesRight}) {
  return(
    <ul className="List_of_items">
      {listOfMoviesRight.map(item => {
        return(<Item item={item} key={item.id} />);
      })}
    </ul>
  )
}

function Item({item}) {
  return(
    <li className="list_item" >
      <img src={item.img} alt='img_of_movie' />
      <div className="name_releaseYear" >
        <p>{item.movieName}</p>
        <div className="pargrphs" >
          <p>⭐{item.stars}</p>
          <p>🌟{item.supStars}</p>
          <p>⏳{item.min}</p>
        </div>
      </div>
    </li>
  )
}

function TopRightMove() {
  return(
    <div className="firest_list">
      <h2>test movies</h2>
      <div>
        <p># 2 movies</p>
        <p>⭐ 8.43</p>
        <p>🌟 8.9</p>
        <p>⏳ 182min</p>
      </div>
    </div>
  )
}