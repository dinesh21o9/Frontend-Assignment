import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormRenderer from './components/FormRenderer';
import './App.css'; // Import the CSS file

const App = () => {
  const [uiSchema, setUiSchema] = useState(null);
  const [order, setOrder] = useState({}); 
  const [data, setData] = useState();

  const handleSchemaChange = (newSchema) => {
    setUiSchema(newSchema);
  };

  const handleGenerate = () =>{
    try{
      const val = JSON.parse(uiSchema);
      setOrder({});
      setData(val);
    }
    catch(e){
      alert("Invalid JSON format");
    }
    
  }

  return (
    <div className="app-container">
      <div className="left-panel">
        <JSONEditor onSchemaChange={handleSchemaChange} />
        <button className='generate' onClick={()=>handleGenerate()}>Create</button>
      </div>
      <div className="right-panel">
        <div className='right-form-container'>
          <FormRenderer setOrder={setOrder} order={order} data={data}/>
        </div>
      </div>
    </div>
  );
};

export default App;
