import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home" // To access the home component, the user needs to be logged in
                element={<ProtectedRoute>
                  <Home />
                </ProtectedRoute>} 
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
