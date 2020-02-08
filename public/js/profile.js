
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

  $('.carousel').carousel();

  var id=localStorage.getItem("ID");

  var displayName;
  var displayGender;
  var displayLocation;
  var displaySocial;
  var displayPic1;
  var displayPic2;
  var displayPic3;
  var displayEmail;

  console.log("yo");

  $.get("/api/artists/id/"+id, function(data) {
    
    console.log(data);
    
 
   
    
      displayName = data.name;
      displayGender = data.gender;
      displayLocation =data.location;
      displaySocial= data.socialMedia;
      displaySpecial = data.specialization;
      displayAbout= data.about;
      displayPic1 = data.pic1;
      displayPic2 = data.pic2;
      displayPic3 = data.pic3;
      displayEmail = data.email;

      $("#artName").html("Artist Name:"+ "<br>" +displayName);
    
      $("#typeOfTat").html("Artist's style: "+displaySpecial+"<br>"+ "Gender: "+ displayGender+ "<br>"+ "Located in: "+ displayLocation);
    
      $("about-art").html(displayAbout);

      $("#contact-info").html("Email: "+ displayEmail+ "<br>"+ "Social Media: "+ displaySocial);

      $("#picDisOne").html("'<img src='"+displayPic1+"'>'");

      $("#picDisTwo").html("'<img src='"+displayPic2+"'>'");

      $("#picDisThree").html("'<img src='"+displayPic3+"'>'");
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
   
      

      
  
    
  