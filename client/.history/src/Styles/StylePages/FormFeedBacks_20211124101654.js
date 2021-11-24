import styled from "styled-components";
export const FormFeedbacks = styled.div`
  .order .row {
    padding: 2rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    border-radius: 0.5rem;
  }

  .order .row .image {
    flex: 1 1 30rem;
  }

  .order .row .image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .order .row form {
    flex: 1 1 50rem;
    padding: 1rem;
  }

  .order .row form .inputBox {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .order .row form .inputBox input,
  .order .row form textarea {
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.7rem;
    color: #333;
    text-transform: none;
    border: 0.1rem solid rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    width: 49%;
  }

  .order .row form textarea {
    width: 100%;
    resize: none;
    height: 15rem;
  }

  .order .row form .btn {
    background: none;
  }

  .order .row form .btn:hover {
    background: #ff3838;
  }
  p {
    color: red;
    font-size: 1.7rem;
  }
  @media (max-width: 991px) {
    p {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 450px) {
    p {
      font-size: 1rem;
    }
  }
`;
