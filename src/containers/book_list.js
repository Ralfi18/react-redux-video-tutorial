import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  rendeList(){
    return this.props.books.map((book)=>(
      <li 
        key={book.title} 
        className="list-group-item"
      >
        {book.title}
      </li>
    ))
  }

  render(){
    return(
      <ul className="list-group cl-sm-4">
        {this.rendeList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return ({
    books: state.books
  });
}

export default connect(mapStateToProps)(BookList)