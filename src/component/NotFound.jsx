import React, { Component } from "react";
import { Fragment } from "react";
import PageNotFoundTopBanner from "./Pages/PageNotFoundTopBanner";
import PageNotFoundMiddleBanner from "./Pages/PageNotFoundMiddleBanner";
import BaseComponent from "./BaseComponent";
import FooterComponent from "./FooterComponent";
import InformationWithLink from './Pages/InformationWithLink'
export default class NotFound extends Component {
  render() {
    return (
      <Fragment>
        {/* //header menu */}
        <BaseComponent></BaseComponent>
        <InformationWithLink></InformationWithLink>
        <PageNotFoundTopBanner></PageNotFoundTopBanner>
        <PageNotFoundMiddleBanner></PageNotFoundMiddleBanner>

        {/* //footer menu */}
        <FooterComponent></FooterComponent>
      </Fragment>
    );
  }
}
