
function saveEdits() {

  //get the editable element
  var editElem = document.getElementById("about-artist");
  
  //get the edited element content
  var userVersion = editElem.innerHTML;
  
  //save the content to local storage
  localStorage.userEdits = userVersion;
  
  //write a confirmation to the user
  document.getElementById("update").innerHTML="Edits saved!";
  setTimeout(function(){

    document.getElementById("update").innerHTML="";
  }, 2000);


  }


  var displayName;
  var diplayGender;
  var displayLocation;
  var displaySocial;

  $.get("/api/artists/id/:id", function(data) {
    
    db.Artist.findOne({
      where:
      {
        id: req.params.id
      }
    
  }).then(function(dbArtist) {
    res.json(dbArtist);

      displayName = data.name;
      displayGender = data.gender;
      displayLocation =data.location;
      displaySocial= data.socialMedia;
      displaySpecial = data.specialization;



  });
  console.log("ID: ",id);
});
      
      
$("#artName").html(displayName);
$("#gen").html(displayGender);
$("#whereRU").html(displayLocation);
$("#socialMed").html(displaySocial);
$("#typeOfTat").html(displaySpecial);
      
  
    
  