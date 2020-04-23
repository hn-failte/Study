let modules = {};

const config = configModules => {
  Object.keys(configModules).forEach(item => {
    modules[item] = { path: configModules[item] };
  });
};

const require = moduleName => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = modules[moduleName].path;
    script.onload = () => {
      resolve(modules[moduleName].callback());
    };
    script.onerror = () => {
      reject(modules[moduleName].path);
    };
    document.documentElement.appendChild(script);
  }).then(
    res => res,
    rej => {
      return new Error("can not load " + rej);
    }
  );
};

const define = (moduleName, callback) => {
  modules[moduleName].callback = callback;
};
