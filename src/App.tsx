import React, { useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// 1- Create a initialState
const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2- Create a reducer
function reducer (action, state) {
  const { type, payload } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      toLanguage: payload
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      result: payload
    }
  }

  return state
}

const App = (): JSX.Element => {
  // 3- Use hook useReducer
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='App'>
      <h1>Google Translate</h1>
    </div>
  )
}

export default App
