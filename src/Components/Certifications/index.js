import React from "react";

import './cert.css';

import Image1 from '../../images/gsob.PNG';
import Image2 from '../../images/USFL.PNG';

const Cert = () => {
    return(
        <div>
            <body>
                <h3 class='cert__title'>Awards and Certifications</h3>
                <div class='ornamen'></div>
                <div class = 'cert__tile'>
                    <div class="cert__list">
                    <div class = 'cert'>
                            <img src ={Image1}/>
                            <div class="cert__desc">
                                <h1 class = "cert__name">Gold Seal of Biliteracy</h1>
                                <p class = 'cert__body'>High proficiency in another language</p>
                            </div>
                        </div>
                        <div class = 'cert'>
                            <img src ={Image2}/>
                            <div class="cert__desc">
                                <h1 class = "cert__name">Dean's List</h1>
                                <p class = 'cert__body'>Obtained a GPA of 4.0 while enrolled full-time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}
 export default Cert;
