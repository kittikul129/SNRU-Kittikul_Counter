function Counter(props) { 
    return (
      <div className="counter">
        <button onClick={()=>props.hdlUpdate(props.item.id,-1)}>-</button>
        <h3>{props.item.number}</h3>
        <button onClick={()=>props.hdlUpdate(props.item.id,1)}>+</button>
        <button onClick={()=>props.hdlUpdate(props.item.id, -props.item.number )}>C</button>
        <button onClick={()=>props.hdlDelCounter(props.item.id)}>X</button>
      </div>
    );
  }
  