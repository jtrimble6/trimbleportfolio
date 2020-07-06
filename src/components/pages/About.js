import React from "react"
import pp from '../../css/Trim.jpg'
import "../../css/About.css"

const About = () => (
  
    <div className="row aboutContainer" id="about">
                
        <div className="col-2"></div>
        <div className="col-8 aboutField">
            {/* <div className="row" id="content-header">
                <div className="col-md-12">
                    <h2>About</h2>
                </div>
            </div> */}
            <img src={pp} alt="Josh Trimble" className="img" />
            
                <p>
                  Recent Virginia Tech graduate and student-athlete with 3+ years of management and sales experience with ambition to develop in the tech industry. Welcome to the <strong>JOURNEY!</strong> I have always been very curious and enthusiastic about technology and have finally begun my deep dive into the industry. 
                </p>

                <p>
                  Playing football at Virginia Tech has greatly prepared me for this creative adventure as competing in a highly competitive sport that demands attention to detail and copious amounts of critical thinking crosses over nicely into tech. Outside of sports I my interests include movies, books, and podcasts. 
                </p>

                <p>
                  I passionately envision being part of a team that helps to create a revolutionary product and/or business. Although the idea has not been thought of yet, I can promise it is coming! If you would like to see examples of programs that I have created just take a scroll through the <strong>portfolio</strong> page!
                </p>
        
        
        <div className="col-2"></div>
        </div>
    </div>
)

export default About