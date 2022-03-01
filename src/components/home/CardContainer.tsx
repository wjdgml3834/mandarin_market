import { Card } from "./Card";
import { Posts } from "../../types/Posts";

interface PostData {
  postData: any;
}

export const CardContainer = ({ postData }: PostData) => {
  return (
    <div>
      {postData.map((postData: any) => {
        return <Card key={postData.id} postData={postData} />;
      })}
    </div>
  );
};
