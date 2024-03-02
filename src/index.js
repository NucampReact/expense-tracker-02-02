import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages';
import { Container } from 'reactstrap';
import Navigation from './common/Navigation';

// Creates a React Root Node
// React Tree => <MyComponent><ChildComponent></ChildComponent></MyComponent>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navigation />
    <Container fluid>
      <Home />
    </Container>
  </>
); // Responsible for injecting the HTML into the container
