import styled from "styled-components";
export const ReviewStyle = styled.div`
  .review .box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .review .box-container .box {
    text-align: center;
    padding: 2rem;
    border: 1rem solid #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    flex: 1 1 30rem;
    background: #333;
    margin-top: 6rem;
  }

  .review .box-container .box img {
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    border: 1rem solid #fff;
    margin-top: -8rem;
    object-fit: cover;
  }

  .review .box-container .box h3 {
    font-size: 2.5rem;
    color: #fff;
    padding: 0.5rem 0;
  }

  .review .box-container .box .stars i {
    font-size: 2rem;
    color: #ff3838;
    padding: 0.5rem 0;
  }

  .review .box-container .box p {
    font-size: 1.5rem;
    color: #eee;
    padding: 1rem 0;
  }
`;
