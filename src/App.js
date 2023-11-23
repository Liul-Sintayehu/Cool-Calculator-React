
import { useState } from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [total,setTotal] = useState('');
  const handleClick = (e) =>{
      setTotal(total.concat(e.target.name))
  }
  const clear = ()=>{
    setTotal("");
  }
  const handleDelete = ()=>{
    setTotal(total.slice(0,-1))
  }
  const equal =()=>{
    try {
      setTotal(eval(total).toString())
    } catch (error) {
      setTotal("ERROR")
    }
  }
  return (
    
    <div className="container">
        <div className="display">
          <input type="text" value={total}></input>
        </div>
        <div className="key">
          <button name='AC' onClick={clear} id="ac">AC</button>
          <button name='del' onClick={handleDelete} id="del">del</button>
          <button name='/' onClick={handleClick}>/</button>
          <button name='7' onClick={handleClick}>7</button>
          <button name='8' onClick={handleClick}>8</button>
          <button name='9' onClick={handleClick}>9</button>
          <button name='*' onClick={handleClick}>*</button>
          <button name='4' onClick={handleClick}>4</button>
          <button name='5' onClick={handleClick}>5</button>
          <button name='6' onClick={handleClick}>6</button>
          <button name='-' onClick={handleClick}>-</button>
          <button name='1' onClick={handleClick}>1</button>
          <button name='2' onClick={handleClick}>2</button>
          <button name='3' onClick={handleClick}>3</button>
          <button name='+' onClick={handleClick}>+</button>
          <button name='0' onClick={handleClick}>0</button>
          <button name='.' onClick={handleClick}>.</button>
          <button name='=' onClick={equal} id="equal">=</button>
        </div> 
    </div>
    
  );
}

export default App;
