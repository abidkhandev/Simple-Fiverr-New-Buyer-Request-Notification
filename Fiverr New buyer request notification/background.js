// background.js

chrome.runtime.onMessage.addListener(data => {
    if (data.type === 'notification') {
      chrome.notifications.create('', data.options);
    }
  });

// function autorefresh(){
//     chrome.tabs.query({active: true}, function(tabs){
//         var tabtorefresh = tabs[0];
//         console.log(tabtorefresh);
//     // chrome.tabs.reload(tabtorefresh)
//     });



// }

// setInterval(function() {
//     autorefresh()
// }, 20000);

