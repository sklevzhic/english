import {AnyAction, applyMiddleware, createStore } from "@reduxjs/toolkit";
import {Context, createWrapper, MakeStore } from "next-redux-wrapper";
import thunk, { ThunkDispatch } from "redux-thunk";
import {reducer, RootState} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const makeStore: MakeStore<RootState>
    = (context: Context) => createStore(reducer, composeWithDevTools(
        applyMiddleware(thunk),
        // other store enhancers if any
    ));

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>