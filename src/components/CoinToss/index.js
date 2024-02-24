// Write your code here
import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {
    isHead: true,
    Heads: 0,
    Tails: 0,
  }

  changeIsHead = () => {
    this.setState(prevState => {
      const tossResult = Math.floor(Math.random() * 2)
      if (tossResult === 0) {
        return {
          isHead: true,
          Heads: prevState.Heads + 1,
        }
      }
      return {
        isHead: false,
        Tails: prevState.Tails + 1,
      }
    })
  }

  render() {
    const {isHead, Heads, Tails} = this.state
    return (
      <div className="mainContainer">
        <h1>Coin Toss Game</h1>
        <p className="h2">Heads (or) Tails</p>
        {isHead ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            alt="toss result"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            alt="toss result"
          />
        )}
        <button type="button" onClick={this.changeIsHead}>
          Toss Coin
        </button>
        <div className="counts">
          <p>Total:{Heads + Tails}</p>
          <p>Heads:{Heads}</p>
          <p>Tails:{Tails}</p>
        </div>
      </div>
    )
  }
}
export default CoinToss
