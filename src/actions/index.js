import axios from 'axios'; 

const startFetch = () => {return {type: "IN_LOGIN", isFetching: true}}; 
const errorFetch = (err) => {return {type: "ERROR_LOGIN", isFetching: false, err}}; 
const completeFetch = (data) => {return {type: "COMPLETE_LOGIN", isFetching: false, payload: data}}; 

export const login = (user_data) => {

    return ( dispatch, getState ) => {
        dispatch(startFetch());
        axios.post('http://localhost:8080/login',user_data).then( response => {
            dispatch(completeFetch(response.data))
        })
        .catch(err => {
            dispatch(errorFetch(err))
        })
    }
}




const GetDataD = () => {return {type: "COMPLETE_LIST", success:true} }

export const getUser = () => {
    return (dispatch, state) => {
        dispatch(GetDataD()); 
        console.log(state)
    }
}