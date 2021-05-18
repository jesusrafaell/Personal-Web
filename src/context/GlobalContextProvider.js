import React, { createContext, useState } from "react"

export const GlobalStateContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [transitionState, setTransitionState] = useState( {
    on: "false",
    prop: ""
  })
  const [transitionNav, setTransitionNav] = useState(true) 
  return (
    <GlobalStateContext.Provider 
      value={{
        transitionState,
        transitionNav,
        setTransitionState,
        setTransitionNav
      }}>
        {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
