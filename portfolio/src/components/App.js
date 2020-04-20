import React, { Component } from 'react'
import Projects from './Projects'
import SocialProfiles from './SocialProfiles'
import profile from '../assets/profile.jpg'
import Title from './Title'


class App extends Component {
  state = { displayBio: false };
  // constructor() {
  //   super()
  //   this.state = { displayBio: false }

  //   console.log('Component this', this)

  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this)
 
  // }


  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio })
   
  }
  
  render() {
    let bio = this.state.displayBio ?  (
      <div className="main">
          <p>I live in Auckland, and code every day.</p>
          <p>My favourite langauge is JavaScript, and I think React.js is awesome.</p>
        <p>Besides coding, I also love martial arts and my dog!</p>
        <button onClick={this.toggleDisplayBio}>Show less</button>
      </div>
    ) : (
        <div>
          <button onClick={this.toggleDisplayBio}>Read more</button>
        </div>
      )
    

    return (
      <div className='profileHeader'>
        <img src={profile} alt='profile' className="profile"/>
        <h1>Hello</h1>
        <p>My name is David.</p>
        <Title />
        <p>I'm always looking forward to working on meaningful projects.</p>
        {bio}

        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
      
      
    )
  }
}



export default App;