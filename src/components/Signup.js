import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Auth fx
  const { signup } = useUserAuth();

  // Bring user back to home after signing up
  const navigate = useNavigate();

  // Handle submit (async)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await signup(email, password)
      navigate("/") // navigate the user back to home after successful signup
    }catch(err){
      setError(err.message);
    }
  }

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Trekopedia Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={ (e) => setEmail(e.target.value)} // assigns the value in the input box as the email (changing state)
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={ (e) => setPassword(e.target.value)} // assigns the value in the input box as the password (changing state)
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;