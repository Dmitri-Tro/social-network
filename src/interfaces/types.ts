export type UsersData = {
    users: User[],
    totalCount: number,
    pageSize: number,
    page: number,
    friend: boolean
}

export type User = {
    name: string;
    id: number;
    uniqueUrlName?: string,
    photos: {
        small?: string;
        large?: string;
    }
    status?: string;
    followed: boolean;
}

export type UserMessagesData = Array<UserMessage>
export type UserMessage = {
    messageId: string
    message: string
    time: string
}

export type FriendsMessagesData = Array<FriendMessage>
export type FriendMessage = {
    messageId: string
    message: string
    time: string
}

export type PostsData = Array<Post>
export type Post = {
    postId: string
    postTitle: string
    likeAmount: number
    isLiked: boolean
}

export type UserAuthData = {
    name: string
    password: string
    id: number
    avatar: string
    birthday: string
    cityAddress: string
    occupation: string
    quot: string
}