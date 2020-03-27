import React, { Fragment,useState } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Messages from './components/Messages'
import Result from './components/Result'
import Spinner from './components/spinner'
function App() {

  const [amount,saveAmount]= useState(0)
  const [time,saveTime]= useState('')
  const [total,saveTotal]=useState(0)
  const [loading,saveLoading]=useState(false)
  
  let component

  if(loading){
    component=<Spinner/>
  }else if (total === 0) {
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
      saveLoading={saveLoading}
     />

    <div className='mensajes'>
      {component}
    </div>
    </div>

    

    </Fragment>
    
  );
}

export default App;
