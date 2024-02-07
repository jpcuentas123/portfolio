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
  grid-template-columns: 0.3fr 1fr;
`

export default ExperienceItemsWrapper
