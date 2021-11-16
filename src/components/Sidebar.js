import {useEffect} from 'react';

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
        <div>
            <button onClick={toggleTheme}>Change theme</button>            
        </div>
    )
}

export default Sidebar
