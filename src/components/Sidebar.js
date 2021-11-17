import {useEffect} from 'react';
import ThemeButton from './ThemeButton';

const Sidebar = () => {
    let options = ['light-theme', 'dark-theme']


    function loadColorTheme(){
        let choice = localStorage.getItem('dark-theme')
        
        if(choice){
            document.documentElement.classList = options[choice]
        } else {
            document.documentElement.classList = (options[0])
            localStorage.setItem('dark-theme',0)
        }
    }
    
    useEffect(loadColorTheme)
    
    function toggleTheme(){
        let value = !!parseInt((localStorage.getItem('dark-theme')))
        document.documentElement.classList = options[Number(!value)]
        localStorage.setItem('dark-theme',Number(!value))
    }



    return (
        <div className="banner">
            <div className="top-box">

                {/* The svg was 28x26. So if I add a viewBox='0 0 28 26', I can change the entire svg height with 'width' and 'height' attributes. */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 26" width="40" height="40"><path fill="#FFF" fillRule="evenodd" d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"/></svg>

                {/* Inner box (lighter purple part) */}
                <div className="inner-top-box"></div>
            </div>

            <div className="bottom-box">
                <ThemeButton toggleTheme={toggleTheme} />

                <img className="avatar" src="./assets/image-avatar.jpg" alt="avatar" />
            </div>            
        </div>
    )
}

export default Sidebar
