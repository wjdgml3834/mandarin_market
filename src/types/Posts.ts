export interface Posts {
  map(arg0: (postData: any) => JSX.Element): import("react").ReactNode;
  author: {
    accountname: string;
    username: string;
    // follower: string[];
    // followerCount: number;
    // following: string[];
    // followingCount: number;
    image: string;
    // intro: string;
    // isfollow: boolean;
    // username: string;
    _id: string;
  };
  commentCount: number;
  comments: string[];
  content: string;
  createdAt: string;
  heartCount: number;
  hearted: boolean;
  id: string;
  image: string;
  updatedAt: string;
}
