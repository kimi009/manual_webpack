import React from 'react'
import ReactDOM from 'react-dom'

// ReactDOM.render(<div>Hello</div>, document.getElementById('root'))

interface IProps {
  num: number
}

let initState = { count: 0 }

type State = Readonly<typeof initState>

class Counter extends React.Component<IProps, State> {
  state: State = initState
  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'))
