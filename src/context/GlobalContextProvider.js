import React, { createContext, useState } from "react"

export const GlobalStateContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [stateTransitionPage, setStateTransitionPage] = useState({
    on: 'true',
    end: ''
  })
  const [transitionNav, setTransitionNav] = useState(true) 
  return (
    <GlobalStateContext.Provider 
      value={{
        stateTransitionPage,
        transitionNav,
        setStateTransitionPage,
        setTransitionNav
      }}>
        {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
