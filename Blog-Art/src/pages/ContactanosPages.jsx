import '../css/Contactanos.css'
import Mona from '../images/la-monalisa.jpeg'

function Contactanos(){
    return(
    <div className="contactanos">
        <div>
            <h1 className='titulo' >Contactanos</h1>
            <div className='flex'>
                <img src={Mona} className='mona' />
                    <div className="card ">
                        <form className="form">
                            <div className="group">
                                <input placeholder="‎" type="text" required />
                                <label htmlFor="name">Usuario</label>
                            </div>
                            <div className="group">
                                <input
                                placeholder="‎"
                                type="email"
                                id="email"
                                name="email"
                                required
                                />
                                <label htmlFor="email">Correo</label>
                            </div>
                            <div className="group">
                                <textarea
                                placeholder="‎"
                                id="comment"
                                name="comment"
                                rows="5"
                                required
                                ></textarea>
                                <label htmlFor="comment">Comentario</label>
                            </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contactanos