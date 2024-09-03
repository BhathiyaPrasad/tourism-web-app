import React from "react";

const LoadingEvent = () => {





    return (
        
            <section className="text-gray-600 body-font bg-white">
                <div className="container px-5 py-22 mx-auto z-10 ">
                    <div className="flex flex-wrap  justify-center">
                    <div className="p-4 w-full">
                      
                            <div className="flex flex-col gap-4 w-full">
                                <div className="skeleton h-32 w-100"></div>
                                <div className="skeleton h-6 w-50"></div>
                                <div className="skeleton h-4 w-10"></div>
                                <div className="skeleton h-4 w-10"></div>
                                <div className="skeleton h-4 w-10"></div>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
    )

}
export default LoadingEvent ; 