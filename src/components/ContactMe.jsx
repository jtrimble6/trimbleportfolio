// import React, { PureComponent } from 'react';
// import { Container, Row, Col } from 'react-grid-system';
// import CircularProgress from 'material-ui/CircularProgress';
// import ContactForm from './pages/Contact/ContactForm';
// import AlertMessage from './AlertMessage';


// const styles = {
//   section: {
//     paddingTop: "75px",
//     paddingBottom: "3em"
//   },
//   loaderStyle: {
//     zIndex: "999",
//     height: "20em",
//     width: "2em",
//     overflow: "show",
//     margin: "12em auto auto auto",
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0
//   }
// }

// class ContactMe extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       labelText: "Contact"
//     };
//     this.handleContact = this.handleContact.bind(this);
//   }

//   handleContact(data) {
//     this.props.action.sendMail(data);
//   }

//   render() {
//     const { labeltext } = this.state;
//     const { contact } = this.props;
//     return(
//       <div>
            
//       <Container>
//         <Row>
//           <Col xs={12} sm={12} md={12} lg={12}>
//             <Row 
//             labeltext={labeltext}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col xs={12} sm={12} md={12} lg={12}>
//             <br />
//           </Col>
//         </Row>
//         <Row>
//           <Col xs={12} sm={12} md={12} lg={12}>
//             <p>I would love to hear from you! Please submit your message below.</p>
//           </Col>
//         </Row>
//         <ContactForm onSubmit={this.handleContact}/>
//         {/* <AlertMessage message={contact.message} errMessage={contact.errMessage}/> */}
//       </Container> 
//       </div>
//     )
//   }
// }

// export default ContactMe;



//node modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// custom modules
import { submitContactReqToServer } from "./actions/submitContactReq";
import EmailMsg from "./pages/Contact/EmailMessage";
class SendContactInfo extends Component {
constructor(props){
 super(props)
 this.state = {
 name: "",
 email: "",
 message: ""
 }
 }
handleOnSubmit = event => {
 event.preventDefault();
 this.props.submitContactReqToServer("/contacts", this.state)
 this.setState({name: "", email: "", message: ""})
 }
handleOnChange = event => {
 this.setState({
 [event.target.name]: event.target.value
 });
 }
render() {
 return (
 <div>
 <div className='uk-position-center formMargin'>
 <form className='uk-form' onSubmit={this.handleOnSubmit}>
 <fieldset className='bgColor'>
 <h2 className="uk-text-center">Get In Touch!</h2>
 <div className='uk-form-row'>
 <legend>Name</legend>
 <input className='uk-form-large' type='text' placeholder='Your Name' name='name' onChange={this.handleOnChange} value={this.state.name} />
 </div>
 <div className='uk-form-row'>
 <legend>Email</legend>
 <input className='uk-form-large' type='email' placeholder='Your Email' name='email' onChange={this.handleOnChange} value={this.state.email} />
 </div>
 <div className='uk-form-row'>
 <legend>Message</legend>
 ​<textarea className='uk-form-large' type='txtArea' rows='10' cols="70" placeholder='Your Message' name='message' onChange={this.handleOnChange} value={this.state.message} ></textarea>
 </div>
 <input type='submit' value='Send Email' />
 </fieldset>
 </form>
 </div>
 <div>
 { < EmailMsg 
      
 /> }
 </div>
 <div className="uk-text-center uk-position-bottom">
 <h5 > When It Comes To Real Estate, Think Of Me — Trushal Chitalia </h5>
 </div>
 </div>
 );
 }
};
const mapDispatchToProps = dispatch => {
 return bindActionCreators(
 { submitContactReqToServer }, dispatch);
};
export default connect(null, mapDispatchToProps)(SendContactInfo)