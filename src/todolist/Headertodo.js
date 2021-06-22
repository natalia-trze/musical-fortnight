import Button from "./Button"

const Headertodo = ({title, onAdd, showAdd}) => {

    return (
        <div className="header">
          <h1>{title}</h1>
        <Button 
            onClick={onAdd} 
            color={showAdd ? '#BA6D9E' : '#958A93'} 
            text={showAdd ? 'Close' : 'Add'}
            />
        </div>
    )
}

export default Headertodo
