$.get("/api/artists/specialization/black", function(data) {
    for (var i = 0; i < data.length; i++) {
      
      var wellSection = $("<div>");
      // Add a class to this div: 'well'
      wellSection.addClass("well");
      // Add an id to the well to mark which well it is
      wellSection.attr("id", "black-well-" + i);
      // Append the well to the well section
      $("#well-section").append(wellSection);
  
      $("#black-well-" + i).addClass("card grey lighten-1");
      $("#black-well-" + i).append("<h2>" + data[i].name + "</h2>");
      $("#black-well-" + i).append("<h3>Gender: " + data[i].gender + "</h4>");
      $("#black-well-" + i).append("<h3>Location: " + data[i].location + "</h4>");
      $("#black-well-" + i).append("<h3>Price: " + data[i].price + "</h4>");
      $("#black-well-" + i).append("<h3>Social Media: " + data[i].socialMedia + "</h4>");
    }
    
  });