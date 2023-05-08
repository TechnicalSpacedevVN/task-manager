import { FC } from 'react'
import { Trans } from 'react-i18next'

export const Button = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  )
}
