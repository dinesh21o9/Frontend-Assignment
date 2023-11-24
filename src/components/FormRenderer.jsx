import React from 'react';

const FormRenderer = ({ uiSchema }) => {
  
  const renderField = (field) => {
    switch (field.uiType) {
      case 'Input':
        return (
          <div key={field.jsonKey} className="form-field">
            <label htmlFor={field.jsonKey}>{field.label}</label>
            <input
              type="text"
              id={field.jsonKey}
              placeholder={field.placeholder}
              // Add more attributes as needed
            />
          </div>
        );
      case 'Group':
        return (
          <div key={field.jsonKey} className="form-group">
            <h3>{field.label}</h3>
            {field.subParameters.map((subField) => renderField(subField))}
          </div>
        );
      case 'Radio':
        return (
          <div key={field.jsonKey} className="form-field">
            <h3>{field.label}</h3>
            {field.validate.options.map((option) => (
              <label key={option.value}>
                <input
                  type="radio"
                  name={field.jsonKey}
                  value={option.value}
                  defaultChecked={option.value === field.validate.defaultValue}
                />
                {option.label}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const renderForm = () => {
    if (!uiSchema) {
      return <div>No UI Schema provided</div>;
    }

    return (
      <div className="form-renderer">
        <h2>Form Preview</h2>
        {uiSchema.map((field) => renderField(field))}
        <button type="submit">Submit</button>
      </div>
    );
  };

  return <form>{renderForm()}</form>;
};

export default FormRenderer;
