import * as api from '../api'
import { AUTH } from '../constants/actionTypes';

export const registerUser = (userData,navigate,toast) =>async (dispatch)=>{
    try{
        console.log(userData)
        const {data} = await api.registerUser(userData);

        dispatch({type: AUTH, data})
        navigate('/viewuser')
    }catch(err){
        console.log(err);
        if (err.response.status === 404){
            toast.error("User Already Exists")
    
          }else if (err.response.status === 500){
            toast.error("Server Error: Something went Wrong")
          }else if (err.response.status === 400){
            toast.error("Invalid Credentials")
          }
    }

}
export const login = (userData,navigate,toast) => async (dispatch)=>{
    try{
        const {data} = await api.login(userData);

        dispatch({type: AUTH, data})
        navigate('/viewuser')
    }catch(err){
        if (err.response.status === 404){
            toast.error("User Doesn't Exists")
    
          }else if (err.response.status === 500){
            toast.error("Server Error: Something went Wrong")
          }else if (err.response.status === 400){
            toast.error("Invalid Credentials")
          }
    }
}