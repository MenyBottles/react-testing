import {SAVE_COMMENT} from 'actions/types'
import {FETCH_COMMENTS} from 'actions/types'
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/comments'

export function saveComment(comment){
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments(){
    const response = axios.get(`${BASE_URL}`)
    return{
        type: FETCH_COMMENTS,
        payload: response
    }
}