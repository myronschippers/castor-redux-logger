import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL-UI COMPONENTS
import Button from '@material-ui/core/Button';

class ColorBlockForm extends Component {
  state = {
    inputedColor: '',
    inputedSize: '',
  };

  handleChangeField = (event, fieldKey) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    console.log('SUBMIT');

    this.props.dispatch({
      type: 'BLOCK_CONFIG',
      payload: this.state,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm} className="sectional">
        <h3>Make Your Color Block</h3>
        <label>
          <span>Size: </span>
          <input
            type="number"
            name="size"
            placeholder="Enter a whole number"
            onChange={(event) => this.handleChangeField(event, 'inputedSize')}
          />
        </label>
        <label>
          <span>Color: </span>
          <input
            type="text"
            name="color"
            placeholder="Enter a CSS friendly color"
            onChange={(event) => this.handleChangeField(event, 'inputedColor')}
          />
        </label>
        <Button type="submit" variant="contained" color="primary">
          Save Block
        </Button>
      </form>
    );
  }
}

export default connect()(ColorBlockForm);
