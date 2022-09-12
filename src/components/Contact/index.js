import React from 'react'
import { useEffect, useState , Helmet, useRef} from 'react'
import PropTypes from 'prop-types'
import { buildQueries } from '@testing-library/react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'



const level1 = new Map();
const level2 = new Map();
const level3 = new Map();
const level4 = new Map();
const level5 = new Map();
const level6 = new Map();
const level7 = new Map();
const level8 = new Map();


level1.set('COC',"https://upload.wikimedia.org/wikipedia/commons/b/b9/Dimethylether.png");
level1.set('CCO'," https://upload.wikimedia.org/wikipedia/commons/8/82/Ethanol-2D-skeletal.svg");

level2.set('CCCO',"https://labmal.com/wp-content/uploads/2019/03/1-Propanol-for-liquid-chromatography-LiChrosolv-2.png");
level2.set("CC(C)O","http://structuresearch.merck-chemicals.com/cgi-bin/getStructureImage.pl?owner=MDA&unit=CHEM&product=109634");
level2.set("CCOC",'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ethyl_methyl_ether.svg/1280px-Ethyl_methyl_ether.svg.png');

level3.set("CCCCCl",'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/1-Chlorobutane.svg/400px-1-Chlorobutane.svg.png');
level3.set("CCC(C)Cl",'https://www.merckmillipore.com/waroot/xl/820281_Chlorobutane[820281_Chlorobutane-ALL].jpg');
level3.set("CC(C)CCl",'https://www.sigmaaldrich.com/deepweb/content/dam/sigma-aldrich/structure8/141/mfcd00000954.eps/_jcr_content/renditions/mfcd00000954-medium.png');
level3.set("CC(C)(C)Cl",'https://pim-resources.coleparmer.com/item/l/acros-organics-ac109500025-2-chloro-2-methylpropane-99-2-5l-8809958.jpg');


level4.set("CCCCO",'https://file.selleckchem.com/downloads/struct/butanol-chemical-structure-s6206.gif');
level4.set("CCC(C)O",'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Butan-2-ol.svg/1200px-Butan-2-ol.svg.png');
level4.set("CC(C)CO",'https://upload.wikimedia.org/wikipedia/commons/b/b4/Isobutanol-2D-skeletal.png');
level4.set("CC(C)(C)O",'https://en-academic.com/pictures/enwiki/84/Tert-butanol-2D-skeletal.png');
level4.set("CCCOC",'https://upload.wikimedia.org/wikipedia/commons/a/af/Methoxypropane.png');
level4.set("CCOCC",'https://s3.amazonaws.com/static.wd7.us/2/26/Diethyl-ether-2D-skeletal.png');
level4.set("COC(C)C",'https://www.anaxlab.com/sites/default/files/2021-05/2-Methoxy%20Propane.jpg');







level5.set("C=CCC",'https://upload.wikimedia.org/wikipedia/commons/9/9c/But-1-ene-2D-skeletal.png')
level5.set("C=C(C)C",'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Isobutylene-2D-skeletal.png/240px-Isobutylene-2D-skeletal.png')
level5.set("C/C=C/C",'http://www.stenutz.eu/chem/mol2svg.php?id=4636&w=6&h=6')




level6.set("CC/C=C/Cl",'https://www.chemeo.com/cid/24-387-6/Trans-1-chloro-1-butene.png')
level6.set("C=C(Cl)CC",'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=40555&t=l')
level6.set("C=CC(C)Cl",'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11242&t=l')
level6.set("C=CCCCl",'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=13565&t=l')
level6.set("C/C(C)=C/Cl",'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=10555&t=l')
level6.set("C=C(C)CCl",'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11241&t=l')





