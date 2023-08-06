import { createSlice } from "@reduxjs/toolkit"
const initialState = ''

let timeoutId = null

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        createNotification(state,action) {
            return action.payload
        },
        removeNotification(state,action) {
            return ''
        }
    }
})

export const { createNotification, removeNotification } = notificationSlice.actions
export const setNotification = (notification,seconds) => {
    return async (dispatch) => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        dispatch(createNotification(notification))
        const timerId = setTimeout(() => {
            dispatch(removeNotification())
        },seconds*1000)

        timeoutId = timerId
    }
}
export default notificationSlice.reducer