import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router'
import 'app/components/_home.scss'
import react from 'images/react.png'

import {} from 'app/actions'

const Home = () => {
  const classes = classNames({
    home: true
  })

  return (
    <div className={classes}>
      <Link to={'/test'}><h2>Test</h2></Link>
      <Link to={'/'}><h2>Home </h2></Link>
      <h2>React</h2>
      <img className={'home__image'} src={react} />
    </div>
  )
}

export default connect(
  (state) => ({}),
  {}
)(Home)
