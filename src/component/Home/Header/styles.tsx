import styled from 'styled-components'

const HeaderWrapper = styled.aside`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  background: hsla(0, 0%, 94%, 0.98) !important;

  nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 20px;
    gap: 20px;
    font-weight: 600;
    font-size: 14px;
    color: #455a64;
  }
`

const MenuItem = styled.a<{ linkActive: boolean }>`
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: ${({ linkActive }) =>
    linkActive ? '1px solid #000' : '1px solid transparent'};
  transition: all 0.3s;
  color: #455a64;
  &:visited {
    color: inherit;
  }
  &:hover {
    color: black;
    border-bottom: 1px solid #000;
  }
`

export { HeaderWrapper, MenuItem }
