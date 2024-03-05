export default function Display({ passWord }) {
    return (
    <div className="display">
        <input type="text" placeholder="P4$5W0rD!" value={passWord}/>
        <i class='bx bx-copy'></i>
    </div>)
}