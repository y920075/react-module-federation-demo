import { lazy, useState } from "react";
import useLoadDynamicScript from "./useLoadDynamicScript";

function loadComponent(scope, module) {
  return async () => {
    // 初始化共享作用域
    await __webpack_init_sharing__("default");
    const container = window[scope]; // scope 是指遠端模組的名稱
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

function useLoadDynamicComponent() {
  const [component, setComponent] = useState(null);
  const loadScript = useLoadDynamicScript();
  const load = async (entryUrl, scope, module) => {
    try {
      await loadScript(entryUrl);
      setComponent(lazy(loadComponent(scope, module)));
    } catch (error) {
      console.error(error);
    }
  };

  return { load, Component: component };
}

export default useLoadDynamicComponent;
