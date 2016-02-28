var style = require('./sass/main.scss');
var riot = require('riot');
var redux = require('redux');
var thunk = require('redux-thunk');

require('./tags/score-board-app.tag');
require('./tags/score-display.tag');

var reducer = function(state={tasks:[]},action){
  console.log(action)
  switch(action.type){
    case 'TASKS_LOADED':
      return Object.assign({},state,{tasks:action.data})
    default:
      return state
  }
}

var createStoreWithMiddleware = redux.compose(
  redux.applyMiddleware(thunk)
)(redux.createStore)

var reduxStore = createStoreWithMiddleware(reducer)

document.addEventListener('DOMContentLoaded', () => riot.mount('score-board-app',{store:reduxStore}));
