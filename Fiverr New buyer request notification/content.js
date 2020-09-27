// content.js

// const button = document.createElement('button');
// button.textContent = 'Greet me!'
// document.body.insertAdjacentElement('afterbegin', button);
// button.addEventListener('click', () => {
//   console.log('Clicked');
// });


// button.addEventListener('click', () => {
//   chrome.runtime.sendMessage('', {
//     type: 'notification',
//     options: {
//       title: 'Just wanted to notify you',
//       message: 'How great it is!',
//       iconUrl: 'iconfinder_fiverr.png',
//       type: 'basic'
//     }
//   });
// });

$(document).ready(function () {
    setTimeout(function () {
      // alert('Reloading Page');
      location.reload(true);
    }, 600000);
  });

var currentoffers = $(".db-new-filters>ul>li:first>a").attr("data-count");

// sessionStorage.setItem("currentoffers", '');
var lastoffers = sessionStorage.getItem("currentoffers");

if(lastoffers != undefined && lastoffers != ""){
  var newoffers = $(".db-new-filters>ul>li:first>a").attr("data-count");

  console.log(newoffers)
if(newoffers!=lastoffers){
    //alert("true");
      chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      title: 'Just wanted to notify you',
      message: 'There might be new offers!',
      iconUrl: 'iconfinder_fiverr.png',
      type: 'basic'
    }
  });
    sessionStorage.setItem("currentoffers", newoffers);
} else {
    // alert("false");
    chrome.runtime.sendMessage('', {
      type: 'notification',
      options: {
        title: 'Just wanted to notify you',
        message: 'There are no new offers!',
        iconUrl: 'iconfinder_fiverr.png',
        type: 'basic'
      }
    });
}

}else{
  sessionStorage.setItem("currentoffers", currentoffers);
}

