$(document).ready(function() {
  $(".github-user-thing").click(function() {
    console.log("HI");
    var username = $(this).text();
    $.ajax({
      type: "GET",
      url: "https://api.github.com/users/" + username,
      success: function(data) {
        console.log(data.avatar_url);
        $(".avatar").html("<img src='" + data.avatar_url + "'>")
      }
    })
  })
})
