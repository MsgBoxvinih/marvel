import './Theme.css';
// import { BsFillMoonFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

const Theme = () => {
    return(
        <a className="navegacao" href="">
           <BsSun className='sol' alt='Tema claro'/>
            <div>
                <h1 className='titulo'>Tema Light</h1>
                <p className='subtitulo'>mudar tema</p>
            </div>
        </a>
    )
}

export default Theme