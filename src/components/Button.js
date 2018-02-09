import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

class Button extends Component {

  render() {
    const style = {
      marginRight: 20,
    };

    return (
      <div>
        <FlatButton label="Default" />
        <FlatButton label="Primary" primary={true} />
        <FlatButton label="Secondary" secondary={true} />
        <FlatButton label="Disabled" disabled={true} />

        <FloatingActionButton style={style}>
          <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton mini={true} style={style}>
          <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton secondary={true} style={style}>
          <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton mini={true} secondary={true} style={style}>
          <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton disabled={true} style={style}>
          <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton mini={true} disabled={true} style={style}>
          <ContentAdd />
        </FloatingActionButton>

        <RaisedButton label="Default" style={style} />
        <RaisedButton label="Primary" primary={true} style={style} />
        <RaisedButton label="Secondary" secondary={true} style={style} />
        <RaisedButton label="Disabled" disabled={true} style={style} />

        <IconButton iconClassName="muidocs-icon-custom-github" />
        <IconButton iconClassName="muidocs-icon-custom-github" disabled={true} />
      </div>
		)
  }
}

export default Button;
