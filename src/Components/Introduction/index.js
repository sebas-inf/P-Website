import React from 'react';
import ProfilePic from './../../images/PFP.jpg';

import './intro.css';

const Introduction = () => {
    return (
        <body>
            <div class="title__intro">
                <div class="intro">
                    <img class="self_image" src={ProfilePic}/>
                    <div class="intro__section">
                        <h1 class = "intro__title">Hi, my name is Sebastian Infante</h1>
                        <p class = "intro__subtitle">Computer Engineering Undergraduate</p>
                        <p class = "intro__memo">I am currently a student in the University of South Florida in the Engineering department seeking an internship in Software Engineering.</p>
                        <a href= "mailto: sebinfante12@gmail.com" class="header-button">Contact Me</a>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Introduction;
