import React from 'react';
import image from '../assets/ret.png';

export const Container4 = () => {
            return (
                <div className="relative">
                    <img src={image} alt="Picture" className="w-full h-full object-cover" />
                    <div className="absolute pb-10 pt-10 inset-0 flex flex-col justify-center items-center text-center px-6">
                        <h2 className="text-small sm:text-3xl font-light text-white">
                            How do TalentGems function so efficiently?
                        </h2>
                        <div className="mt-1 sm:mt-6 ">
                            <p className="text-white mb-1 sm:mb-6">
                                Our mission is to empower our gems to excel by offering them access to a network of seasoned experts who serve as mentors, available around the clock.
                            </p>

                        </div>
                    </div>
                </div>
            );
        };