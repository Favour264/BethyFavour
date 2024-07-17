import React from 'react'
import flutter from '../assets/jumia.png'


const Container2 = () =>{
    return(
       <div class="">
        <p class="font-light text-2xl text-center sm:mt-10 md:mt-10 lg:mt-10 mb-5 ">
          Our gems work at:
        </p>
        <img
        src={flutter} alt="Pics" 
        className="w-full h-30 sm:h-40md:w-200 lg:w-200 xl:w-3/3"

        />
       </div>
    )
}

export default Container2