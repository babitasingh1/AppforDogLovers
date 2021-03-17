import { combineReducers } from 'redux';
import { SET_MAINPAGE, SET_DOGIMAGE, SET_RANDOMDOGIMAGE } from '../actions';

function dogBreeds(state = [], action) {
  switch (action.type) {
    case SET_MAINPAGE:
      return action.payload;

    default:
      return state;
  }
}

function selectedDogBreed(state = [], action) {
  switch (action.type) {
    case SET_DOGIMAGE:
      return action.payload;

    default:
      return state;
  }
}

function selectRandomDog(state = [], action) {
  switch (action.type) {
    case SET_RANDOMDOGIMAGE:
      return {
        ...state,
        image: action.payload,
        answer: action.payload.split('/')[4],
      };

    default:
      return state;
  }
}
const rootReducer = combineReducers({
  dogBreeds,
  selectedDogBreed,
  selectRandomDog,
});
export default rootReducer;
