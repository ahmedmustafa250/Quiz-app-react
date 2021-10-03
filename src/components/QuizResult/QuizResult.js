import {Redirect} from "react-router-dom";
import React from 'react'
import ResultDivComp from ".././Rarecomponents/ResultDivCom/ResultDivComp"
import "./quizResult.css"
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function QuizResult() {
    let currentUser=localStorage.getItem("currentUser")
    let data=JSON.parse(localStorage.getItem("response"))
    let sum=0;
    for(var i=0;i<data.length;i++){
            sum+=data[i].score
    }

    const [user, setuser] = useState(currentUser)
    function signout(){
      localStorage.removeItem("currentUser");
      setuser(null)
    }


    return (
        <div>
        {currentUser  ? 
                <div>
                   <div className="quiz-heading-div1">
                             <h1 className="Result-head">Result </h1>
                             <Button variant="primary" type="submit" className="Signout1" onClick={signout} >
                                Signout
                            </Button>
                    </div>
                
                       
                            <ResultDivComp text="Q1" response={data[0]} />
                            <ResultDivComp text="Q2" response={data[1]} />
                            <ResultDivComp text="Q3" response={data[2]} />
                            <ResultDivComp text="Q4" response={data[3]} />
                            <ResultDivComp text="Q5" response={data[4]} />
                            <ResultDivComp text="Q6" response={data[5]} />
                            <ResultDivComp text="Q7" response={data[6]} />
                            <ResultDivComp text="Q8" response={data[7]} />
                            <ResultDivComp text="Q9" response={data[8]} />
                            <ResultDivComp text="Q10" response={data[9]} />

                        <div className="bottom">
                            <p className="total">Total Marks : {sum}</p>
                            <h4 className="thanks">Thanks For Attending Quiz</h4>
                        </div>  
                    </div>   
        :
        
            <Redirect to="/" />
    }
        
            

        </div>
    )
}
