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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          load(
            e.target.entryUrl.value,
            e.target.scope.value,
            e.target.module.value
          );
        }}
      >
        <label htmlFor="entryUrl">Entry URL</label>
        <input
          type="text"
          name="entryUrl"
          defaultValue="http://localhost:3004/remoteEntry.js"
        />
        <label htmlFor="scope">Scope</label>
        <input
          type="text"
          name="scope"
          defaultValue="dynamicRemote"
          placeholder="dynamicRemote"
        />
        <label htmlFor="module">Module</label>
        <input type="text" name="module" defaultValue="./App" />
        <button type="submit">Load Dynamic Remote</button>
      </form>
      {!!Component && <Component />}
    </div>
  );
}

export default App;
