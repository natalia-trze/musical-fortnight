export default function SignInButton () {

    const handleClick = () => alert('Please Sign In');
    const onChange = (event) => {
        console.log(event.target.value);
    }

    return <div>
        <button onClick={handleClick}>Sign in</button>
        <input type="text" onChange={onChange} defaultValue="text" />
        </div>
};