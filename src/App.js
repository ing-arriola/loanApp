import React, { Fragment,useState } from 'react';
import Header from './components/Header'
import Form from './components/Form'
function App() {

  const [amount,saveAmount]= useState(0)
  const [time,saveTime]= useState(0)
  
  return (
    <Fragment>
     <Header title='payments for loan'/>  
     <div className="container">
     <Form
      amount={amount}
      saveAmount={saveAmount}
      time={time}
      saveTime={saveTime}
     />
    </div>
    </Fragment>
  );
}

export default App;
