import {AiFillInstagram} from 'react-icons/ai'
import HeaderLogo from '../assets/header_logo.png'
import classes from '../Components/Header.module.css';
 const Header = ()=>{
    return (
        <header className={`${classes['header']}`}>
            <div className="flex items-center gap-4 font-sans font-semibold uppercase tracking-wide font-helvetica p-2 font-">
                <picture>
                    <img className='color' src={HeaderLogo} alt="" />
                </picture>
            <h1 className={classes['h1']}>Shrekgram</h1>
            </div>
        </header>
    )
}

export default Header;