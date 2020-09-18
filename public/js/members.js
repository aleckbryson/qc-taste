$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.username);
  });

  $.get("/api/restaurants/:id").then(data => {
    $(".vape-god").text(data.name);
  });
});
