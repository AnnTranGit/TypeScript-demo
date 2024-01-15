import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '../store';
import { UserSignInForm } from '../../pages/Login';
import axios from 'axios';
import { ACCESS_TOKEN, USER_LOGIN, getStorageJson, saveStorage, saveStorageJson } from '../../util/config';

export interface UserLogin {
    email: string,
    accessToken: string
}
export interface UserReducerState {
    userLogin: UserLogin | null
}

const initialState: UserReducerState = {
    userLogin: getStorageJson(USER_LOGIN)

}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        loginAction: (state: UserReducerState, action: PayloadAction<UserLogin>) => {
            state.userLogin = action.payload
        }
    }
});

export const { loginAction } = userReducer.actions

export default userReducer.reducer


//-------- action async --------------

export const signinActionApi = (userLoginForm: UserSignInForm) => {
    return async (dispatch: AppDispatch) => {
        const res = await axios({
            url: 'https://shop.cyberlearn.vn/api/Users/signin',
            method: 'POST',
            data: userLoginForm

        })
        //sau khi co du lieu tu API tra ve thi dua du lieu len store
        const action: PayloadAction<UserLogin> = loginAction(res.data.content)
        dispatch(action)

        //luu vao local storage
        saveStorageJson(USER_LOGIN, res.data.content)

        //đối với việc lưu primitive value store thì không dùng JSON.stringify vì nó sẽ sinh thêm ''
        //'accessToken' => ''accessToken''

        saveStorage(ACCESS_TOKEN, res.data.content.accessToken)
    }

}