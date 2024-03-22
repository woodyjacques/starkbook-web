import { FormEvent } from "react";
import { mostrarMensaje } from "../components/toast";
import axios from "axios";

const api = "https://stark-backend-pink.vercel.app";

export interface SesionData {
    token: string;
    name: string;
    email: string;
    telefone: string;
  }
  
  export const handleSubmitUserSesion = async (
    event: FormEvent,
    email: string,
    password: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>
  ): Promise<SesionData | null> => {
    event.preventDefault();
    const MensajeErrUsuario = document.getElementById("MensajeErrUsuario");
    const MensajeActUsuario = document.getElementById("MensajeActUsuario");
  
    if (email === "") {
      mostrarMensaje("Ingrese su correo", MensajeErrUsuario);
      return null;
    }
  
    if (password === "") {
      mostrarMensaje("Ingrese su contraseña", MensajeErrUsuario);
      return null;
    }
  
    function resetForm() {
      setEmail("");
      setPassword("");
    }
  
    try {
      const responseSesion = await axios.post(`${api}/auth/login`, { email, password });
      const token = responseSesion.data.token;
      const name = responseSesion.data.name;
      const emaile = responseSesion.data.email;
      const telefone = responseSesion.data.telefone;
      resetForm();
      mostrarMensaje("Cargando ...", MensajeActUsuario);
      return { token, name, email: emaile, telefone };
    } catch (error: any) {
      const message = error.response?.data.message;
      mostrarMensaje(message, MensajeErrUsuario);
      resetForm();
      return null;
    }
  };