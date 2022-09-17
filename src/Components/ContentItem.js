import React from 'react'
import { useContext, useRef } from 'react';
import { UserContext } from '../context/UserContext';
import Table from './Table';

function ContentItem() {      
    const {creditData} = useContext(UserContext)
    const {isTrue} = useContext(UserContext)
    const { setIsTable} = useContext(UserContext)
    
    //  used useRef; create addTable function in Table component and then in this component show ref Table component 
    const ref = useRef();

    const tableButton = () => {(ref.current.addTable())}

    const handleInput = () => {
      setIsTable(true)
      tableButton()      
    }

  return (
    < >{isTrue ? (
        <div className='content-staff'>  {/*input value state start used here*/}
          {creditData.map((item, index) => (            
            <div key={index} className='content-item'>                
              <div className='content-card'>
                <h3 className='content-h3'>Kredi Tutarı</h3>
                <h2 className='content-h2'>
                  {item.creditAmount.toLocaleString("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  })}
                </h2>
                <h3 className='content-h3'>Kredi Vadesi</h3>
                <h2 className='content-h2'>{item.creditMonths} ay</h2>
                <h3 className='content-h3'>Kredi Faiz Oranı</h3>
                <h2 className='content-h2'>%{item.creditRate}</h2>
                <h3 className='content-h3'>Taksit Tutarı</h3>
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
                <h3 className='content-h3'>Toplam Geri Ödeme</h3>
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
      <Table ref = {ref}/>  {/*show ref to Table component; because create addTable function in Table component*/}   
    </>    
  )
}

export default ContentItem;