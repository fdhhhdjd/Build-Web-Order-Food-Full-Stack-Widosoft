import styled from "styled-components";
export const ForgetStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

  .container1:before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
    z-index: 6;
  }

  .image {
    width: 100%;
    transition: transform 1.1s ease-in-out;
    transition-delay: 0.4s;
  }

  .panel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    z-index: 6;
  }

  .left-panel {
    pointer-events: all;
    padding: 3rem 17% 2rem 12%;
  }

  .right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
  }

  .panel .content {
    color: #fff;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
  }

  .panel p {
    font-size: 0.95rem;
    padding: 0.7rem 0;
  }

  .btn.transparent {
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 0.8rem;
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateX(800px);
  }

  /* ANIMATION */

  .container1.sign-up-mode:before {
    transform: translate(100%, -50%);
    right: 52%;
  }

  .container1.sign-up-mode .left-panel .image,
  .container1.sign-up-mode .left-panel .content {
    transform: translateX(-800px);
  }

  .container1.sign-up-mode .signin-signup {
    left: 25%;
  }

  .container1.sign-up-mode form.sign-up-form {
    opacity: 1;
    z-index: 2;
  }

  .container1.sign-up-mode form.sign-in-form {
    opacity: 0;
    z-index: 1;
  }

  .container1.sign-up-mode .right-panel .image,
  .container1.sign-up-mode .right-panel .content {
    transform: translateX(0%);
  }

  .container1.sign-up-mode .left-panel {
    pointer-events: none;
  }

  .container1.sign-up-mode .right-panel {
    pointer-events: all;
  }
  .loginGoogleFb {
    display: flex;
    flex-direction: row;
  }
  .login_google + .login_google {
    margin-left: 1rem;
  }

  @media (max-width: 870px) {
    .container1 {
      min-height: 800px;
      height: 100vh;
    }
    .signin-signup {
      width: 100%;
      top: 95%;
      transform: translate(-50%, -100%);
      transition: 1s 0.8s ease-in-out;
    }

    .signin-signup,
    .container1.sign-up-mode .signin-signup {
      left: 50%;
    }

    .panels-container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr 1fr;
    }

    .panel {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 2.5rem 8%;
      grid-column: 1 / 2;
    }

    .right-panel {
      grid-row: 3 / 4;
    }

    .left-panel {
      grid-row: 1 / 2;
    }

    .image {
      width: 200px;
      transition: transform 0.9s ease-in-out;
      transition-delay: 0.6s;
    }

    .panel .content {
      padding-right: 15%;
      transition: transform 0.9s ease-in-out;
      transition-delay: 0.8s;
    }

    .panel h3 {
      font-size: 1.2rem;
    }

    .panel p {
      font-size: 0.7rem;
      padding: 0.5rem 0;
    }

    .btn.transparent {
      width: 110px;
      height: 35px;
      font-size: 0.7rem;
    }

    .container1:before {
      width: 1500px;
      height: 1500px;
      transform: translateX(-50%);
      left: 30%;
      bottom: 68%;
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }

    .container1.sign-up-mode:before {
      transform: translate(-50%, 100%);
      bottom: 32%;
      right: initial;
    }

    .container1.sign-up-mode .left-panel .image,
    .container1.sign-up-mode .left-panel .content {
      transform: translateY(-300px);
    }

    .container1.sign-up-mode .right-panel .image,
    .container1.sign-up-mode .right-panel .content {
      transform: translateY(0px);
    }

    .right-panel .image,
    .right-panel .content {
      transform: translateY(300px);
    }

    .container1.sign-up-mode .signin-signup {
      top: 5%;
      transform: translate(-50%, 0);
    }
  }

  @media (max-width: 570px) {
    form {
      padding: 0 1.5rem;
    }

    .image {
      display: none;
    }
    .panel .content {
      padding: 0.5rem 1rem;
    }
    .container1 {
      padding: 1.5rem;
    }

    .container1:before {
      bottom: 72%;
      left: 50%;
    }

    .container1.sign-up-mode:before {
      bottom: 28%;
      left: 50%;
    }
  }
`;
