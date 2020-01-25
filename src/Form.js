import React, {Component} from 'react'



class Form extends Component{
  constructor(props){
    super(props)

    this.initialState = {
      name: '',
      job: '',
      weapon: '',
      ultimate: '',
    }

    this.state = this.initialState

  }


  handleChange = event => {
    const {name,job,weapon,ultimate,value} = event.target
    this.setState({
      [name]: value,
      [job]: value,
      [weapon]: value,
      [ultimate]: value,
    })
  }

  submitForm = () =>{
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render(){
    const {name,job,weapon,ultimate} = this.state;
    return(
      <form>
        <label for="name">Name</label>
          <input type="text" name="name" id="name" value={name} onChange={this.handleChange}/>
          <label for="job">Job</label>
            <input type="text" name="job" id="job" value={job} onChange={this.handleChange}/>
          <label for="weapon">Weapon</label>
            <input type="text" name="weapon" id="weapon" value={weapon} onChange={this.handleChange}/>
          <label for="ultimate">Ultimate</label>
            <input type="text" name="ultimate" id="ultimate" value={ultimate} onChange={this.handleChange}/>
          <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
