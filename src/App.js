import React from 'react';
import ReactDOM from 'react-dom';
import bear from "../src/images/bear.png";
import beaver from "../src/images/beaver.png";
import dog from "../src/images/dog.png";
// import logo from './logo.svg';
// import './App.css';

const imgProperties = {
  backgroundColor: "blue"
}

const animalImgs = [
  {
    title: "beaver",
    src: beaver
  }, 
  {
    title: "bear", 
    src: bear
    // C:\Users\Wade Darsow Dell\Desktop\starter_memory_game\src\images\bear.png
  }, 
  {
    title: "dog",
    src: dog
  }
]


class App extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
      clickedString: "True",
      clicked: true
    };

    this.clicker = this.clicker.bind(this);
  }
  
  
  get operation() { // this is a getter method
    return "Shuffle";
  }

  hoverLeave() { // this is an event handler
    alert("stop hovering")
  }

  clicker() {
    // this.setState({clicked: true});
    this.setState(state => ({
      clicked: !state.clicked
    }));
    console.log(this.state.clicked);
  }

  render() {
    console.log(this.state.clicked);
    function buttonClick() {
      console.log(Math.floor(Math.random() * 3).toString());
      this.state.setState(true)
      console.log(this.state.clicked);
      userMessage();
    }

    function userMessage() {
      alert("You clicked the button!")
    }
  
    function hoverFunc() {
      console.log("hello, this is the hoverFunc");
    }

    // function clicker() {
    //   this.setState(state =>({{clicked: true})
    // }

    let beaverImg = animalImgs[0]
    let bearImg = animalImgs[1]
    let dogImg = animalImgs[2]
    
    return (
      <div>
        <button onClick={buttonClick}>{this.operation}</button>
        <button onClick={this.clicker}>Click Me</button>
        
        <h3>The value of this.state.clicked is {this.state.clicked ? "True" : "False"}</h3>
        
        <h1>Bear</h1>
        <img src={bearImg.src} alt="bear" />

        {/*<h1 onMouseEnter={hoverFunc} onMouseLeave={this.hoverLeave}>Beaver</h1>*/}
        <h1>Beaver</h1>
        <img src={beaverImg.src} alt="beaver"/>

        <h1>Dog</h1>
        <img src={dogImg.src} alt="dog" />

      </div>
    )
  }
}

export default App;

//ReactDOM.render(<App />, document.getElementById('root'));
