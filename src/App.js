import React, { Component } from 'react'
import './App.css';
import Box from './components/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Col';

/*function App() {
  let [winnerPerson , setWinnerPerson] = useState(true)
  const callHey = () =>{
    setWinnerPerson(!winnerPerson)
  }

  return (
    <div className = "body">
    <Container>
    <Row>
    <button onClick = {()=>callHey()}></button>
    <Col><Box user = {"You"} image = {"https://images.homedepot-static.com/productImages/94af8836-0338-4802-914e-04cc71e562ad/svn/backyard-x-scapes-fake-rocks-hdd-rof-rocsb-64_300.jpg"} status = {winnerPerson}/></Col>
    <Col><Box user = {"Computer"} image = {"https://images-na.ssl-images-amazon.com/images/I/81TD%2B0Y9f6L._AC_SL1500_.jpg"} status = {false}/></Col>
    </Row>
    </Container>
    </div>
  );
}

export default App;*/
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      winnerPerson: "user",
      userChoice: "paper",
      computerChoice: "rock",
      computerScore: 0,
      userScore: 0,
      history: []
    }
  }

  manageInput = (userChoice) =>{
    let computerChoice = Math.floor(Math.random() * Math.floor(3)) 
    //0 is rock, 1 is paper, 2 is scissors
    if (computerChoice === 0){
      this.setState({computerChoice: "rock"})
    } else if (computerChoice === 1){
      this.setState({computerChoice: "paper"})
    }else if (computerChoice === 2){
      this.setState({computerChoice: "scissors"})
    }
    if (userChoice === "paper"){
        this.setState({userChoice: "paper"})
        if (computerChoice === 0){
          this.setState({winnerPerson: "user"})
          this.setState({userScore: this.state.userScore+1})
          this.setState({ history: [...this.state.history, 'Win '] })
        }else if (computerChoice === 1){
          this.setState({winnerPerson: "tie"})
          this.setState({ history: [...this.state.history, 'Tie '] }) //tie (fix later plez)
        }else if (computerChoice === 2){
          this.setState({winnerPerson: "computer"})
          this.setState({computerScore: this.state.computerScore+1})
          this.setState({ history: [...this.state.history, 'Lose '] })
        }
      }
      if (userChoice === "rock"){
        this.setState({userChoice: "rock"})
        if (computerChoice === 0){
          this.setState({winnerPerson: "tie"})
          this.setState({ history: [...this.state.history, 'Tie '] }) //tie (fix later plez)
        }else if (computerChoice === 1){
          this.setState({winnerPerson: "computer"})
          this.setState({computerScore: this.state.computerScore+1})
          this.setState({ history: [...this.state.history, 'Lose '] })
        }else if (computerChoice === 2){
          this.setState({winnerPerson: "user"})
          this.setState({userScore: this.state.userScore+1})
          this.setState({ history: [...this.state.history, 'Win '] })
        }
      }
      if (userChoice === "scissors"){
        this.setState({userChoice: "scissors"})
        if (computerChoice === 0){
          this.setState({winnerPerson: "computer"})
          this.setState({computerScore: this.state.computerScore+1})
          this.setState({ history: [...this.state.history, 'Lose '] })
        }else if (computerChoice === 1){
          this.setState({winnerPerson: "user"})
          this.setState({userScore: this.state.userScore+1})
          this.setState({ history: [...this.state.history, 'Win '] })
        }else if (computerChoice === 2){
          this.setState({winnerPerson: "tie"})
          this.setState({ history: [...this.state.history, 'Tie '] }) //tie (fix later plez)
        }
      }
      if (userChoice === "clear"){
        this.setState({history: []})
        this.setState({userScore: 0})
        this.setState({computerScore:0})
        this.setState({computerChoice: "rock"})
        this.setState({userChoice: "paper"})
        this.setState({winnerPerson: "user"})
      }
  }


  render() {
    return (
      <div>
        <div className = "body">
        <Container>
         <Row>
        <Col><Box user = {"You"} image = {this.state.userChoice} status = {this.state.winnerPerson}/><h4>{this.state.userScore}</h4></Col>
        <Col><Box user = {"Computer"} image = {this.state.computerChoice} status = {this.state.winnerPerson}/><h4>{this.state.computerScore} </h4></Col>
        </Row>
    </Container>
      </div>
      <div className = "footer">
    <Container>
      <Row>
      <Col><button  class="btn btn-secondary" onClick = {()=>{this.manageInput("rock")}}>Rock</button></Col>
      <Col><button  class="btn btn-secondary" onClick = {()=>{this.manageInput("paper")}}>Paper</button></Col>
      <Col><button  class="btn btn-secondary" onClick = {()=>{this.manageInput("scissors")}}>Scissors</button></Col>
      <Col><button  class="btn btn-secondary" onClick = {()=>{this.manageInput("clear")}}>Reset</button></Col>
    </Row>
    </Container>
      <h5>History: {this.state.history} </h5>
      <h5></h5>
      </div>
    </div>
    )
  }
}

