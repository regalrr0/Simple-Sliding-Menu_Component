import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import { tsParenthesizedType } from "@babel/types";

// note: while not legacy, the new way is to use react hooks and functions
class MenuContainer extends Component {
    constructor(props) {
        super(props);

        // setup state
        this.state = {
            visible: false
        };



        // bind methods
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <>
                <MenuButton handleMouseDown = {this.handleClick}/>
                <Menu handleMouseDown = {this.handleClick} menuVisible = {this.state.visible}/>
                </>
        );
    }
}

export default MenuContainer;