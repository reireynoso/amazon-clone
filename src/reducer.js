export const initialState = {
    basket: [],
    user: null
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "EMPTY_BASKET": 
            return {
                ...state,
                basket: []
            }
        case "REMOVE_FROM_BASKET":
            // this approach removes the first instance in the event we have multiple items with the same ID.
            const index = state.basket.findIndex((item) => item.id === action.id)
            let newBasket = [...state.basket]

            if(index >= 0){
                newBasket.splice(index, 1);

            }else{
                console.warn(`Cannot remove product (id: ${action.id}) as its not in the basket`)
            }
            // const remove = state.basket.filter(item => item.id !== action.id)
            return {
                ...state,
                basket: newBasket
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default: 
            return state
    }
}

export default reducer