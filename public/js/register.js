
$("#regSub").on("click", function (event) {
    event.preventDefault();

    var newArtist = {
        firstName: $("#first_name").val().trim(),
        lastName: $("#last_name").val().trim(),
        location: $("#location").val().trim(),
        socialMedia: $("#socialMedia").val().trim(),
    };
    var name = firstName + " " + lastName;
    console.log("name: ", name)

    $.post("/api/new", newArtist)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding artist...");
    });
    $("#first_name").val("");
    $("#last_name").val("");
    $("#location").val("");
    $("#socialMedia").val("");

})