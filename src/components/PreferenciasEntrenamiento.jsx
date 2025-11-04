import { useForm } from 'react-hook-form';
import "./PreferenciasEntrenamiento.css";

const PreferenciasEntrenamiento = ({ onPreferenciasCompletadas, datosGuardados }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: datosGuardados || {}
  });

  const onSubmit = (data) => {
    console.log("DATOS DE PREFERENCIAS:", data);
    onPreferenciasCompletadas(data);
  };

  const tiposEntrenamiento = [
    'Cardio',
    'Crossfit',
    'Bodybuilding',
    'Pilates',
  ];

  const objetivos = [
    'Ganar musculo',
    'Mejorar la resistencia',
    'Pérdida de peso',
    'Estar en forma en general'
  ];

  return (
   <div className="preferencias-container animate-slide">
      <h2>Preferencias de Entrenamiento</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* TIPOS DE ENTRENAMIENTO */}
        <div className="campo-formulario">
          <label>Tipos de entrenamiento preferidos</label>
          {tiposEntrenamiento.map((tipo) => (
            <div key={tipo} className="opcion-checkbox">
              <input
                type="checkbox"
                id={tipo}
                value={tipo}
                {...register('tiposEntrenamiento', {
                  required: 'SELECCIONA EL TIPO DE ENTRENAMIENTO'
                })}
              />
              <label htmlFor={tipo}>{tipo}</label>
            </div>
          ))}
          {errors.tiposEntrenamiento && (
            <span className="error-mensaje">{errors.tiposEntrenamiento.message}</span>
          )}
        </div>

        {/* OBJETIVOS */}
        <div className="campo-formulario">
          <label>Objetivos principales</label>
          {objetivos.map((objetivo) => (
            <div key={objetivo} className="opcion-checkbox">
              <input
                type="checkbox"
                id={objetivo}
                value={objetivo}
                {...register('objetivos', {
                  required: 'SELECCIONA TU OBJETIVO'
                })}
              />
              <label htmlFor={objetivo}>{objetivo}</label>
            </div>
          ))}
          {errors.objetivos && (
            <span className="error-mensaje">{errors.objetivos.message}</span>
          )}
        </div>

        {/* NIVEL DE EXPERIENCIA */}
        <div className="campo-formulario">
          <label htmlFor="nivelExperiencia">Nivel de experiencia</label>
          <select
            id="nivelExperiencia"
            {...register('nivelExperiencia', {
              required: 'SELECCIONA TU NIVEL DE EXPERIENCIA'
            })}
          >
            <option value="">Selecciona una opción</option>
            <option value="NewGen">NewGen</option>
            <option value="Veterano">Veterano</option>
            <option value="Experto">Experto</option>
          </select>
          {errors.nivelExperiencia && (
            <span className="error-mensaje">{errors.nivelExperiencia.message}</span>
          )}
        </div>

        {/* DISPONIBILIDAD */}
        <div className="campo-formulario">
          <label htmlFor="disponibilidad">Disponibilidad semanal</label>
          <select
            id="disponibilidad"
            {...register('disponibilidad', {
              required: 'Selecciona tu disponibilidad'
            })}
          >
            <option value="">Selecciona una opción</option>
            <option value="1-2">1-2 días/semana</option>
            <option value="3-4">3-4 días/semana</option>
            <option value="5++">5 o más días/semana</option>
          </select>
          {errors.disponibilidad && (
            <span className="error-mensaje">{errors.disponibilidad.message}</span>
          )}
        </div>

        {/* BOTÓN */}
        <button type="submit" className="btn-siguiente">
          Guardar Preferencias
        </button>
      </form>
    </div>
  );
};

export default PreferenciasEntrenamiento;
