import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import { Fragment } from "react";
import '../../assets/css/custom.css'
import BannerModal from '../Modal/BannerModal';
export default class TopBanner extends Component {
    render() {
        return (
           <Fragment>
               <Container className="banner">
                   <BannerModal></BannerModal>
               </Container>
           </Fragment>
        )
    }
}
