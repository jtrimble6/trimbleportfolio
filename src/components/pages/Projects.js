import React from "react"
import "../../css/Projects.css"

const Projects = () => (
    <div className="row projectsContainer" id="bio">
                
                    <div className="col-md-2">
                      {/* Empty on purpose */}
                    </div>
                    <div className="col-md-8">
                            {/* Row 1 */}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="icon1">
                                        <a className="caption" href="https://jtrimble6.github.io/unit-4-game/">FIGHTER GAME</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="icon2">
                                        <a className="caption" href="https://jtrimble6.github.io/TriviaGame/">TRIVIA GAME</a>
                                    </div>
                                </div>
                            </div>
                            {/* Row 2 */}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="icon3">
                                        <a className="caption" href="https://ancient-sands-68942.herokuapp.com/">Odds Shark</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="icon4">
                                        <a className="caption" href="https://secretsupperclub.herokuapp.com/">Secret Supper Club</a>
                                    </div>
                                </div>
                            </div>
                            {/* Row 3 */}
                            <div className="row">
                                <div className="col-md-3">
                                    {/* Empty on purpose */}
                                </div>
                                <div className="col-md-6">
                                    <div className="icon5">
                                        <a className="caption" href="https://jtrimble6.github.io/Word-Guess-Game/">Word Guess Game</a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    {/* Empty on purpose */}
                                </div>
                            </div>
                        </div>
                    <div className="col-md-2"></div>
            </div>
  
)

export default Projects