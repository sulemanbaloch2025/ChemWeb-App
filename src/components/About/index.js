import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import {  useEffect, useState } from 'react'
import FiestaImg from "./ss.png"
import Copyright from '../../assets/images/copyrightlogo.png'
import {
	faAngular,
	faCss3,
	faGitAlt,
	faHtml5,
	faJsSquare,
	faReact,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
	const [letterClass, setLetterClass] = useState('text-animate')

	useEffect(() => {
		setTimeout(() => {
		   return setLetterClass('text-animate-hover')
	   }, 4000)
	 }, [])
   

	return (
		<div >
		<div className="container about-page"  >
			<div className="text-zone">
				<h1>
				<AnimatedLetters
				letterClass={letterClass}
				strArray={['T', 'u', 't', 'o', 'r', 'i ', 'a', 'l']}
				idx={15} />
				</h1>
				<p id="NEET">
				This page provides instructions on drawing chemical structures in JSME.  
		
				Drawing structures in JSME is a straightforward two-step process:
				Choose the bond drawing and ring drawing tools from the menu and click in the drawing window to draw the bonds; C-C bonds will be drawn by default.
				Choose the element and functional group tools from the menu and click on the ends of bonds in the drawing window to convert C atoms into other elements, or into some common functional groups.
				The procedure is described in detail below.
				The bond & ring drawing tools are outlined in blue in the figure on the right.
				<hr/>
				To draw a bond click on the single, double or triple bond tool and then click anywhere in the drawing area.   To add another bond click on one end of an existing bond.
				Bonds will be drawn at conventional angles by default, but if you click on an atom and drag, you can draw the new bond at any angle.
				Stereochemistry can be shown by using the "wedged" tool. Click again on a "wedged" bond to convert it into a "dashed" bond.
				Convert any type of bond (single, double, wedged, etc.) into any other by selecting the desired tool and clicking on an existing bond.
				<hr/>
				The chain drawing tool easily creates a chain by clicking in the drawing area, or on an existing atom, and dragging the mouse to draw a chain of the desired length.
				<hr/>

				Carbon-carbon bonds are created by default. To add other elements, click on the relevant tool and then click on one or more existing atoms. the keyboard shortcuts listed on the right provide an easier way to add elements other than carbon. A number of common functional groups can be added using the functional groups tool.   
		
				</p>
			</div>

		

			
		
		
			
			<img src={FiestaImg}  class="resize"  alt="A dog smiling in a party hat"/>
		
		</div>

	
		<div >





</div>




		<Loader type="pacman" />
		</div>
		

	


    




		
	)


}

export default About