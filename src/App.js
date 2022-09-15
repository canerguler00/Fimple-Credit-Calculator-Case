import './App.css';
import Layout from './pages/Layout';
import { useState } from 'react';
import { UserContext } from './context/UserContext';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [enteredMount, setEnteredMount] = useState("");
  const [enteredMonths, setEnteredMonths] = useState("");
  const [enteredInterestRate, setEnteredInterestRate] = useState("");
  const [enteredBsmv, setEnteredBsmv] = useState("");
  const [enteredKkdf, setEnteredKkdf] = useState("");
  const [creditData, setCreditData] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [isTable, setIsTable] = useState(false)

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr)=> curr === "dark" ? "light" : "dark")
  }

  return (
    <div className="App" id={theme}>
      <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
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
      </ThemeContext.Provider>      
    </div>
  );
}

export default App;
