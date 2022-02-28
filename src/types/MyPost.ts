export interface MyPost {
  author: {
    accountname: string,
    username: string,
    image: string,
    _id: string,
  },
  commentCount: number,
  comments: string[],
  content: string,
  createdAt: string,
  heartCount: number,
  hearted: boolean,
  image: string,
  id: string,
}
