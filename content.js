const injectScript = (file, node) => {
  const th = document.querySelector(node)
  const s = document.createElement('script')
  s.setAttribute('src', file)
  th.appendChild(s)
}

injectScript(chrome.runtime.getURL('alert.js'), 'head')