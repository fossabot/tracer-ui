// Copyright 2019 Blockchain Technology Partners
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ------------------------------------------------------------------------------

import React from 'react'
import ReactDOM from 'react-dom'

import Store from './store'
import Router from './router'

const router = Router()
const store = Store(router, window.__INITIAL_STATE__)
const rootEl = document.querySelector('#root')

let render = () => {
  const RootAppComponent = require('./root').default
  ReactDOM.render(
    <RootAppComponent
      store={ store }
      router={ router }
    />,
    rootEl
  )
}

if(module.hot) {
  module.hot.accept('./root', () => {
    setTimeout(render)
  })
}

render()

