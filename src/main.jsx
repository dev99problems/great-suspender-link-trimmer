import { render } from 'preact'
import { App } from './app'
import '@peculiarjs/cssfull/lib/index.css'
import './index.css'

render(<App />, document.getElementById('app'))
