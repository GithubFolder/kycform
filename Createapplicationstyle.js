import styled from 'styled-components';



export const ProspectHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  .right-button {
    margin-top: -15px;
  }
  button.k-button.k-button-md.k-button-solid.k-button-solid-base.k-rounded-md.k-icon-button.reset-btn {
    border-radius: 8px;
    border: 1px solid #004a92;
    padding: 5px;
  }
  span.k-button-icon.k-icon.k-i-refresh {
    color: #004a92;
  }
  @media screen and (max-width: 480px) {
    padding: 0;
    .right-button {
      margin-top: 0px;
    }
    span.new-lead-text {
      display: none;
    }
    button.k-button.k-button-md.k-button-solid.k-button-solid-base.k-rounded-md.k-icon-button.reset-btn {
      border: none;
    }
    button.k-button.k-button-md.k-button-solid.k-button-solid-secondary.k-rounded-md.new_lead {
      position: fixed;
      width: 60px;
      height: 60px;
      bottom: 50px;
      right: 30px;
      background: #004a92;
      border-radius: 50px;
      text-align: center;
      box-shadow: 2px 2px 3px #999;
      z-index: 1000;
      animation: bot-to-top 2s ease-out;
    }
    span.k-button-icon.k-icon.k-i-plus {
      font-size: 28px;
      margin-right: -8px;
    }
  }
`;

export const Heading = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  padding: 20px 5px;
  margin: 0;
  color: #004a92;
`;


export const TabCard = styled.div`
  padding: 30px 30px 50px 30px;
  background: #fff;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 5%);
  .mainalign{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding-bottom:50px;
  }
  
  .align1{
    padding-right:60px;
    padding-left:30px;
    width: 520px;
  }
  .btn{
    margin-left:75%;
    margin-top: 30px;
    background-color: gray;
    color: white;
  }
  .k-upload .k-dropzone .k-dropzone-hint {
    display: none;
    /* display: flex;
    flex-direction: column;*/
    /* width: 70px; */
    /* height: 40px;  */
} 

.k-upload-button {
display: contents ;
align-items: right;
}
`;
// export const TabSubCard = styled.div`
//   padding: 20px 30px 40px 20px;
//   background: #fff;
//   box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 5%);
// `;
