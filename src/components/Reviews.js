import React from 'react'


const Reviews = (props) => {

    return(
        <div>
            {props.reviews && props.reviews.map(review =>
              <div key={review.id}> <br></br> <br></br>  Title: {review.title}<br></br> Rating: {review.rating}<br></br>{review.content} <button> Delete </button></div>  
                )}
        </div>
    ) 
}
// check to see if i have props.reviews, if it is not undefined then it will iterate and the list of reviews will display
export default Reviews
