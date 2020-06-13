class Watch {
    constructor() {
        this.evens = {}
    }
    emit(type, val) {
        this.evens[type].forEach((item) => {
            item(val)
        });
    }
    on(type, watch) {
        this.evens[type] instanceof Array ? this.evens[type].push(watch) : this.evens[type] = [watch];
    }
}
const watch = new Watch()
export default watch