import './App.css';
import Layout from './pages/Layout';
import { useState } from 'react';
import { UserContext } from './context/UserContext';
import { ThemeContext } from './context/ThemeContext';

function App() {
  // for user input value, state management used UserContext
  const [enteredMount, setEnteredMount] = useState("");
  const [enteredMonths, setEnteredMonths] = useState("");
  const [enteredInterestRate, setEnteredInterestRate] = useState("");
  const [enteredBsmv, setEnteredBsmv] = useState("");
  const [enteredKkdf, setEnteredKkdf] = useState("");  
  const [creditData, setCreditData] = useState([]);  /*for user input value; create array and state management on UserContext*/
  const [isTrue, setIsTrue] = useState(false);
  const [isTable, setIsTable] = useState(false)
  
  // dark mode state and function here
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr)=> curr === "dark" ? "light" : "dark")
  }

  return (
    <div className="App" id={theme}>
      <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>  {/*dark mode context provider and value */}         
        <UserContext.Provider value={{enteredMount, setEnteredMount,        
                                      enteredMonths, setEnteredMonths, 
                                      enteredInterestRate, setEnteredInterestRate,
                                      enteredBsmv, setEnteredBsmv,
                                      enteredKkdf, setEnteredKkdf,
                                      creditData, setCreditData,
                                      isTrue, setIsTrue,
                                      isTable, setIsTable
                                    }
           }>  {/*user input value context provider and value */}           
             <Layout />         
        </UserContext.Provider>        
      </ThemeContext.Provider>     
    </div>
  );
}

export default App;
