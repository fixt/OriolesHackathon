import React from 'react'

export default function wrapper(style, type = 'div') {
  return ({ children, onClick, id, ...overrides }) => {
    const props = {
      style: {...style, ...overrides},
      id,
      onClick,
    }

    return React.createElement(
      type,
      props,
      children
    )
  }
}
