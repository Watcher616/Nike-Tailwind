
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../assets/constant'

const Nav = () => {
return (
    <header className='padding-x absolute py-8 z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="#">
                <img src={headerLogo} alt="nike logo" height="29" width="129" className='m-0 w-[129px] h-[29px]'/>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((items) => (
                    <li key={items.label}>
                        <a href={items.href}
                        className='text-lg leading-normal font-montserrat text-slate-gray'>
                            {items.label}
                            </a></li>    
                ))
                }
            </ul>
            <div className='flex justify-center items-center gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:h-24'>
                <a href="#">Sign In</a>
                <span>/</span>
                <a href="#">Explore</a>
            </div>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="menu" width="25" height="25" />
            </div>
        </nav>
    </header>
)
}

export default Nav