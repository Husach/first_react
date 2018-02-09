import React, { Component } from 'react';
import Header from './../components/Header.js';
import Content from './../components/Content.js';
import Block from './../components/Block.js';

import {menu, news} from './../data.js';

class Home extends Component {
  render() {
    return(
      <div className="page">
        <Header menu={menu}/>
        <Content>
            {news.map((item, id) =>
              <Block key={id} item={item}/>
            )}
        </Content>
      </div>
    )
  }
}

export default Home;
