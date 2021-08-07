import Button from 'react-bootstrap/Button';

const Headertodo = ({title, onAdd, showAdd}) => {
  
    return (
        <div className="header">
          <h1>{title}</h1>
        <Button 
            id="submit-btn"
            onClick={onAdd} 
            variant={showAdd ? 'danger' : 'dark'} 
            >{showAdd ? 'Close' : 'Add'}</Button>
        </div>
    )
}

export default Headertodo
