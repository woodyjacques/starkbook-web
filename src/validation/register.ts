import { FormEvent } from "react";
import { mostrarMensaje } from "../components/toast";
import axios from "axios";

const api = "https://backend-like.vercel.app";
// const api = import.meta.env.VITE_APP_API_URL;

export const handleSubmitUsers = async (
  event: FormEvent,
  name: string,
  email: string,
  password: string,
  isVerified:boolean,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setisVerify: React.Dispatch<React.SetStateAction<boolean>>
): Promise<boolean> => {
  event.preventDefault();
  const MensajeErrUsuario = document.getElementById("MensajeErrUsuario");
  const MensajeActUsuario = document.getElementById("MensajeActUsuario");

  if (name === "") {
    mostrarMensaje("Ingrese su nombre", MensajeErrUsuario);
    return false;
  }

  if (email === "") {
    mostrarMensaje("Ingrese su correo", MensajeErrUsuario);
    return false;
  }

  if (password === "") {
    mostrarMensaje("Ingrese su password", MensajeErrUsuario);
    return false;
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPassword("");
    setisVerify(false);
  }

  try {
    // const responseRegister = await axios.post(`${api}/auth/register`, { name, email, password, isVerified });
    // const mensaje = responseRegister.data.message;
    // mostrarMensaje(mensaje, MensajeActUsuario);
    resetForm();
    return true;
  } catch (error: any) {
    const message = error.response?.data.message;
    mostrarMensaje(message, MensajeErrUsuario);
    resetForm();
    return false;
  }
};