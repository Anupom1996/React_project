import React, { Component } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import '../../assets/css/custom.css'
export default class BannerModal extends Component {
  render() {
    return (
      <>
        <div class="modal-dialog modal-lg">
          <Modal.Dialog size="sm-2" width="50%">
            {/* <Modal.Header>
              <Modal.Title> */}
              {/* <div class="banner-sec">
        <div class="col-lg-4 col-lg-offset-8 col-sm-5 col-sm-offset-7 col-xs-12">
                <div class="ban-box">
                  <div class="row">
                    <h3 class="ban_hd hd-3">
                      {" "}
                      Get back on track At Full Speed!
                    </h3>
                  </div>
                  <div class="row">
                    <h4 class="ban_hd hd-4"> Money Solutions</h4>
                  </div>
                </div>
                </div>
                </div> */}
              {/* </Modal.Title>
            </Modal.Header> */}

            <Modal.Body>
              <div class="row">
              <h3>Modal body text goes here.</h3>
              </div>
              <div>
              <h4 > Money Solutions</h4>
              </div>
              
            </Modal.Body>

            <Modal.Footer>
              {/* <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button> */}
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </>
    );
  }
}
