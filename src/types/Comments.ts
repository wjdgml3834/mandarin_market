export interface Comments {
  author: {
    accountname: string,
    follower: string[],
    followerCount: number,
    following: string[],
    followingCount: number,
    image: string,
    intro: string,
    isfollow: boolean,
    username: string,
    _id: string,
  },
  content: string,
  createdAt: string,
  id: string
}
