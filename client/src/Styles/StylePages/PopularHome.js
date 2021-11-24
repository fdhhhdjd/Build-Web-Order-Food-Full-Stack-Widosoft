import styled from "styled-components";
export const PopularHome = styled.div`
  .popular .box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .popular .box-container .box {
    padding: 2rem;
    background: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    border: 0.1rem solid rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    text-align: center;
    flex: 1 1 30rem;
    position: relative;
  }

  .popular .box-container .box img {
    height: 25rem;
    object-fit: cover;
    width: 100%;
    border-radius: 0.5rem;
  }

  .popular .box-container .box .price {
    position: absolute;
    top: 3rem;
    left: 3rem;
    background: #ff3838;
    color: #fff;
    font-size: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  .popular .box-container .box h3 {
    color: #333;
    font-size: 2.5rem;
    padding-top: 1rem;
  }

  .popular .box-container .box .stars i {
    color: gold;
    font-size: 1.7rem;
    padding: 1rem 0.1rem;
  }
  .heading {
    text-align: center;
    font-size: 3.5rem;
    padding: 1rem;
    color: #666;
  }

  .heading span {
    color: #ff3838;
  }
`;
