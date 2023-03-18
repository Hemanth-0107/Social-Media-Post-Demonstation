import * as api from '../api';
// import thunk from 'redux-thunk';


export const getPosts = () => async(dispatch) => {
    try{

        const {data} = await api.fetchPosts();
        dispatch({type:'FETCH_ALL',payload:data});

    }catch(error){
        
        console.log(error.message)
    }
}


export const createPosts = (post) => async(dispatch) => {
    try{
        const data = await api.createPost(post);
        dispatch({type:'CREATE',payload:data});

    }catch(error){
        console.log(error)
    }
}

export const updatePost = (post) => async(dispatch) => {
    try{
        const data = await api.updatePost(post);   
        dispatch({type:'UPDATE',payload:data});
    }
    catch(error){
        console.log(error)
    }
}

// export const getPost = () => async(dispatch) => {
//     try{

//         const {data} = await api.fetchPosts();
//         dispatch({type:'FETCH',payload:data});

//     }catch(error){
        
//         console.log(error.message)
//     }
// }

export const likePost = (post) => async(dispatch) => {
    try{
        const data = await api.likePost(post);
        
        dispatch({type:'LIKE',payload:data});
    }
    catch(error){
        console.log(error)
    }
}

export const deletePost = (id) => async(dispatch) => {
    try{
        await api.deletePost(id);
        dispatch({type:'DELETE',payload:id});
    } catch(err){
        console.log(err.message)
    }
}
