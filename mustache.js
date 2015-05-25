function mustache(template,data){
  var source = template.innerHTML || template;
  return source.replace(/\{\{(\w*)\}\}/g,
  function(match, key){
    return data.hasOwnProperty(key) ? data[key] : '';
  });
}
