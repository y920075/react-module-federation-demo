import React from "react";
import RemoteApp from "remote/App";
import useLoadDynamicComponent from "./hooks/useLoadDynamicComponent";
import "./styles/globals.css";

function App() {
  const { load, Component } = useLoadDynamicComponent();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto space-y-8">
        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <h1 className="mb-6 text-3xl font-bold">Module Federation Demo</h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Static Remote App</h2>
            <div className="rounded-md border p-4">
              <React.Suspense
                fallback={
                  <div className="flex items-center justify-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                }
              >
                <RemoteApp />
              </React.Suspense>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Load Dynamic Remote</h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                load(
                  e.target.entryUrl.value,
                  e.target.scope.value,
                  e.target.module.value
                );
              }}
            >
              <div className="space-y-2">
                <label htmlFor="entryUrl" className="text-sm font-medium">
                  Entry URL
                </label>
                <input
                  type="text"
                  name="entryUrl"
                  className="w-full rounded-md border px-3 py-2"
                  defaultValue="http://localhost:3004/remoteEntry.js"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="scope" className="text-sm font-medium">
                  Scope
                </label>
                <input
                  type="text"
                  name="scope"
                  className="w-full rounded-md border px-3 py-2"
                  defaultValue="dynamicRemote"
                  placeholder="dynamicRemote"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="module" className="text-sm font-medium">
                  Module
                </label>
                <input
                  type="text"
                  name="module"
                  className="w-full rounded-md border px-3 py-2"
                  defaultValue="./App"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Load Dynamic Remote
              </button>
            </form>
          </div>

          {!!Component && (
            <div className="mt-8 rounded-md border p-4">
              <Component />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
