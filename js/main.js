function checkPortrait() {
  if (checkMobile()) {
    var cur_url = location.href;
    if (cur_url.indexOf('/mobile/') < 0) {
      // var sub_folders = cur_url.split('/');
      // var cur_page = sub_folders[sub_folders.length - 1];
      // location.href = cur_url.replace(cur_page, 'mobile/' + cur_page);
      // location.href = 'http://192.168.99.103:8077/mobile'
      var sub_folders = cur_url.split('/');
      var cur_page = sub_folders[sub_folders.length - 2];
      location.href = cur_url.replace(cur_page, cur_page + '/mobile');
    }
  } else {
    var cur_url = location.href;
    if (cur_url.indexOf('/mobile/') >= 0) {
      location.href = cur_url.replace('/mobile', '');
    }
  }
}

$(document).ready(function () {
  checkPortrait()
  $(window).resize(checkPortrait)
})

function checkMobile() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return true;

  }

  if (/android/i.test(userAgent)) {
    return true;
  }
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return true;
  }

  if($(window).width() < 800)
    return true
  return false;
}

function formatCurrency(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}