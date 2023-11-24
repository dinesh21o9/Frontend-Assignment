import React from "react";
import ReactJson from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

const JSONEditor = ({ onSchemaChange }) => {
  const handleJsonChange = (value) => {
    onSchemaChange(value);
  };

  return (
    <div className="json-editor">
      <ReactJson
        src={{}}
        onChange={handleJsonChange}
        locale={locale}
        theme="rjv-default"
        height="600px"
        width="100%"
      />
    </div>
  );
};

export default JSONEditor;
