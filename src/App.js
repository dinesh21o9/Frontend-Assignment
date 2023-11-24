import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormRenderer from './components/FormRenderer';
import './App.css'; // Import the CSS file

const App = () => {
  const [uiSchema, setUiSchema] = useState(null);

  const handleSchemaChange = (newSchema) => {
    setUiSchema(newSchema);
  };

  return (
    <div className="app-container">
      <div className="left-panel">
        <JSONEditor onSchemaChange={handleSchemaChange} />
      </div>
      <div className="right-panel">
        <div className='right-form-container'>
          <FormRenderer uiSchema={uiSchema} />
        </div>
      </div>
    </div>
  );
};

export default App;
