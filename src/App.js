import React, { Fragment,useState } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Messages from './components/Messages'
import Result from './components/Result'
function App() {

  const [amount,saveAmount]= useState(0)
  const [time,saveTime]= useState('')
  const [total,saveTotal]=useState(0)
  
  let component

  if (total===0) {
    component=<Messages/>
  } else {
    component=<Result
      amount={amount}
      total={total}
      time={time}
    />
  }

  return (
    <Fragment>
     <Header title='payments for loan'/>  
     <div className="container">
     <Form
      amount={amount}
      saveAmount={saveAmount}
      time={time}
      saveTime={saveTime}
      total={total}
      saveTotal={saveTotal}
     />

    <div className='mensajes'>
      {component}
    </div>
    </div>

    

    </Fragment>
    
  );
}

export default App;
