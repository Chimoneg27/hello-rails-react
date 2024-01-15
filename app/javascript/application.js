import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello" render={() => <h1>Hello World</h1>} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
