import React from 'react'


 export const Footer = () =>{
    return(
        <div className="w-full bg-gray-900 ">
        <div className=" p-10  ml-20 flex flex-col sm:flex-row">
            <div className="">
            <h1 className="text-green-500 font-semibold text-2xl">TalentGerm</h1>
            <p className="text-gray-500 mt-5 ">Subscribe to our newsletter</p>
            <input type="text"
            placeholder="Enter your email here"
             class="border bg-transparent border-gray-300 rounded-3xl px-4 w-4/6 py-2
              mt-5 focus:outline-none focus:border-gray-600"></input>
              <p className=" mt-20 text-white">© 2023 TalentGem Inc. Copyright and rights reserved</p>
              </div>
              <div className="flex-col ml-20">
              <h3 className="text-xl text-white">Network</h3>
              <ul>
                <li className='mt-3 text-gray-500'>Join as Germ</li>
                <li className='mt-3 text-gray-500'>Join as Mentor</li>
                <li className='mt-3 text-gray-500'>Opportunities</li>
                <li className='mt-3 text-gray-500'>Community</li>
              </ul>
              </div>
              <div className="flex-col ml-20 ">
              <h3 className="text-xl text-white">For Companies</h3>
              <ul>
                <li className='mt-3 text-gray-500'>Start hiring!</li>
                <li className='mt-3 text-gray-500'>How it works</li>
                <li className='mt-3 text-gray-500'>Pricing</li>
                <li className='mt-3 text-gray-500'>About us</li>
              </ul>
              <p className=" mt-10 text-white ">Terms & Conditions . Policy</p>
              </div>
              <div className="flex-col ml-20">
              <h3 className="text-xl text-white">Resources</h3>
              <ul>
                <li className='mt-3 text-gray-500'>Updates</li>
                <li className='mt-3 text-gray-500'>Security</li>
                <li className='mt-3 text-gray-500'>FAQ</li>
                <li className='mt-3 text-gray-500'>Our podcast</li>
              </ul>
              </div>
        </div>
        </div>
    )
}