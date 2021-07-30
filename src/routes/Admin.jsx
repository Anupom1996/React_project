import React, { Component, lazy, Suspense } from "react";
import { Route, Redirect,Switch } from "react-router-dom";
import history from '../History';

import Loader from "react-spinner-material";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
const Home = lazy(() => import("../component/Home/home"));
const NotFound = lazy(() => import("../component/NotFound"));
const AboutUs = lazy(() => import("../component/Pages/AboutUs"));
const ContactUs = lazy(() => import("../component/Pages/ContactUs"));
const Carrers = lazy(() => import("../component/Pages/Carrers"));
const InstallmentLoans = lazy(() => import("../component/Pages/InstallmentLoans"));
const PayDayLoans = lazy(() => import("../component/Pages/PayDayLoans"));
const ChequeCashing = lazy(() => import("../component/Pages/ChequeCashing"));
const WesternUnion = lazy(() => import("../component/Pages/WesternUnion"));
const FindAStore = lazy(() => import("../component/Pages/FindAStore"));
const DebtReaypayment = lazy(() => import("../component/Pages/DebtReaypayment"));
const FAQs = lazy(() => import("../component/Pages/FAQs"));
const PrivacyPolicy = lazy(() => import("../component/Pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("../component/Pages/TermsOfUse"));
const Accessibility = lazy(() => import("../component/Pages/Accessibility"));
const UserAccountPage = lazy(() => import("../component/Pages/UserAccountPage"));
// Private Route for inner component
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      localStorage.getItem("access_token") !== null &&
      localStorage.getItem("refresh_token") !== null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
    render={(props) =>
      localStorage.getItem("access_token") !== null &&
      localStorage.getItem("refresh_token") !== null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

class Admin extends Component {
  render() {
    let loader = (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          left: "0",
          top: "0",
          zIndex: "999",
        }}
      >
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "50%",
            width: "50px",
            height: "50px",
          }}
        >
          <Loader size={50} visible={true} />
        </div>
      </div>
    );
    return (
      <div>
        <Suspense fallback={loader}>
    <Switch>
    <Route  exact path="/" component={Home} history={history} />
      
      <Route exact path="/about-us/" component={AboutUs} />
      <Route exact path="/contact-us/" component={ContactUs} />
      <Route exact path="/career-apply/" component={Carrers} />
      <Route exact path="/installment-loans/" component={InstallmentLoans} />
      <Route exact path="/payday-loans/" component={PayDayLoans} />
      <Route exact path="/services/cheque-cashing/" component={ChequeCashing} />
      <Route exact path="/services/western-union/" component={WesternUnion} />
      <Route exact path="/company/find-a-store/" component={FindAStore} />
      <Route exact path="/paymybalance/" component={DebtReaypayment} />
      <Route exact path="/faqs/" component={FAQs} />
      <Route exact path="/company/privacy-policy/" component={PrivacyPolicy} />
      <Route exact path="/company/terms/" component={TermsOfUse} />
      <Route exact path="/accessibility/" component={Accessibility} />
      < Route exact path="/User/account/" component={UserAccountPage} history={history} />
      <Route path='*' exact={true} component={NotFound} />
    </Switch>
         
        </Suspense>
      </div>
    );
  }
}

export default Admin;
