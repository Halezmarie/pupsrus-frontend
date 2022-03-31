import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createReview } from '../actions/createReview'


function ReviewForm (props) {
    const [form, setValues] = useState({
        title: '',
        rating: '',
        content: ''    
})

   const handleChange = (event) => {
        setValues({
            [event.target.name]: event.target.value
        })
    }

   const handleSubmit = (event) => {
        event.preventDefault()
        props.createReview(props.toy.id)
        setValues({
            ...form,
            title: '',
            rating: '',
            content: ''
        })
   }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <br></br>
                    <text> Add a review for this product: </text>
                    <br></br><br></br>
                    <label> Review Title: </label>
                    <input type="text" name="title" value={setValues.title} onChange={handleChange} />
                    <br></br><br></br>
                    <label> Rating: </label>
                    <input type="number" name="rating" min="0" max="10" value={setValues.rating} onChange={handleChange} />
                    <br></br><br></br>
                    <label> Review Content: </label>
                    <input type="text" name="content" value={setValues.content} onChange={handleChange}  />
                    <br></br><br></br>
                    <input type="submit" />
                </form>
            </div>
        )
    }

export default connect(null, { createReview })(ReviewForm)
