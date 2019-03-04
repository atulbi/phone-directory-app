import React, { Component } from 'react';
import './App.css';
import Preview from './Components/Preview';
import Adder from './Components/Adder';
import { Route, NavLink, Redirect } from 'react-router-dom';

class App extends Component {

  state = {
    preview: true,
    subscriber: [
      {
        name: "ATUL",
        number: "8800822609"
      },
    ],
    ongoing: {
      name: "",
      number: ""
    }
  }

  deleteHandler = (index) => {
    this.setState(prevState => {
      console.log("DLETED");
      let subsList = prevState.subscriber;
      subsList.splice(index, 1);
      return { subscriber: subsList };
    });
  }

  changePreviewHandler = () => {
    this.setState(prevState => {
      return { preview: !prevState.preview }
    })
  }

  textChangedHandler = (event) => {
    // console.log(event.target.name);
    let text = event.target.value;
    if (event.target.name === 'name') {
      this.setState(prevState => {
        let prev = prevState;
        prev.ongoing.name = text;
        return prev;
      });
    }
    if (event.target.name === 'phone') {
      this.setState(prevState => {
        let prev = prevState;
        prev.ongoing.number = text;
        return prev;
      });
    }
  }

  subAddHandler = () => {
    let subName = this.state.ongoing.name, subPhone = this.state.ongoing.number;
    if (subName !== "" && subPhone.length === 10) {
      this.setState(prevState => {
        let prev = prevState;
        prev.subscriber.push(this.state.ongoing);
      });
      this.setState({ preview: true, ongoing: { name: "", number: "" } });
    }
    else {
      alert("Invalid Input");
    }
  }

  render() {
    let headText, button;
    if (this.state.preview) {
      headText = "PHONE DIRECTORY"
      button = <NavLink to={'/add'} exact ><button className='main-button lightgreen' onClick={this.changePreviewHandler}>ADD</button></NavLink>
    } else {
      headText = "ADD SUBSCRIBER"
      button = <NavLink to={'/'} exact ><button className='main-button white' onClick={this.changePreviewHandler}>BACK</button></NavLink>
    }

    return (

      <div className="App">
        <header className="App-header">
          {headText}
        </header>
        <div className='container'>
          <div>
            {button}
          </div>
          <Route path="/" exact render={() => this.state.preview ? <Preview subs={this.state.subscriber} deleteHandler={this.deleteHandler}></Preview> : <Redirect from='/' to='/add'></Redirect>} />
          <Route
            path="/add"
            exact
            render={
              () => <Adder
                click={this.subAddHandler}
                textChangedHandler={this.textChangedHandler}
                data={this.state.ongoing}>
              </Adder>}
          />

        </div>

      </div>
    );
  }
}

export default App;
