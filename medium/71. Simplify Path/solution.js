/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const paths = path.split('/');
  const result = [];

  for (let i = 0; i < paths.length; i++) {
    if (paths[i] === '' || paths[i] === '.') {
      continue;
    } else if (paths[i] === '..') {
      if (result.length > 0) {
        result.pop();
      }
    } else {
      result.push(paths[i]);
    }
  }
  return '/' + result.join('/');
};

const simplifyPath2 = (path) => {
  const stack = [];
  const paths = path.split('/');
  for (let i = 0; i < paths.length; i++) {
    if (paths[i] === '' || paths[i] === '.') {
      continue;
    } else if (paths[i] === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(paths[i]);
    }
  }
  return '/' + stack.join('/');
};
