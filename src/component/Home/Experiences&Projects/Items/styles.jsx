import styled from 'styled-components'

const ExperienceItemsWrapper = styled.div`
  width: 50vw;
  .company-name {
    a {
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 4px;
      color: #1c1c1c;
      transition: all 0.4s;
    }
    a:hover {
      color: #5f5f5f;
    }
  }
  h4 {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 0 20px;
  }
  @media (min-width: 600px) and (max-width: 800px) {
    width: 70vw;
  }
  @media (min-width: 800px) and (max-width: 1200px) {
    width: 60vw;
  }
  display: grid;
  grid-template-columns: 30% 70%;
  .Experiences-content-tools {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    &-technology {
      background: linear-gradient(0.2turn, #455a64, #455a64b8);
      color: white;
      padding: 2px 8px;
      border-radius: 5px;
      transition: all 0.4s;
      cursor: pointer;
      user-select: none;
      &:hover {
        background: linear-gradient(0.2turn, #455a64, #455a64b8 50%);
      }
    }
  }
`

export default ExperienceItemsWrapper
