import React, {Component} from 'react'


export class App extends Component {
  state = {
    Contacts: []
  }
 


  render() {
    

    return (

      <div>
        <AddContact/>
        <SearchContact/>
        <ShowContact/> 


      </div>
    )
  }
}

const AddContact = (props) => {
  return (
    <div>
      <p>Add Contact</p>
      <imput type='text'>hoo</imput>
      <button onClick={props.buttonFunction}>Submit</button>
    </div>
  )
};

const SearchContact = () => {
  return (
    <div> 
      <p>Search Contact</p>
      <imput type='text'></imput>
      <button>Submit</button>
    </div>
  )
};

const ShowContact = () => {
  return (
    <div>
      <li>number 1</li>

    </div>
  )
}

export default App;