level7.set("C=CCCC",'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/1-pentene.svg/1599px-1-pentene.svg.png?20080530152058')
level7.set("C/C=C/CC",'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Trans-2-pentene.svg/1200px-Trans-2-pentene.svg.png')
level7.set("C=C(C)CC",'data:image/png;base64,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')
level7.set("C=CC(C)C",'https://upload.wikimedia.org/wikipedia/commons/8/88/3-Methyl-1-butene.png')
level7.set("C/C=C(C)/C",'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAAUFBSJiYkjIyPr6+v8/Pzx8fH39/f19fXo6Oja2trd3d1QUFDu7u6/v7+lpaXIyMhra2vS0tKsrKxFRUWenp4pKSl2dnZZWVmvr689PT1kZGTFxcU3NzccHBwNDQ2BgYGUlJRTU1NmZmYuLi5xcXG7u7tJSUl+fn6Xl5c5py1pAAADw0lEQVR4nO3a25aaSBSAYQqQk4giKgKiaDy//wNml52sTCadtAqmqZn/u+Kma9XWfcLVlgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHrI++wLvFi6nX32FV4qds5qHnz2LX6WlKfO0ipcFEq5pb9LuzqxC+O8cobdHFXuXaUuw2SizruomyO7kFaq+TJJ2h+ULddKFenAshZK2atZbxpOOHRslU/rlscMnJFSh1Okn+b5Up6XbY/sjl9PlaqcuM0Zi6JR6hp7lrcobLUpUynIebsju+RFs0rZLVJ1vM+Vmg59yzqt5Ok89q14lqumWIRd3rON4Jaq++fyKl5WkgO1JGg2lVI8zCJdgkHmSF+dnrq9aAt+vXouVT2ZgEpNJL7oMpcnJ/4+Dv10r9T6knV70edJqq6VPZr4j/3ZTMpOXSSqwBlJKS6H//z76CQxn3eDTi/agqRqo/LVI9M63R+ko2SJjnQjsyL7Vyl7sUyOzarszeTw01uq3jutB7oAGz0hxkWuS/GdLyvI9OQ49mbJ8QYTSdXz7K7N8jrSZSdtJdYNxi6j97+pZDx65GN7uSDeKumqH3/mp0JWtNUwtPxbg9lFv/1UpMJdXeG9WcjDWqb1+oPPfKgLME+l7HZnaTDH6I+DTypcJsdq3Ok9W/CSyUHZ8z+kqu9U3yZEOZIGMxp+2IBDXeGHS0crfntBfNGf+e8m2eQsE2IpK1qmG0xe37MLeYPyoJrq2sGK342w1ov09r1JluoCrLLQio7SYFSZ3DkKvHgnk6PozZLj+QtXNfNfJll8PNzCkl1GZ+ru3vi0IJMVPz/2ZskJYplkbvHTfd7C0l1oMrd1g3mwP4an6uMu9hcFtayc+fZH6ZQjCevLMLDGusGc48ffHLxosdFdrC9LjhfKfZrqW6pmKynAXL8Z6Vckt35wg/1+pu5im4d2w5fy4qNuD9Llk4suwEVihbeHmf/01xDoLpZf+vN6XEvpuE4ob0JqKgV0rWTCO480mF/5+vV43Z/X4/BqS6qOmir1rPKtwbQtIy+SJcc+92fJiaTLN3ksE/62wXSxYHqZLDn2skepulbuTP8c6qZdLdDBaa2K3sxGsVKubjBd1k6y6E2aao69bpyOt8q+TMU3jp33ZhV5Dcd2e/OL0msQofmI0HxEaD4iNB8Rmo8IzUeE5iNC8xGh+YjQfERoPiI0HxGajwjNR4TmI0LzEaH5iNB8RGg+IjQfEZrPUZv/eITlZfvcv64DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wdfAYuiMEiP7mmHAAAAAElFTkSuQmCC')


level8.set("CCCCC=O",'data:image/png;base64,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')
level8.set("CCCC(C)=O",'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/2-Pentanone.svg/1200px-2-Pentanone.svg.png')
level8.set("CCC(=O)CC",'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/3-Pentanone_structure.svg/800px-3-Pentanone_structure.svg.png')
level8.set("CCC(C)C=O",'https://wtt-pro.nist.gov/wtt-pro/image.png?cmp=butanal._2-methyl-')
level8.set("CC(=O)C(C)C",'https://pim-resources.coleparmer.com/item/l/acros-organics-ac218772500-3-methyl-2-butanone-98-250ml-8823391.jpg')
level8.set("CC(C)CC=O",'data:image/png;base64,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')
level8.set("CC(C)(C)C=O",'http://www.stenutz.eu/chem/mol2svg.php?id=2473&w=6&h=6')




