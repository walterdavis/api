function ajaxRequest(url, data, method, success) {
  var params = typeof data == 'string' ? data : Object.keys(data).map(
    function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
  ).join('&');
  var header = 'application/x-www-form-urlencoded';
  var method = {_get: 'GET', _post: 'POST', _patch: 'PATCH', _delete: 'DELETE'}[method] || 'GET';
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open(method, url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState>3 && xhr.status==200){
      var data = xhr.responseText;
      if(xhr.getResponseHeader('Content-type').match('/json')){
        data = JSON.parse(data);
        header = 'application/json';
      }
      success(data);
    }
  };
  xhr.setRequestHeader('Content-type', header);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.send(params);
  return xhr;
}

