import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Header from './../components/Header.js';
import Content from './../components/Content.js';
import BaseNews from './../components/BaseNews.js';
import {menu, news} from './../data.js';
import IconForward from 'material-ui/svg-icons/navigation/arrow-forward';
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconOpen from 'material-ui/svg-icons/action/open-with';
import {lightGreenA400, yellow500} from 'material-ui/styles/colors';

const style = {
  marginTop: 20,
  marginRight: 30,
  width: 200
};

class MainNews extends BaseNews {
  constructor(props) {
    super(props);
    this.state = {
        isOpened: false,
        count: 0
    }
  }

  toggleState () {
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
    const {isOpened, count} = this.state

  	return (
      <div>
        <Header menu={menu}/>
        <Content>
          <div className="content__item">
            <h2>{news[count].title}</h2>
            <div className={this.getClassName()}>
              {news[count].text}
            </div>

            <RaisedButton
              label="Prev"
              labelPosition="after"
              primary={true}
              icon={<IconBack color={yellow500}/>}
              style={style}
              onClick={this.handleClick.bind(this, false)}
            />

            <RaisedButton
              secondary={true}
              icon={<IconOpen color={lightGreenA400}/>}
              style={style}
              onClick={this.toggleState.bind(this)}
            >
              {isOpened ? 'close' : 'open'}
            </RaisedButton>

            <RaisedButton
              label="Next"
              labelPosition="before"
              primary={true}
              icon={<IconForward color={yellow500}/>}
              style={style}
              onClick={this.handleClick.bind(this, true)}
            />
          </div>
        </Content>
      </div>
		)
  }
}

export default MainNews;
