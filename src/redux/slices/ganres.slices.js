import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ganreServices} from "../../services";

const initialState = {
    ganres:[]

};

const getAllGanre = createAsyncThunk(
    'getAllGanre',
    async (_,{rejectWithValue})=>{
        try {
          const {data} = await ganreServices.getAllGanre()
            return data

        }catch (e) {

            return rejectWithValue(e.response.data)
        }

    }
);

const ganresSlices = createSlice({
    name:'ganresSlices',
    initialState,
    reducers:{},
    extraReducers:(builder)=>
        builder
            .addCase(getAllGanre.fulfilled,(state, action)=>{
                state.ganres = action.payload.genres
            })
});

const {reducer:ganresReduser} = ganresSlices;

const ganresAction = {
    getAllGanre
};

export {ganresAction,ganresReduser}