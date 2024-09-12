import Header from './components/Header';
import LeftRow from './components/LeftRow';
import RightRow from './components/RightRow';

export default function App() {
  
  const listOfMovies = [
    {
      id: 1,
      img: "https://akns-images.eonline.com/eol_images/Entire_Site/20191019/rs_634x941-191119145917-634-Jumanji-Next-Level-CE-111919.jpg?fit=around%7C776:1152&output-quality=90&crop=776:1152;center,top",
      releaseYear: 2020,
      movieName: 'Inception'
    },
    {
      id: 2,
      img: "https://static.toiimg.com/thumb/imgsize-23456,msid-99035292,width-168,resizemode-4/99035292.jpg",
      movieName: 'Parasite',
      releaseYear: 2022,
    },
    {
      id: 3,
      img: "https://d2g43ubxtnccwi.cloudfront.net/31050_1_medium.jpg",
      movieName: 'The Matrix',
      releaseYear: 2023,
    },
  ]


  const listOfMoviesRight = [
    {
      id: 1,
      img: "https://d2g43ubxtnccwi.cloudfront.net/31050_1_medium.jpg",
      movieName: 'The Matrix',
      stars: 8,
      supStars: 9,
      min: 180,
    },
    {
      id: 2,
      img: "https://static.toiimg.com/thumb/imgsize-23456,msid-99035292,width-168,resizemode-4/99035292.jpg",
      movieName: 'Parasite',
      stars: 4,
      supStars: 4,
      min: 130,
    },
  ]

  return (
    <div className="App">
      <Header />
      <div className='content_in_center' >
        <LeftRow listOfMovies={listOfMovies} />
        <RightRow listOfMoviesRight={listOfMoviesRight} />
      </div>
    </div>
  );
}

