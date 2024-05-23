import React from 'react'
import photo1 from '../assets/fav.jpg'

export const Container5 = () => {
    return (
    <div className="flex sm:flex-row justify-center sm:justify-center p-2 sm:p-5 ml-5 sm:ml-20 w-6/6 sm:w-5/6 items-center text-gray-500 bg-gray-200 mt-10">
        <div className="flex flex-col justify-center items-center mb-5">
            <h1 className="text-3xl text-center float-top-left">What our <span className="font-lg text-3xl text-black">germs</span><br/>are saying...</h1>
            <p className="text-center text-xl sm:text-2xl pt-20">Discover the voices of excellence from our<br/>extraordinary engineering community.</p>
        </div>
        <div className="flex-col justify-center items-center text-black text-xl sm:text-2xl  pt-20">
            <p className="text-center p-0 ml-5 sm:ml-10">TalentGem has been a game-changer.
            <br/> With expert mentors always by my side,<br/>
             I've soared past obstacles and reached <br/>new heights in my career.
              It's more than <br/> a platform; it's a lifeline for engineers. 😍</p>

              <ol className="list-disc pl-10 mt-10 ml-10">
                <li>Jamilu Paiko (Software Engineer)</li>
              </ol>

              <div className="flex flex-row sm:flex-row">
            <img 
                className="w-20 h-20 mb-20  ml-0 sm:ml-10 mt-10 flex-none rounded-full"
                src={photo1} 
                alt="Picture" 
            />
             <img 
                className="w-20 h-20 mb-20 ml-0 sm:ml-10 mt-10 flex-none rounded-full"
                src={photo1} 
                alt="Picture" 
            />
             <img 
                className="w-20 h-20 mb-20 ml-0 sm:ml-10 mt-10 flex-none rounded-full"
                src={photo1} 
                alt="Picture" 
            />
            </div>
        </div>
    </div>







    )
}



