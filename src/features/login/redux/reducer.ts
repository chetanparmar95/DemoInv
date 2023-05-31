import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'

// Define a type for the slice state
interface UserState {
  name: String
}

// Define the initial state using that type
const initialState: UserState = {
  name: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    }
  }
})

export const { setName } = userSlice.actions

export const selectName = (state: RootState) => state.user.name

export default userSlice.reducer