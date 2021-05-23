import logo from './logo.svg';
import './App.css';
import Acceuil from './Acceuil';
import React from "react";
import Grid from '@material-ui/core/Grid';
import { Paper, withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';


const styles = {
  root : {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
  },
}
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    document.title = "Abasse FIDALY"

  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <Acceuil />
      </div>
    );
  }
  
}

export default withStyles(styles)(App);
