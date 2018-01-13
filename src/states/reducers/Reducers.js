import { combineReducers } from 'redux'

function viewradio(state={ mode: 'detail', }, action) {
    switch (action.type) {
        case 'RADIO_MODE_CHANGE':
            return Object.assign({}, state, {
                mode: action.mode,
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    // "registeredHosts": registeredHosts,
    // "hosts": hosts,
    // "regHost": regHost,
    // "hostDetail": hostDetail,
    // "list": list,
    // "viewradio": viewradio,
    // "alarms": alarms
    "viewradio": viewradio
})

export default rootReducer