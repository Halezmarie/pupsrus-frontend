import React from 'react'
import '../style.css'

const Home = () => {
    
  return (  
      <div
          style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80vh'
          }}
      >
          <h1>Welcome to Pups R Us!🐶 </h1>
          <div>
              <img className='puppy' src="https://puppytoob.com/wp-content/uploads/2017/08/Toys.jpg" alt="display pic" />
          </div>

      </div>
  );
};

export default Home;