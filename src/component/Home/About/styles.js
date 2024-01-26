import styled from 'styled-components'

const AboutWrapper = styled.section`
  .Home-about-content {
    padding-top: 20vh;
    @media (max-width: 600px) {
      padding-top: 10vh;
    }
    @media (min-width: 700px) and (max-width: 1000px) {
      max-width: 80%;
    }
    @media (min-width: 1000px) {
      max-width: 70%;
    }
    @media (min-width: 1200px) {
      max-width: 60%;
    }
    @media (min-width: 1500px) {
      max-width: 50%;
    }

    &-skills {
      margin-top: 4vh;
    }

    h2 {
      padding-left: 30px;
      @media (max-width: 600px) {
        padding-left: 20px;
      }
      @media (min-width: 1000px) {
        padding-left: 60px;
      }
    }
    &-description {
      padding: 0 40px;
      @media (max-width: 600px) {
        padding: 0 20px;
      }
      @media (min-width: 1000px) {
        padding: 0 127px;
      }
    }
  }

  & .Home-about-content-skills {
    display: flex;
    width: 100%;
    margin: auto;
    margin-top: 37px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 500px) {
      width: 60%;
      flex-direction: row;
      align-items: start;
      justify-content: space-between;
    }
  }
`

export { AboutWrapper }
