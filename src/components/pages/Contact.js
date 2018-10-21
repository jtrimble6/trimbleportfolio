import React from "react"
import "../../css/Contact.css"

const Contact = () => (
  
    <div className="row contactContainer" id="bio">
        <div className="col-md-2"></div>
          <div className="col-md-8" id="contact">
            <form action="action_page.php">
                <div className="row">
                    <div className="col-md-12 nameText">
                        <label for="fname">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <input type="text" id="fname" name="firstname" 
                        placeholder="Your name.." 
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 emailText">
                        <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <input type="text" id="email" name="email" 
                          placeholder="example@gmail.com"
                        />
                    </div>
                </div>
            </form>
                <div className="row">
                    <div className="col-md-12 messageText">
                        Message:
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 textAreaDiv">
                        <textarea className ="textArea" id="msg" name="message" rows="8" cols="20">
        
                        </textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </div>
        <div className="col-md-2"></div>
        </div>
  
)

export default Contact