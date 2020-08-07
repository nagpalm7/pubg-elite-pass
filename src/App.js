import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import Home from "./Pages/Home"; 
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <Home/>
      </div>
    );
  }
}

export default App;