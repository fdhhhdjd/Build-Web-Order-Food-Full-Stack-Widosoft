import styled from "styled-components";
export const Specialty = styled.div`
  .speciality .box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
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

  .speciality .box-container .box {
    flex: 1 1 30rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    border: 0.1rem solid rgba(0, 0, 0, 0.3);
    cursor: pointer;
    border-radius: 0.5rem;
  }

  .speciality .box-container .box .image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: -100%;
    left: 0;
  }

  .speciality .box-container .box .content {
    text-align: center;
    background: #fff;
    padding: 2rem;
  }

  .speciality .box-container .box .content img {
    margin: 1.5rem 0;
  }

  .speciality .box-container .box .content h3 {
    font-size: 2.5rem;
    color: #333;
  }

  .speciality .box-container .box .content p {
    font-size: 1.6rem;
    color: #666;
    padding: 1rem 0;
  }

  .speciality .box-container .box:hover .image {
    top: 0;
  }

  .speciality .box-container .box:hover .content {
    transform: translateY(100%);
  }
`;
