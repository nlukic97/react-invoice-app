const ThemeButton = ({toggleTheme}) => {
    return (
        <div className="theme-button-container">
            <button onClick={toggleTheme}>
                <div className='toggle-theme-icon'></div>
            </button>
        </div> 
    )
}

export default ThemeButton
