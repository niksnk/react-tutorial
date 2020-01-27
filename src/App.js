import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
<<<<<<< HEAD

=======
>>>>>>> 0c741fbaa3dce79553dee4cfbb87c5a368ca71e2



class App extends Component{

  state = {
    characters: [],
<<<<<<< HEAD
    seconds: 30,
  }
=======
    seconds: 5,
  };
>>>>>>> 0c741fbaa3dce79553dee4cfbb87c5a368ca71e2

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

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
         <h4> Fill the form below as many as possible before the time runs out! </h4>

         <Table characterData = {characters} removeCharacter = {this.removeCharacter}/>
<<<<<<< HEAD
         <div>
           Form will be closed in: {this.state.seconds} second(s)
         </div>
=======
          <div>
            Form will be closed in: {this.state.seconds} second(s)
          </div>
>>>>>>> 0c741fbaa3dce79553dee4cfbb87c5a368ca71e2
         <Form handleSubmit ={this.handleSubmit}/>

      </div>


    );
  }
}
export default App
