import React from "react";
import { withStyles } from '@material-ui/core';
import background from './Images/ATSN.jpg'
import title from './Images/ATSN_logo.png'
import Paper from '@material-ui/core/Paper';
import abasse from "./Images/AbasseLogo.png";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import './Images/Css/Acceuil.css'
import Fade from '@material-ui/core/Grow';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { animated, useSpring } from "react-spring";
import ParralaxComponent from "./ParralaxComponent";




const styles = {
    acceuil: {
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400vh"
    },
    title: {
        width: "50%"
    }
};

class Acceuil extends React.Component {

    constructor(){
        super();
        this.state = {};
        this.ref = React.createRef();
    }

    updateComponentSize = () => {
    }

    componentDidMount() {
        window.addEventListener("scroll", this.updateComponentSize);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.updateComponentSize);
    }

    render() {
        return (
            <div className={this.props.classes.acceuil}>
                <ParralaxComponent />
                <center><iframe style={{width: "50%",height:"60vh"}} class="embed-responsive-item" src="https://www.youtube.com/embed/C0X5lbgABRY" frameborder="0" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
            </div>
            
        )
    }
}

export default withStyles(styles)(Acceuil)

