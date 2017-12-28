import React, {Component} from 'react'
import './index.css'

class SpaceHeader extends Component{

  render(){
    return (


      <div className="container-fluid p-l-25 p-r-25 sm-p-l-0 sm-p-r-0">
      <div className="btn-group">
      <button className="btn btn-tag btn-tag-light m-r-20">
        <i className="fa fa-bar-chart icon-green"></i>
        <span className="button-pad-10 bold">Poll</span>
      </button>

      <button className="btn btn-tag  btn-tag-light m-r-20">
        <i className="fa fa-sticky-note icon-green"></i>
        <span className="button-pad-10 bold">Documnet</span>
      </button>

      <button className="btn btn-tag  btn-tag-light m-r-20">
        <i className="fa fa-comments-o icon-green"></i>
        <span className="button-pad-10 bold">Discussions</span>
      </button>

      <button className="btn btn-tag  btn-tag-light m-r-20">
        <i className="fa fa-edit icon-green"></i>
        <span className="button-pad-10 bold">Blogs</span>
      </button>

      <button className="btn btn-tag  btn-tag-light m-r-20">
        <i className="fa fa-calendar icon-green"></i>
        <span className="button-pad-10 bold">Events</span>
      </button>

      <button className="btn btn-tag  btn-tag-light m-r-20">
        <i className="fa fa-lightbulb-o icon-green"></i>
        <span className="button-pad-10 bold">Ideas</span>
      </button>

      <button className="btn btn-tag  btn-tag-light m-r-20 btn-tag-rounded">
        <i className="fa fa-video-camera icon-green"></i>
        <span className="button-pad-10 bold">Videos</span>
      </button>

      </div>
      </div>
    );
  }
}

export default SpaceHeader
