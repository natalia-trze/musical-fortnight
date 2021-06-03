 
export default function ButtonList({buttons, callback}) {
  
    return (
      <div className="button-list">
        {buttons.map((b) => (
         <button key={b} onClick={() => callback(b)}>
            {b}
          </button>
          
        ))}
      </div>
    );
  }
  