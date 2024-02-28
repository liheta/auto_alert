
window.onload = function () {
    // 创建一个新的script元素
    var script = document.createElement('script');
  
    // 设置script元素的内容
    script.innerHTML = `
          //这样做就禁止了alert的弹窗
          window.alert = function(str){
              return ;
          }
      `;
    console.log('script', script);
    // 将新创建的script元素添加到body中
    document.body.appendChild(script);
  }