import perfil from '../../img/download-imagens/perfil.svg'
import sacola from '../../img/download-imagens/sacola.svg'
import styled from 'styled-components'

const Icon = styled.li`
    margin-right:40px;
    width: 25px;
    list-style: none;
`

const Icons = styled.ul`
    display: flex;
    align-items: center;
    filter: brightness(1) saturate(100%) invert(70%) sepia(100%) saturate(1000%) hue-rotate(180deg);
`

const icons = [perfil, sacola]

function HeaderIcons(){
    return(
      <Icons>
        {icons.map((icon) => (<Icon><img src={icon}></img></Icon>))}
      </Icons>
    )
}

export default HeaderIcons