import { useState } from "react";
import "../css/styles.css";

function CarModal(props: any) {

    const { archives, ...restOfOffers } = props.setOfertas;

    const setOfertas = props.setOfertas;
    const images = setOfertas.archives.map((archivo: any) => archivo.filename);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const shouldHideButtons = images.length <= 1;

    function formatDate(dateString: string) {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    return (
        <div>
            <div
                id="controls-carousel"
                className="relative w-full"
                data-carousel="static"
            >
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {images.map((src: any, index: any) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === currentImageIndex ? "active" : ""
                                }`}
                        >
                            <img
                                src={src}
                                className="rounded-lg absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            />
                        </div>
                    ))}
                </div>
                {!shouldHideButtons && (
                    <div>
                        <button
                            type="button"
                            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-prev
                            onClick={prevImage}
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                    className="w-4 h-4 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 1 1 5l4 4"
                                    />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button
                            type="button"
                            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-next
                            onClick={nextImage}
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                    className="w-4 h-4 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                )}
            </div>
            {Object.keys(restOfOffers).map((key) => (
                <div key={key}></div>
            ))}
            <div className="flex items-center justify-center mt-2">
                <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl border-gray-700 bg-gray-800 ">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                            {restOfOffers.name}
                        </h5>
                        <p className="mb-3 font-normal text-gray-400">
                            {restOfOffers.description}
                        </p>
                        <div className="flex ">
                            <p className="flex-1 mr-2 mb-3 font-normal text-white">
                                Precio {restOfOffers.price.toLocaleString()}
                            </p>
                        </div>

                        <div className="flex justify-between">

                            <a href={restOfOffers.linkBuys} target="_blank" className="text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                Leer
                            </a>

                            <a href={restOfOffers.linkRead} target="_blank" className="text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                Escuchar
                            </a>

                            <a href={restOfOffers.linkListen} target="_blank" className="text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                Comprar
                            </a>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarModal;

