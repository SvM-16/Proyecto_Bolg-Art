import '../css/Login.css'

function Login(){
    return(
        <div className="Login">
             <div className='flex flex-col'>
            <p className="title2">Login</p>
                <form className="form2">
                    <label>
                        <input className='input2' placeholder="" type="email" id="email" name="email" required/>
                        <span className='letra1'>Email</span>
                    </label>
                    <label>
                        <input className="input2" type="password" placeholder="" required />
                        <span className='letra1'>Password</span>
                    </label>
                        <button className="boton2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login