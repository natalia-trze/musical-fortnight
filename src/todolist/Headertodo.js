import Button from 'react-bootstrap/Button';

const Headertodo = ({title, onAdd, showAdd}) => {
  
    return (
        <div className="header">
          <h1>{title}</h1>
        <Button 
            onClick={onAdd} 
            variant={showAdd ? 'danger' : 'dark'} 
            >{showAdd ? 'Close' : 'Add'}</Button>
        </div>
    )
}

export default Headertodo
