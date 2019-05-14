import React from 'react';

import './UserOutput.css';

const useroutput = (props) => {
  return (
    <section className="UserOutput">
      <p>Will display the most up to date username below:</p>
      <p className="username">{props.username}</p>
    </section>
  )
}

export default useroutput;