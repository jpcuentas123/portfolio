import styled from "styled-components";

const FooterSection = styled.section`
    height: 40vh;
    background-color: hsla(0, 0%, 38%, 0.85);
`;

const FooterContent = styled.section`
    padding-left: 5vw;
    padding-top: 10vh;
    color: white;
    p {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 7px;
    }
    ul {
      list-style: none;
      li {
        font-size: 14px;
        cursor: pointer;
        transition: all 0.5s;
      }
      li:hover {
        color: rgb(206, 206, 206);
      }
    }
    a{
        color: white;
    }
    a:hover{
        color: #Fdfdfd2d;
    }
    a:focus{
        color: #Fdfdfd2d;
        text-decoration: underline;
    }
`

const LineFooter = styled.div`
    background-color: #ffffff3d;
    height: 2px;
    width: 90px;
    margin-left: 2vw;
    margin-bottom: 1vh;
`

export { FooterContent, FooterSection, LineFooter };