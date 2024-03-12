import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isClicked: false,
  }

  onClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  getClass = () => {
    const {isClicked} = this.state
    return isClicked ? 'dark-mode' : 'light-mode'
  }

  getText = () => {
    const {isClicked} = this.state
    return isClicked ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const classsName = this.getClass()
    const buttonText = this.getText()
    return (
      <div className="container">
        <div className={`app-container ${classsName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
