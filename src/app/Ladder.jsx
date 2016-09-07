import React from 'react';
import Player from './Player.jsx'
import AddPlayerForm from './AddPlayerForm.jsx'

class Ladder extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            players : ['Player One', 'Player Two', 'Player Three']
        }
    }

   render() {
      return (
         <div>
            Ladder Container
            {this.state.players.map(function(player, i){
                return (
                    <Player name={player} key={i}/>
                )
            })}
            <AddPlayerForm/>
         </div>
      );
   }
}

export default Ladder;