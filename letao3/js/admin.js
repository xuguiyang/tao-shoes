//写首页的就是交互的代码

//1 进度条
//不让进度条显示圆圈
NProgress.configure({showSpinner:false});

//全局监听当前页面某个ajax 请求发起的时候 让进度条开始
$(window).ajaxStart(function(){
    NProgress.start();
})

// 当ajax请求完成的时候 让进度条完成
$(window).ajaxComplete(function(){
    NProgress.done();
  })

  
  //2.点击侧边栏菜单按钮 让侧边栏消失 右侧沾满屏幕

  $('[data-menu').on('click',function(){
    $('.lt_aside').toggle();
    $('.lt_section').toggleClass('menu');
  })

  //3 点击分类管理 滑出菜单

  $('.lt_aside .menu').on('click','[href="javascript:;"]',function(){
      var _this = $(this);
      var child = _this.siblings();
      child.slideToggle();
  })