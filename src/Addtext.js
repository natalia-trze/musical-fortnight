export default function Addtext () {

    const handleClick = () => alert('Please Add Text');
    const onChange = (event) => {
        console.log(event.target.value);
    }

    return <div>
        <button onClick={handleClick}>Sign in</button>
        <input type="text" onChange={onChange} defaultValue="text" />
        </div>
};