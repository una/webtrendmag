import React from 'react'
import Link from 'gatsby-link'
import style from '../styles/main.css'

class Template extends React.Component {
  state = {
    'title': 'Hello, World'
  }
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
        <div className="borderDecor borderDecor-1">Summer 2018 | Web Trend Magazine | MOTT</div>
        <div className="borderDecor borderDecor-2">{this.state.title}</div>
        <div className="borderDecor borderDecor-3">{this.state.title}</div>
        <div className="borderDecor borderDecor-4">{this.state.title}</div>
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
