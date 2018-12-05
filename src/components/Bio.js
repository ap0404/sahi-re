import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Ankit Panchal`}
          style={{
            borderRadius: 100,
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3),
            height: rhythm(3),
          }}
        />
        <p style={{ maxWidth: 310 }}>
           Blog by <a href="https://mobile.twitter.com/ankit_rp">Ankit Panchal</a>.
          {' '}
          <br/>
          I&nbsp;write feelings into words.
        </p>
      </div>
    )
  }
}

export default Bio
