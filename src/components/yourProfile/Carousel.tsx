import { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "next/link";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { COLOR } from "../../constants";

type IndexTypeProps = {
  index: number;
};

export const Carousel = () => {
  const ProData = [
    {
      id: 0,
      src: "https://cdn.pixabay.com/photo/2014/04/07/02/42/clementines-318210_1280.jpg",
      href: "1",
      title: "애월읍 노지 감귤",
      price: "35,000원",
    },
    {
      id: 1,
      src: "https://cdn.pixabay.com/photo/2015/11/24/06/53/hallabong-1059550_1280.jpg",
      href: "2",
      title: "애월읍 한라봉 10kg 당도 최고",
      price: "45,000원",
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2018/12/06/21/31/mandarins-3860659_1280.jpg",
      href: "3",
      title: "감귤 파치",
      price: "25,000원",
    },
  ];

  const [caroucelIndex, setCaroucelIndex] = useState(0);

  const handlePrevBtn = () => {
    if (caroucelIndex === 0) return;
    setCaroucelIndex(caroucelIndex - 1);
  };
  const handleNextBtn = () => {
    if (caroucelIndex === ProData.length - 1) return;
    setCaroucelIndex(caroucelIndex + 1);
  };

  return (
    <Border>
      <Container>
        <H3>판매 중인 상품</H3>
        <CarouselContainer>
          <h4 className="sr-only">판매 중인 상품의 캐러샐</h4>
          <CarouselItem index={caroucelIndex}>
            {ProData.map((s) => {
              return (
                <div key={`carousel-${s.id}`}>
                  <Link href={s.href}>
                    <a>
                      <Img src={s.src} alt="" />
                    </a>
                  </Link>
                  <CarouselTitle>{s.title}</CarouselTitle>
                  <CarouselPrice>{s.price}</CarouselPrice>
                </div>
              );
            })}
          </CarouselItem>
        </CarouselContainer>
        <BtnContainer>
          <Btn type="button" onClick={handlePrevBtn}>
            <ArrowBackIcon />
          </Btn>
          <Btn type="button" onClick={handleNextBtn}>
            <ArrowForwardIcon />
          </Btn>
        </BtnContainer>
      </Container>
    </Border>
  );
};

const Border = styled.div`
  border: 0.5px solid #dbdbdb;
`;
const Container = styled.section`
  margin: 16px 21px;
`;
const H3 = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 20px 0 16px 0;
`;
const CarouselContainer = styled.article`
  width: 330px;
  height: 125px;
  overflow: hidden;
`;
const caroucelIndex = (props: IndexTypeProps) => css`
  transform: translateX(-${150 * props.index}px);
`;
const CarouselItem = styled.div`
  display: flex;
  ${caroucelIndex}
  transition: all .5s ease-in-out;
`;
const Img = styled.img`
  width: 140px;
  height: 90px;
  margin-right: 10px;
  border-radius: 10px;
`;
const CarouselTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 140px;
  height: 20px;
`;
const CarouselPrice = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${COLOR.orange};
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Btn = styled.button`
  width: 40px;
  height: 40px;
  color: ${COLOR.orange};
  font-size: 32px;
  margin: 20px 0;
  border: 1px solid ${COLOR.orange};
  border-radius: 50%;
  :hover {
    background-color: ${COLOR.orange};
    color: #fff;
    border: 1px solid ${COLOR.orange};
  }
`;
