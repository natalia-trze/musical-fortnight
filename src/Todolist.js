/*export default function Todolist (props){

return(
    <h1>To do List.... here...{props.appTheme1}</h1>
)
}*/

import Addtext from './Addtext'
export default function Todolist(props) {


    let taskList = []
    let toDoInput = ""


    return (

        <div>
            <Addtext />
        </div>

    )

    /*<div class="add-buttons">
        <form>
          <button id="addNewTask" class="storage-button">Add task</button>
          <input type="text" id="user-input" class="storage" placeholder="add a new to-do" />
          <div id="popup"></div>
        </form>
      </div>*/


    
  }



  /*return props.Theme.map((item, i) => (
      <div key={item.id} id={item.id} className={"todo-list-item"}>
        <input type="checkbox" />
        {item.text + " "}
        &#128465;
      </div>
    ));*/
