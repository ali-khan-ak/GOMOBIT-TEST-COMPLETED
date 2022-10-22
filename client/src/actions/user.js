import * as api from '../api'
import { CREATE, FETCH_ALL } from '../constants/actionTypes';


export const addUser = (userData,toast) => async (dispatch) => {
    try {
      console.log(userData)
      const { data } = await api.addUser(userData);
  
      dispatch({ type: CREATE, data })
      toast.success("User Added Sucessfully")
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 404){
        toast.error("User Already Exists")

      }else if (err.response.status === 500){
        toast.error("Server Error: Something went Wrong")
      }

    }
  }
  export const fetchUsers = (setData,setFilter) => async (dispatch) => {
    try {
      const { data } = await api.fetchUsers();
      console.log(data)
      setData(data);
        setFilter(data);
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  }