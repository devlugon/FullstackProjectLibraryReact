import styled, { keyframes } from 'styled-components';
import logo from '../../img/logo.svg';

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LogoReact = styled.img`
  height: 7vmin;
  pointer-events: none;
  margin-top: 10px;
  margin-right: 30px;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppLogoSpin} infinite 50s linear;
  }
`

const LogoContainer = styled.div`
  display: flex;
  font-size: 25px;
`

function Logo() {
  return (
    <LogoContainer>
      <LogoReact src={logo} alt="logo" />
      <p><strong>Library</strong>React</p>
    </LogoContainer>
  )
}

export default Logo;