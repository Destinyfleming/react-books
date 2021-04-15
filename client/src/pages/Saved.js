import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { Button, Card } from 'react-bootstrap';

const Saved = () => {

    const [savedBook, setSavedBook] = useState([]);

    useEffect(() => {
        API.getBooks()
        .then((response) => {
        let list = []    
        response.data.map(item => {
            list.push({
                title: item.title,
                authors: item.authors,
                desciption: item.description,
                image: item.image,
                link: item.link,
                id: item._id
            })
            })
        setSavedBook(list);    
        })
    }, [])

    const handleDeleteClick = (event) => {
        event.preventDefault();
        console.log('deleted!', event.target.value)
        API.deleteBook(event.target.value)
        setSavedBook(savedBook.filter((book) => {
            return book.id !== event.target.value; 
        }))
    
    }


    const bookCard = savedBook.map((book)=>(
      <Card style={{ width: '18rem' }} key={book.id}>
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{book.authors}</Card.Subtitle>
          <Card.Text>
          {book.desciption}
          </Card.Text>
        <Button variant="primary" href={book.link}> View Me!</Button>
        <Button value={book.id} onClick={handleDeleteClick}>Delete</Button>
      </Card.Body>
      </Card>
    ))
    

    return (
        <div>
            <h1>Here Are Your Saved Books!</h1>
            {savedBook[0] ? bookCard : <h1>No Saved Books!</h1>}
        </div>
        
    )
}

export default Saved;