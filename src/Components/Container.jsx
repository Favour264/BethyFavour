import React from 'react';
import image from '../assets/image.png';

const Container = () => {
    return (
        <div class="bg-cover sm:max-w-5.2xl max-w-7.2xl " >
            <img src={image} alt="Picture" />
            <div class="absolute inset-0 flex flex-col items-center justify-center">
        <p class="text-grey sm:text-5xl text-2xl  font-light sm:text-top text-center">Discover Hidden Germs</p><br></br>
        <p class="items-center justify-center mb-20 sm:justify-center text-center sm:text-center"> Explore Our Platform to uncover the untapped potential
        of experts, <br/> professionals and watch your company,s brilliance shine.</p>
    </div>
        </div>
    );
}

export default Container;
