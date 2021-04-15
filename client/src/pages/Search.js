import React, { useState } from 'react';
import axios from 'axios';
import { Card, Jumbotron, Container, Form, Col, Row, Button } from 'react-bootstrap';
import "./Search.css"

function Search(){
  const [search, setsearch] = useState("")
    const [searchResults, updateSearchResults] = useState([])

    function handleInputChange(e){
        setsearch(e.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search)
            .then(function (response) {
                console.log(response.data.items)
                updateSearchResults(response.data.items);
            })
            .catch(function (error) {
                console.log(error);
    })
    }
    
    function saveFunction(){
        //save book val to db
    }

    return (
    <div>
        <Jumbotron fluid>
            <img className = "book-pic" src="http://bestanimations.com/Books/page-turning-book-animation-17.gif" alt="book pictures"/>
            <Container className="search-jumbtron">
              <h1 style={{ textAlign: 'center'}} >Book Search</h1>
              <p style={{ textAlign: 'center'}}>
                  Below you can fill out one of the text fields and we will pull up a book fitting your input!
               </p>
             </Container>
             <Form>
             <Row>
             <Col>
                <Form.Control value={search} onChange={handleInputChange} placeholder="Title or Author" />
             </Col>
             </Row>
             </Form>
             <Button onClick={handleSubmit} variant="warning" size="lg" block>Enter</Button>

        </Jumbotron>    
        <div>
            {searchResults[0] ? searchResults.map(volume => {
                return (
                  <Card style={{ width: '18rem' }} className="book-card">
                  <Card.Body>
                  <Card.Img variant="top" src={volume.volumeInfo.imageLinks.thumbnail} />
                    <Card.Title>{volume.volumeInfo.title}</Card.Title>
                     <Card.Subtitle className="mb-2 text-muted">{volume.volumeInfo.authors}</Card.Subtitle>
                     <Card.Text>
                     {volume.volumeInfo.description}
                     </Card.Text>
                     <Button href= {volume.volumeInfo.infoLink} variant="secondary">Check Me Out!</Button>
                     <Button onClick={saveFunction} variant="secondary">Save!</Button>
                  </Card.Body>
                  </Card>
                  )
            }) : <h1></h1>}
        </div>
    </div>
    )
}


export default Search;