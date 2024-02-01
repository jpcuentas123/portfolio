import styled from 'styled-components'

const ResponsibilitiesWrapper = styled.div`
  .Responsibilities-title {
    text-decoration: underline;
  }
  ul {
    list-style-position: inside;
    padding-left: 10px;
    li:first-child {
      margin-top: 0px;
    }
    li {
      margin: 5px 0;
    }
  }
`

export default ResponsibilitiesWrapper
