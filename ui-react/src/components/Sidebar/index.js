import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './index.css'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggleMenu(e) {
    e.preventDefault();
    this.setState({isOpen: !this.state.isOpen})
    console.log(this.state.isOpen);
  }

  render() {
    return (
      <nav className="page-sidebar" data-pages="sidebar">
        <div className="sidebar-header">
          <h1>uCern</h1>
        </div>


        <div className="sidebar-menu">

          <ul className="menu-items">
            <li className="m-t-30">
              <Link to='/' activeclassname="active" className="detailed">
                <span className="title">News Feed</span>
                <span className="details">12 New Updates</span>
              </Link>
              <span className="icon-thumbnail"><i className="fa fa-newspaper-o m-r-10"></i></span>
            </li>

            <li className="m-t-30">
              <Link to='#' activeclassname="active" className="detailed" onClick={this.toggleMenu}>
                <span className="title">My Stuffs</span>
                <span className="details">My spaces and groups</span>
              </Link>
              <span className="icon-thumbnail"><i className={"fa " + (this.state.isOpen ? 'fa-angle-up' : 'fa-angle-down')}></i></span>
              {
                (this.state.isOpen)
                ? <ul className="subMenu">
                <li className="m-t-10 ">
                  <Link to='/myblogs' activeclassname="active" className="detailed">
                    <i className="fa fa-rss m-r-10"></i>
                    <span className="title">Blogs</span>
                  </Link>
                </li>
                <li className="m-t-10 ">
                  <Link to='/groups' activeclassname="active" className="detailed">
                    <i className="fa fa-sticky-note-o m-r-10"></i>
                    <span className="title">Document</span>
                  </Link>
                </li>
                <li className="m-t-10 ">
                  <Link to='/groups' activeclassname="active" className="detailed">
                    <i className="fa fa-comments-o m-r-10"></i>
                    <span className="title">Discussions</span>
                  </Link>
                </li>
                <li className="m-t-10 ">
                  <Link to='/groups' activeclassname="active" className="detailed">
                    <i className="fa fa-video-camera m-r-10"></i>
                    <span className="title">Video</span>
                  </Link>
                </li>
                <li className="m-t-10 ">
                  <Link to='/groups' activeclassname="active" className="detailed">
                    <i className="fa fa-bar-chart m-r-10"></i>
                    <span className="title">Poll</span>
                  </Link>
                </li>
                <li className="m-t-10 ">
                  <Link to='/groups' activeclassname="active" className="detailed">
                    <i className="fa fa-lightbulb-o m-r-10"></i>
                    <span className="title">Idea</span>
                  </Link>
                </li>
                <li className="m-t-10 ">
                  <Link to='/groups' activeclassname="active" className="detailed">
                    <i className="fa fa-calendar-check-o m-r-10"></i>
                    <span className="title">Event</span>
                  </Link>
                </li>

                    <li className="m-t-10 ">
                      <Link to='/groups' activeclassname="active" className="detailed">
                        <i className="fa fa-group m-r-10"></i>
                        <span className="title">Groups</span>
                      </Link>
                    </li>
                    <li className="m-t-10 ">
                      <Link to='/spaces' activeclassname="active" className="detailed">
                        <i className="fa fa-window-restore m-r-10"></i>
                        <span className="title">Spaces</span>
                      </Link>
                    </li>
                    <li className="m-t-10 ">
                      <Link to='/spaces' activeclassname="active" className="detailed">
                        <i className="fa fa-briefcase m-r-10"></i>
                        <span className="title">Project</span>
                      </Link>
                    </li>
                  </ul>
                : ''
              }
            </li>
            <li className="m-t-30 ">
              <Link to='/' activeclassname="active" className="detailed">
                <span className="title">Planner</span>
                <span className="details">12 New Updates</span>
              </Link>
              <span className="icon-thumbnail"><i className="fa fa-calendar m-r-10"></i></span>
            </li>
            <li className="m-t-30 ">
              <Link to='/' activeclassname="active" className="detailed">
                <span className="title">Help</span>
                <span className="details">12 New Updates</span>
              </Link>
              <span className="icon-thumbnail"><i className="fa fa-support m-r-10"></i></span>
            </li>

          </ul>
          <div className="clearfix"></div>
        </div>
      </nav>
    );
  }
}

export default Sidebar
