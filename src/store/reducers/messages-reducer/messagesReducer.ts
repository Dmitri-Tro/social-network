import {MessagesDataType, UserFriend, UserItemType} from "../../../interfaces/types";
import {v1} from "uuid";


const initialState: MessagesDataType = [
    {
        messageId: '01',
        message: 'Hi! Nice to meet you here!!!',
        sendFromUserId: '0001',
        sendToUserId: '0011',
    },
    {
        messageId: '02',
        message: 'Hey!',
        sendFromUserId: '0011',
        sendToUserId: '0001',
    },
];

const ADD_NEW_MESSAGE = 'Add-new-message';

type MessagesReducerActionType = AddMessageReducerACType

type AddMessageReducerACType = ReturnType<typeof addMessageReducerAC>
export const addMessageReducerAC = (messageTitle: string, verifiedUser: UserItemType, verifiedUserFriendsList: Array<UserFriend>) => {
    return {
        type: ADD_NEW_MESSAGE,
        payload: {
            messageTitle,
            verifiedUser,
            verifiedUserFriendsList
        }
    } as const

}

export const messagesReducer = (state: MessagesDataType = initialState, action: MessagesReducerActionType): MessagesDataType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
                const newMessage = {
                    messageId: v1(),
                    message: action.payload.messageTitle,
                    sendFromUserId: action.payload.verifiedUser.userId,
                    sendToUserId: action.payload.verifiedUserFriendsList[0].friendId,
                }
                return [newMessage, ...state];
        default:
            return state
    }
}