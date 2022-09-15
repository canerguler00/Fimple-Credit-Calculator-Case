import React from 'react'
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

function ContentItem() {
    // const {enteredMount, setEnteredMount} = useContext(UserContext)
    // const {enteredMonths, setEnteredMonths} = useContext(UserContext)
    // const {enteredInterestRate, setEnteredInterestRate} = useContext(UserContext)
    // const {enteredBsmv, setEnteredBsmv} = useContext(UserContext)
    // const {enteredKkdf, setEnteredKkdf} = useContext(UserContext)
    const {creditData, setCreditData} = useContext(UserContext)
    const {isTrue, setIsTrue} = useContext(UserContext)
    const {isTable, setIsTable} = useContext(UserContext)
     

  return (
    < >{isTrue ? (
        <div className='content-staff'>
          {creditData.map((item, index) => (            
            <div key={index} className='content-item'>                
              <div className='content-card'>
              <h3 className='content-h3'>Kredi tutarı</h3>
              <h2 className='content-h2'>
                {item.creditAmount.toLocaleString("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                })}
              </h2>
              <h3 className='content-h3'>Kredi vadesi</h3>
              <h2 className='content-h2'>{item.creditMonths} ay</h2>
              <h3 className='content-h3'>Kredi faiz oranı</h3>
              <h2 className='content-h2'>%{item.creditRate}</h2>
              <h3 className='content-h3'>Taksit tutarı</h3>
              <h2 className='content-h2'>
                {parseFloat(
                  (item.creditAmount *
                    ((item.creditRate / 100) *
                      (1 + item.creditKkdf / 100 + item.creditBsmv / 100))) /
                    (1 -
                      1 /
                        Math.pow(
                          1 +
                            (item.creditRate / 100) *
                              (1 +
                                item.creditKkdf / 100 +
                                item.creditBsmv / 100),
                          item.creditMonths
                        ))
                ).toLocaleString("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                })}
              </h2 >
              <h3 className='content-h3'>Toplam geri ödeme</h3>
              <h2 className='content-h2'>
                {parseFloat(
                  (item.creditMonths *
                    (item.creditAmount *
                      ((item.creditRate / 100) *
                        (1 + item.creditKkdf / 100 + item.creditBsmv / 100)))) /
                    (1 -
                      1 /
                        Math.pow(
                          1 +
                            (item.creditRate / 100) *
                              (1 +
                                item.creditKkdf / 100 +
                                item.creditBsmv / 100),
                          item.creditMonths
                        ))
                ).toLocaleString("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                })}
              </h2>
              <div className='form-submit'>
                <input
                   type="submit"
                   value="HESAPLA"
                   className='calculate-submit'
                   onClick={()=> setIsTable(true)}                                   
                />            
            </div>
              </div>
              
            </div>
            
          ))}
        </div>
      ) : (
        ""
      )}
      
    </>
    
  )
}

export default ContentItem;