
const initialState = {
    cars: [],
    filterBy: null,
    isDark: false
}

export default function CarReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CARS':
            return {
                ...state,
                cars: action.cars
            }
        case 'TOGGLE_DARK':
            console.log('toggle');
            return {
                ...state,
                isDark: !state.isDark
            }
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.filterBy
            }
        case 'ADD_CAR':
            return {
                ...state,
                cars: [...state.cars, action.car]
            }
        case 'UPDATE_CAR':
            return {
                ...state,
                cars: state.cars.map(car => {
                    if (car._id === action.car._id) return action.car;
                    return car;
                })
            }
        case 'REMOVE_CAR':
            return {
                ...state,
                cars: state.cars.filter(car => car._id !== action.carId)
            }
        default:
            return state;
    }
}