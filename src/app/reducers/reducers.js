import { ADD_PLAYER } from '../actions/actions.js'

const initialState = {
  players : ['Player One', 'Player Two', 'Player Three']
}

function foosballApp(state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYER:
      return {...state, players: [...state.players, action.player]} 
    default:
      return state
  }
}

export default foosballApp