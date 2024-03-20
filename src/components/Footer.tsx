import { NavLink, Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="rounded-lg shadow bg-gray-900 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <NavLink to="/liketechnology-articulos" className="flex items-center mb-4 sm:mb-0">
                        <img src="https://png.pngtree.com/png-clipart/20230805/original/pngtree-book-book-cartoon-illustration-png-image_9418601.png" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            StarkBook
                        </span>
                    </NavLink>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                        <li>
                            <Link target="_blank"
                                to="https://www.tiktok.com/@woodyjacques"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank"
                                to="https://api.whatsapp.com/send?phone=18098820434"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-gray-400">
                    © 2024{" "}
                    <Link
                        to="https://www.tiktok.com/@woodyjacques"
                        className="hover:underline"
                        target="_blank"
                    >
                        Woody Jacques™
                    </Link>
                    . Todos los derechos reservados.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
