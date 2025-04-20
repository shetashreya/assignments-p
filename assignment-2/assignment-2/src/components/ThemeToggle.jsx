import React, {useState, useEffect} from "react";

function ThemeToggle() {
    const [isDarkmode, setIsDarkMode] = useState(false)

    useEffect(() => {
        if(isDarkmode){
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
        else{
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    }, [isDarkmode]);

    function handleToggle(){
        setIsDarkMode(!isDarkmode)
    }

    return(
        <div style={{margin: '20px'}}>
            <button 
            onClick={handleToggle}
            style={{
                padding: '10px, 20px',
                backgroundColor: isDarkmode? '#333': '#ddd',
                color: isDarkmode? 'white' : 'black',
                border: '1px solid #aaa',
                borderRadius: '5px',
                cursor: 'pointer'
            }
            }>
                Toggle Theme
            </button>

            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
                {isDarkmode ? '🌑 Dark Mode On' : '☀️ Light Mode On'}
            </p>
        </div>
    )

}

export default ThemeToggle;