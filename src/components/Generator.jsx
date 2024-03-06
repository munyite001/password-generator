export default function Generator(
    { charLength, 
    setCharLength, setPassword, useUpperCase, 
    setUseUpperCase, useLowerCase, setUseLowerCase, 
    useNumbers, setUseNumbers, useSpecial, setUseSpecial}) {

    const handleChange = (event) => {
        setCharLength(parseInt(event.target.value))
    }

    const handleUpperCase = (event) => {
        setUseUpperCase(event.target.checked)
    }
    const handleLowerCase = (event) => {
        setUseLowerCase(event.target.checked)
    }
    const handleNumbers = (event) => {
        setUseNumbers(event.target.checked)
    }
    const handleSymbols = (event) => {
        setUseSpecial(event.target.checked)
    }

    const generatePassword = () => {
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const lowerCase = "abcdefghijklmnopqrstuvwxyz"
        const numbers = "0123456789"
        const special = "!@#$%^&*()_+"

        if (charLength < 1) {
            alert("Password length must be at least 1 character")
        }

        let password = ""
        let charSet = ""

        if (useUpperCase) {
            charSet += upperCase
        }
        if (useLowerCase) {
            charSet += lowerCase
        }
        if (useNumbers) {
            charSet += numbers
        }
        if (useSpecial) {
            charSet += special
        }

        for (let i = 0; i < charLength; i++) {
            password += charSet.charAt(Math.floor(Math.random() * charSet.length))
        }

        setPassword(password)
    }

    const strengthNumber = [useLowerCase, useUpperCase, useNumbers, useSpecial].filter(val => val === true).length

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
                    <input type="checkbox" name="upperCase" id="upperCase" onChange={handleUpperCase}/>
                </div>
                <div className="input-box">
                    <label htmlFor="lowerCase">Include Lowercase Letters</label>
                    <input type="checkbox" name="lowerCase" id="lowerCase" onChange={handleLowerCase}/>
                </div>
                <div className="input-box">
                    <label htmlFor="numbers">Include Numbers</label>
                    <input type="checkbox" name="numbers" id="numbers" onChange={handleNumbers}/>
                </div>
                <div className="input-box">
                    <label htmlFor="symbols">Include symbols</label>
                    <input type="checkbox" name="symbols" id="symbols" onChange={handleSymbols}/>
                </div>
            </div>
            <div className="strength">
                <p>STRENGTH</p>
                <div className="password-strength">
                    <span>{strengthNumber == 0 ? "": strengthNumber <= 2 ? "WEAK" : strengthNumber == 3 ? "MEDIUM" : "STRONG"}</span>
                    <div className="strength-bars">
                        <div className="bar" style={{background: strengthNumber >= 1 ? "#f6cd69" : "transparent"}}></div>
                        <div className="bar" style={{background: strengthNumber >= 2 ? "#f6cd69" : "transparent"}}></div>
                        <div className="bar" style={{background: strengthNumber >= 3 ? "#f6cd69" : "transparent"}}></div>
                        <div className="bar" style={{background: strengthNumber >= 4 ? "#f6cd69" : "transparent"}}></div>
                    </div>
                </div>
            </div>
            <button onClick={generatePassword}>GENERATE ➜</button>
        </div>
    )
}