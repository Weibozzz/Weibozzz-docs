<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>前端知识体系</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="description" content="Description">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/vue.css?time=1561363919508">
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/gitalk/dist/gitalk.css?time=1561363919508" media="all">
  <link rel="icon" type="image/x-icon" href="./icon.jpg">
</head>
<body>
<div id="app"></div>
<script>
  window.$docsify = {
    name: '前端知识体系',
    repo: 'https://github.com/Weibozzz/Weibozzz.github.io'
  }
</script>
<script src="${dsds}./js/md5.min.js?time=1561363919508"></script>
<script src="//unpkg.com/docsify-copy-code"></script>
<script src="//unpkg.com/docsify/lib/docsify.min.js?time=1561363919508"></script>
<script type="javascript" src="//unpkg.com/docsify/lib/plugins/gitalk.min.js?time=1561363919508"></script>
<script src="https://unpkg.com/gitalk/dist/gitalk.min.js?time=1561363919508" type="javascript"></script>
<script>

  const clientID = '3fcb62f9fde9f38f16fb'
  const clientSecret = '3aeb8d5e057103a9b5f63a83c2c722bc0b10fb4e'
  window.addEventListener('hashchange', function () {
    console.log('The hash has changed!')
    gitalkInit()
  }, false)
  gitalkInit()
  function gitalkInit () {
    window.gitalk = new Gitalk({
      clientID,
      clientSecret,
      title: decodeURIComponent(location.hash.replace('#/./docs/', '')) || '前端知识体系',
      repo: 'weibozzz.github.io',
      owner: 'weibozzz',
      admin: ['weibozzz'],
      id: md5(location.hash),      // Ensure uniqueness and length less than 50
      distractionFreeMode: false  // Facebook-like distraction free mode
    })
    gitalk.render('app')
  }
</script>
</body>
</html>
