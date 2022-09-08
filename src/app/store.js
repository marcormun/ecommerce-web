import { configureStore } from '@reduxjs/toolkit'
import detailSlice from '../containers/ProductDetail/detailSlice'
import userSlice from '../containers/User/userSlice'

export default configureStore({
    reducer: {
        user: userSlice,
        dataProduct: detailSlice
    }
})