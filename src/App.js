import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
