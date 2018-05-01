import React from 'react'
import Link from 'gatsby-link'
import style from '../styles/main.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname === '/') {
      header = (
        <h1>
          <Link to={'/'} >
            Gatsby Starter Blog
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={'/'}>
            Gatsby Starter Blog
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <div className="borderDecor borderDecor-1">Summer 2018 | MOTT</div>
        <div className="borderDecor borderDecor-2">Summer 2018 | MOTT</div>
        <div className="borderDecor borderDecor-3">Summer 2018 | MOTT</div>
        <div className="borderDecor borderDecor-4">Summer 2018 | MOTT</div>
        {header}
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
