import React from 'react'
import "./Card.css"

export const Card = () => {
    return (
        <>
            <div className='body'>
                <div id="component-container">
                    <div className="result-container inner"></div>
                    <div className="summary-container inner">
                        <h3>Summary</h3>
                        <div className="score-container">
                            <div className="score-div div0">score-div1</div>
                            <div className="score-div div1">score-div2</div>
                            <div className="score-div div2">score-div3</div>
                            <div className="score-div div3">score-div4</div>
                        </div>
                        <div className="btn">Continue<div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
