import { createGlobalStyle } from "styled-components";

export const UserListStyle = createGlobalStyle`
.newUser {
    flex: 4;
  }
  
  .newUserForm {
    display: flex;
    flex-wrap: wrap;
  }
  
  .newUserItem {
    width: 400px;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-right: 20px;
  }
  
  .newUserItem > label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }
  
  .newUserItem > input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
  
  .newUserGender > input {
    margin-top: 15px;
  }
  
  .newUserGender>label{
      margin: 10px;
      font-size: 18px;
      color: #555;
  }
  
  .newUserSelect{
      height: 40px;
      border-radius: 5px;
  }
  
  .newUserButton{
      width: 200px;
      border: none;
      background-color: darkblue;
      color: white;
      padding: 7px 10px;
      font-weight: 600;
      border-radius: 10px;
      margin-top: 30px;
      cursor: pointer;
  }
`;
