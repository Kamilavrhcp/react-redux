import { Component } from 'react'
import './App.css';

class App extends Component {

  render() {
    return (
      <section className="App-section">
        <header>
          <h1>React Redux</h1>
        </header>
        <label htmlFor="text-input">
          <input name="text" id="text-input" type="text" />
        </label>
        <button type="button">Salvar</button>
      </section>
    );
  }
}

export default App;
