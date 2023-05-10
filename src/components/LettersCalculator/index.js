// Write your code here.
import Component from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeLetters = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="description-container">
          <h1 className="main-heading">
            Calculate the <br />
            Letters you <br />
            enter
          </h1>
          <label htmlFor="inputElement" className="label-element">
            Enter the phrase
          </label>
          <br />
          <input
            onChange={this.onChangeLetters}
            type="search"
            id="inputElement"
            placeholder="Enter the phrase"
          />
          <br />
          <p className="no-of-letters">No.of letters:{count}</p>
        </div>
        <img
          className="image"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    )
  }
}

export default LettersCalculator
