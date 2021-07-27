import * as api from '../api'

// Action Creators
// Since we are dealing with async logic we need to use redux thunk which requries the second arrow function and using dispatch
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: 'FETCH_ALL', payload: data })

    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)

        dispatch({ type: 'CREATE', payload: data })

    } catch (error) {
        console.log(error.message)
    }
}