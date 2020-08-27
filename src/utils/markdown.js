import marked from 'marked';

const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = ch => escapeReplacements[ch];

function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else if (escapeTestNoEncode.test(html)) {
    return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
  }
  return html;
}

const renderer = {
  link(href, title, text) {
    if (href === null) {
      return text;
    }
    let out = `<a href="${escape(href)}"`;
    if (/source|website/.test(text)) {
      switch (text) {
        case 'source':
          out = `{{source:"${escape(href)}"}}`;
          break;
        case 'website':
          out = `{{website:"${escape(href)}"}}`;
          break;
        default:
          break;
      }
    } else {
      if (title) {
        out += ` title="${title}"`;
      }
      out += ` target="_blank">${text}</a>`;
    }
    return out;
  }
};

marked.use({ renderer });

export default marked;
