import React, { useState, useEffect } from 'react';

const FormRenderer = ({ uiSchema, data, setData, order }) => {
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

  const renderForm = (data) => {
    if (!data) {
      return <div>No UI Schema provided</div>;
    }

    return (
      <div className="form-renderer">
        {data.map((field) => renderField(field))}
      </div>
    );
  };

  return (
    <form>
      {renderForm(uiSchema)}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormRenderer;
