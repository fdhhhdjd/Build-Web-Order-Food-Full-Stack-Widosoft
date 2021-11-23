import styled from "styled-components";
export const DivNotFound = styled.div`
  .home {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    min-height: 100vh;
    align-items: center;
    background: url(../images/home-bg.jpg) no-repeat;
    background-size: cover;
    background-position: center;
  }

  .home .content {
    flex: 1 1 40rem;
    padding-top: 6.5rem;
  }

  .home .image {
    flex: 1 1 40rem;
  }

  .home .image img {
    width: 100%;
    padding: 1rem;
    animation: float 3s linear infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0rem);
    }
    50% {
      transform: translateY(3rem);
    }
  }

  .home .content h3 {
    font-size: 5rem;
    color: #333;
  }

  .home .content p {
    font-size: 1.7rem;
    color: #666;
    padding: 1rem 0;
  }
`;
