import styled from "styled-components";
export const StepContainers = styled.div`
  .steps {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1rem;
  }

  .steps .box {
    flex: 1 1 25rem;
    padding: 1rem;
    text-align: center;
  }

  .steps .box img {
    border-radius: 50%;
    border: 1rem solid #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }

  .steps .box h3 {
    font-size: 3rem;
    color: #333;
    padding: 1rem;
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
