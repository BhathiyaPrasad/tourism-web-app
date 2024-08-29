import React from "react";

const LoadingCard = () => {


    return (

        <section className="text-gray-600 body-font bg-white">
            <div className="container px-5 py-22 mx-auto z-10">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                    <div className="flex w-100 flex-col gap-4">
                            <div className="skeleton h-32 w-55"></div>
                            <div className="skeleton h-4 w-55"></div>
                            <div className="skeleton h-4 w-55"></div>
                            <div className="skeleton h-4 w-28"></div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                    <div className="flex w-100 flex-col gap-4">
                            <div className="skeleton h-32 w-55"></div>
                            <div className="skeleton h-4 w-55"></div>
                            <div className="skeleton h-4 w-55"></div>
                            <div className="skeleton h-4 w-28"></div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex w-100 flex-col gap-4">
                            <div className="skeleton h-32 w-55"></div>
                            <div className="skeleton h-4 w-55"></div>
                            <div className="skeleton h-4 w-55"></div>
                            <div className="skeleton h-4 w-28"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
























    )
}

export default LoadingCard;