import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { marked } from 'marked';
import '../../../css/beta/chatgpt-3.css'
import 'highlight.js/styles/github.css';

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, lang) {
    const hljs = require('highlight.js');
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartypants: false,
  xhtml: false
});

function Chatgpt3() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true)
    try {
      const response = await fetch("/api/chatgpt-3/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      if (data.success === false) {
        throw new Error(data.message)
      }

      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setQuestion("");
      setLoading(false)
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <Layout>
      <div>

      <main className="gpt-main">
        <h3>Power by ChatGTP-3.0</h3>
        <form onSubmit={onSubmit}>
          <textarea
            rows={5}
            name="question"
            placeholder="输入你的问题"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{ marginBottom: 12 }}
          />
          <input type="submit" value={loading ? '生成中...' : '发送'} />
        </form>
        <div className={'result'} dangerouslySetInnerHTML={{ __html: `${loading ? '生成中...' : marked.parse(result || '')}` }} />
      </main>
    </div>

    </Layout>
    
  );
}

export default Chatgpt3;


