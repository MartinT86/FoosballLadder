import React from 'react';
import Player from './Player.jsx'
import AddPlayerForm from './AddPlayerForm.jsx'

class Ladder extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            players : ['Player One', 'Player Two', 'Player Three']
        }

        this.addPlayer = this.addPlayer.bind(this);
    }

    addPlayer(newPlayer){
        var newPlayers = this.state.players;
        newPlayers.push(newPlayer);
        this.setState({players:newPlayers});
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
            <AddPlayerForm addPlayerProp={this.addPlayer}/>
         </div>
      );
   }
}

export default Ladder;