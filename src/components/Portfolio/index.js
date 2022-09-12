import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";


const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });


    const myStyle={
        backgroundImage: "url(https://i.im.ge/2022/08/09/FKVa48.Screen-Shot-2022-08-08-at-3-22-29-PM.png)",
        // https://images.squarespace-cdn.com/content/v1/5d4cfd87082420000108b311/1566718849902-809OYSILCPJLAKT97XWE/futuristic-technology-abstract-background-beautiful-footage-087637197_prevstill.jpeg?format=2500w)
        height:'110vh',
        marginTop:'-16px',
        fontSize:'50px',
        marginLeft : '70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    
    };

 

    
    return (
        <>
            <div className="container portfolio-page"  style={myStyle}  >
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"A Summer Research Project".split("")}
                        idx={5}
                    />
                </h1>
                <div className="projectdes"> 
                The Project "ChemWeb : A 2D Molecular Builder" is designed to be a self-check mechanism to draw and check isomers of a given chemical formula for CHEM 120 students.
                
                Drawing structures can be hard and complicated. We all find ourselves out of our comfort zone while referring to the instructor to verify our drawn structures in classrooms, specially more than once. 
                
                To resolve this issue, I have created a platform where students can draw and check their structures. For this project,  I have created a game with 8 different levels where each level is based on a drawing the possible structural isomers of a given formulae where each isomer can only be drawn once to be considered correct. In order to win, the student must drawn all possible isomers for each structure in all levels. 


                    <hr/>
                    <b> Future Development : </b>This project shall be passed onto to future students to add greater functionality e.g. 3D aspect where drawn molecules would be represented in a 3D manner. 
                    The students shall enlist thier names below 
                
                        <ul>1. Anh Phuong Do</ul>
                        <ul>2. Minahil Nayyar Khan</ul>
                  
                
                  
                    
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;