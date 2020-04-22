define("Ku", () => {
  return class Ku {
    constructor(el) {
      this.el = el;
    }
    render(html) {
      this.el.innerHTML = html;
    }
  };
});
