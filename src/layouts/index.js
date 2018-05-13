import React from 'react'
import Link from 'gatsby-link'
import style from '../styles/main.css'

class Template extends React.Component {
  state = {
    'title': 'Hello, World'
  }
  render() {
    const { location, children } = this.props
    return (
      <div>
        <div className="borderDecor borderDecor-1">Summer 2018 | Web Trend Magazine | MOTT</div>
        <div className="borderDecor borderDecor-2">{this.state.title}</div>
        <div className="borderDecor borderDecor-3">{this.state.title}</div>
        <div className="borderDecor borderDecor-4">{this.state.title}</div>
        <h1 className="summer18--header">MOTT</h1>
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
