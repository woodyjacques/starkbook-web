
function Header() {

    return (
        <nav className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 border-gray-600  bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://png.pngtree.com/png-clipart/20230805/original/pngtree-book-book-cartoon-illustration-png-image_9418601.png" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">StarkBook</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href="/starkbook-sesion
                    "><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Empezar</button></a>
                </div>
            </div>
        </nav>
    );

}

export default Header;

