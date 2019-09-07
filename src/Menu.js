import React, { Component } from "react";
import './Menu.css';

class Menu extends Component {    
    render () {
        var visible = "hide";
        if (this.props.menuVisible) {
            visible = "show";
        }
        return(
            <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown} className={visible}>
                <h2><a href="#">Item 1</a></h2>
                <h2><a href="#">Item 2</a></h2>
                <h2><a href="#">Item 3</a></h2>
                <h2><a href="#">Item 4</a></h2>
            </div>
        );    
    }
}

export default Menu;