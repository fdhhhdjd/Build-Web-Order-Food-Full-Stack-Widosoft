import React from "react";
import styled from "styled-components";
import { mobile } from "../../Styles/StylePages/MobileReponsive";
import { Tablet } from "../../Styles/StylePages/TabletReponsive";
import { Img, Img1 } from "../../Imports/Image";
import StripeCheckout from "react-stripe-checkout";
import { EmptyCart } from "../../Imports/Index";
const PaymentItem = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>YOUR BAG : 2 Product</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src={Img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> Pizza
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 1
                    </ProductId>
                    <ProductColor color="red" />
                    <ProductSize>
                      <b>Size:</b> M
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <h1>-</h1>
                    <ProductAmount>5</ProductAmount>
                    <h1>+</h1>
                  </ProductAmountContainer>
                  <ProductPrice>$ 60</ProductPrice>
                </PriceDetail>
              </Product>

              <Hr />
              <Product>
                <ProductDetail>
                  <Image src={Img1} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> Pizza
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 2
                    </ProductId>
                    <ProductColor color="green" />
                    <ProductSize>
                      <b>Size:</b> L
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <h1>-</h1>
                    <ProductAmount>5</ProductAmount>
                    <h1>+</h1>
                  </ProductAmountContainer>
                  <ProductPrice>$ 120</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$180</SummaryItemPrice>
              </SummaryItem>
              <StripeCheckout
                name="Store Pizza"
                image="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-1/c0.80.240.240a/p240x240/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=bHH1UmVI9KoAX_1ZCTX&_nc_ht=scontent.fsgn2-6.fna&oh=f97242240b59897316f499fb97272042&oe=61C5EA1E"
                billingAddress
                shippingAddress
                description={`Your total is 50`}
                amount="30"
              >
                <Button>CHECKOUT NOW</Button>
              </StripeCheckout>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default PaymentItem;
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  margin: 60px 0 30px 0;
  font-size: 1.7rem;
  ${mobile({ padding: "10px", fontSize: "1.5rem" })}
  ${mobile({ marginTop: "80px" })};
  ${Tablet({ padding: "10px", fontSize: "1.5rem" })}
  ${Tablet({ margin: "90px 0 50px 0" })};
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid black;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
  ${Tablet({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
  ${Tablet({ margin: "15px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
  ${Tablet({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  margin: 0 0 1rem 0;
  background-color: #eee;
  border: none;
  height: 5px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
  ${Tablet({ padding: "20px", height: "40vh" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
