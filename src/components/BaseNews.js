import { Component } from 'react';
import {news} from './../data.js';

class BaseNews extends Component {

  handleClick (isNext) {
    let count = this.state.count;
    let length = news.length - 1;

    if (isNext && count === length) {
      count = 0;
    } else if (isNext) {
      count++;
    } else if (!isNext && !count) {
      count = length;
    } else {
      count--;
    }

    this.setState({ count });

  }

}

export default BaseNews;
