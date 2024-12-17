// 基于 Generator 的迭代器
const ge = (function* () {
    const ge_params1 = yield "aaa";
    console.log('ge ge_params1', ge_params1);

    const ge_params2 = yield "bbb";
    console.log('ge ge_params2', ge_params2);
})();

function iterator(ge, val) {
    console.log('iterator val', val);

    if (!ge.next) return;

    const { value, done } = ge.next(val);
    console.log('ge ge_result', value);

    return done || iterator(ge, value);
}

iterator(ge);
