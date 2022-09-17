import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Content() {
    // state management used user input value here; from UserContext
  const {enteredMount, setEnteredMount} = useContext(UserContext)
  const {enteredMonths, setEnteredMonths} = useContext(UserContext)
  const {enteredInterestRate, setEnteredInterestRate} = useContext(UserContext)
  const {enteredBsmv, setEnteredBsmv} = useContext(UserContext)
  const {enteredKkdf, setEnteredKkdf} = useContext(UserContext)
  const { setCreditData} = useContext(UserContext)
  const { setIsTrue} = useContext(UserContext)  

//  input value form submit function; value keeping in creditData state
  const formSubmit = (e) => {
    e.preventDefault(); 
    setCreditData(() => {
        return [
          {
            creditAmount: +enteredMount,
            creditMonths: +enteredMonths,
            creditRate: +enteredInterestRate,
            creditBsmv: +enteredBsmv,
            creditKkdf: +enteredKkdf,
            id: Math.random().toString()           
          },
        ];
      });
    //   input validation here
      if(enteredMount && enteredMonths && enteredInterestRate ){
        setIsTrue(true) 
      } 
      else {
        alert("Kredi Tutarı, Kredi Vadesi ve Faiz Oranları alanı boş bırakılamaz.")       
      }        
  }    

  return (
    <div className='content'>
        <h3 className='content-h1'>KREDİ HESAPLAMA</h3>
        <form >
            <div className='form-item'>
                <label htmlFor='kredi-tutar'>Kredi Tutarı : </label>
                <div className='form-input'>
                    <input
                        type="number"
                        min="0"
                        value={enteredMount}
                        name='kredi-tutar' 
                        placeholder='Kredi Tutarı (TL)'
                        required
                        onChange={(e)=> setEnteredMount(e.target.value)}                       
                    />
                </div>
            </div>
            <div className='form-item'>
                <label htmlFor='kredi-vadesi'>Kredi Vadesi : </label>
                <div className='form-input'>
                    <input
                        type="number"
                        min="1"
                        value={enteredMonths}
                        name='kredi-vadesi' 
                        placeholder='Kredi Vadesi (ay)'
                        required
                        onChange={(e)=> setEnteredMonths(e.target.value)}
                    />
                </div>
            </div>
            <div className='form-item'>
                <label htmlFor='faiz-orani'>Faiz Oranı : </label>
                <div className='form-input'>
                    <input
                        type="number"                        
                        min="0"
                        value={enteredInterestRate}                        
                        name='faiz-orani' 
                        placeholder='Faiz Oranı (%)'
                        required
                        onChange={(e)=> setEnteredInterestRate(e.target.value)}
                    />
                </div>
            </div>
            <div className='form-item'>
                <label htmlFor='bsmv-orani'>BSMV Oranı : </label>
                <div className='form-input'>
                    <input
                        type="number"
                        value={enteredBsmv}
                        min="0"
                        name='faiz-orani' 
                        placeholder='BSMV Oranı (%)'
                        required
                        onChange={(e)=> setEnteredBsmv(e.target.value)}
                    />
                </div>
            </div>
            <div className='form-item'>
                <label htmlFor='faiz-orani'>KKDF Oranı : </label>
                <div className='form-input'>
                    <input
                        type="number"
                        min="0"
                        value={enteredKkdf}
                        name='faiz-orani' 
                        placeholder='KKDF Oranı (%)'
                        required
                        onChange={(e)=> setEnteredKkdf(e.target.value)}
                    />
                </div>
            </div>
            <div className='form-submit'>
                <input
                   type="submit"
                   value="HESAPLA"
                   className='calculate-submit'
                   onClick={(e)=> formSubmit(e)}                   
                />            
            </div>            
        </form>
    </div>
  )
}

export default Content;