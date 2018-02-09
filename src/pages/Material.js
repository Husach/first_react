import React, { Component } from 'react';
import Header from './../components/Header.js';
import Content from './../components/Content.js';
import Button from './../components/Button.js';
import { menu } from './../data.js';


class Material extends Component {

  render() {
    return (
      <div>
        <Header menu={menu}/>
        <Content>
          <Button/>
        </Content>
      </div>
		)
  }
}

export default Material;
