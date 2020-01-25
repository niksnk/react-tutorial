import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'



class App extends Component{

  state = {
    characters: [],
    seconds: 5,
  };

  removeCharacter = index =>{
    const {characters} =  this.state;
    this.setState({
      characters: characters.filter((character,i) =>{
        return i !== index;
      }),
    });
  }





  tick =() => {
    if (this.state.seconds <= 0){
      this.setState({seconds:0});
    }
    else{
      this.setState(state => ({
        seconds: state.seconds - 1
      }));
    }
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters,character]});
  }

  render(){
    const { characters } = this.state;

    return(
      <div className="container">
         <h1>  Hello my tarnation pillion self, what's poppin? </h1>
         <h4> Feel free to fill up these spaces as you see fit </h4>

         <Table characterData = {characters} removeCharacter = {this.removeCharacter}/>
          <div>
            Form will be closed in: {this.state.seconds} second(s)
          </div>
         <Form handleSubmit ={this.handleSubmit}/>

      </div>


    );
  }
}
export default App
