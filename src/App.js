import React from 'react';
import './App.css';
import BookSearch from './BookSearch'
import SearchResults from './SearchResults'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: {
        items: []
      }
    }
  }
  bookSubmit = (results) => {
    this.setState({
      results
    })
  }


  render() {
    return (
      <div className="App">
        <header>Google Book Search</header>
        <main>
          <BookSearch bookSubmit = {this.bookSubmit}/>
          <SearchResults items={this.state.results.items}/>
        </main>
      </div>
    );
    }
}

export default App;
