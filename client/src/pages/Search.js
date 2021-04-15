import React from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function search (){
    return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>Look Up A Book!</h1>
              </Jumbotron>
              <form>
                <Input
                  onChange={() => {}}
                  name="title"
                  placeholder="Title (required)"
                />
                <Input
                  onChange={() => {}}
                  name="author"
                  placeholder="Author (required)"
                />
               
              </form>
            </Col>
          </Row>
        </Container>
      );
}

export default search;