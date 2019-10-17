import React from 'react';

class SearchResults extends React.Component {
    render() {
        const defaultArr = [];
        const results = defaultArr.map(book => {
            return([
                this.props.volumeInfo.title, this.props.volumeInfo.authors, this.props.saleInfo.listPrice.amount, this.props.volumeInfo.description
            ])
        })
        console.log(results)
    
        return(
            <section className="result">
                <h2>{results[0]}</h2>
                <p>{results[1]}</p>
                <p>{results[2]}</p>
                <p>{results[3]}</p>
            </section>
        )
    }
}

export default SearchResults;