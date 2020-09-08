export const initialFeatures = {
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ]
}

export const reducer = (state = initialFeatures, action) => {
    console.log(state)
    console.log(action)
    switch(action.type){
        case 'ADD_FEATURE':
            return{
                ...state,
               additionalFeatures: [...state.additionalFeatures, action.payload]
                    
            }
        default:
            return state;
    }
}