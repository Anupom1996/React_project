import React, { Component } from "react";
import { Fragment } from "react";
import {
  ABOUT_US,
  CONTACT_US,
  CARRER_APPLY,
  INSTALLMENT_LOANS,
  PAYDAY_LOANS,
  CHEQUE_CASHING,
  WESTERN_UNION,
  FIND_A_STORE,
  PAY_MY_BALLENCE,
  FAQ,
  PRIVICY_POLICY,
  TERMS,
  ACCESSIBILITY,
} from "../common/constant";

export default class InformationWithLink extends Component {
  render() {
    console.log(ABOUT_US);
    return (
      <Fragment>
        <div class="footsec-one">
        <div class="col-lg-12 footer_desktop_view">
          <div class="foot_column norton-link"></div>
          
          <div class="foot_column footN">
            
            <h4 class="ft-header"> Company</h4>
            <a href={ABOUT_US}>About Us</a>
            <br></br>
            <a href={CONTACT_US}>Contact Us</a>
            <br></br>
            <a href={CARRER_APPLY}>Careers</a>
            <br></br>
          </div>
          <div class="foot_column">
            <h4 class="ft-header"> Our Services</h4>
            <a href={INSTALLMENT_LOANS}>Installment Loans</a>
            <br></br>
            <a href={PAYDAY_LOANS}>Payday Loans</a>
            <br></br>
            <a href={CHEQUE_CASHING}>Cheque Cashing</a>
            <br></br>
            <a href={WESTERN_UNION}> Western Union</a>
            <br></br>
          </div>
          <div class="foot_column footN">
            <h4 class="ft-header"> HELP</h4>
            <a href={FIND_A_STORE}>Find A Store</a>
            <br></br>
            <a href={PAY_MY_BALLENCE}>Debt Repayment</a>
            <br></br>
            <a href={FAQ}>FAQs</a>
            <br></br>
          </div>
          <div class="foot_column">
            <h4 class="ft-header"> INFORMATION</h4>
            <a href={PRIVICY_POLICY}>Privacy Policy</a>
            <br></br>
            <a href={TERMS}>Terms of Use</a>
            <br></br>
            <a href={ACCESSIBILITY}>Accessibility</a>
            <br></br>
          </div>
          <div class="foot_column"></div>
        </div>
        </div>
      </Fragment>
    );
  }
}
