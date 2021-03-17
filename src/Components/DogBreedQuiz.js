import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setRandomDogImage } from '../actions';
import { Link } from 'react-router-dom';

const DogBreedQuiz = (props) => {
  const [score, setscore] = useState(0);
  const [questionNo, setquestionNo] = useState(1);
  console.log(props.answer);

  const fetchRandomImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        const randomImagedata = data.message;
        console.log(randomImagedata);
        props.setRandomDogImage(randomImagedata);
      });
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const calculateScore = (option) => {
    console.log(props.answer);
    console.log(option);

    if (option === props.answer) {
      setscore(score + 1);
      setquestionNo(questionNo + 1);
      fetchRandomImage();
    } else {
      setquestionNo(questionNo + 1);
      fetchRandomImage();
    }
  };

  return (
    <div>
      <h1>
        Welcome to this amazing quiz<i class='fas fa-bone bonelogo'></i>
      </h1>
      <div className='quizImage'>
        <img className='dogImage' src={props.randomImage} alt='randomImage ' />
      </div>
      <div className='quizImage'>
        <p>Your current score is {score}</p> <br></br>
        <p>you are on question no. {questionNo}</p>
      </div>
      <div className='quizImage'>
        <button onClick={() => calculateScore(props.breedListArray[0])}>
          {props.breedListArray[0]}
        </button>
        <span> </span>
        <button onClick={() => calculateScore(props.breedListArray[1])}>
          {props.breedListArray[1]}
        </button>
        <span> </span>
        <button onClick={() => calculateScore(props.breedListArray[2])}>
          {props.breedListArray[2]}
        </button>
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
  const answer = state.selectRandomDog.answer;

  const option1 =
    state.dogBreeds[Math.floor(Math.random() * (state.dogBreeds.length - 1))];
  const option2 =
    state.dogBreeds[Math.floor(Math.random() * (state.dogBreeds.length - 1))];

  const breedListArray = [];
  breedListArray.push(answer, option1, option2);
  breedListArray.sort();
  console.log(breedListArray);
  return {
    randomImage: state.selectRandomDog.image,
    answer: state.selectRandomDog.answer,
    breedListArray,
  };
}

export default connect(mapStateToProps, { setRandomDogImage })(DogBreedQuiz);
