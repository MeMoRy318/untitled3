import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {tvServices} from "../../services";

const initialState = {
    tvList:[],
    isLoading:false,
    errors:null

};

const getTvList = createAsyncThunk(
    "tvSlice/getTvList",
    async (_,{rejectWithValue})=>{
        try {
           const {data} = await tvServices.getAllTv()
            console.log(data)
            return data;

        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const tvSlice = createSlice({
    name:"tvSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>
        builder
            .addCase(getTvList.fulfilled,(state, action)=>{
                state.isLoading = false;
                state.tvList = action.payload;
            })
            .addCase(getTvList.pending,(state, action)=>{
                state.isLoading = true;
            })
            .addDefaultCase((state, action)=>{

            const [type] = action.type.split('/').splice(-1);

            if (type === 'rejected') {
                state.errors = action.payload
            } else {
                state.errors = null
            }
        })

});

const {reducer:tvReduser} = tvSlice;

const tvAction = {

    getTvList

};

export {tvAction,tvReduser}