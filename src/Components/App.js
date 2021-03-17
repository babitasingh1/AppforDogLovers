import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Homepage';
import DogList from './DogList';
import SelectedDogBreed from './SelectedDogBreed';
import DogBreedQuiz from './DogBreedQuiz';

const App = () => {
  return (
    <div>
      <Route path='/' exact component={HomePage} />
      <Route path='/dogList' exact component={DogList} />
      <Route
        path='/selecteddogbreed/:breed'
        exact
        component={SelectedDogBreed}
      />
      <Route path='/DogBreedQuiz' exact component={DogBreedQuiz} />
    </div>
  );
};

export default App;
