import { createSlice } from '@reduxjs/toolkit';
import { usersDB } from '../../data/dataDB';

const initialState = usersDB;

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
