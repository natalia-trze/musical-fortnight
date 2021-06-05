/*export default function Todolist (props){

return(
    <h1>To do List.... here...{props.appTheme1}</h1>
)
}*/


export default function Todolist(props) {
    return props.Theme.map((item, i) => (
      <div key={item.id} id={item.id} className={"todo-list-item"}>
        <input type="checkbox" />
        {item.text + " "}
        &#128465;
      </div>
    ));
  }
  