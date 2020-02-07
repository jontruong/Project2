$.get("/api/artists/specialization/american", function(data) {
    for (var i = 0; i < data.length; i++) {
      
      var wellSection = $("<div>");
      // Add a class to this div: 'well'
      wellSection.addClass("well");
      // Add an id to the well to mark which well it is
      wellSection.attr("id", "american-well-" + i);
      // Append the well to the well section
      $("#well-section").append(wellSection);
  
      
      $("#american-well-" + i).append("<h2>" + data[i].name + "</h2>");
      $("#american-well-" + i).append("<h3>Gender: " + data[i].gender + "</h4>");
      $("#american-well-" + i).append("<h3>Location: " + data[i].location + "</h4>");
      $("#american-well-" + i).append("<h3>Price: " + data[i].price + "</h4>");
      $("#american-well-" + i).append("<h3>Social Media: " + data[i].socialMedia + "</h4>");
    }
    
  });