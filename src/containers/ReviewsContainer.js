import React from 'react'
import ReviewForm from '../components/ReviewForm'
import Reviews from '../components/Reviews'


class ReviewsContainer extends React.Component {

    render() {
        return (

            <div>
                <ReviewForm toy={this.props.toy} /><br />
                <Reviews reviews={this.props.toy && this.props.toy.reviews} />
            </div>
        )
    }
}

export default ReviewsContainer