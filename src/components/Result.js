import React from 'react';

const Resultado = ({amount,total,time}) => 
    ( <div className="u-full-width resultado">
        <h2>Resume</h2>
        <p>The amount of loan is: $ {amount}</p>
        <p>Monthly payments of: {(amount/time).toFixed(2)}</p>
        <p>To be payed on: {time}</p>
        <p>Total to be payed is: {total}</p>
    </div> );

 
export default Resultado;