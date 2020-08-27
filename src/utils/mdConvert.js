import DOMPurify from 'dompurify';
import 'core-js/features/string/replace-all';
import marked from '@/utils/markdown';

function toDescObj(mdSrc) {
  const matchRegEx = /{{(.+):"(.+)"}}/g;
  let html = DOMPurify.sanitize(marked(mdSrc));
  const matches = [...html.matchAll(matchRegEx)];
  html = html.replaceAll(matchRegEx, '');
  const extra = {};
  matches.forEach(match => {
    extra[match[1]] = match[2];
  });
  return {
    html,
    ...extra
  };
}

export default {
  toDescObj
};
