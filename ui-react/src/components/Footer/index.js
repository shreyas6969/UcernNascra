import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
       <div className=" container-fluid  container-fixed-lg footer">
            <div className="copyright sm-text-center">
             <img alt="Cerner Corporation Logo" src="//webcdn.cerner.com/Content/Images/cernerLogo_FC_T.png"/>
            <ul id="footer-list">
            <li class="footer-links"><a target="_blank" href="https://www.cerner.com/terms-of-use/">Terms of Use</a></li>
            <li class="footer-links"><a target="_blank" href="https://www.cerner.com/privacy">Privacy</a></li>
            <li class="footer-links"><a target="_blank" href="https://connect.ucern.com/community/cerner/associates/ucern-engage?WT.mc_id=time_engage">uCern Connect Sharepoint</a></li>
            <li class="footer-links"><a target="_blank" href="https://feedback.cerner.com/Surveys/myTime-Feedback.survey">Feedback</a></li>
        </ul>
        <div class="copyright">Copyright 2017 Cerner Corporation. All rights reserved.</div>
                <div className="clearfix"></div>
              </div>
            </div>
    );
  }
}

export default Footer;
