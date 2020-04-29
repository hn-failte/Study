config({ Ku: "./Ku.js" });

!(async (root, defaultState) => {
  const Ku = await require("Ku")
  const app = new Ku(root);
  const obj = new Proxy(defaultState, {
    get: function(target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function(target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      app.render(
        document
          .createElement("button")
          .outerHTML.replace("<button>", '<button class="button0423">' + value)
      );
      return Reflect.set(target, propKey, value, receiver);
    }
  });

  const setName = () => (obj.name = "failte");
  app.render(
    document
      .createElement("button")
      .outerHTML.replace("<button>", '<button class="button0423">' + obj.name)
  );
  document.querySelector(".button0423").onclick = setName;
})(document.getElementById("root"), { name: "name" });
