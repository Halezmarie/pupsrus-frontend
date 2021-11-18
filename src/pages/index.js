import React from 'react';

const Home = () => {
  return (  
      <div
          style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh'
          }}
      >
          <h1>Welcome to Pups R Us!🐶 </h1>
          <div>
              <img src="https://images.unsplash.com/photo-1587559070757-f72a388edbba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nJTIwdG95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="display pic" />
          </div>

      </div>
  );
};

export default Home;