import React, { useState } from "react";
import { AntlrEditor as VTLEditor } from "@eurostat/vtl-editor";
import * as VTLTools from "vtl-2-0-antlr-tools-ts";

function App() {
  const [script, setScript] = useState("");
  const [errors, setErrors] = useState([]);
  const customTools = {
    ...VTLTools,
    initialRule: "expr",
  };
  return (
    <>
      <h2>Eurostat - npm : @eurostat/vtl-editor</h2>
      <VTLEditor
        script={script}
        setScript={setScript}
        onListErrors={setErrors}
        variables={{}}
        variableURLs={[]}
        sdmxResult={{}}
        sdmxResultURL={""}
        readOnly={false}
        tools={customTools}
      />
      {errors.length > 0 && (
        <div>{`Errors: ${errors
          .map(({ message }) => message)
          .join(" - ")}`}</div>
      )}
    </>
  );
}

export default App;
