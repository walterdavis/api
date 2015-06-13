/**
 * Performs a very limited form of Mustache template replacement
 * @param {DOMObject | String} template The HTML element (or source code) containing Mustache placeholders
 * @param {JSON String | Object} data The key/value pairs that will replace the placeholders
 * @returns HTML with substitutions made
 * @type String
 */

function mustache(template, data){
  var source = template.innerHTML || template;
  var data = (typeof data == 'object') ? data : JSON.parse(data);
  return source.replace(/\{\{(\w*)\}\}/g,
  function(match, key){
    return data.hasOwnProperty(key) ? data[key] : '';
  });
}
