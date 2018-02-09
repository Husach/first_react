import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import {yellow100, deepOrange600} from 'material-ui/styles/colors';

const styles = {
  marginTop: 15
};

class Block extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }

  toggleState() {
    this.setState({
        isOpened: !this.state.isOpened
    })
  }

  getClassName() {
  	if (this.state.isOpened) {
      return "content__fullText"
    }
    return "content__text";
  }

  render() {
  	return (
      <div className="content__item" onClick={this.toggleState.bind(this)}>

        <h2>{this.props.item.title}</h2>
        <div className={this.getClassName()}>{this.props.item.text}</div>
        {this.props.item.chip.map(item => (
          <Chip
            className="chip"
            style={styles}
            labelColor={deepOrange600}
            backgroundColor={yellow100}
          >
              {item}
          </Chip>
        ))}
      </div>
		)
  }
}

export default Block;
