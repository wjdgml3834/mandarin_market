import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { COLOR } from "../../constants";
import Link from "next/link";

const chatData = [
  {
    id: 0,
    src: "",
    name: "김정희",
    content: "리엑트 너무 쉽다~~",
    createdAt: "2022.01.19",
    read: true,
  },
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2016/04/07/10/57/skull-1313600_960_720.png",
    name: "최성이",
    content: "코딩이 제일 쉬웠어요. 현호님도 저처럼 코딩이 쉬우신가요??",
    createdAt: "2022.01.19",
    read: false,
  },
  {
    id: 2,
    src: "",
    name: "친구1",
    content: "ㅇㅋㄷㅋ",
    createdAt: "2022.01.20",
    read: true,
  },
  {
    id: 3,
    src: "",
    name: "친구2",
    content: "잘먹었다~ 담에 또 보자.",
    createdAt: "2022.01.21",
    read: false,
  },
];

export const ChatList = () => {
  return (
    <section>
      <h2 className="sr-only">채팅 목록 페이지</h2>
      <Nav>
        <button>
          <ArrowBackIcon className="arrow" />
        </button>
        <button>
          <MoreVertIcon className="more" />
        </button>
      </Nav>
      <ChatContainer>
        <h3 className="sr-only">채팅 목록</h3>
        <ChatLists>
          {chatData.map((chat) => {
            const { id, src, name, content, createdAt, read } = chat;
            return (
              <Link href={`/chats/${id}`} key={`chatItem-${id}`}>
                <a>
                  <ChatItem>
                    <ImgContainer>
                      {src === "" ? (
                        <Img
                          src="./images/ellipse-profile.svg"
                          alt="프로필 이미지"
                        />
                      ) : (
                        <Img src={src} alt="빈 프로필 이미지" />
                      )}
                      {!read && <Read />}
                    </ImgContainer>
                    <ChatTextContainer>
                      <Name>{name}</Name>
                      <Content>{content}</Content>
                    </ChatTextContainer>
                    <CreatedAt>{createdAt}</CreatedAt>
                  </ChatItem>
                </a>
              </Link>
            );
          })}
        </ChatLists>
      </ChatContainer>
    </section>
  );
};
const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 48px;
  border-bottom: 0.5px solid #dbdbdb;
  background-color: #fff;
  z-index: 100;
  .arrow {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .more {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const ChatContainer = styled.article`
  overflow: hidden;
`;
const ChatLists = styled.ul`
  margin-top: 70px;
`;
const ChatItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  align-items: flex-end;
  padding: 0 16px;
  margin-bottom: 20px;
`;
const ImgContainer = styled.div`
  position: relative;
`;
const Img = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;
const Read = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${COLOR.orange};
`;
const ChatTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Name = styled.p`
  font-size: 14px;
  font-weight: 700;
`;
const Content = styled.p`
  font-size: 12px;
  color: #767676;
  width: 55vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 10px 0 5px 0;
`;
const CreatedAt = styled.p`
  font-size: 10px;
  color: #dbdbdb;
`;
