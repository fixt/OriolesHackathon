import React from 'react'

export default function wrapper(style, type = 'div') {
  return ({ children, onClick, ...overrides }) => {
    const props = {
      style: {...style, ...overrides},
      onClick,
    }

    return React.createElement(
      type,
      props,
      children
    )
  }
}
