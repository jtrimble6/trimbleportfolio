import React from "react"
import "../css/ConnectTabs.css"
import { SocialIcon } from 'react-social-icons';
import { scaleRotate as Menu } from 'react-burger-menu'


class ConnectTabs extends React.Component {

  state = {
    isOpen: false
  }

  showMenu (event) {
    event.preventDefault();
  }

  isMenuOpen = (state) => {
    return state.isOpen;
  };

  render() {
    return (
      <div id="outer-container">
        <Menu isOpen={ false } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={ '20%' } onClick={this.isMenuOpen}>
          <main id="page-wrap">
            <a id="linkedin" className="menu-item" href="/">Linked In</a>
            <a id="github" className="menu-item" href="/about">Github</a>
            <a id="blog" className="menu-item" href="/contact">Blog</a>
            {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
          </main>
        </Menu>
      </div>
      
    )
  }
    // <div className="connectButton" onClick={props.onClick}>
    //   <div className="iconWrapper">
    //     <a href="#" className="connectText">Connect With Me</a>
    //     {/* <ul>
    //       <li>
    //         <a href="https//twitter.com/share"><SocialIcon network="twitter" color="#ff5a01" /><i className="fa faTwitter"></i></a>
    //       </li>
    //       <li>
    //         <a href="https//twitter.com/share"><SocialIcon network="twitter" color="#ff5a01" /><i className="fa faTwitter"></i></a>
    //       </li>
    //       <li>
    //         <a href="https//twitter.com/share"><SocialIcon network="twitter" color="#ff5a01" /><i className="fa faTwitter"></i></a>
    //       </li>
    //       <li>
    //         <a href="https//twitter.com/share"><SocialIcon network="twitter" color="#ff5a01" /><i className="fa faTwitter"></i></a>
    //       </li>
    //       <li>
    //         <a href="#" className="closeIcons">Close</a>
    //       </li>
    //     </ul> */}
    //   </div>
    // </div>
  
  };
  
  export default ConnectTabs;