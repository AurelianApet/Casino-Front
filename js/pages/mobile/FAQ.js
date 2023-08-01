function onClickHeaderNav(val){
  window.location.href = val + '.html'
}

function showSideBar(){
  $('#mobile_sidebar').animate({left:'0'}, {queue:false,duration:200});
}

function hideSideBar(){
  $('#mobile_sidebar').animate({left:'-68%'}, {queue:false,duration:200});
}