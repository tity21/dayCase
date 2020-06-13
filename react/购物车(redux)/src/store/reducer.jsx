const prevState = {
    dataListAll: [],
    addShopCarList: [],
    searchList: [],
}

const Reducer = (state = prevState, action) => {
    const { type, payload } = action
    switch (type) {
        case "DATALISTALL":
            return { ...state, dataListAll: payload }
        case "ADDSHOPCAR":
            return { ...state, addShopCarList: payload }
        case "MINUS":
            return { ...state, addShopCarList: payload }
        case "PLUS":
            return { ...state, addShopCarList: payload }
        case "CHECKONE":
            return { ...state, addShopCarList: payload }
        case "CHECKALL":
            return { ...state, addShopCarList: payload }
        case "SEACHSTORE":
            return { ...state, searchList: payload }
        case "SORTSTORE":
            return { ...state, dataListAll: payload }
        default:
            return state
    }
}
export default Reducer