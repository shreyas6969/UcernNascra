import React, {Component} from 'react'
import './index.css'

class BlockPost extends Component{
  render(){
    return(

  <div className="col-md-6 m-b-10">


      <div className="card no-border no-margin card-shadow">

          <div className="padding-5">
            <div className="row">
              <div className="col-md-1 m-2">
              <i className={this.props.className}></i>
              </div>
              <div className="col-md-8 m-t-2">
              <h4> Some important title </h4>
              </div>
            </div>
           </div>

          <div className="relative">
              <div className="blockpost-body no-overflow">
                  <div className="block center-margin relative">
                    One stop team to take care of all your Capital Spend and IT Assets”   ITSSM is a Strategy and Service Management team under the broader Cerner Technology Services unit at Cerner India.   Cerner India ITSSM team comprises of 2 major verticals: IT Business Management: Comprising of IT Capital & Expense Planning, Hardware
                    ...
                  </div>
              </div>
          </div>

          <div className="padding-15 blockpost-footer color-grey">
              <div className="item-header clearfix">
                  <div className="thumbnail-wrapper d32 circular">
                      <img width="40" height="40" src="https://connect.ucern.com/profile-image-display.jspa?imageID=75650&size=200" data-src="https://connect.ucern.com/profile-image-display.jspa?imageID=75650&size=200" data-src-retina="https://connect.ucern.com/profile-image-display.jspa?imageID=75650&size=200" alt="" />
                  </div>
                  <div className="inline m-l-10">
                      <p className="no-margin">
                          <strong>{this.props.name}</strong>
                      </p>
                      <p className="no-margin hint-text">
                          <span className="location semi-bold"><i className="fa fa-map-marker"></i> in CTS India</span>
                      </p>
                  </div>

                  <div className="inline m-r-10 blockpost-icon-holder">
                      <p className="no-margin">
                      <div className="btn-group">
                        <button type="button" className="btn no-border color-grey"><i className="fa fa-link icon-silver"></i></button>
                        <button type="button" className="btn no-border color-grey"><i className="fa fa-heart icon-silver"></i></button>
                        <button type="button" className="btn no-border color-grey"><i className="fa fa-comment icon-silver"></i></button>
                      </div>
                      </p>
                  </div>

              </div>
          </div>


      </div>
      <br/>

  </div>


    )
  };
}

export default BlockPost
