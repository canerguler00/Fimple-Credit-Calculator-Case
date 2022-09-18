import React, { useImperativeHandle, forwardRef } from "react";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Table = forwardRef((props, ref) => {
  useImperativeHandle(ref,()=>({
    addTable
  }))

  // create table array state 
  const [createTable, setCreateTable] = useState([  
      <thead> 
        <tr>
          <th>Taksit No</th>
          <th>Taksit Tutarı</th>
          <th>Ana Para</th>
          <th>Kalan Ana Para</th>
          <th>Kar Tutarı</th>
          <th>KKDF</th>
          <th>BSMV</th>
        </tr> 
      </thead>     
  ]);
  

  const { enteredMount } = useContext(UserContext);
  const { enteredMonths } = useContext(UserContext);
  const { enteredInterestRate } = useContext(UserContext);
  const { enteredBsmv } = useContext(UserContext);
  const { enteredKkdf } = useContext(UserContext);
  const { isTable } = useContext(UserContext);  

  // this function used in ContentItem component used useRef 
  const addTable = () => {     

    let paymentMonthly = parseFloat(
      (enteredMount *((enteredInterestRate / 100) * (1 + enteredKkdf / 100 + enteredBsmv / 100))) /
        (1 - 1 / Math.pow(1 + (enteredInterestRate / 100) * (1 + enteredKkdf / 100 + enteredBsmv / 100),
         enteredMonths))).toFixed(2)
         ;
    
    let remainderMainAmount = enteredMount

    for (let i = 1; i <= enteredMonths; i++) {      
           
      let interestRate = enteredInterestRate   
      let bsmv = enteredBsmv / 100
      let kkdf = enteredKkdf / 100
      let interest = Number((remainderMainAmount * (interestRate/100)).toFixed(2))    
      let bsmvEl = Number((interest * bsmv).toFixed(2));    
      let kkdfEl = Number((interest * kkdf).toFixed(2));
      let mainAmount = ((Number(paymentMonthly)) -(((interest + bsmvEl + kkdfEl)))).toFixed(2)
      remainderMainAmount = (remainderMainAmount - mainAmount).toFixed(2) 
      const value = remainderMainAmount      

      // add row for table array state
      setCreateTable((createTable) => [
        ...createTable,
       
        <tr key={i}>
          <td>{i}</td>
          <td>{paymentMonthly}</td>
          <td>{mainAmount}</td>
          <td>{value}</td>          
          <td>{interest}</td>
          <td>{kkdfEl}</td>
          <td>{bsmvEl}</td>
        </tr>,
      ]);
    }
    return setCreateTable;
  }

  return (
    <div >      
      {isTable ? 
      (
        <div className="table-content" >
          <h3 className="table-title">GERİ ÖDEME PLANI TABLOSU</h3>
          <div className="underline"></div>
          <br /> 
          <div className="table-container" >
          <table>
          {createTable}
          </table>
          </div>
        </div>
      ) 
      : 
      (
        <></>
      )}
    </div>
  );
})

export default Table;




