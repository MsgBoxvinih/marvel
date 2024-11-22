import './Search.css'
import { BiSearch } from "react-icons/bi";
 
const Searchinput = () => {
    return(
        <div className="search-input">
            <input placeholder='   Pesquisar'/>
            <BiSearch className='icon'/>
        </div>
    )
}

export default Searchinput

