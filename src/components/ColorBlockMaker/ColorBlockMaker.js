import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL-UI COMPONENTS
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class ColorBlockMaker extends Component {
  blockSmaller = (event) => {
    this.props.dispatch({
      type: 'BLOCK_SMALLER',
    });
  };

  blockLarger = (event) => {
    this.props.dispatch({
      type: 'BLOCK_LARGER',
    });
  };

  resetBlock = (event) => {
    this.props.dispatch({
      type: 'RESET_BLOCK',
    });
  };

  render() {
    const stylingObj = {
      backgroundColor: this.props.store.colorBlock.color,
      width: this.props.store.colorBlock.size + 'px',
      height: this.props.store.colorBlock.size + 'px',
      maxWidth: '100%',
    };

    return (
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item>
          <Button
            onClick={this.blockSmaller}
            variant="contained"
            color="primary"
          >
            -
          </Button>
        </Grid>
        <Grid item className="textCenter">
          <div style={stylingObj}>BLOCK</div>
          <Button onClick={this.resetBlock} variant="contained" color="primary">
            Reset
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={this.blockLarger}
            variant="contained"
            color="primary"
          >
            +
          </Button>
        </Grid>
      </Grid>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store: store };
};

export default connect(mapStoreToProps)(ColorBlockMaker);
