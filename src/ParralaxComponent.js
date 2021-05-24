import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import title from './Images/ATSN_logo.png'
import './Images/Css/Acceuil.css'



// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.
const calc = o => `translateY(${o * -0.2}px)`;

const ParralaxImage = () => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div ref={ref} id="container">   
        <animated.div id="center" style={{transform: offset.interpolate(calc)}}>
            <img style={{width:"50%"}} src={title}/>
        </animated.div>
    </div>
  );
};

export default class ParralaxComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <ParralaxImage />
        </div>;
    }
}
