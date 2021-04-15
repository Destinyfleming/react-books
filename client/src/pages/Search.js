/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { Jumbotron } from 'react-bootstrap';
import "./Search.css"
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  const googleCall = () => {
    const url = "https://www.googleapis.com/books/v1/volumes?q=" + "search";
    axios
      .get(url)
      .then((response) => {
        console.log(response)
        setBooks(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Load all books and store them with setBooks
  useEffect(() => {
    googleCall()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };


    return (
      <Container fluid>
          <Jumbotron fluid>
            <img className = "book-pic" src="data:image/jpeg;base64,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" alt="book pictures"/>
            <Container>
              <h1>Book Search</h1>
              <p>
                  Below you can fill out one of the text fields and we will pull up a book fitting your input!
               </p>
             </Container>
          </Jumbotron>
            <form>
              <Input
                onChange={() => {}}
                name="title"
                placeholder="Title "
              />
              <Input
                onChange={() => {}}
                name="author"
                placeholder="Author "
              />
            </form>
      </Container>
    );
  }

  


export default Search;
*/
import React, { useState } from 'react';
import axios from 'axios';
import { Card, Jumbotron, Container } from 'react-bootstrap';
import "./Search.css"

const Search = () => {

    const [searchVal, setSearchVal] = useState("")
    const [searchResults, updateSearchResults] = useState([])

    const handleInputChange = (e) => {
        setSearchVal(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + searchVal)
            .then(function (response) {
            // handle success
                console.log(response.data.items)
                updateSearchResults(response.data.items);
            })
            .catch(function (error) {
                console.log(error);
    })
    }

    return (
    <div>
        <Jumbotron fluid>
            <img className = "book-pic" src="http://bestanimations.com/Books/page-turning-book-animation-17.gif" alt="book pictures"/>
            <Container>
              <h1>Book Search</h1>
              <p>
                  Below you can fill out one of the text fields and we will pull up a book fitting your input!
               </p>
             </Container>
             <input type="text" class="inputtext" value={searchVal} id="text1" onChange={handleInputChange} />
            <button onClick={handleSubmit}>Submit</button>
        </Jumbotron>

        <div>
            <input type="text" class="inputtext" value={searchVal} id="text1" onChange={handleInputChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>    
        <div>
            {searchResults[0] ? searchResults.map(volume => {
                return (
                  <Card style={{ width: '18rem' }}>
                  <Card.Body>
                  <Card.Img variant="top" src={volume.volumeInfo.imageLinks.thumbnail} />
                    <Card.Title>{volume.volumeInfo.title}</Card.Title>
                     <Card.Subtitle className="mb-2 text-muted">{volume.volumeInfo.authors}</Card.Subtitle>
                     <Card.Text>
                     {volume.volumeInfo.description}
                     </Card.Text>
                     <Card.Link href= {volume.volumeInfo.infoLink} >Check Me Out!</Card.Link>
                  </Card.Body>
                  </Card>
                  )
            }) : <h1>No Results Yet</h1>}
        </div>
    </div>
    )
}

export default Search;