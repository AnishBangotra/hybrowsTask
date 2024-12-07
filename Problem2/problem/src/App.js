import React, {useEffect, useState} from 'react';
import { getUser } from './api/api';
import './App.css';

function App() {
  const [data, setData] = useState([])

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const addUser = async () => {
    const number = randomIntFromInterval(1, 9)
    const result = await getUser(number);
    if (result && result.data && result.data.name) {
      let arr = [...data, result.data.name];
      setData(arr);
    } else {
      alert('Something went wrong')
    }
  }

  const removeUser = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  useEffect(() => {

  }, [data])
  
  return (
    <div className="App">
      <button style={{padding: '10px 20px', textAlign: 'center'}} onClick={addUser}>Add Record</button>
      <div style={{width: '60%', border: '2px solid black', marginTop: '20px'}}>
        <div style={{display: 'flex', textAlign: 'center',  height: '80px'}}>
          Name
        </div>    
        {data.map((name, index) => (
          <div
            key={`${name}-${index}`}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '10px',
              textAlign: 'center',
              justifyContent: 'space-between',
              height: '80px',
              border: '1px solid black',
            }}
          >
            {name}
            <button onClick={() => removeUser(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
