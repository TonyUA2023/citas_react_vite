import { useEffect } from "react"
import Paciente from "./Paciente"

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

  

  return (
    <div className='md:w-1/2 lg:w-3/5 xl:p-5 '>

          {pacientes && pacientes.length ? (

            <>
              <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
              <p className='text-xl mb-10 text-center'>
                Administra tus {''}
                <span className='text-indigo-600 font-bold '>
                  Pacientes y Citas
                </span>
              </p>      

              <div className="md:h-screen md:overflow-scroll">

                { pacientes.map( paciente => {
                  return (
                    <Paciente
                      key={paciente.id}
                      paciente={paciente}
                      setPaciente={setPaciente}
                      eliminarPaciente = {eliminarPaciente}
                    />
                  )
                })}
              </div>
            </>
            
          ) : (

            <>
              <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
              <p className='text-xl mb-10 text-center'>
                Comienza agregando pacientes {''}
                <span className='text-indigo-600 font-bold '>
                  y Apareceran en este lugar
                </span>
              </p>  
            </>

          )}

          
                   

    </div>
  )
}

export default ListadoPacientes
