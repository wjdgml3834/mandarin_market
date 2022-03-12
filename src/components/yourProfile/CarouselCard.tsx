import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../constants";
import { Product } from "../../types/Product";


interface ProductData {
  product: Product
  loginUser: string | null | undefined
  openModal: () => void
  getLink: (link: string) => void
  getProductId: (id: string) => void
}

export const CarouselCard = ({product, loginUser, openModal ,getLink, getProductId }: ProductData) => {

  const { author, id, itemImage, itemName, link, price } = product

  const onClick = () => {
    getProductId(id)
    getLink(link)
    openModal()
  };

  const [productPrice, setProductPrice] = useState("")

  const setComma = (price: number) => {
    if(typeof price === "number") {
      return setProductPrice(""+price.toLocaleString())
    }
  }

  useEffect(() => {
    setComma(price)
  }, [])

  return (
    <>
      {loginUser === author.accountname ? (
        <>
        <div onClick={onClick}>
          <Img src={itemImage} alt="상품 이미지"  />
        </div>
        </>
      ) : (
        <a target='_blank' href={link} rel='noreferrer'>
          <Img src={itemImage} alt="상품 이미지" />
        </a>
      )}
      <CarouselTitle>{itemName}</CarouselTitle>
      <CarouselPrice>{productPrice}원</CarouselPrice>
    </>
  );
};

const Img = styled.img`
  width: 140px;
  height: 90px;
  border: 1px solid #dbdbdb;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 10px;
  cursor: pointer;
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
