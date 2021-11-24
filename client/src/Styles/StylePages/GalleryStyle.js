import styled from "styled-components";
export const GalleryStyle = styled.div`
  .gallery .box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .gallery .box-container .box {
    height: 25rem;
    flex: 1 1 30rem;
    border: 1rem solid #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    position: relative;
    overflow: hidden;
  }

  .gallery .box-container .box img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .gallery .box-container .box .content {
    position: absolute;
    top: -100%;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    padding-top: 5rem;
    text-align: center;
  }

  .gallery .box-container .box .content h3 {
    font-size: 2.5rem;
    color: #333;
  }

  .gallery .box-container .box .content p {
    font-size: 1.5rem;
    color: #666;
    padding: 1rem 0;
  }

  .gallery .box-container .box:hover .content {
    top: 0;
  }
`;
