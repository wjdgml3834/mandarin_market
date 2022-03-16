export interface MyPost {
  map(arg0: (postData: MyPost) => JSX.Element): import("react").ReactNode;
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
  commentCount: number,
  comments: string[],
  content: string,
  createdAt: string,
  heartCount: number,
  hearted: boolean,
  id: string,
  image: string,
  updatedAt: string,
}
