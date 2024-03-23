import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";
import { handleSubmitUsers } from "../validation/register";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setisVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleSubmitRegister = async (event: FormEvent) => {
    const registrationSuccessful = await handleSubmitUsers(event, name, email, password, isVerified, setName, setEmail, setPassword, setisVerified);

    if (registrationSuccessful) {
      setTimeout(() => {
        navigate("/starkbook-emailverifi");
      }, 3000);
    }

  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow">
        <Header />
      </div>
      <div className="container flex flex-col mx-auto bg-gray-900 rounded-lg pt-14 my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="ml-2 mr-2 w-full h-full flex items-center xl:p-10">
              <form onSubmit={handleSubmitRegister} className={`mx-auto flex flex-col pb-6 text-center bg-gray-900 rounded-3xl ${windowWidth < 768 ? 'w-full' : ''}`}>
                <h3 className="mb-3 text-4xl font-extrabold text-white">Registro</h3>
                <p className="mb-4 text-white">Ingrese tus datos</p>
                <a
                  className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded text-gray-900 bg-white hover:bg-grey-400 focus:ring-4 focus:ring-grey-300"
                  href="https://stark-backend-pink.vercel.app/google"
                >
                  <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="" />
                  Registrate con google
                </a>
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  <p className="mx-4 text-white">O</p>
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                </div>
                <p
                  id="MensajeErrUsuario"
                  className=" hidden text-red-500 text-sm font-medium rounded-lg text-center"
                ></p>
                <p
                  id="MensajeActUsuario"
                  className=" hidden text-green-500 text-sm font-medium rounded-lg text-center"
                ></p>
                <label className="mb-2 text-sm text-start text-white">
                  Nombre*
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded"
                />
                <label className="mb-2 text-sm text-start text-white">
                  Correo*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded"
                />
                <label className="mb-2 text-sm text-start text-white">
                  Contraseña*
                </label>
                <div className="relative" >
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded"
                  />

                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                  >
                    {showPassword ? (
                      <p>Ocultar</p>
                    ) : (
                      <p>Mostrar</p>
                    )}
                  </button>
                </div>
                <div className="mt-8">
                  <button type="submit"
                    className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded hover:bg-blue-700 focus:ring-4 focus:ring-purple-blue-100 bg-blue-600"
                  >
                    Registrate
                  </button>
                </div>
                <p className="text-sm leading-relaxed text-white">
                  ¿Tienes cuenta? <a href="/starkbook-sesion" className="font-bold text-white">Inicia sesión aquí</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

};

export default Register;


