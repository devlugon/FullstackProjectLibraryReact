import './style.css'
import logo from '../../img/logo.svg';

function Logo() {
    return (
        <div className="logo">
            <img src={logo}
            className="logo-react"
            alt="logo"></img>
            <p><strong>Library</strong>React</p>
        </div>
    )
}

export default Logo;