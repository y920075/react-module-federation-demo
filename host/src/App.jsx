import React from "react";
import RemoteApp from "remote/App";
import useLoadDynamicComponent from "./hooks/useLoadDynamicComponent";

function App() {
  const { load, Component } = useLoadDynamicComponent();

  return (
    <div>
      HOST
      <React.Suspense fallback={<h1>Remote Loading....</h1>}>
        <RemoteApp />
      </React.Suspense>
      <button
        onClick={() => {
          load(
            "http://localhost:3004/remoteEntry.js",
            "dynamicRemote",
            "./App"
          );
        }}
      >
        Show Dynamic RemoteApp
      </button>
      {!!Component && <Component />}
    </div>
  );
}

export default App;
