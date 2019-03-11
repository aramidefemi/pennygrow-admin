import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers';


const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}
export default function configureStore() {
    return createStore(
        rootReducer, {
            auth: {
                "detail": {},
                "token": "",
                "auth": false
            }
        },
        applyMiddleware(thunk, logger)
    )
}