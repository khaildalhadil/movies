import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import RatingReview from './components/RatingReview';
import './style/ratingReview.css'

// function Test() {

//   const [getStars, setGetStars] = useState(0)

//   return (
//     <div>
//       <RatingReview color={'blue'} maxRating={5} setGetStars={setGetStars} getStars={getStars} />
//       <p>It is start {getStars} </p>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RatingReview
      // size={40}
      // color={'blue'}
    />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={2} />

    <Test /> */}
  {/* <Test  /> */}
  </React.StrictMode>
);

