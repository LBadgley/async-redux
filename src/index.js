import { createStore, applyMiddleware } from 'redux';

const logger = store => next => action => {
  console.log('Before Reduxer', store.getState());
  next(action);
  console.log('After reducer', store.getState());
};

const logger2 = store => next => action => {
  console.log('i am another middleware!', action);
  next(action);
  console.log('i am another middleware', store.getState());
};


function reducer(state = {}, action) {
  switch(action.type) {
    case 'HI':
      return 'hi';
    default: 
      return state;
  }
}
const store = createStore(
  reducer,
  applyMiddleware(logger, logger2)
);


store.dispatch({
  type: 'HI'
});
