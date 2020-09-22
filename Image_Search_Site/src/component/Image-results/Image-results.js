import React, {Component} from "react";
import PropTypes from 'prop-types'
import {GridList, GridListTile} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import Dialog from "@material-ui/core/Dialog";
class ImageResults extends Component{
    render() {
        return(
            <div></div>
        )
    }
}
ImageResults.propTypes = {
    images : PropTypes.array.isRequired
}
export default ImageResults;