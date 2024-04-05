import { useState } from 'react'
import Markdown from 'react-markdown'
import { saveAs } from 'file-saver'
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function App() {
  const text = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  ![React Logo](https://www.svgrepo.com/show/303500/react-1-logo.svg)
  `
  const [editor, setEditor] = useState(text)

  const downloadFile = () => {
    const blob = new Blob([editor], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, 'markdownPreviewer.txt')
  }

  const handleChange = (event) => {
    setEditor(event.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      setEditor(editor + '  ')
    }
  }

  return (
    <>
      <h1 className='title'>Markdown Previewer</h1>
      <section className="container">
        <textarea
          name="editor"
          id="editor"
          className="container-editor"
          value={editor}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        >
        </textarea>
        <div className="container-preview" id="preview" >
          <Markdown>{editor}</Markdown>
        </div>
        <button
          type='submit'
          className='container-save'
          onClick={downloadFile}
        >
          Save as .txt
        </button>
      </section>
      <footer>
        <p>
          Coded By: <a href='https://www.linkedin.com/in/julian-andres-penagos/' target='_blank'>Julian Penagos</a>
        </p>

        <p>
          <CgMail /><a href="mailto: jpenagosdev@gmail.com">jpenagosdev@gmail.com</a>
        </p>

        <p>

        <FaGithub /> Github: <a target='_blank' href="https://github.com/Jpenagos32">/jpenagos32</a>
        </p>
      </footer>
    </>
  )
}

export default App
