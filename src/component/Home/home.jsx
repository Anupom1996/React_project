import React, { Component } from 'react';
// import logoimg from '../../assets/images/logo.svg';
import BaseComponent from '../BaseComponent'
import FooterComponent from '../FooterComponent';
import Header from '../Header'
import '../../assets/css/custom.css'
import {Container} from 'react-bootstrap'
import TopBanner from '../Pages/TopBanner';
import Questions from '../Pages/Questions';
class Home extends Component {
    
    componentDidMount() {
        //document.body.classList.add("admin-skinbg");

        // setTimeout(() => {
        //     this.props.history.push("/login");
        // }, 2000)
        // document.addEventListener('contextmenu', (e) => {
        //     e.preventDefault();
        //   });
    }

    render() {
        return (
            <>
                <div class="aa">
              
               <BaseComponent> </BaseComponent>
             

                     {/* <img src={logoimg} alt="Svaas" style={{ width: '135px'}} /> */}
                     
                   <TopBanner></TopBanner>
                   <Questions></Questions>
                    <FooterComponent></FooterComponent>
                {/* <div class="information-Link1">

                </div>
              <Header></Header> */}
                </div>
               
            </>
        );
    }
}

export default Home;