import React, { Component } from 'react'
import { Fragment } from 'react'
import InformationWithLink from './Pages/InformationWithLink'
import CustomerHappiness from './Pages/CustomerHappiness'
import BottomFooter from './Pages/BottomFooter'
import '../assets/css/custom.css'

export default class FooterComponent extends Component {
    render() {
        return (
            <Fragment>
                <InformationWithLink></InformationWithLink>
                <CustomerHappiness></CustomerHappiness>
                <BottomFooter></BottomFooter>
            </Fragment>
        )
    }
}
