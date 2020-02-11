function getUrlObject(url) {
  //首先解析整个字符串我们一点一点对应来看
  //第一个括号(\w+) \w匹配任意ascii字符 +号代表一个或多个，这里就是匹配https或者http
  //([\w\.]+)匹配主机地址www.baidu.com
  //(\d+)匹配端口号
  //([\/\w\.]*)匹配url路径
  //(\?[^#]*)匹配query查询字符串
  //(\S*)匹配hash

  // [] 内不需要转义，：不需转义
  var regexp = /(\w+):\/\/([\w.]+):?(\d+)?([/\w.]*)?(\?[^#]*)?#?(\S*)?/;
  // var par = /(&?(\w*)=([^&]*))+/;
  var mat = url.match(regexp);
  // console.log(mat);

  var result = {};

  result.source = mat[0]; // 源地址
  result.protocol = mat[1]; // 协议
  result.host = mat[2]; // 域名
  result.port = mat[3] || '80'; // 端口undefined
  result.path = mat[4]; // 路径
  result.query = mat[5] || ''; // 查询字符串
  result.hash = mat[6] || ''; // hash
  result.params = {};
  //用&分割查询字符串中的每一个参数
  var params = result.query.split('&');
  for (var i = 0; i < params.length; i++) {
    if (params[i] !== '') {
      //匹配每一个参数中的键和值。
      var mat2 = params[i].match(/\??(\w+)=(\S+)/);
      // console.log(mat2);
      result.params[mat2[1]] = mat2[2];
    }
  }
  return result;
}
var url = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=%E5%93%88%E5%93%88#top';
console.log(getUrlObject(url));
