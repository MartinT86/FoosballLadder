export const ADD_PLAYER = 'ADD_PLAYER'

export function addPlayer(player) {
   return {
      type: ADD_PLAYER,
      player
   };
}