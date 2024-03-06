export default function Display({ passWord, copy, setCopy }) {

    const handleCopyToClipBoard = () => {
        setCopy(true)
        navigator.clipboard.writeText(passWord)
        setTimeout(() => setCopy(false), 1000)
    }
    return (
    <div className="display">
        {copy && <div className="copy">Copied to clipboard</div>}
        <input type="text" placeholder="P4$5W0rD!" value={passWord}/>
        <i class='bx bx-copy' onClick={handleCopyToClipBoard}></i>
    </div>)
}