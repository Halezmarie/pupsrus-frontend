export const toys = [{
  id: 1,
  name: 'Sample Toy #1',
  image_url: 'https://m.media-amazon.com/images/I/61DWaMHr8HL._AC_SX425_.jpg',
  description: 'Sample Toy #1 description',
  reviews: [{
    id: 1001,
    content: 'Review content!',
    rating: '5',
    title: 'Review title!'
  }]
},{
  id: 2,
  name: 'Sample Toy #2 without a review',
  image_url: 'https://i.pinimg.com/736x/b1/6a/4c/b16a4c2402353d19fd7c17847848f533--diy-dog-toys-pet-toys.jpg',
  description: 'Sample Toy #2 description',
  reviews: []
}];

export const toyWithReview = toys.find(toy => toy.id === 1);
export const toyWithoutReview = toys.find(toy => toy.id === 2);
