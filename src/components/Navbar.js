import React, {useState} from 'react'
import { Link , useLocation } from 'react-router-dom';

export default function Navbar() {
	let Links = [
		{ name: "Home", link: "/" },
		{ name: "Fees Voucher", link: "/fee-voucher" },
		{ name: "Exam Results", link: "/result" },
		{ name: "Hall Ticket", link: "/hall-ticket" }
	];

	const [navbarOpen, setNavbarOpen] = useState(false);
    const location = useLocation();
	return (
		<nav className="shodow-md w-full sticky top-0 left-0 z-50 bg-gradient-to-r from-[#f4510b] to-[#e9d022] border-b-2">
			<div className="md:flex items-center justify-between py-4 md:px-10 px-4">
            {console.log(location.pathname)}
            <Link to={'/'} class="flex title-font font-bold items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-orange-800 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Student Portal</span>
          </Link>
				
				<ul className={'bg-orange-400 xl:bg-transparent xl:flex xl:items-center h-screen xl:h-auto xl:pb-0 pb-12 absolute xl:static xl:z-auto z[-1] left-0 top-[72px] w-full xl:w-auto xl:pl-0 pl-9 transition-all duration-200 ease-in' + (navbarOpen ? " block" : " hidden" )}>
                {
					Links.map((link) => (
						<li key={link.name} className="xl:ml-8 w-fit text-md font-bold text-white xl:my-0 my-7">
							<Link to={link.link} className={`py-2 px-3 rounded-md transition-all duration-200 ease-in hover:opacity-75 hover:bg-orange-600 ${link.link == location.pathname ? 'bg-white text-black' : 'bg-none'}`}>{link.name}</Link>
						</li>	
					))		
				}
                <li key="Information" className="xl:ml-8 w-fit text-md font-bold text-white xl:my-0 my-7">
							<Link to={'/information'} className={`py-2 px-3 rounded-md transition-all duration-200 ease-in hover:opacity-75 hover:bg-orange-600 ${location.pathname == '/information' ? 'bg-white text-black' : 'bg-none'}`}>Information</Link>
						</li>
                    <li className='xl:ml-8 text-md font-medium xl:my-0 my-7'><button class="inline-flex items-center text-gray-600 bg-gray-100 border-0 py-2 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 hover:bg-orange-500 hover:text-white transition-colors duration-300 ease-linear">
              Logout
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button></li>
				</ul>


				<div onClick={() => setNavbarOpen(!navbarOpen)} className="absolute right-8 top-6 cursor-pointer transition-all duration-500 ease-in xl:hidden">
					{
						navbarOpen
							?
							(<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
							</svg>)
							:
							(<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
							</svg>)
					}					
				</div>
			</div>
		</nav>
	)
}   