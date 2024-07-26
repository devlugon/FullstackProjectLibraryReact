
import Logo from '../Logo'
import HeaderOptions from '../HeaderOptions'
import HeaderIcons from '../HeaderIcons'
import styled from 'styled-components'

const HeaderContainer = styled.header`
        position: sticky;
        top:0;
        background: linear-gradient(90deg, #282c3435, rgb(46, 50, 56));
        display: flex;
        justify-content: center;
        align-items: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <HeaderOptions />
            <HeaderIcons />
        </HeaderContainer>
    )
}

export default Header