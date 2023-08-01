function onClickHeaderNav(val){
  window.location.href = val + '.html'
}

var amount = 0

function onChangeAmount(distance){
  if(distance > 0)
    amount += distance
  else
    amount = 0
  $("#charge_money").val(formatCurrency(amount));
}

function showSideBar(){
  $('#mobile_sidebar').animate({left:'0'}, {queue:false,duration:200});
}

function hideSideBar(){
  $('#mobile_sidebar').animate({left:'-68%'}, {queue:false,duration:200});
}