import { Card } from "./Card";

export const CardContainer = () => {
  const followersData = [
    {
      id: 1,
      src: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/bA15rm1zOffsle8EVMPD_ZHtxYU.JPG",
      name: "리액트 과몰입러",
      intro: "리액트를 다루는 기술 짱짱맨",
    },
    {
      id: 2,
      src: "https://blog.kakaocdn.net/dn/bpzLgZ/btqNf6Msh4R/McgAFhgqzBYIY6DkTtZtw1/img.jpg",
      name: "플스의 품격",
      intro: "라스트오브어스가 제일 재밌지",
    },
    {
      id: 3,
      src: "https://t1.daumcdn.net/cfile/tistory/21221F4258E793521D",
      name: "자스의 신",
      intro: "딥다이브 3번 읽으세요",
    },

    {
      id: 4,
      src: "https://post-phinf.pstatic.net/MjAxODA1MjNfMjIg/MDAxNTI3MDU0MTI0Njk5.0leniJIhs4x6kX4gGubY_fQKoxgDR9w2ELHeNRqrXaYg.Y_e-WkJU10_Qe77AJiWb6-fiqSnt5UjwFz14jVU94Xcg.JPEG/shutterstock_571668544.jpg?type=w1200",
      name: "코딩은 즐거워",
      intro: "사실은 안즐거워",
    },
    {
      id: 5,
      src: "https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/P9h/image/sR7PN1eZ70y5YgfR0zmcvqJNgSg.jpg",
      name: "프로 애플러",
      intro: "애플 M1칩 사랑해",
    },
    {
      id: 6,
      src: "https://post-phinf.pstatic.net/MjAyMDAzMDJfMjMz/MDAxNTgzMDk2NDgwNDI3.cIs4o9p5ZTNFYm-kDI8LTdzOaTFeiX9K8ERmDe1fa7Eg.MQaiZX6Lg1R79EDIFYFUX3m5hQN89HxQO5x58woiUcIg.JPEG/%EC%9E%A0%EB%A7%8C%EB%B3%B42.jpg?type=w1200",
      name: "잠만보",
      intro: "24시간이 모자라...",
    },
  ];

  return (
    <div>
      {followersData.map((followerData) => {
        return <Card key={followerData.id} followerData={followerData} />;
      })}
    </div>
  );
};
