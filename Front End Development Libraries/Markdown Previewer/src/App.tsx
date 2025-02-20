import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import './App.css';

function App() {
  const [text, setText] = useState<string>(`# Markdown Previewer 
## btw this is stylized
### it might not look like this in another markdown environment

----------------------------

The [link](https://www.freecodecamp.org)

----------------------------

inline code \`const x = 1;\`

----------------------------
\`\`\`
function(){
    if overWeight{
        console.log("GO TO THE GYM")
    } else {
        console.log("good job pookie <3")}
    }
\`\`\`
----------------------------
- list item
  - list item
     - list item
        - list item
----------------------------

> block quote

----------------------------

**bold**

----------------------------

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
  );

  const updateText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea id="editor" onChange={updateText} value={text}></textarea>
      <div className='flip' /><div id="preview">
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>{text}</ReactMarkdown></div>
    </div>
  );
}

export default App;
