import React from 'react'
import { useContext, useRef } from 'react';
import { UserContext } from '../context/UserContext';
import Table from './Table';

function ContentItem() {   
    const {creditData, setCreditData} = useContext(UserContext)
    const {isTrue, setIsTrue} = useContext(UserContext)
    const {isTable, setIsTable} = useContext(UserContext)
     
    const ref = useRef();

    const tableButton = () => {(ref.current.addTable())}

    const handleInput = () => {
      setIsTable(true)
      tableButton()      
    }

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
                     onClick={handleInput}                                   
                  />            
                </div>
              </div>              
            </div>            
          ))}
        </div>
      ) : (
        ""
      )}     
      <Table ref = {ref}/>      
    </>    
  )
}

export default ContentItem;