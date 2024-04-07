import { useState } from "react";
import ReactMarkdown from 'react-markdown';

const defaultMarkdown = `
  # Don't be shy and try me out!

  ## Enter your markdown in the editor

  > Winners find a way. Losers make excuses.

  \`\`\`
  You can try different types of markdown.
  \`\`\`

  They will be parsed in \`<h1></h1>\` or \`<h2></h2>\` for example. Try with different \`<html></html>\` elements like:

  * heading 1
  * heading 2
  * link
  * list
  
  [Markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

  _Previewer made with **React**_
  ![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)
`;


function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  function handleChange(event) {
    setMarkdown(event.target.value);
  }
  
  function handleErase() {
    setMarkdown("");
  }

  return (
    <div id="markdown-container">
      <section id="edit-container">
        <label htmlFor="editor">
          <i className="fa-regular fa-pen-to-square" aria-hidden="true"></i>
          Editor
          <i className="fa-solid fa-eraser" aria-hidden="true" title="delete the current markdown" onClick={handleErase}></i>
          <span className="fa-sr-only">Delete the current markdown</span>
        </label>
        <textarea 
          type="text"
          name="markdown" 
          id="editor" 
          onChange={handleChange}
          value={markdown}
        >
          {markdown}
        </textarea>
      </section>
      <section id="preview-container">
        <label htmlFor="preview">
          <i className="fa-regular fa-eye" aria-hidden="true"></i>
          Previewer
        </label>
        <div id="preview">
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <main>
      <h1><i className="fa-solid fa-chevron-left" aria-hidden="true"></i>Mardown Previewer<i className="fa-solid fa-chevron-right" aria-hidden="true"></i></h1>
      <MarkdownPreviewer />
    </main>
  )
}

export default App;
