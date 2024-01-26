import styled from 'styled-components'

const ExperienceContentWrapper = styled.div`
  width: 50vw;
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

export default ExperienceContentWrapper
