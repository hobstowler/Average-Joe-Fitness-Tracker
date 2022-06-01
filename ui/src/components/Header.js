import logo from '../images/logo.png'
import Navigation from './Navigation';

function Header() {

    return (
        <div className='headerest' id='splash1'>
            <div className='splash'></div>
            
            <div className='splashMid'>
                <div className='headerContainer'>
                    <div className="logo">
                        <img src={logo}></img>
                    </div>
                    <div className='header'>
                        <div className='menu'>
                        <h1>Average Joe's Fitness Tracker</h1>
                            <Navigation />
                            <p className='menuText'>A full stack MERN app you can dodge...</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='splashBottom'></div>
        </div>
    )
}

export default Header;