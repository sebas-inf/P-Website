import React from "react";

import './Experiences.css';

import Image1 from '../../images/SHPE.PNG';
import Image2 from '../../images/Python-logo.jpg';
import Image3 from '../../images/USFSCP.PNG';
import Image4 from '../../images/JAVAS.PNG';
import Image5 from '../../images/LPH.PNG';


const Expirience = () => {
    return(
        <div>
            <body>
                <h3 class='exp__title'>Experience</h3>
                <div class='ornament'></div>
                <div class = 'exp__tile'>
                    <div class="exp__list">
                    <div class = 'exp'>
                            <img src ={Image1}/>
                            <div class="exp__desc">
                                <h1 class = "exp__name">SHPE - Member</h1>
                                <p class = 'exp__body'>(Society of Hispanic Profesional Engineers) Participated in career and resume workshops</p>
                            </div>
                        </div>
                        <div class = 'exp'>
                            <img src ={Image2}/>
                            <div class="exp__desc">
                                <h1 class = "exp__name">Python</h1>
                                <p class = 'exp__body'>Intermediate level profficiency with phython</p>
                            </div>
                        </div>
                        <div class = 'exp'>
                            <img src ={Image3}/>
                            <div class="exp__desc">
                                <h1 class = "exp__name">SCP - Member</h1>
                                <p class = 'exp__body'>(Society of competitive programmers) Participated in C++ workshops</p>
                            </div>
                        </div>
                        <div class = 'exp'>
                            <img src ={Image4}/>
                            <div class="exp__desc">
                                <h1 class = "exp__name">JavaScypt</h1>
                                <p class = 'exp__body'>Elementary profficiency with JavaScript</p>
                            </div>
                        </div>
                        <div class = 'exp'>
                            <img src ={Image5}/>
                            <div class="exp__desc">
                                <h1 class = "exp__name">LifePath Thrift Store - Volunteer</h1>
                                <p class = 'exp__body'>Trained new volunteers and organized incoming clothing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}
 export default Expirience;