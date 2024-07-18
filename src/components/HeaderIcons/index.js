import './style.css'
import perfil from '../../img/download-imagens/perfil.svg'
import sacola from '../../img/download-imagens/sacola.svg'

const icons = [perfil, sacola]

function HeaderIcons(){
    return(
        <ul className="icons">
        {icons.map((icon) => (<li className="icon"><img src={icon}></img></li>))}
      </ul>
    )
}

export default HeaderIcons