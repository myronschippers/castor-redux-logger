import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// MATERIAL-UI COMPONENTS
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// CUSTOM COMPONENTS
import Header from '../Header/Header';
import ColorBlockForm from '../ColorBlockForm/ColorBlockForm';
import ColorBlockMaker from '../ColorBlockMaker/ColorBlockMaker';

class App extends Component {
  decrementCounter = () => {
    this.props.dispatch({
      type: 'COUNTER_DOWN',
    });
  };

  incrementCounter = () => {
    this.props.dispatch({
      type: 'COUNTER_UP',
    });
  };

  render() {
    return (
      <div>
        <Header />
        <main className="container">
          {/* COUNTER */}
          <section className="sectional">
            <h2>Counter:</h2>
            <Grid container spacing={3} alignItems="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.decrementCounter}
                >
                  -
                </Button>
              </Grid>
              <Grid item>
                <span>{this.props.store.counter}</span>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.incrementCounter}
                >
                  +
                </Button>
              </Grid>
            </Grid>
          </section>
          <section className="sectional">
            <h2>Color Blocks</h2>
            <ColorBlockForm />
            <ColorBlockMaker />
          </section>
        </main>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(App);
