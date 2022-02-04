import styled from "@emotion/styled";

export const ProfileAppPost = () => {
  const postData = [
    {
      id: 1,
      src: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/bA15rm1zOffsle8EVMPD_ZHtxYU.JPG",
      nickname: "리액트 과몰입러",
      email: "dlgusgh200240",
      txt: "아름다운 베니스의 일상",
      postimg:
        "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/bA15rm1zOffsle8EVMPD_ZHtxYU.JPG",
      postdate: "2022년 1월 17일",
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2020/03/25/16/01/children-4967808_960_720.jpg",
      nickname: "리액트 과몰입러",
      email: "dlgusgh200240",
      txt: "아름다운 베니스의 일상",
      postimg:
        "https://cdn.pixabay.com/photo/2018/07/18/20/25/channel-3547224_960_720.jpg",
      postdate: "2022년 1월 17일",
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2020/03/25/16/01/children-4967808_960_720.jpg",
      nickname: "리액트 과몰입러",
      email: "dlgusgh200240",
      txt: "아름다운 베니스의 일상",
      postimg:
        "https://cdn.pixabay.com/photo/2018/07/18/20/25/channel-3547224_960_720.jpg",
      postdate: "2022년 1월 17일",
    },
    {
      id: 4,
      src: "https://cdn.pixabay.com/photo/2020/03/25/16/01/children-4967808_960_720.jpg",
      nickname: "리액트 과몰입러",
      email: "dlgusgh200240",
      txt: "아름다운 베니스의 일상",
      postimg:
        "https://cdn.pixabay.com/photo/2018/07/18/20/25/channel-3547224_960_720.jpg",
      postdate: "2022년 1월 17일",
    },
    {
      id: 5,
      src: "https://cdn.pixabay.com/photo/2020/03/25/16/01/children-4967808_960_720.jpg",
      nickname: "리액트 과몰입러",
      email: "dlgusgh200240",
      txt: "아름다운 베니스의 일상",
      postimg:
        "https://cdn.pixabay.com/photo/2018/07/18/20/25/channel-3547224_960_720.jpg",
      postdate: "2022년 1월 17일",
    },
    {
      id: 6,
      src: "https://cdn.pixabay.com/photo/2020/03/25/16/01/children-4967808_960_720.jpg",
      nickname: "리액트 과몰입러",
      email: "dlgusgh200240",
      txt: "아름다운 베니스의 일상",
      postimg:
        "https://cdn.pixabay.com/photo/2018/07/18/20/25/channel-3547224_960_720.jpg",
      postdate: "2022년 1월 17일",
    },
    {
      id: 7,
      src: "https://cdn.pixabay.com/photo/2020/03/25/16/01/children-4967808_960_720.jpg",
      nickname: "리액트 과몰입러",
      email: "dlgusgh200240",
      txt: "아름다운 베니스의 일상",
      postimg:
        "https://cdn.pixabay.com/photo/2018/07/18/20/25/channel-3547224_960_720.jpg",
      postdate: "2022년 1월 17일",
    },
    {
      id: 8,
      src: "https://cdn.pixabay.com/photo/2020/03/25/16/01/children-4967808_960_720.jpg",
      nickname: "리액트 과몰입러",
      email: "dlgusgh200240",
      txt: "아름다운 베니스의 일상",
      postimg:
        "https://cdn.pixabay.com/photo/2018/07/18/20/25/channel-3547224_960_720.jpg",
      postdate: "2022년 1월 17일",
    },
    {
      id: 9,
      src: "https://cdn.pixabay.com/photo/2020/03/25/16/01/children-4967808_960_720.jpg",
      nickname: "리액트 과몰입러",
      email: "dlgusgh200240",
      txt: "아름다운 베니스의 일상",
      postimg:
        "https://cdn.pixabay.com/photo/2018/07/18/20/25/channel-3547224_960_720.jpg",
      postdate: "2022년 1월 17일",
    },
  ];

  return (
    <ImgContainer>
      <h3 className="sr-only">이미지 한눈에 보기</h3>
      {postData.map((postData) => {
        return <Img key={`ProfileAppPost-${postData.id}`} src={postData.src} />;
      })}
    </ImgContainer>
  );
};

const ImgContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 10px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
