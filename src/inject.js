chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      $(".range-editor .octicon-git-compare")
        .addClass("btn-link")
        .click( () => {
          const nodes = $.find("button.js-menu-target.branch span.js-select-button")
          const target = $(nodes[0]).text()
          const base = $(nodes[1]).text()
          const currentURL = document.location.href
          const lastSlash = currentURL.lastIndexOf('/');
          let targetURL = currentURL.substring(0,lastSlash+1)
          targetURL = targetURL + base + "..." + target
          console.log(`GWCE: Detected target ref ${target} and base ref ${base}. Navigating to ${targetURL}.`)
          chrome.runtime.sendMessage({redirect: targetURL});
        })
    }
  }, 10);
});
