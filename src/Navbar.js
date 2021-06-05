export default function NavBar({navName, callback1}) {

    

    //let showBody = (item)=> alert('show info here...'+item);


    return (

        <div className="Navbar" >
            {
            navName.map((item)=><button key={item} onClick={() => callback1(item)}>{item}</button>
            )
            } 

        </div>
    )
};



