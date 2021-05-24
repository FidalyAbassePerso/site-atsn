import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import listImages from './listImages';

const style = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
      },
      gridList: {
        width: 880,
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
}


class GalleryImages extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {nbImagesCols: window.innerWidth < 765 ? 1 : 2};
    }

    updateComponentSize = () => {
        console.log(this.state);
        let nbImagesCols = this.state.nbImagesCols;
        if (window.innerWidth < 765){
            nbImagesCols = 1;
        }
        else{
            nbImagesCols = 2;
        }
        this.setState({nbImagesCols});
    }

    componentDidMount(){
        window.addEventListener("resize",this.updateComponentSize)
    }

    componentWillUnmount(){
        window.removeEventListener("resize",this.updateComponentSize)
    }

    render(){
        return (
            <div className={this.props.classes.root}>
              <GridList cellHeight={220} className={this.props.classes.gridList} cols={this.state.nbImagesCols}>
                {listImages.map((image) => (
                  <GridListTile key={image.img}>
                    <img src={image.img} alt={image.title} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          );
    }
  
}
export default withStyles(style)(GalleryImages)
