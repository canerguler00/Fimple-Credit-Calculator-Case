import React from 'react'
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

function Table() {
    const {creditData, setCreditData} = useContext(UserContext)
    const {isTable, setIsTable} = useContext(UserContext)
   

  return (
    <div>
        {/* {isTable ? (
        // <div>
        //     <table>
        //         <thead>
        //             <tr>
        //               <th>Company</th>
        //               <th>Contact</th>
        //               <th>Country</th>
        //               <th>Company</th>
        //               <th>Contact</th>
        //               <th>Country</th>
        //               <th></th>
        //             </tr>
        //          </thead>
                 
                
        //          <tbody>
        //               <tr>
        //                 <td></td>
        //                 <td></td>
        //                 <td></td>
        //                 <td></td>
        //                 <td></td>
        //                 <td></td>
        //                 <td></td>
        //               </tr>
        //          </tbody>
                
        //     </table>            
        // </div>
        ) 
        : 
        (<></>)} */}
    </div>
  )
}

export default Table



