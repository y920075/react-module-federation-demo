function useLoadDynamicScript() {
  const load = (url) => {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = url;
      s.onload = () => {
        console.log("Script loaded.");
        resolve();
      };
      s.onerror = () => {
        console.log("Script load error.");
        reject();
      };
      document.head.appendChild(s);
    });
  };

  return load;
}

export default useLoadDynamicScript;
