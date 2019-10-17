import React from 'react';

const API_KEY = process.env.REACT_APP_BOOKSEARCH_API_KEY;

class BookSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            bookType: 'partial',
            printType:'all'
        }
    }
    onBookSubmit = (event) => {
        event.preventDefault();
        let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&printType=${this.state.printType}&filter=${this.state.bookType}&key=${API_KEY}&maxResults=5`
        console.log(url)
        fetch(url, {
          method: 'GET',
        })
          .then(res => {
            if (!res.ok) {
              throw new Error(res.status)
            }
            return res.json()
          })
          .then(res => {
              this.props.bookSubmit(res)
              console.log(res)
          })
          .catch(error => this.setState({ error }))
      }
    
    render() {
        return (
            <div className="searchForm">
                <form className="bookSearchForm" onSubmit = {this.onBookSubmit}>
                    <label htmlFor="searchTerm">Search:</label>
                    <input name="searchTerm" type="text" 
                        onChange =  { (e) => this.setState({
                            query: e.target.value})} />
                    <button type="submit" >Search</button>
                    <label htmlFor="bookType">Book Type</label>
                    <select name="bookType"
                        onChange= { (e) => this.setState({
                            bookType: e.target.value
                        })}>
                        <option value="partial">partial</option>
                        <option value="full">full</option>
                        <option value="free-ebooks">free-ebooks</option>
                        <option value="paid-ebooks">paid-ebooks</option>
                        <option value="ebooks">ebooks</option>
                    </select>
                    <label htmlFor="printType">Print Type</label>
                    <select name="printType"
                        onChange= { (e) => this.setState({
                            printType: e.target.value
                        })}>
                        <option value="all">all</option>
                        <option value="books">books</option>
                        <option value="magazines">magazines</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default BookSearch;