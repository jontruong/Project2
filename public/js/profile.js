
// function saveEdits() {

//   //get the editable element
//   var editElem = document.getElementById("about-artist");
  
//   //get the edited element content
//   var userVersion = editElem.innerHTML;
  
//   //save the content to local storage
//   localStorage.userEdits = userVersion;
  
//   //write a confirmation to the user
//   document.getElementById("update").innerHTML="Edits saved!";
//   setTimeout(function(){

//     document.getElementById("update").innerHTML="";
//   }, 2000);


//   }

$(document).ready(function() {

  var id=localStorage.getItem("ID");

  var displayName;
  var displayGender;
  var displayLocation;
  var displaySocial;

  console.log("yo");
  
  $.get("/api/artists/id/"+id, function(data) {
    
    console.log(data);
    
 
   
    
      displayName = data.name;
      displayGender = data.gender;
      displayLocation =data.location;
      displaySocial= data.socialMedia;
      displaySpecial = data.specialization;

      $("#artName").html(displayName);
      $("#gen").html(displayGender);
      $("#whereRU").html(displayLocation);
      $("#socialMed").html(displaySocial);
      $("#typeOfTat").html(displaySpecial);
    });
  });
  // var url = window.location.search;
  // var postId;
  // // Sets a flag for whether or not we're updating a post to be false initially
  // var updating = false;
  // //  // In localhost:8080/profile?post_id=1, postId is 1
  // // if (url.indexOf("?artist_id=") !== -1) {
  // //   postId = url.split("=")[1];
  // //   getPostData(postId);
  // // };

  // var bodyInput = $("#about-artist");

  // var formProf = $("#formId");

  // $(formProf).on("submit", function handleFormSubmit(event) {
  //   event.preventDefault();
  //   // Wont submit the post if we are missing a body or a title
  //   // if (!titleInput.val().trim() || !bodyInput.val().trim()) {
  //   if(!bodyInput.val().trim()) 
  //   return;
  //   })
  
  


  
// });
   
      

      
  
    
  