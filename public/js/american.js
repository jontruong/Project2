$.get("/api/artists/american", function(data) {

    
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold book data
      var wellSection = $("<div>");
      // Add a class to this div: 'well'
      wellSection.addClass("well");
      // Add an id to the well to mark which well it is
      wellSection.attr("id", "specialization-well-" + i);
      // Append the well to the well section
      $("#well-section").append(wellSection);
  
      // Now  we add our book data to the well we just placed on the page
      $("#specialization-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].name + "</h2>");
      $("#specialization-well-" + i).append("<h3>Author: " + data[i].gender + "</h4>");
      $("#specialization-well-" + i).append("<h3>Genre: " + data[i].location + "</h4>");
      $("#specialization-well-" + i).append("<h3>Pages: " + data[i].price + "</h4>");
      $("#specialization-well-" + i).append("<h3>Pages: " + data[i].socialMedia + "</h4>");
    }
  });