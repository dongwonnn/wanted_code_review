import React from 'react'

import { Switch, Route, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { Main, Result, Filters } from './pages'

// Routes.js는 라우터 관리 하는 곳. css 처리는 따로 빼네.
function Routes() {
  const location = useLocation()
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} className="absolute w-full" style={props}>
      <Switch location={location}>
        <Route exact path="/" component={Main} />
        <Route path="/result" component={Result} />
        <Route path="/filters" component={Filters} />
      </Switch>
    </animated.div>
  ))
}

export default Routes
