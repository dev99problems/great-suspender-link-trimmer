import { useState, useRef } from './frm'
import { TextInputClearable } from './components/basics/text-input'
import { Label } from './components/basics/label'
import { CodeCard } from './components/code-card'
import './app.css'

function Header() {
  return (
    <>
      <h1 class="mb-45">Great Suspender links <br /> Trimmer ✂️</h1>
      <div className="header-text">
        <div>
          <p>
            Hi there 👋
            <br />
            This is <a href="https://github.com/greatsuspender/thegreatsuspender">Great Suspender</a> (<i>browser extension</i>) links meta information remover.
            When Great Suspender stale a tab, it converts it's url into something like: <br />
          </p>
          <CodeCard className="mt-20 mb-20">
            chrome-extension://ahmkjjgdligadogjedmnogbpbcpofeeo/html/suspended.html#ttl=nvim-telescope%2Ftelescope-file-browser.nvim%3A%20File%20Browser%20extension%20for%20telescope.nvim&pos=3184&uri=https://github.com/nvim-telescope/telescope-file-browser.nvim
          </CodeCard>
          <p>
            After pasting such url into the input, it will be cleared from any additional info.
          </p>
        </div>
      </div>
    </>
  )
}

function LinkInput({ value, onInputChange }) {
  const id = 'link-input'

  return (
    <div className="field-wrapper">
      <Label forId={id}>
        Insert Suspended Tab link to trim meta info ✂️
      </Label>
      <div className="field-wrapper">
        <TextInputClearable
          id={id}
          value={value}
          onChange={onInputChange}
          className="mt-5"
          placeholder="chrome-extension://"
        />
      </div>
    </div>
  )
}

export function App() {
  const [inputValue, setInputValue] = useState()
  const resultRef = useRef(null)

  const [linkText, setLinkText] = useState('')
  const [isLink, setIsLink] = useState(false)

  const onResultLabelClick = () => {
    resultRef.current.focus()
  }

  const onCopyBtnClick = () => {
    const outputElem = document?.getElementById('output')
    outputElem.focus()
    outputElem.select()

    const success = document.execCommand('copy')
    if (success) {
      setCopySucceeded(true)
      setCopyBtnText('Copied ✅')
    } else {
      setCopySucceeded(false)
      setCopyBtnText('Oops, copying did not successed 🤔')
    }
    setTimeout(() => {
      setCopySucceeded(undefined)
      setCopyBtnText(undefined)
    }, 3500)
  }

  const onInputChange = (e, val) => {
    let value
    if (val === undefined || val === null) {
      value = e?.target.value
    } else {
      value = val
    }
    console.log(`value  = ${value}`)
    setInputValue(value)
    const trimResult = value.replace(/^(\w|\W)*uri=/gi, '') || ''
    const isLink = trimResult.startsWith('https://') || trimResult.startsWith('http://')

    if (isLink) {
      setLinkText(trimResult)
      setIsLink(true)
    }
  }

  return (
    <section>
      <Header />

      <form class="trimmer-form flex column mt-35" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-30">
          <LinkInput
            value={inputValue}
            onInputChange={onInputChange}
          />
        </div>

        {isLink && (
          <div className="result-link-wrapper flex column mt-20">
            <Label onClick={onResultLabelClick}>Result Link 🔗</Label>
            <a ref={resultRef} className="result-link" href={linkText} rel="noopener noreferrer">{linkText}</a>
          </div>
        )}
      </form>
    </section>
  )
}