function findsrc(src) {


	var confetti = {
		maxCount: 150,		//set max confetti count
		speed: 2,			//set the particle animation speed
		frameInterval: 15,	//the confetti animation frame interval in milliseconds
		alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
		gradient: false,	//whether to use gradients for the confetti particles
		start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
		stop: null,			//call to stop adding confetti
		toggle: null,		//call to start or stop the confetti animation depending on whether it's already running
		pause: null,		//call to freeze confetti animation
		resume: null,		//call to unfreeze confetti animation
		togglePause: null,	//call to toggle whether the confetti animation is paused
		remove: null,		//call to stop the confetti animation and remove all confetti immediately
		isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused
		isRunning: null		//call and returns true or false depending on whether the animation is running
	};
	
	(function() {
		confetti.start = startConfetti;
		confetti.stop = stopConfetti;
		confetti.toggle = toggleConfetti;
		confetti.pause = pauseConfetti;
		confetti.resume = resumeConfetti;
		confetti.togglePause = toggleConfettiPause;
		confetti.isPaused = isConfettiPaused;
		confetti.remove = removeConfetti;
		confetti.isRunning = isConfettiRunning;
		var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
		var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];
		var streamingConfetti = false;
		var animationTimer = null;
		var pause = false;
		var lastFrameTime = Date.now();
		var particles = [];
		var waveAngle = 0;
		var context = null;
	
		function resetParticle(particle, width, height) {
			particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
			particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
			particle.x = Math.random() * width;
			particle.y = Math.random() * height - height;
			particle.diameter = Math.random() * 10 + 5;
			particle.tilt = Math.random() * 10 - 10;
			particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
			particle.tiltAngle = Math.random() * Math.PI;
			return particle;
		}
	
		function toggleConfettiPause() {
			if (pause)
				resumeConfetti();
			else
				pauseConfetti();
		}
	
		function isConfettiPaused() {
			return pause;
		}
	
		function pauseConfetti() {
			pause = true;
		}
	
		function resumeConfetti() {
			pause = false;
			runAnimation();
		}
	
		function runAnimation() {
			if (pause)
				return;
			else if (particles.length === 0) {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				animationTimer = null;
			} else {
				var now = Date.now();
				var delta = now - lastFrameTime;
				if (!supportsAnimationFrame || delta > confetti.frameInterval) {
					context.clearRect(0, 0, window.innerWidth, window.innerHeight);
					updateParticles();
					drawParticles(context);
					lastFrameTime = now - (delta % confetti.frameInterval);
				}
				animationTimer = requestAnimationFrame(runAnimation);
			}
		}
	
		function startConfetti(timeout, min, max) {
			var width = window.innerWidth;
			var height = window.innerHeight;
			window.requestAnimationFrame = (function() {
				return window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.oRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					function (callback) {
						return window.setTimeout(callback, confetti.frameInterval);
					};
			})();
			var canvas = document.getElementById("confetti-canvas");
			if (canvas === null) {
				canvas = document.createElement("canvas");
				canvas.setAttribute("id", "confetti-canvas");
				canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
				document.body.prepend(canvas);
				canvas.width = width;
				canvas.height = height;
				window.addEventListener("resize", function() {
					canvas.width = window.innerWidth;
					canvas.height = window.innerHeight;
				}, true);
				context = canvas.getContext("2d");
			} else if (context === null)
				context = canvas.getContext("2d");
			var count = confetti.maxCount;
			if (min) {
				if (max) {
					if (min == max)
						count = particles.length + max;
					else {
						if (min > max) {
							var temp = min;
							min = max;
							max = temp;
						}
						count = particles.length + ((Math.random() * (max - min) + min) | 0);
					}
				} else
					count = particles.length + min;
			} else if (max)
				count = particles.length + max;
			while (particles.length < count)
				particles.push(resetParticle({}, width, height));
			streamingConfetti = true;
			pause = false;
			runAnimation();
			if (timeout) {
				window.setTimeout(stopConfetti, timeout);
			}
		}
	
		function stopConfetti() {
			streamingConfetti = false;
		}
	
		function removeConfetti() {
			stop();
			pause = false;
			particles = [];
		}
	
		function toggleConfetti() {
			if (streamingConfetti)
				stopConfetti();
			else
				startConfetti();
		}
		
		function isConfettiRunning() {
			return streamingConfetti;
		}
	
		function drawParticles(context) {
			var particle;
			var x, y, x2, y2;
			for (var i = 0; i < particles.length; i++) {
				particle = particles[i];
				context.beginPath();
				context.lineWidth = particle.diameter;
				x2 = particle.x + particle.tilt;
				x = x2 + particle.diameter / 2;
				y2 = particle.y + particle.tilt + particle.diameter / 2;
				if (confetti.gradient) {
					var gradient = context.createLinearGradient(x, particle.y, x2, y2);
					gradient.addColorStop("0", particle.color);
					gradient.addColorStop("1.0", particle.color2);
					context.strokeStyle = gradient;
				} else
					context.strokeStyle = particle.color;
				context.moveTo(x, particle.y);
				context.lineTo(x2, y2);
				context.stroke();
			}
		}
	
		function updateParticles() {
			var width = window.innerWidth;
			var height = window.innerHeight;
			var particle;
			waveAngle += 0.01;
			for (var i = 0; i < particles.length; i++) {
				particle = particles[i];
				if (!streamingConfetti && particle.y < -15)
					particle.y = height + 100;
				else {
					particle.tiltAngle += particle.tiltAngleIncrement;
					particle.x += Math.sin(waveAngle) - 0.5;
					particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
					particle.tilt = Math.sin(particle.tiltAngle) * 15;
				}
				if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
					if (streamingConfetti && particles.length <= confetti.maxCount)
						resetParticle(particle, width, height);
					else {
						particles.splice(i, 1);
						i--;
					}
				}
			}
		}
	})();



	const start = () => {
		setTimeout(function() {
			confetti.start()
		}, 100); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
	};

	//  Stop

	const stop = () => {
		setTimeout(function() {
			confetti.stop()
		}, 3000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
	};

	start();
	stop();


}

