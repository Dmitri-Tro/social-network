import {PostItemType, PostsDataType} from "../../../interfaces/types";
import {v1} from "uuid";


const initialState: PostsDataType = {
    ['0001']: [],
    ['0002']: [],
    ['0003']: [],
    ['0004']: [],
    ['0005']: [],
    ["0006"]: [],
    ['0007']: [],
    ['0008']: [],
    ['0009']: [],
    ['0010']: [],
    ['0011']: [
        {
            likeAmount: '0',
            postId: '03',
            postTitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat velit consectetur qui dignissimos minus deserunt in distinctio! Expedita odio dignissimos maxime rem tempore? Saepe perferendis necessitatibus repellat id quibusdam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat velit consectetur qui dignissimos minus deserunt in distinctio! Expedita odio dignissimos maxime rem tempore? Saepe perferendis necessitatibus repellat id quibusdam?'
        },
        {
            likeAmount: '100',
            postId: '02',
            postTitle: 'It\'s my second post!'
        },
        {
            likeAmount: '98',
            postId: '01',
            postTitle: 'Hi, how are you?'
        },
    ],
};

const ADD_NEW_POST = "Add-new-post";

type PostsReducerActionType = AddPostReducerACType

type AddPostReducerACType = ReturnType<typeof addPostReducerAC>
export const addPostReducerAC = (userId: string, title: string) => {
    return {
        type: ADD_NEW_POST,
        payload: {
            userId,
            title
        }
    } as const
}

export const postsReducer = (state: PostsDataType = initialState, action: PostsReducerActionType): PostsDataType => {
    switch (action.type) {
        case ADD_NEW_POST :
            const newPost: PostItemType = {
                likeAmount: '0',
                postId: v1(),
                postTitle: action.payload.title
            }
            return {...state, [action.payload.userId]: [newPost, ...state[action.payload.userId]]}
        default:
            return state
    }
}