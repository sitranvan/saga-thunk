import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiNews from '../api/apiNews'

export const fetchNews = createAsyncThunk('news/fetchNews', async (query, thunkApi) => {
    console.log(query)
    console.log('thunkAPI', thunkApi)
    const res = await apiNews.search({ query })
    return res.data.hits
})

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        hits: [],
        loading: true,
        errorMessage: '',
        query: '',
    },
    reducers: {},
    // xử lí bất đồng bộ, call api, promise...thì dùng extraReducers
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.hits = action.payload
            state.loading = false
        })
        builder.addCase(fetchNews.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchNews.rejected, (state, action) => {
            state.loading = false
        })
    },
})

export default newsSlice
