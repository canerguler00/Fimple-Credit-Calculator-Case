import React, { useImperativeHandle, forwardRef } from "react";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Table = forwardRef((props, ref) => {
  useImperativeHandle(ref,()=>({
    addTable
  }))

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
  const [newInterest, setNewInterest] = useState();
  const [reduction, setReduction] = useState();
  const [newPrincipal, setNewPrincipal] = useState();

  const { enteredMount, setEnteredMount } = useContext(UserContext);
  const { enteredMonths, setEnteredMonths } = useContext(UserContext);
  const { enteredInterestRate, setEnteredInterestRate } = useContext(UserContext);
  const { enteredBsmv, setEnteredBsmv } = useContext(UserContext);
  const { enteredKkdf, setEnteredKkdf } = useContext(UserContext);
  const { isTable, setIsTable } = useContext(UserContext);

  const addTable = () => {   
    
    let paymentMonthly = parseFloat(
      (enteredMount *((enteredInterestRate / 100) * (1 + enteredKkdf / 100 + enteredBsmv / 100))) /
        (1 - 1 / Math.pow(1 + (enteredInterestRate / 100) * (1 + enteredKkdf / 100 + enteredBsmv / 100),
         enteredMonths))).toFixed(2)
         ;
    
    let mainAmount = enteredMount

    for (let i = 1; i <= enteredMonths; i++) {      
           
      let faiz_oranı = enteredInterestRate   
      let bsmv = enteredBsmv / 100
      let kkdf = enteredKkdf / 100
      let interest = Number((mainAmount * (faiz_oranı/100)).toFixed(2))    
      let bsmvEl = Number((interest * bsmv).toFixed(2));    
      let kkdfEl = Number((interest * kkdf).toFixed(2));
      let anapara = ((Number(paymentMonthly)) -(((interest + bsmvEl + kkdfEl)))).toFixed(2)
      mainAmount = (mainAmount - anapara).toFixed(2) 
      const deg = mainAmount      

      setCreateTable((createTable) => [
        ...createTable,
       
        <tr key={i.toString()}>
          <td>{i}</td>
          <td>{paymentMonthly}</td>
          <td>{anapara}</td>
          <td>{deg}</td>          
          <td>{interest}</td>
          <td>{kkdfEl}</td>
          <td>{bsmvEl}</td>
        </tr>,
      ]);
    }
    return setCreateTable;
  };
  return (
    <div>    
      
      {isTable ? (
        <div className="table-content">
          <h3 className="table-title">GERİ ÖDEME PLANI TABLOSU</h3>
          <div className="underline"></div>
          <br /> <table>
          {createTable}
          </table>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
})

export default Table;




