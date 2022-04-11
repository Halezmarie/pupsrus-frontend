import React from 'react';
import '../style.css';

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>
        Pups R Us is dedicated to giving you the best experience while you are
        trying to figure out which toy to buy your dog next! You can add or
        review toys, or you can just browse around.
      </h1>
      <div>
        <img
          className="puppy"
          src="https://media.istockphoto.com/photos/dog-chooses-and-fetches-rope-toy-from-hoard-of-pet-toys-in-cart-picture-id1149531683?k=20&m=1149531683&s=612x612&w=0&h=_13gN6KH41CWZJXXrkkx2D_rQeNJbHaTNrcOUa5v1uo="
          alt="display pic"
        />
      </div>
    </div>
  );
};

export default About;
