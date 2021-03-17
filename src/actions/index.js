export const SET_MAINPAGE = 'SET_MAINPAGE';
export const SET_DOGIMAGE = 'SET_DOGIMAGE';
export const SET_RANDOMDOGIMAGE = 'SET_RANDOMDOGIMAGE';

export const setMainPage = (payload) => {
  return {
    type: SET_MAINPAGE,
    payload,
  };
};

export const setDogImage = (payload) => {
  return {
    type: SET_DOGIMAGE,
    payload,
  };
};

export const setRandomDogImage = (payload) => {
  return {
    type: SET_RANDOMDOGIMAGE,
    payload,
  };
};
