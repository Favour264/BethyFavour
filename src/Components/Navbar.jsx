import react from 'react'

const Navbar = () =>{
    return(
            <div className="border-b border-black container mx-auto flex flex-wrap md:flex-no-wrap justify-between items-center font-small">
              <div className="border-r-2 border-black h-full flex items-center text-green-800 text-xl font-bold p-1 sm:p-5">TalentGem</div>
              <div className="flex flex-row sm:flex-row flex-wrap justify-center md:justify-start md:flex-nowrap">
                <a href="#" className="text-black mr-4 md:mr-8 md:ml-0 md:my-0 my-2">For Companies</a>
                <a href="#" className="text-black mr-4 md:mr-10 md:my-0 my-2">For Talents</a>
              </div>
              <div className="flex ml-auto">
                <a href="#" className="text-black mr-4 md:mr-8 md:my-0 my-2">Sign In</a>
                <a href="#" className="text-green-800 font-bold my-2">Get Started</a>
              </div>
            </div>
        
    )
}

export default Navbar