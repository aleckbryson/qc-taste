$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/restaurants/:id").then(data => {
    $(".test").text(data.name);
  });
});
