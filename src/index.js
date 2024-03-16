import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './stylesheets/bootstrap.scss'
import { Home } from './pages';
import { Container } from 'reactstrap';
import Navigation from './common/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountSetup from './components/AccountSetup';
import Expenses from './components/Expenses';

// Creates a React Root Node
// React Tree => <MyComponent><ChildComponent></ChildComponent></MyComponent>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navigation />
    <Container fluid>

      <Routes>
        <Route path="/" element={<Home />} /> {/* Determine what component to show at which path */}
        <Route path="/accounts" element={<AccountSetup />} /> {/* Determine what component to show at which path */}
        <Route exact path="/expenses" element={<Expenses />} /> {/* Determine what component to show at which path */}
        <Route exact path="/expenses/:account/" element={<Expenses />} /> {/* Determine what component to show at which path */}
        <Route exact path="/expenses/:account/:expense" element={<Expenses />} /> {/* Determine what component to show at which path */}
      </Routes>

    </Container>
  </BrowserRouter>
); // Responsible for injecting the HTML into the container
