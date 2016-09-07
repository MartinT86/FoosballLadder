import React from 'react';

class AddPlayerForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            newName : 'Please enter the new name'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({newName: e.target.value});
    }

   render() {
      return (
         <div>
            <h2>Player Form</h2>
            <input type="text" value={this.state.newName} onChange={this.handleChange} />
            <button onClick={() => this.props.addPlayerProp(this.state.newName)}>Add Player</button> 
         </div>
      );
   }
}

export default AddPlayerForm;