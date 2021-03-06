import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setMainPage } from '../actions/index';
import { connect } from 'react-redux';
import welcomeimage from '../images/welcomeimage.png';

const HomePage = (props) => {
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => {
        const breeds = Object.keys(data.message);

        props.setMainPage(breeds);
      });
  }, [props]);

  return (
    <div>
      <h1>
        Welcome Dog lovers!<i class='fas fa-dog doglogo'></i>
      </h1>
      <h1>
        <i class='fas fa-dog'></i>
        <i class='fas fa-bone bonelogo'></i>
        <i class='fas fa-paw paw'></i>
      </h1>
      <h2>
        <Link to='/dogList'>
          <h2> Complete list of dog breeds</h2>{' '}
        </Link>
        <br></br>
        <br></br>

        <Link to='/DogBreedQuiz'>
          <h2>Start quiz here</h2>
        </Link>
      </h2>
      <img src={welcomeimage} alt='lovely-dog' className='welcomeimage' />
    </div>
  );
};

export default connect(null, { setMainPage })(HomePage);
