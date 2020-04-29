import React from 'react'

export default ({ children }) =>
  <div>
    <h1>Header</h1>
    {children()}
    <h3>Footer</h3>
</div>