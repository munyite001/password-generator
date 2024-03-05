export default function Generator({ charLength, setCharLength }) {

    const handleChange = (event) => {
        setCharLength(parseInt(event.target.value))
    }
    
    const trackGradient = `linear-gradient(to right, #a0eaa6 0%, #a0eaa6 ${charLength * 5}%, #131218 ${charLength * 5}%, #131218 100%)`

    return (
        
        <div className="generator">
            <div className="char-length">
                <p>Character Length</p>
                <p>{charLength}</p>
            </div>
            <input 
                type="range" 
                name="character-length" 
                id="character-length" 
                min={0} max={20} 
                value={charLength}
                onChange={handleChange}
                style={{ background: trackGradient }}
                />
            <div className="check-boxes">
                <div className="input-box">
                    <label htmlFor="upperCase">Include Uppercase Letters</label>
                    <input type="checkbox" name="upperCase" id="upperCase" />
                </div>
                <div className="input-box">
                    <label htmlFor="lowerCase">Include Lowercase Letters</label>
                    <input type="checkbox" name="lowerCase" id="lowerCase" />
                </div>
                <div className="input-box">
                    <label htmlFor="numbers">Include Numbers</label>
                    <input type="checkbox" name="numbers" id="numbers" />
                </div>
                <div className="input-box">
                    <label htmlFor="symbols">Include symbols</label>
                    <input type="checkbox" name="symbols" id="symbols" />
                </div>
            </div>
            <div className="strength">
                <p>STRENGTH</p>
                <div className="password-strength">
                    <span>MEDIUM</span>
                    <div className="strength-bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
            <button>GENERATE ➜</button>
        </div>
    )
}