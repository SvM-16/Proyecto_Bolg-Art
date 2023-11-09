import '../css/Registrate.css'

function Registrate(){
    return(
        <div className="registrate">
            <div className='flex flex-col'>
            <p className="title1">Register </p>
            <form className="form1">
                <label>
                    <input className="input1" type="text" placeholder="" required />
                    <span className='letra'>Usuario</span>
                </label>
                    <label>
                    <input className='input1' placeholder="" type="email" id="email" name="email" required/>
                    <span className='letra'>Correo</span>
                </label>
                <label>
                    <input className="input1" type="password" placeholder="" required />
                    <span className='letra'>Contraseña</span>
                </label>
                    <button className="boton1">Submit</button>
                <p className="signin1">
                Already have an account? <a href="/Login">Sign in</a>
                </p>
            </form>
            </div>
        </div>
    )
}

export default Registrate