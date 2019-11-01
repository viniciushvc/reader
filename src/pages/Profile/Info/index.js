import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserActions from '../../../store/actions/user'

import { Input, Button } from '../../../components'

export default function Info() {
  const [name, setName] = useState(useSelector(state => state.login.username))

  const dispatch = useDispatch()

  function handleUpdateUser(e) {
    e.preventDefault()

    dispatch(UserActions.update(name))
  }

  return (
    <form onSubmit={e => handleUpdateUser(e)}>
      <Input
        type="text"
        label="Nome"
        value={name}
        placeholder="Nome de exibição"
        onChange={e => setName(e.target.value)}
      />
      <Button type="submit" className="green lg">
        Salvar
      </Button>
    </form>
  )
}
