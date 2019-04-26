import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import API2 from "../utils/API2";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: [],
    title: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState()
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.title);
  };

  saveBook = bookData => {
    console.log(bookData);
    API2.saveBook(bookData)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API2.searchBook(this.state.title)
      .then(res => {
        console.log(res.data.items);
        var objArr = [];

        res.data.items.map( item => 

          objArr.push({
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors,
            synopsis: item.volumeInfo.description,
            img: item.volumeInfo.imageLinks.smallThumbnail
          }))

        this.setState({
          books: objArr
        })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
              <h1 style={{textAlign: "center"}}>Search</h1>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!this.state.title}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map( (book, index) => (
                  <ListItem key={index}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <SaveBtn onClick={() => this.saveBook(book)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
