import { useForm } from "react-hook-form";
import "./RegistroFormulario.css";

export default function RegistroFormulario({ OnDatosProcesados }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("DATOS USUARIO:", data);
    OnDatosProcesados(data); // → pasa al padre
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formulario-step animate-fade">
      <div className="registro-container">
        <h1>💪🏼🔥 WELCOME TO FITLIFE!! 🔥💪🏼</h1>
        <p>Excuses don’t burn calories</p>

        {/* NAME */}
        <div className="form-group">
          <label htmlFor="name">NAME</label>
          <input
            id="name"
            type="text"
            placeholder="Name and surname"
            {...register("name", {
              required: "THE NAME IS OBLIGATORY",
              minLength: { value: 2, message: "It must have at least 2 characters" }
            })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        {/* EMAIL */}
        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input
            id="email"
            type="email"
            placeholder="exampleEmail@gmail.com"
            {...register("email", { required: "THE GMAIL ACCOUNT IS REQUIRED" })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        {/* TELEFONO */}
        <div className="form-group">
          <label htmlFor="telefono">PHONE</label>
          <input
            id="telefono"
            type="tel"
            placeholder="Example: 666666666"
            {...register("telefono", {
              required: "THE PHONE NUMBER IS REQUIRED",
              minLength: { value: 9, message: "IT MUST HAVE 9 DIGITS" }
            })}
          />
          {errors.telefono && <span className="error">{errors.telefono.message}</span>}
        </div>

        {/* BOTÓN */}
        <button type="submit" className="btn-submit">CONTINUE</button>
      </div>
    </form>
  );
}