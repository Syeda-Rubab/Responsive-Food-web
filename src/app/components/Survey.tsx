import React from 'react';
import Image from "next/image";

const Survey = () => {
  return (
    <div className="container pt-40">
        <div className="grid lg:grid-cols-[50%,1fr] gap-20">
            <div>
                <Image className="w-[100%] h-auto lg:w-auto lg:h-[90vh]"
                 src="/survey.png"
                 width={1000}
                 height={600}
                 alt="survey image"
                 />
            </div>
          <div className="self-center">
            <h2 className="text-4xl md:text-6xl font-bold">Survey</h2>
            <h2 className="text-4xl md:text-6xl font-bold pt-3">
                About our <span className="text-accent">Food</span>
            </h2>
             <p className="text-gray-700 pt-16">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
                tempora maiores aliquid architecto a numquam fuga, ab commodi enim
                perspiciatis delectus necessitatibus omnis neque asperiores
                dicta culpa aut in ducimus!
             </p>
             <p className="text-gray-700 pt-8">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse 
                 exercitationem, quis nam, culpa ducimus asperiores quod ratione
                 quo et, impedit est dolorem placeat libero odit! Explicabo
                 amet recusandae voluptatem vero.
             </p>
             </div>
         </div>
     </div>
  );
};

export default Survey
