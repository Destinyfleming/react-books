import React from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Saved (){
    return( 
  
        <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Books On My List</h1>
              </Jumbotron>
              
            </Col>
    )
}

export default Saved;