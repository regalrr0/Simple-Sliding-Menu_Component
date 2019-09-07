import React, { PureComponent } from "react";
import './MenuButton.css';
import { tsParenthesizedType } from "@babel/types";

// make purecomponent to avoid uneccessary rendering
class MenuButton extends PureComponent {
    
    /*
    // could make rendering more efficient by:
    // **** can be updated with useeffect hook ****
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.handleMouseDown === this.props.handleMouseDown) {
            return false;
          } else {
            return true;
          }
      } 
    */
    render(){
        return (
            <button id="roundButton" onMouseDown={this.props.handleMouseDown} >
            </button>
        );
    }
}

export default MenuButton;