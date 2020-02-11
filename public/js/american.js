var nameDem;

$.get("/api/artists/specialization/american", function(data) {
    for (var i = 0; i < data.length; i++) {
      
      var wellSection = $("<div>");
      // Add a class to this div: 'well'
      
      wellSection.addClass("well");
      // Add an id to the well to mark which well it is
      wellSection.attr("id", "american-well-" + i);
      // Append the well to the well section
      $("#well-section").append(wellSection);


      nameDem=data[i].name;
      $("#american-well-" + i).addClass("card grey lighten-1");
      $("#american-well-" + i).append("<h3 class='center-align '>" + data[i].name + "</h3>");
      $("#american-well-" + i).append("<h4>Gender: " + data[i].gender + "</h4>");
      $("#american-well-" + i).append("<h4>Location: " + data[i].location + "</h4>");
      $("#american-well-" + i).append("<h4>Price: " + data[i].price + "</h4>");
      $("#american-well-" + i).append("<h4>Social Media: " + data[i].socialMedia + "</h4>");

      
      // $("#american-well-" + i).on("click", function(){
      //     $("#american-well-" + i).attr("href","" );
      //     console.log("clicked!");
      //     $("#artName").html(nameDem);
      //     $("#gen").html(data[i].gender);
      //     $("#whereRU").html(data[i].location);

      // })
    
      // $("#socialMed").html(displaySocial);
      // $("#typeOfTat").html(displaySpecial);
      
    }
    
  });