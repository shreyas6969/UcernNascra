import React, {Component} from 'react'
import './index.css'

class NavigationCard extends Component{
  render(){
    return(
      <div className="card social-card share m-3 col1 card-shadow" data-social="item">
         <div className="circle" data-toggle="tooltip" title="Label" data-container="body">
         </div>
         <div className="card-header clearfix">
            <div className="user-pic">
               <img alt="Profile Image" width="33" height="33" data-src-retina="assets/img/profiles/mikenill.jpg" data-src="assets/img/profiles/mikenill.jpg" src="assets/img/profiles/mikenill.jpg" />
            </div>
            <h5>Mike Neill</h5>
            <h6>Conversations Place</h6>
         </div>
         <div className="card-description">
            <p>Inspired by : good design is obvious, great design is transparent</p>
            <div className="via">via themeforest</div>
         </div>
         <div className="card-content">
            <ul className="buttons ">
               <li>
                  <a href="#"><i className="fa fa-expand"></i>
                  </a>
               </li>
               <li>
                  <a href="#"><i className="fa fa-heart-o"></i>
                  </a>
               </li>
            </ul>


            <img alt="Social post" src="assets/img/profiles/cerner-cover.jpg" className="space-cover tint"/>

         </div>
         <div className="card-footer clearfix">
            <div className="time"><span>1033 </span>Followers</div>
         </div>
      </div>
    )
  };
}

export default NavigationCard
