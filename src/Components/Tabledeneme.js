import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Tabledeneme() {
  const [createTable, setCreateTable] = useState([     
        <tr>
          <th>Taksit No</th>
          <th>Taksit Tutarı</th>
          <th>Ana Para</th>
          <th>Kalan Ana Para</th>
          <th>Kar Tutarı</th>
          <th>KKDF</th>
          <th>BSMV</th>
        </tr>    
  ]);
  const [newInterest, setNewInterest] = useState();
  const [reduction, setReduction] = useState();
  const [newPrincipal, setNewPrincipal] = useState();

  const { enteredMount, setEnteredMount } = useContext(UserContext);
  const { enteredMonths, setEnteredMonths } = useContext(UserContext);
  const { enteredInterestRate, setEnteredInterestRate } =
    useContext(UserContext);
  const { enteredBsmv, setEnteredBsmv } = useContext(UserContext);
  const { enteredKkdf, setEnteredKkdf } = useContext(UserContext);
  const { isTable, setIsTable } = useContext(UserContext);

  const addTable = () => {
    console.log("deneme");
    let mainAmount = 20000;
    let amountStyle = 100;
    let mainPaymentStyle = 0;
    let payment = 100;
    let rate = 2;
    
    let taksittutarı = parseFloat(
      (enteredMount *
        ((enteredInterestRate / 100) *
          (1 + enteredKkdf / 100 + enteredBsmv / 100))) /
        (1 -
          1 /
            Math.pow(
              1 +
                (enteredInterestRate / 100) *
                  (1 + enteredKkdf / 100 + enteredBsmv / 100),
              enteredMonths
            ))
    ).toLocaleString("tr-TR", {
      style: "currency",
      currency: "TRY",
    });

    for (let i = 1; i <= enteredMonths; i++) {
      amountStyle = amountStyle - 100 / enteredMonths;
      mainAmount += 100 / enteredMonths;
      let paymentPercent = (mainAmount * (rate / 100) * 30) / 365;
      let mainPayment = payment - mainPaymentStyle;
      mainAmount = mainAmount - mainPayment;

      setCreateTable((createTable) => [
        ...createTable,

        <tr>
          <td>{i}</td>
          <td>{taksittutarı}</td>
          <td></td>
          <td>
            <div className="table_main__payment">{Math.round(mainPayment)}</div>
          </td>
          <td>
            <div className="table_main__amount">
              {mainAmount > 0 ? Math.round(mainAmount) : 0}
            </div>
          </td>
          <td>{i}</td>
          <td>{taksittutarı}</td>
        </tr>,
      ]);
    }
    return setCreateTable;
  };
  return (
    <div>
      <button onClick={(e) => addTable(e)}>BUTTON</button>
      
      {isTable ? (
        <div>
          <h3 className="table-title">GERİ ÖDEME PLANI TABLOSU</h3>
          <br /> <table>
          {createTable}
          </table>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Tabledeneme;
