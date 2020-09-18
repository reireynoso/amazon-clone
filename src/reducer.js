export const initialState = {
    basket: [],
    user: null
}

const reducer = (state, action) => {
    switch(action.type){
        case "SET_BASKET":
            return {
                ...state,
                basket: action.basket
            }
        case "ADD_TO_BASKET":
            // const existingItem = state.basket.findIndex(item => item.id === action.item.id)

            // if(existingItem > -1){
            //     return {
            //         ...state,
            //         basket: state.basket.map(item => {
            //             if(item.id === action.item.id){
            //                 if(item.quantity === 10){
            //                     return item
            //                 }

            //                 return {
            //                     ...item,
            //                     quantity: item.quantity + 1
            //                 }
            //             }
            //         })
            //     }
            // }

            return {
                ...state,
                // basket: [...state.basket, action.item]
                basket: action.basket
            }
        case "UPDATE_BASKET": 
            return {
                ...state,
                basket: state.basket.map(item => {
                    if(item.id === action.item.id){
                        return {
                            ...item,
                            quantity: action.item.quantity
                        }
                    }
                    return item
                })
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