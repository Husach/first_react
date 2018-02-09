import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
	render() {
	  return (
	    <div className="header">
	    	{this.props.menu.map((item, id) =>
	      	<Link to={item.link} key={id} className="header__item">{item.label}</Link>
	    	)}
	    </div>
    );
	}
}

export default Header;
