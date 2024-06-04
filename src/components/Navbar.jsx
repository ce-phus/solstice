import React, {useEffect, useState} from 'react'
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import logo from "/sologo.png"
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {

    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup function to remove the event listener when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    

  useEffect(()=>{
    const burgerClickHandler = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const menuBackdropClickHandler = () => {
        setIsMenuOpen(false);
    };

    document.querySelectorAll('.navbar-burger').forEach(burger => {
        burger.addEventListener('click', burgerClickHandler);
    });

    document.querySelectorAll('.navbar-close').forEach(closeButton => {
        closeButton.addEventListener('click', closeMenu);
    });

    document.querySelectorAll('.navbar-backdrop').forEach(backdrop => {
        backdrop.addEventListener('click', menuBackdropClickHandler);
    });

    return () => {
        document.querySelectorAll('.navbar-burger').forEach(burger => {
            burger.removeEventListener('click', burgerClickHandler);
        });

        document.querySelectorAll('.navbar-close').forEach(closeButton => {
            closeButton.removeEventListener('click', closeMenu);
        });

        document.querySelectorAll('.navbar-backdrop').forEach(backdrop => {
            backdrop.removeEventListener('click', menuBackdropClickHandler);
        });
    };
}, []);
  return (

    <>
    <nav className={`${styles.paddingX} w-full flex items-center justify-between ${scrolled ? "bg-primary" : "bg-transparent"}`}>
        <Link to='/' className='flex items-center gap-2'
        onClick={()=> {
            setActive("")
            window.scrollTo(0,0)
        }}>
            <img
            src={logo}
            width={200}
            height={50}
            className='object-contain'/>
        </Link>

        <div className="lg:hidden">
			<button className="navbar-burger flex items-center text-dark-600 p-3">
				<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>

        <ul className='hidden absolute left-[50%] transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6'>
        <li><a className="text-sm text-gray-400 hover:text-gray-500" href="/">Home</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a className="text-sm text-blue-600 font-bold" href="/menu">Services</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a className="text-sm text-gray-400 hover:text-gray-500" href="/AboutPage">About Us</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Pricing</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a className="text-sm text-gray-400 hover:text-gray-500" href="/contact">Contact</a></li>
		</ul>
		<div className="relative group hidden sm:block px-2">
              <input
                type="text"
                placeholder="Search"
                className="
              search-bar
              px-2
              "
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-accent absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
	
    
    </nav>

    <div className={`navbar-menu relative z-50  ${isMenuOpen ? "": "hidden"}`}>
        <div className='navbar-backdrop fixed inset-0  opacity-25'></div>
        <nav className='fixed top-0 left-o bottom-0  flex flex-col w-5/6 max-w-sm py-6 px-6 bg-primary border-r overflow-y-auto'>
            <div className='flex items-center mb-8'>
                <a className='mr-auto text-3xl font-bold' href='#'>
                    <img
                    src={logo}/>
                </a>
                <button class="navbar-close">
					<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
                </div>
                <div>
                
				<ul>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/">Home</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/menu">Services</a>
					</li>
					<li className="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/AboutPage">About Us</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/">Pricing</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/contact">Contact</a>
					</li>
				</ul>
			</div>
			<div className="mt-auto">
				<div className="pt-6">
					
				</div>
				<p className="my-4 text-xs text-center text-gray-400">
					<span>Copyright © 2021</span>
				</p>
            </div>
            
        </nav>
    </div>
    </>
  )
}

export default Navbar