import React, { Component } from 'react'
import joker from '../assets/joker.jpg'

const Joke = ({joke : {setup, punchline}}) => (
  <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
  state = { joke: {}, jokes: [] }
  
  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(json => this.setState({ joke: json }))
      .catch(error => alert(error.message))
  }

  fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then(response => response.json())
      .then(json => this.setState({ jokes: json }))
      .catch(error => alert(error.message))
  }
  
    render() {
      return (
        <div>
          <h2>Highlighted Joke</h2>
          <br />
          <div className="joke">
            <Joke joke={this.state.joke} />
          </div>
          <div className="jokeBox">
            <img src={joker} alt='joking donkey'
            className="joker"
            />
          </div>
          <hr />
          <h3>Want ten new jokes?</h3>
          <button onClick={this.fetchJokes}>Click me!</button>
          {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke}/>))}
        </div>
      )
    }
  }


export default Jokes