import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faSuitcase } from '@fortawesome/free-solid-svg-icons' 


import depauw from '../../assets/images/depauw.jpeg'

const Sidebar = () => 
	(
		<div className='nav-bar'>
			<Link className='logo' to='/'>
      <img id="new" src={depauw} alt="JavaScript Developer Name, Web Developer Name" />
      
        

		
				{/*<img  className= "sub-logo" src={LogoSubtitle} alt="slobodan" />*/}
			</Link>
			<nav>
				<NavLink exact="true" activeclassname="active" to="/">
					<FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
				</NavLink>
				<NavLink exact="true" activeclassname="active" className="about-link" to="/about">
					<FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
				</NavLink>
   

				<NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
					<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
				</NavLink>

				<NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
						<FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
				</NavLink>

				
    
        
			</nav>
     
      





		</div>



	)



export default Sidebar