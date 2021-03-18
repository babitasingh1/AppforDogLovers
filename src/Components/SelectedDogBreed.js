import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setDogImage } from '../actions/index';
import { Link } from 'react-router-dom';

const SelectedDogBreed = (props) => {
  const { breed } = props.match.params;

  const url = `https://dog.ceo/api/breed/${breed}/images`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        props.setDogImage(data.message.slice(0, 9));
      });
  }, [props, url]);

  return (
    <div>
      <h1>You are watching images of : {breed} </h1>
      <div className='photoGrid'>
        {props.selectedDogBreed.map((image, index) => (
          <img className='dogImage' src={image} alt='selectedbreed' />
        ))}
      </div>
      <div className='quizImage'>
        <Link to={`/`}>
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedDogBreed: state.selectedDogBreed,
  };
}

export default connect(mapStateToProps, { setDogImage })(SelectedDogBreed);
