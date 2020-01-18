import { LOADING_POSTS, FETCHED_POSTS } from './types'

const initialState = {
    loading: true,
    posts: []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case LOADING_POSTS: return{
            ...state, loading: true, posts: []
        }
        case FETCHED_POSTS: return{
            ...state, loading: false, posts: action.payload
        }
        default: return state
    }
}

export default reducer