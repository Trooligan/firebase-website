// Handle top-navigation clicks
window.addEventListener("DOMContentLoaded", function () {
  var tabLinks = document.querySelectorAll(".navbar a");
  var tabContents = document.querySelectorAll(".tab-content");

  // Show frontpage by default
  showTab("frontpage");

  tabLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var tabId = this.getAttribute("href").substring(1);
      showTab(tabId);
    });
  });

  function showTab(tabId) {
    tabContents.forEach(function (content) {
      content.style.display = "none";
    });

    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.style.display = "block";
    }
  }
});

