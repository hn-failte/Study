let modules = {};

const config = configModules => {
  Object.keys(configModules).forEach(item => {
      modules[item] = {path: configModules[item]}
  })
};

const require = moduleName => {
  return new Promise(resolve => {
    const script = document.createElement("script");
    script.src = modules[moduleName].path;
    script.onload = () => {
      resolve(modules[moduleName].callback())
    };
    document.documentElement.appendChild(script);
  });
};

const define = (moduleName, callback) => {
  modules[moduleName].callback = callback;
};
