import { useState } from "react";


export default function RatingReview() {

  const [rating, setRating] = useState(0)
  const [showButton, setShowButton] = useState(false);

  return (
  <div className="content_all_element" >
    <div className="content__stars__span" >
      <div className="content__stars" >
        {[1, 2, 3, 4, 5].map((star) => {
          return (
            <p
              key={star}
              className="start"
              style={{
                cursor: "pointer",
                color: rating >= star ? '#fbbd17': 'gray',
              }}
              onClick={()=> { 
                setRating(star)
                setShowButton(!showButton)
              }}
              onMouseEnter={() => {
                !showButton && setRating(star)
              }}
              onMouseLeave={() => {
                !showButton && setRating(0)
              }}
            >
            {' '}
            ★{' '} 
          </p>)
        })}
        </div>
        <div>
          <span className="number__rating" >{rating}</span>
        </div>
    </div>
        { showButton && <>
        <button> + Add to list </button>
        </>
      }
  </div>
  )
}