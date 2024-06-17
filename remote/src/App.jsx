import React from "react";
import Remote2App from "remote2/App";

function App() {
  return (
    <div>
      Remote
      <React.Suspense fallback={<h1>Remote2 Loading...</h1>}>
        <Remote2App />
      </React.Suspense>
    </div>
  );
}

export default App;
