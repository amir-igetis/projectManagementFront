// // import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// // import { thunk } from "redux-thunk";
// // import { authReducer } from "./Auth/Reducer";
// // import { projectReducer } from "./Project/Reducer";
// // import chatReducer from "./Chat/Reducer";
// // import commentReducer from "./Comment/Reducer";
// // import issueReducer from "./Issue/Reducer";
// // import { subscriptionReducer } from "./Subscription/Reducer";

// // const rootReducer = combineReducers({
// //     auth: authReducer,
// //     project: projectReducer,
// //     chat: chatReducer,
// //     comment: commentReducer,
// //     issue: issueReducer,
// //     subscription: subscriptionReducer
// // });

// // export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

// //

// import { configureStore, applyMiddleware, combineReducers } from 'redux'
// import { thunk } from 'redux-thunk'
// import { composeWithDevTools } from '@redux-devtools/extension'

// import { subscriptionReducer } from './Subscription/Reducer'
// import { authReducer } from './Auth/Reducer'
// import { projectReducer } from './demoReducer'
// import chatReducer from './Chat/Reducer'
// import commentReducer from './Comment/Reducer'
// import issueReducer from './Issue/Reducer'

// const rootReducer = combineReducers({
//     auth: authReducer,
//     project: projectReducer,
//     chat: chatReducer,
//     comment: commentReducer,
//     issue: issueReducer,
//     subscription: subscriptionReducer
//     // Add other reducers here
// })

// const store = configureStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// )

// export default store

//

// import { configureStore } from '@reduxjs/toolkit'

// import { subscriptionReducer } from './Subscription/Reducer'
// import chatReducer from './Chat/Reducer'
// import commentReducer from './Comment/Reducer'
// import issueReducer from './Issue/Reducer'
// import authReducer from './Auth/Reducer'
// import ProjectReducer from './Project/Reducer'

// const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         project: ProjectReducer,
//         chat: chatReducer,
//         comment: commentReducer,
//         issue: issueReducer,
//         subscription: subscriptionReducer
//     },
//     middleware: (getDefaultMiddleware) => 
//         getDefaultMiddleware({
//             // You can customize middleware options here if needed
//             // serializableCheck: false, // Disable if you have non-serializable values
//             // immutableCheck: false, // Disable for performance
//         })
//     // Don't add thunk here - it's already included in getDefaultMiddleware()
// })

// export default store


import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";
import ProjectReducer from "./Project/Reducer";
import issueReducer from "./Issue/Reducer";
import chatReducer from "./Chat/Reducer";
import commentReducer from "./Comment/Reducer";
import subscriptionReducer from "./Subscription/Reducer";



const rootReducers = combineReducers({

    auth: authReducer,
    project: ProjectReducer,
    issue: issueReducer,
    chat: chatReducer,
    comment: commentReducer,
    subscription: subscriptionReducer



});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))