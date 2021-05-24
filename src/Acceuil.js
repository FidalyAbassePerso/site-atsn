import React from "react";
import { withStyles } from '@material-ui/core';
import background from './Images/ATSN.jpg'
import title from './Images/ATSN_logo.png'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import './Images/Css/Acceuil.css'
import Fade from '@material-ui/core/Grow';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { animated, useSpring } from "react-spring";
import ParralaxComponent from "./ParralaxComponent";
import GalleryImages from "./GalleryImages";




const styles = {
    acceuil: {
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "np-repeat",
    },
    footer: {
        textAlign: "center",
        color: "white",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
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
                <center><iframe style={{width: "70%",height:"80vh",marginTop: "100vh"}} className="embed-responsive-item" src="https://www.youtube.com/embed/C0X5lbgABRY" frameBorder="0" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></center>
                <GalleryImages />
                <footer className={this.props.classes.footer} >
                    <p>© 2021 Copyright: DreamVeloper Studio</p>
                </footer>
                
            </div>
            
        )
    }
}

export default withStyles(styles)(Acceuil)

