import React, { Component } from 'react'
import { Fragment } from 'react'
export default class PageNotFoundMiddleBanner extends Component {
    render() {
        return (
            <Fragment>
            
            <div class='page-Not-Found-Middle-Banner'>
            {/* <img src={require("../../assets/images/common_banner.svg")} alt="" /> */}
            <img src="https://cash4you.ca/wp-content/themes/cash4you2017/images/404-img.png" alt="" />
            <h4 class="error-page-txt">We cannot find the page you’re looking for. Is there a typo in the url? 
						<br></br>Please <a href="">contact support</a>
                    
            </h4>
            </div>
            
        </Fragment>
        )
    }
}
