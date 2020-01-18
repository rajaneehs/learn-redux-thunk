import { LOADING_POSTS, FETCHED_POSTS } from './types'

function loadingPosts(){
    return {
        type: LOADING_POSTS
    }
}

function fetchedPosts(posts){
    return{
        type: FETCHED_POSTS,
        payload: posts
    }
}

function fetchingPosts(posts){
    return dispatch => {
        dispatch(loadingPosts())

        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(posts => {
                dispatch(fetchedPosts(posts))
            })
    }
}

export { fetchingPosts }