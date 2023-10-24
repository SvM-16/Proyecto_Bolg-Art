import '../css/Formulario.css'

function FormularioObrasPages(){
    return(
        <div className='FormularioObras'>
            <div className='flex flex-col'>
                <p className="title1">Registro de Obra </p>
                <div className='card2'>
                    <form className="form3">
                        <label>
                            <input className="input1" type="text" placeholder="" required />
                            <span className='letra'>Nombre</span>
                        </label>
                        <div className="group">
                                <textarea placeholder="‎" id="comment" name="comment" rows="5" required></textarea>
                            <label htmlFor="comment">Descripcion</label>
                        </div>
                        <label>
                            <input className="input1" type="text" placeholder="" required />
                            <span className='letra'>Propietario</span>
                        </label>
                        <label>
                            <input className="input1" type="password" placeholder="" required />
                            <span className='letra'>Precio</span>
                        </label>
                        <div>
                        <button className="boton1">Montar</button>
                        <button className="boton3">Continuar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormularioObrasPages