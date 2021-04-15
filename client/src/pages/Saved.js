import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { Button, Card, Container, Jumbotron } from 'react-bootstrap';
import "./pages.css"

const Saved = () => {

    const [savedBook, setSavedBook] = useState([]);

    useEffect(() => {
        API.getBooks()
        .then((response) => {
        let list = []    
        response.data.map(item => {
            list.push({
                title: item.title,
                author: item.authors,
                desciption: item.description,
                image: item.image,
                link: item.link,
                id: item._id
            })
            })
        setSavedBook(list);    
        })
    }, [])

    function handleDeleteClick(event){
        event.preventDefault();
        console.log('deleted!', event.target.value)
        API.deleteBook(event.target.value)
        setSavedBook(savedBook.filter((book) => {
            return book.id !== event.target.value; 
        }))
    }


   /* const bookCard = savedBook.map((book)=>(
      <Card style={{ width: '18rem'}} className="book-card" key={book.id}>
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
          <Card.Text>
          {book.desciption}
          </Card.Text>
        <Button variant="primary" href={book.link}> View Me!</Button>
        <Button value={book.id} onClick={handleDeleteClick}>Delete</Button>
      </Card.Body>
      </Card>
    ))*/
     
    const exampleBookCard =
    <Card style={{ width: '18rem'}} className="book-card" >
      <Card.Img variant="top" src="https://books.google.com/books/content/images/frontcover/hzVxiw2DiOsC?fife=w200-h300" />
      <Card.Body>
        <Card.Title>The Four Agreements</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Don Miguel Ruiz , Janet Mills</Card.Subtitle>
          <Card.Text>
          In The Four Agreements, bestselling author don Miguel Ruiz reveals the source of self-limiting beliefs that rob us of joy and create needless suffering. Based on ancient Toltec wisdom, The Four Agreements offer a powerful code of conduct that can rapidly transform our lives to a new experience of freedom, true happiness, and love.
          </Card.Text>
        <Button variant="primary" href="https://play.google.com/store/books/details?id=hzVxiw2DiOsC&gl=us&hl=en-US&source=productsearch&utm_source=HA_Desktop_US&utm_medium=SEM&utm_campaign=PLA&pcampaignid=MKT-FDR-na-us-1000189-Med-pla-bk-Evergreen-Jul1520-PLA-eBooks_Self_Help&gclid=Cj0KCQjwyN-DBhCDARIsAFOELTl5F4-Cx68hAB_l6nuGWtrBbfRCpk4mLcU7onVatGS8EIdTO9rv3xkaAqF8EALw_wcB&gclsrc=aw.ds"> View Me!</Button>
        <Button onClick={handleDeleteClick}>Delete</Button>
      </Card.Body>
      </Card>

    return (
        <div>
            <Jumbotron fluid>
            <Container className="search-jumbtron">
              <h1 style={{ textAlign: 'center'}} >Here Are Your Saved Books!</h1>
              <p style={{ textAlign: 'center'}}>
                  Click the buttons below to view or delete them!
               </p>
            </Container> 
            </Jumbotron> 
            {savedBook[0] ? exampleBookCard : <h1></h1>}
        </div>
        
    )
}

export default Saved;