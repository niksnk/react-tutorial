import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import Timer from './Timer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



class App extends Component{

  state = {
    characters: [],
  }

  removeCharacter = index =>{
    const {characters} =  this.state

    this.setState({
      characters: characters.filter((character,i) =>{
        return i !== index
      }),
    })
  }





  formClose = seconds =>{
    if (this.state.seconds <=0){
        this.setState({seconds:30})
    }
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters,character]})
  }

  render(){
    const { characters } = this.state

    return(
      <div className="container">
         <h1>  Hello my tarnation pillion self, what's poppin? </h1>
         <h4> Feel free to fill up these spaces as you see fit </h4>

         <Table characterData = {characters} removeCharacter = {this.removeCharacter}/>
         <Timer/>
         <Form handleSubmit ={this.handleSubmit}/>

      </div>


    )
  }
}
export default App
