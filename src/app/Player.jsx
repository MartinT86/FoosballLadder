import React from 'react';

class Player extends React.Component {
   render() {
      return (
         <div>
            <h2>Player:</h2>
            <p>{this.props.name}</p>
         </div>
      );
   }
}

Player.defaultProps = {
    name: "Player Name"
}

export default Player;