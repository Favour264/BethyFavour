import React from 'react';
import photo1 from '../assets/iuat.jpg'

export const Container6 = () =>{
  return (
<div className="mt-20">
<div className="flex flex-col sm:flex-row ">
  <div className="flex-row  mr-5 sm:mr-20">
        <h3 className=' text-4xl sm:text-5xl font-thin text-gray-500 ml-20 lg:ml-20 md:ml-20 sm:ml-20'>Latest <br/> Articles</h3><br/>
        <h4 className=' text-2xl font-thin text-gray-500 ml-10 lg:ml-20 md:ml-20 sm:ml-20'>Explore our latest insights, innovations, views, ideas<br/> and case studies.</h4>
        <button className='bg-green-700 p-2 sm:p-4 ml-10 mb-5 lg:ml-20 md:ml-20 sm:ml-20 mt-10 rounded-xl text-white sm:w-40 w-30'>See more</button>
  </div>
  <div className="flex flex-col sm:flex-row float-right gap-3 sm:gap-5 ">
    <div className="flex-col sm:flex-row">
        <div className="w-80 bg-white border-2 border-gray-400 ml-10 lg:ml-0 md:ml-0 sm:ml-0  mr-0 sm:mr-20 mb-5 sm:mb-20">
            <img  className="w-80  object-cover" src={photo1} alt="Picture" />
            <div className="p-2">
                <h1 className='text-2xl font-bold text-black mb-5'>AI IN MANUFACTURING</h1>
                <h2 className='text-green-600 mb-5'>Industry Revolution</h2>
                <p className="">Explore the transformative power of Artificial intelligence in manufacturing, as we delve into cutting-edge applications and how it's reshaping traditional processes to boost efficiency, reduce costs, and accelerate the industry into the future.</p>
            </div>
        </div>

        <div className="w-80 bg-white border-2 border-gray-400 ml-10 lg:ml-0 md:ml-0 sm:ml-0 mb-10 sm:mb-20">
            <img  className="w-80 object-cover" src={photo1} alt="Picture" />
            <div className="p-2">
                <h1 className='text-2xl font-bold text-black mb-5'>Green Advancements</h1>
                <h2 className='text-green-600 mb-5'>Eco Friendly Provision</h2>
                <p className="">Explore the transformative power of Artificial Intelligence in manufacturing, as we delve into cutting-edge applications and how it's reshaping traditional processes to boost efficiency, reduce costs, and accelerate the industry into the future.</p>
            </div>
        </div>
    </div>
    <div className="flex-col sm:flex-row">
        <div className="w-80 bg-white border-2 border-gray-400 ml-10 lg:ml-0 md:ml-0 sm:ml-0 sm:mr-20 mr-0  sm:mb-20 mb-10 ">
            <img  className="w-80 object-cover" src={photo1} alt="Picture" />
            <div className="p-2">
                <h1 className='text-2xl font-bold text-black mb-5'>Blockchain & Security</h1>
                <h2 className='text-green-600 mb-5'>Protecting Data</h2>
                <p className="">Explore the transformative power of Artificial Intelligence in manufacturing, as we delve into cutting-edge applications and how it's reshaping traditional processes to boost efficiency, reduce costs, and accelerate the industry into the future.</p>
            </div>
        </div>
        <div className="w-80 bg-white border-2 border-gray-400 ml-10 lg:ml-0 md:ml-0 sm:ml-0 mb-5">
            <img  className="w-80 object-cover" src={photo1} alt="Picture" />
            <div className="p-2">
                <h1 className='text-2xl font-bold text-black mb-5'>Quantum Computing</h1>
                <h2 className='text-green-600 mb-5'>Next Frontier</h2>
                <p className="">Explore the transformative power of Artificial Intelligence in manufacturing, as we delve into cutting-edge applications and how it's reshaping traditional processes to boost efficiency, reduce costs, and accelerate the industry into the future.</p>
            </div>
        </div>
    </div>
  </div>
</div>
</div>


  );
}