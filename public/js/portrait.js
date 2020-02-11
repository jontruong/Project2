$.get("/api/artists/specialization/portrait", function(data) {
    for (var i = 0; i < data.length; i++) {
      
      var wellSection = $("<div>");
      // Add a class to this div: 'well'
      wellSection.addClass("well");
      // Add an id to the well to mark which well it is
      wellSection.attr("id", "portrait-well-" + i);
      // Append the well to the well section
      $("#well-section").append(wellSection);
  
      $("#portrait-well-" + i).addClass("card grey lighten-1");
      $("#portrait-well-" + i).append("<h2 class='center-align '>" + data[i].name + "</h2>");
      $("#portrait-well-" + i).append("<h4>Gender: " + data[i].gender + "</h4>");
      $("#portrait-well-" + i).append("<h4>Location: " + data[i].location + "</h4>");
      $("#portrait-well-" + i).append("<h4>Price: " + data[i].price + "</h4>");
      $("#portrait-well-" + i).append("<h4>Social Media: " + data[i].socialMedia + "</h4>");
    }
    
  });