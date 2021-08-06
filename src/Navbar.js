import Button from 'react-bootstrap/Button';

export default function NavBar({navName, callback1}) {

    return (
        <div className="Navbar" >
            {navName.map((item)=><Button variant="outline-dark" key={item} onClick={() => callback1(item)}>{item}</Button>)} 
        </div>
    )
};



