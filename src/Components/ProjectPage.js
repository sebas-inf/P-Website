import React from 'react';
import { useNavigate } from 'react-router-dom';
//images
import Project1 from "../images/project2.png"
import Project2 from "../images/project2.png"


//Components
import Header from './Header';

import './ProjectPage.css';


const ProjectPage = () => {
    let navigate = useNavigate();
    return (
        <div >
            <Header/>
            <section class="projects">

                <div class="project">
                    <img src={Project1}/>
                    <h3>Trivia Game</h3>
                    <p>This is a trivia game that was created using python. The game works by importing a class from a file, then importing the questions function from another file, and putting all of them together into a single file that will run the game and keep the scores to decide a winner. 
                    The questions are in a multiple-choice format and each player receives 5 questions. After each player has been asked 5 questions, the one with the most right answers wins. The program was created in python, using classes, dictionaries, and lists.

                    </p>
                </div>

                <div class="project">
                    <img src={Project2}/>
                    <h3>Shopping Cart</h3>
                    <p>This program creates a shopping list for the user. The program will take input of item name, item price, and item quantity. After receiving that input the program will return a chart that lists all the items and their respective information. 
                        This program was created in python using classes and lists.
                    </p>
                </div>

                

                <button onClick={() => {navigate("/")}} class="proj_btn">Go Home</button>
            </section>
        </div>
    )
}

export default ProjectPage;
