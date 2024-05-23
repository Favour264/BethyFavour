import React from 'react';
import image from '../assets/image.png';

const Container = () => {
    return (
        <div class="bg-cover sm:max-w-7.2xl max-w-5.2xl " >
            <img src={image} alt="Picture" />
            <div className="justify-center sm:justify-normal sm:mb-0 mb-20">
            <div class="absolute inset-0 flex flex-col items-center justify-center position-top">
        <p class="text-grey sm:text-5xl text-2xl  font-light sm:text-top text-center mb-10 sm:mb-0">Discover Hidden Germs</p><br></br>
        <p class="items-center text-xl justify-center sm:text-xl small:mb-0 mb-20 sm:justify-center text-center  sm:text-center"> Explore Our Platform to uncover the untapped potential
        of experts, <br/> professionals and watch your company,s brilliance shine.</p>
    </div>
    </div>
        </div>
    );
}

export default Container;


