import React from 'react'
import flutter from '../assets/jumia.png'


const Container2 = () =>{
    return(
       <div class="">
        <p class="font-light text-lg text-center sm:mt-10 mt-5">
          Our gems work at:
        </p>
        <img
        src={flutter} alt="Pics" 
        className="w-full md:w-200 lg:w-200 xl:w-3/3"

        />
       </div>
    )
}

export default Container2