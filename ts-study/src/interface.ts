interface Action {
    hint: () => void,
    cost: () => void,
    type: string
}

module.exports = function Monster(config: Action) {
    this.hint = config.hint
    this.cost = config.cost
    this.type = config.type
}
