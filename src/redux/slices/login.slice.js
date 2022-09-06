import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    auth:false,
    user: {}
};

const loginSlice = createSlice({
    name:"loginSlice",
    initialState,
    reducers:{
        register:(state, action)=>{
            state.user = action.payload
        },
        login:(state, action)=>{
                state.auth = true

        },

        exit:(state, action)=>{
            state.user = {}
            state.auth = false
        }

    }
});

const { reducer:loginReduser,actions:{login,exit,register}} = loginSlice

const loginAction = {
    login,
    exit,
    register
}
export {loginReduser,loginAction}