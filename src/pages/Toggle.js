import React from 'react';
import Header from './../components/Header.js';
import Content from './../components/Content.js';
import BaseNews from './../components/BaseNews.js';
import {menu, news} from './../data.js';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Toggle extends BaseNews {
  constructor(props) {
    super(props);
    this.state = {
        isOpened: false,
        open: false,
        count: 0
    };
    this.interval = null;
  }

  componentDidMount() {
    this.runInterval.call(this);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getClassName() {
    if (this.state.isOpened) {
      return "content__fullText"
    }
    return "content__text";
  }

  toggleState() {
    this.setState({
      isOpened: !this.state.isOpened
    })
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  runInterval() {
    this.interval = setInterval(() => {
      this.handleClick.call(this, this.state.count+1);
    }, 2000)
  }

  render() {
    const {count} = this.state;
  	return (
      <div>
        <Header menu={menu}/>
        <Content>
          <div
            className="content__item"
            onClick={this.toggleState.bind(this)}
          >
            <h2>{news[count].title}</h2>
            <div className={this.getClassName()}>{news[count].text}</div>

            <RaisedButton
              className="toggle-btn"
              label="Выбор новостей"
              onClick={this.handleToggle.bind(this)}
            />
            <Drawer open={this.state.open}>
              {news.map((item, index) => (
                <MenuItem onClick={this.handleClick.bind(this, index)}>
                    {item.title}
                </MenuItem>
              ))}
            </Drawer>
          </div>
        </Content>
      </div>
		)
  }
}

export default Toggle;
