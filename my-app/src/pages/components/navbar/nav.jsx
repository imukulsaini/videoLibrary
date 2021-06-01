import {useNavigate} from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import "./nav.css";

export function NavBar()
{
  const navigate = useNavigate();
    return (
        <>
         <nav className="nav">

        <div 
        onClick={()=>navigate('/')}
        className="nav__logo">
          skateboard
          {/* <img src="" alt="" /> */}
        </div>
        <div className="search">

          <input
            className="search__input"
            type="text"
            placeholder="Search"
          >
            

          </input>
           <button className="search__button">
            <BiSearch/> 
            </button>
        </div>

        <div class="nav__avatar avatar">
            
          <img
          className="nav__avatar-image"
            alt=""
            src="https://pbs.twimg.com/profile_images/1372310949458112512/Isl5HmGT_400x400.jpg"
          />

          {/* <span 
          className="nav__avatar-name"
         > Mukul </span> */}

        </div>
    
        
        <button className="nav__dropdown-menu">        
          <IoIosArrowDropdownCircle 
          />
        </button>


      </nav>
        </>
    )
}