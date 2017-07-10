import React, {PropTypes} from 'react'
import {getUser} from "@apps/services/users"

class App1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null
    }

    getUser().then((user) => {
      this.setState({user})
    })
  }

  render () {
    const {user} = this.state

    if (!user) {
      return <div>loading...</div>
    }

    return (
      <div>
        <h1>Account Page</h1>
        <p>Hello {user.name}</p>
      </div>
    )
  }
}

export default App1
