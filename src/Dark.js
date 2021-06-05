import Theme from "./Theme";

export default function Dark (props){

    return <p>Welcome to Dark... {props.Theme[0].id} mode</p>

}


/*    return props.Theme.map((item, i) => (
        <div key={item.id} id={item.id} className={"Dark"}>
          <h1>Welcome to Dark... {props.appTheme} mode</h1>
        </div>
      ));
    
}*/

