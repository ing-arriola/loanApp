import React,{Fragment,useState} from 'react';
import {calculateTotal} from '../helpers'

const  Form= ({amount,saveAmount,time,saveTime}) => {
   
    //Define state
    const [error,saveError]=useState(false) //Here the value of false using destructuring is related
    //with the error var because when the app starts there are no error, but when the user inserts data
    //it could has an error so the var error turns to true when an error happens

    const readAmount = (e)=>{
        saveAmount(parseInt(e.target.value))
    }

    const readTime = (e) =>{
        saveTime(parseInt(e.target.value))
    }

    const calculateLoan = e =>{
        e.preventDefault()
        if(amount===0 || time===''){
            saveError(true)
        }else{
            saveError(false)
        }

        calculateTotal(amount,time)

        
        
    }

    return ( 
        <Fragment>
        <form onSubmit={calculateLoan}>
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000"
                      onChange={readAmount} 
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange={readTime}
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
        </form>

        {(error)? <p className='error' >You must complete all the fields</p> :''}
        

    </Fragment>
     );
}
 
export default Form;