import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';



 export const Container3 = () =>{
    return(
        <div class=" flex flex-col sm:flex-row ">
          <h1 class="font-light sm:text-4xl text-2xl  text-gray-500 ml-5">
           <span className='underline'>  TalentGerm</span> is a private network for professional<br/> <span class="text-green-500">software
            engineers </span>supported by seasoned experts
          </h1>
          <div class=" flex flex-wrap gap-7 mb-10" >
          <div class="w-4/6 sm:w-2/5 h-30 sm:h-40 text-white bg-purple-800 mt-5 md:ml-5 sm:ml-10  lg:ml-5 ml-[20px] rounded-2xl ">
          <h1 class="font-bold px-7 mt-8">Learn</h1>
          <p class="px-7 mt-3">Get relevant industry-standard training with our curriculum.</p>
          <FontAwesomeIcon icon={faGreaterThan}
          class="w-8 sm:w-7 h-8 sm:h-7 rounded-full bg-white text-purple-800 float-right mr-5 mb-5" />
          </div>

          <div class="w-4/6 sm:w-2/5 h-30 sm:h-40 text-white bg-pink-600 pb-5 md:ml-5 sm:ml-10 ml-[20px] lg:ml-5  rounded-2xl ">
          <h1 class="font-bold px-7 mt-8">Join</h1>
          <p class="px-7 mt-3">Get noticed by top companies looking for your services today.</p>
          <FontAwesomeIcon icon={faGreaterThan}
          class="w-8 sm:w-7 h-8 sm:h-7 rounded-full bg-white text-pink-600 float-right mr-5" />
          </div>

          <div class="w-4/6 sm:w-2/5 h-30 sm:h-40 text-white bg-green-500 pb-5 md:ml-5 sm:ml-10  lg:ml-5 ml-[20px] rounded-2xl ">
          <h1 class="font-bold px-7 mt-8">Mentor</h1>
          <p class="px-7 mt-3">Onboard as a mentor to leave a legacy and impact the tech industry.</p>
          <FontAwesomeIcon icon={faGreaterThan}
          class="w-8 sm:w-7 h-8 sm:h-7 rounded-full bg-white text-green-500 float-right mr-5" />
          </div>

          <div class="w-4/6 sm:w-2/5 h-30 sm:h-40 text-white bg-black sm:ml-10 pb-5 md:ml-5 lg:ml-5 ml-[20px] rounded-2xl ">
          <h1 class="font-bold px-7 mt-8">Hire</h1>
          <p class="px-7 mt-3">Explore gems at competitive rates starting at just ₦70,000!</p>
          <FontAwesomeIcon icon={faGreaterThan}
          class="w-8 sm:w-7 h-8 sm:h-7 rounded-full bg-white text-black float-right mr-5" />
          </div>
          </div>
        </div>
    )
}

