import './App.css';
import Layout from './pages/Layout';
import { useState } from 'react';
import { UserContext } from './context/UserContext';

function App() {
  const [enteredMount, setEnteredMount] = useState("");
  const [enteredMonths, setEnteredMonths] = useState("");
  const [enteredInterestRate, setEnteredInterestRate] = useState("");
  const [enteredBsmv, setEnteredBsmv] = useState("");
  const [enteredKkdf, setEnteredKkdf] = useState("");
  const [creditData, setCreditData] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [isTable, setIsTable] = useState(false)

  return (
    <div className="App">
      <UserContext.Provider value={{enteredMount, setEnteredMount, 
                                    enteredMonths, setEnteredMonths, 
                                    enteredInterestRate, setEnteredInterestRate,
                                    enteredBsmv, setEnteredBsmv,
                                    enteredKkdf, setEnteredKkdf,
                                    creditData, setCreditData,
                                    isTrue, setIsTrue,
                                    isTable, setIsTable
                                  }
         }> 
        <Layout />
      </UserContext.Provider>      
    </div>
  );
}

export default App;
