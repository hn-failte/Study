#define WASM_EXPORT __attribute__((visibility("default")))

WASM_EXPORT
int add(int a, int b) {
  return a + b;
}

WASM_EXPORT
int zhengchu(int a, int b) {
  return a / b;
}

WASM_EXPORT
double chu(double a, double b) {
  return a / b;
}