function findimgsrc(src) {
	show_image(src,150,120);
}

function show_image(src, width, height) {
  var img = document.createElement('img');
  img.width=width;
  img.height=height;
  img.src = src;
  document.getElementById('imageplace').appendChild(img);
  }



function cleardiv(){
  document.getElementById("imageplace").innerHTML = ""

}












const myHTML = `<form>
<input type="checkbox" onChange='jsmeApplet.options(this.checked ? "canonize" : "nocanonize"); show_smiles({src: jsmeApplet})'/> 
</form>`;



let level= 1




class  Contact extends React.Component{

    constructor(props){
        super(props)
        // Set initial state
        this.state = {
          Q : "Draw the Isomers of C2H6O",
          num : 0,
          check : "It will appear here if your structure is correct ",
          pass : "It will appear here if you have passed a level",
          level : 1,
          Win :   ""
          
       
        }
        // Binding this keyword
        this.handleClick = this.handleClick.bind(this)
      }


      





      
  


    handleClick(){


 
        let bool=false
        
        const guess = String(document.getElementById("smiles_container").innerHTML)

        if (level==1){
          var array = new Map(level1)
          bool=array.has(guess)
    
        }

        if (level==2){
          var array = new Map(level2)
          bool=array.has(guess)

        }

        if (level==3){
          var array = new Map(level3)
          bool=array.has(guess)

        }

        if (level==4){
          var array = new Map(level4)
          bool=array.has(guess)

        }

        if (level==5){
          var array = new Map(level5)
          bool=array.has(guess)

        }

        if (level==6){
          var array = new Map(level6)
          bool=array.has(guess)

        }

        if (level==7){
          var array = new Map(level7)
          bool=array.has(guess)

        }

        if (level==8){
          var array = new Map(level8)
          bool=array.has(guess)

        }








       


        // Changing state
        if (bool){
          this.setState({num : this.state.num + 1} )
          this.setState({check : "Correct Structure "})         
   

          if(level==1){

            let src=level1.get(guess)
		    findimgsrc(src,10,10)
         
            level1.delete(guess)
         
              if (level1.size==0)
              
              
                    {
                     

                      
                      
                      findsrc()

                      setTimeout( cleardiv, 5000); 
                     
                    
                      this.setState({Q : "Draw the Isomers of C3H8O "})
                      this.setState({level : this.state.level + 1} )
                      this.setState({num : 0} )
                      this.setState({pass : "Congratulations, You have successfully passed Level 1 "}) 
                      level++; 
                    

                  }
           }



            if(level==2){

             let src=level2.get(guess)
             findimgsrc(src,10,10)
           
        
            	level2.delete(guess)
            if (level2.size==0)

                    {
                 
                      findsrc()


                      setTimeout( cleardiv, 5000); 
                      this.setState({Q : "Draw the Isomers of C4H9Cl "})
                      this.setState({level : this.state.level + 1} )
                      this.setState({num : 0} )
                      this.setState({pass : "Congratulations, You have successfully passed Level 2 "})
                      level++; 

                  }
          }

          if(level==3){

            let src=level3.get(guess)
		    findimgsrc(src,10,10)

            level3.delete(guess)
          if (level3.size==0)
                  {
                    findsrc()
                    setTimeout( cleardiv, 5000); 
                    this.setState({Q : "Draw the Isomers of C4H10O "})
                    this.setState({level : this.state.level + 1} )
                    this.setState({num : 0} )
                    this.setState({pass : "Congratulations, You have successfully passed Level 3 "})
                    level++; 

                }
        }

        if(level==4){
		let src=level4.get(guess)
		findimgsrc(src,10,10)
          level4.delete(guess)
        if (level4.size==0)
                {
                  findsrc()
				  setTimeout( cleardiv, 5000); 
                  this.setState({Q : "Draw the Isomers of C4H8 "})
                  this.setState({level : this.state.level + 1} )
                  this.setState({num : 0} )
                  this.setState({pass : "Congratulations, You have successfully passed Level 4 "})
                  level++; 

              }
      }

      if(level==5){
		let src=level5.get(guess)
		findimgsrc(src,10,10)
        level5.delete(guess)
      if (level5.size==0)
              {
                findsrc()
				setTimeout( cleardiv, 5000); 
                this.setState({Q : "Draw the Isomers of C4H7Cl "})
                this.setState({level : this.state.level + 1} )
                this.setState({num : 0} )
                this.setState({pass : "Congratulations, You have successfully passed Level 5 "})
                level++; 

            }
    }


    if(level==6){
		let src=level6.get(guess)
		findimgsrc(src,10,10)
      level6.delete(guess)
    if (level6.size==0)
            {
              findsrc()
			  setTimeout( cleardiv, 5000); 
              this.setState({Q : "Draw the Isomers of C5H10"})
              this.setState({level : this.state.level + 1} )
              this.setState({num : 0} )
              this.setState({pass : "Congratulations, You have successfully passed Level 6 "})
              level++; 

          }
  }



  if(level==7){
	let src=level7.get(guess)
	findimgsrc(src,10,10)
    level7.delete(guess)
  if (level7.size==0)
          {
            findsrc()
			setTimeout( cleardiv, 5000); 
            this.setState({Q : "Draw the Isomers of C5H10O containing a carbonyl group"})
            this.setState({level : this.state.level + 1} )
            this.setState({num : 0} )
            this.setState({pass : "Congratulations, You have successfully passed Level 7"})
            level++; 

        }
}

if(level==8){
	let src=level8.get(guess)
	findimgsrc(src,10,10)

  level8.delete(guess)
if (level8.size==0)
        {
		  findsrc()
		  setTimeout( cleardiv, 5000); 
          this.setState({Win : " Congratulations, You have won the Game !"})
          this.setState({Q : " "})
          this.setState({num : 0} )
          this.setState({pass : "Congratulations, You have successfully passed Level 8 "})


          
        

       

      }
}





      

        










        }
        else {
            this.setState({check : "Incorrect Structure, Please Try Again"})
        }
      }
      
	render (){
		return(
      <>
      <div className="container contact-page">
            <div className="text-zone">
    
            <h1>{this.state.Win}</h1>
             <p>Level : {this.state.level}</p>
             <div id="jsme_container">
                <p  class="question"> Question :  <span  class="score"> {this.state.Q}</span></p>  
                <p class="message">Please Check if you have drawn correctly...</p>
                <button class="btn check" type="button"  onClick={this.handleClick}>Check Structure</button>
                <p class="correcttext"> Number of Correct Structures Drawn: <span  class="score"> {this.state.num}</span></p>
                <p class="checkclear"> {this.state.check}</p>
                <p class="passclear"> {this.state.pass}</p>
    

            </div>
              <div dangerouslySetInnerHTML={{ __html: myHTML }} />
              <p><span id="smiles_container"></span></p>
         </div>

         <div>




         </div>

      
      

         <div id='CompletedStructures' > <h2>Drawn Molecules</h2></div>
         <div  id="imageplace"  >
        
         </div>

         
         
    </div>
         
    
    


    </>
    
    


			

		)
	}
}

export default Contact;