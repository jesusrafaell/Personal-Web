import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const timeout = 600
const getTransitionStyles = {
  entering: {
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
  exited: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: .5,
  },
}

  /*
const entering = e => {
  console.log('entering')
  return {
    opacity: 0,
  }
}

const entered = e => {
  console.log('entered')
  return {
    opacity: 0,
  }
}


const exiting = e => {
  console.log('exiting')
  return {
    opacity: 0,
  }
}

const exited = e => {
  console.log('exited')
  return {
    opacity: 0,
  }
}

*/


const entering = e => {
  console.log('entering')
}

const entered = e => {
  console.log('entered')
}


const exiting = e => {
  console.log('exiting')
}

const exited = e => {
  console.log('exited')
}

const TransitionPage = ({children,location}) => {
  return (
      <TransitionGroup>
          <ReactTransition
              key={location.pathname}
              timeout={{
                  enter: 1000,
                  exit: 500,
              }}
              onEntering={entering}
              onEntered={entered}
              onExiting={exiting}
              onExited={exited}
              unmountOnExit
          >
              {status => (
                  <div
                      style={{
                          ...getTransitionStyles[status],
                      }}
                  >
                      {console.log(location.pathname,status)}
                      {children}
                  </div>
              )}
          </ReactTransition>
      </TransitionGroup>
  )
}

export default TransitionPage
