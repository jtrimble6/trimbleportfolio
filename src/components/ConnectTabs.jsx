import React from "react"
import "../css/ConnectTabs.css"
import { SocialIcon } from 'react-social-icons';

const ConnectTabs = props => (

    <div className="connectButton" onClick={props.onClick}>
      <div className="iconWrapper">
        <a href="#" className="connectText">Connect With Me</a>
        {/* <ul>
          <li>
            <a href="https//twitter.com/share"><SocialIcon network="twitter" color="#ff5a01" /><i className="fa faTwitter"></i></a>
          </li>
          <li>
            <a href="https//twitter.com/share"><SocialIcon network="twitter" color="#ff5a01" /><i className="fa faTwitter"></i></a>
          </li>
          <li>
            <a href="https//twitter.com/share"><SocialIcon network="twitter" color="#ff5a01" /><i className="fa faTwitter"></i></a>
          </li>
          <li>
            <a href="https//twitter.com/share"><SocialIcon network="twitter" color="#ff5a01" /><i className="fa faTwitter"></i></a>
          </li>
          <li>
            <a href="#" className="closeIcons">Close</a>
          </li>
        </ul> */}
      </div>
    </div>
  
  );
  
  export default ConnectTabs;