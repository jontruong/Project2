$.get("/api/artists/specialization/watercolor", function(data) {
    for (var i = 0; i < data.length; i++) {
      
      var wellSection = $("<div>");
      // Add a class to this div: 'well'
      wellSection.addClass("well");
      // Add an id to the well to mark which well it is
      wellSection.attr("id", "watercolor-well-" + i);
      // Append the well to the well section
      $("#well-section").append(wellSection);
  
      $("#watercolor-well-" + i).addClass("card grey lighten-1");
      $("#watercolor-well-" + i).append("<h3 class='center-align '>" + data[i].name + "</h3>");
      $("#watercolor-well-" + i).append("<h4>Gender: " + data[i].gender + "</h4>");
      $("#watercolor-well-" + i).append("<h4>Location: " + data[i].location + "</h4>");
      $("#watercolor-well-" + i).append("<h4>Price: " + data[i].price + "</h4>");
      $("#watercolor-well-" + i).append("<h4>Social Media: " + data[i].socialMedia + "</h4>");
      
    }
    
  });