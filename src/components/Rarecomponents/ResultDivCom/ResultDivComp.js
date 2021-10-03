import React from 'react'
import "./ResultDivComp.css"

export default function ResultDivComp({text,response}) {

    return (
        <div className="box">

            <div className="head">
                <div>
                    <p className="Qno">{text}</p>
                </div>
                <div>
                    <p className="question">{response.sawal}</p>
                </div>
            </div>
            <div className="show">
                <p>Answer Key : {response.key}</p>
                <p>Select option :  {response.useranswer}</p>
                <p>Score :   {response.score}</p>
            </div>
        </div>
    )
}
