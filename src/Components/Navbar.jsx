import react from 'react'

const Navbar = () =>{
    return(
      <div className="width-50">
            <div className="border-b border-black container mx-auto flex flex-wrap md:flex-no-wrap justify-between items-center font-small">
              <div className="border-r-2 border-black h-full flex flex-no-wrap items-center text-green-800 text-small:text-xl sm font-bold p-1 sm:p-5">TalentGem</div>
              <div className="flex flex-row sm:flex-row flex-wrap justify-center md:justify-start md:flex-no-wrap">
                <a href="#" className="text-black mr-1 sm:mr-8 md:ml-0 md:my-0 my-2">For Companies</a>
                <a href="#" className="text-black mr-1 sm:mr-10 md:my-0 my-2">For Talents</a>
              </div>
              <div className="flex flex-no-wrap  sm:ml-auto ml-1">
                <a href="#" className="text-black mr-1 sm:mr-8 md:my-0 my-2">Sign In</a>
                <a href="#" className="text-green-8m00 font-bold my-2">Get Started</a>
              </div>
            </div>
            </div>
        
        
    )
}

export default Navbar