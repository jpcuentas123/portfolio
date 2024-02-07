import styled from 'styled-components'

const FooterSection = styled.section`
  height: 40vh;
  background-color: hsla(0, 0%, 38%, 0.85);
  @media only screen and (max-width: 768px) {
    height: auto;
  }
`

const FooterContent = styled.section`
  padding-left: 5vw;
  padding-top: 10vh;
  color: white;
  display: flex;
  gap: 5vw;
  .Footer-socials {
    a {
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
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
      transition: all 0.4s;
    }
    li:hover {
      color: rgb(206, 206, 206);
    }
  }
  & .Footer-contact {
    a {
      text-decoration: none;
    }
  }
  a {
    display: block;
    color: white;
    margin: 15px 0;
    padding: 2px;
    transition: all 0.3s;
  }
  a:hover {
    color: #fdfdfd2d;
  }
  a:focus {
    color: #fdfdfd2d;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 10vh;
  }
`

const LineFooter = styled.div`
  background-color: #ffffff3d;
  height: 2px;
  width: 90px;
  margin-left: 2vw;
  margin-bottom: 1vh;
`

export { FooterContent, FooterSection, LineFooter }
