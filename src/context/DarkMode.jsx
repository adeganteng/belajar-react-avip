// import { createContext, useState } from "react";

// const DarkModeContext = createContext();

// const DarkModeContextProvider = ({ children }) => {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     return (
//         <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
//             {children}
//         </DarkModeContext.Provider>
//     )
// }

// export const DarkMode = DarkModeContext;
// export default DarkModeContextProvider;
import { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkModeValue = { value: isDarkMode, setValue: setIsDarkMode };

  return (
    <DarkModeContext.Provider value={darkModeValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
