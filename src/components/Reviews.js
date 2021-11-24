import React from 'react'
import {connect} from 'react-redux';
import {deleteReview} from '../actions/deleteReview.js';


const Reviews = (props) => {



    const handleDelete = (review) => {
        props.deleteReview(review.id, review.toy_id)
      }

    return(
      <div>
        {props.reviews && props.reviews.map(review=>
            <div key={review.id}> <br></br> <br></br>  Title: {review.title}<br></br> Rating: {review.rating}<br></br>{review.content} <button onClick={()=> handleDelete(review)}>Delete</button></div>  
              )}
      </div>
  ) 
}

// check to see if i have props.reviews, if it is not undefined then it will iterate and the list of reviews will display
export default connect(null, {deleteReview})(Reviews)
