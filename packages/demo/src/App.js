/*
 * @Author: Cao_ming
 * @Date: 2020-09-18 13:54:24
 * @LastEditTime: 2020-09-23 17:41:05
 * @LastEditors: Cao_ming
 * @FilePath: \lerna-repo\packages\demo\src\App.js
 */

import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Home } from '@lerna/project'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <Home></Home>
    </div>
  )
}

export default App
