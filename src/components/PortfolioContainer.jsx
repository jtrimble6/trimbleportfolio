import React, { Component } from "react";
import NavTabs from "./NavTabs";
import ConnectTabs from "./ConnectTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ContactMe from "./ContactMe";
import "../css/Page.css"
import "../css/Background.css"
import "../css/NavBar.css"


class Portfolio extends Component {
    state = {
        currentPage: "Home"
    }

    handlePageChange = page => {
        this.setState({ currentPage: page })
    }

    renderPage = () => {
      
      if (this.state.currentPage === "Home") {
        return <Home 
        onClick={this.enterClick}
        />;
      } else if (this.state.currentPage === "About") {
        return <About />;
      } else if (this.state.currentPage === "Projects") {
        return <Projects />;
      } else {
        return <Contact />;
      }
    };

    classToggle = () => {
      const navs = document.querySelectorAll('.Navbar_Items')
      console.log("Navs: ", navs)
      navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
    }

    enterClick = () => {
      console.log("ENTERING")
      this.setState({currentPage: "About"})
      this.renderPage()
    }

    connectClick = () => {
      console.log("CONNECTING WITH ME")
      // const buttonWrapper = document.querySelectorAll('.connectButton'),
      //   button = document.querySelectorAll('.connectButton > a'),
      //   icons = document.querySelectorAll('.connectButton > .iconWrapper'),
      //   close = document.querySelectorAll('closeIcons')

      // const init = () => {
      //   button.on('click', toggle)
      //   close.on('click', closeIcons)
      // }

      // const toggle = (e) => {
      //   if (buttonWrapper.hasClass("active")){
      //     closeIcons();
      // } else{
      //     openIcons();
      // }
      // e.preventDefault();
      // }

      // const openIcons = () => {
      //   buttonWrapper.addClass("active");
      //   button.addClass("hidden");
      //   buttonWrapper.animate({width: "286"}, 500);
      //   icons.animate({left: "0"}, 500);
      // }

      // const closeIcons = () => {
      //   buttonWrapper.removeClass("active");
      //   button.removeClass("hidden");
      //   icons.animate({left: "-286"}, 0);
      //   buttonWrapper.animate({width: "178"}, 0);
      // }

      // init()
    }
    
    render() {
        return (
          <div className="page-container">
            <div className="tabs-container">
              <NavTabs
                currentPage={this.state.currentPage}
                handlePageChange={this.handlePageChange}
                handleTabsClick={this.classToggle}
                handleConnectClick={this.connectClick}
                handleEnterClick={this.enterClick}
              />
            
            </div>

            {this.renderPage()}

          </div>
        );
      }
}

export default Portfolio