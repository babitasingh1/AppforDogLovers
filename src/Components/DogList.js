import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const DogList = (props) => {
  return (
    <div>
      <h1>All available breeds</h1>
      <div>
        <ol>
          {props.dogBreeds.map((dogbreed, index) => (
            <Link key={index} to={`/SelectedDogBreed/${dogbreed}`}>
              {' '}
              <h2>{dogbreed}</h2>
            </Link>
          ))}
        </ol>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return state;
}

export default connect(mapStateToProps, null)(DogList);
