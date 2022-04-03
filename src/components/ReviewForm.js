import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createReview } from '../actions/createReview'



function ReviewForm ({props}) {
    const [form, setValues] = useState({
        title: '',
        rating: '',
        content: ''    
})

   const handleChange = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

   const handleSubmit = (event) => {
        event.preventDefault()
        console.log("lets seeeee 1", form)

      const result = createReview(form, props.id)
      console.log(result)
       console.log("lets seeeee 2", props)
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
                    <input type="text" name="title" value={form.title} onChange={handleChange} />
                    <br></br><br></br>
                    <label> Rating: </label>
                    <input type="number" name="rating" min="0" max="10" value={form.rating} onChange={handleChange} />
                    <br></br><br></br>
                    <label> Review Content: </label>
                    <input type="text" name="content" value={form.content} onChange={handleChange}  />
                    <br></br><br></br>
                    <input type="submit" />
                </form>
            </div>
        )
    }

export default connect(null, { createReview })(ReviewForm)
