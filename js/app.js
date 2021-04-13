

//////////////////////////////////
//Get data from google sheets
/////////////////////////////////
$.ajax("https://spreadsheets.google.com/feeds/list/1efSoAmD6-TKCf6zbGoOL6m4YriP3cu6KeL2ZVF5LnJg/1/public/full?alt=json")
//.then for when the data arrives
.then((data) => {
    console.log(data)

    // Map over the data, to create a simpler dataset
    const projects = data.feed.entry.map((item) => {
        return {
            description: item.gsx$description.$t,
            giturl: item.gsx$giturl.$t,
            image: item.gsx$image.$t,
            liveurl: item.gsx$liveurl.$t,
            project: item.gsx$project.$t

        }

    })
    console.log(projects)

    /////////////////////////////////////////
    //jQuery to render your projects below
    /////////////////////////////////////////

/* only execute this script when the document is ready */
$(document).ready(function(){
    /* function called when you click of the button */
    $("button").click(function(){
        
        /* this if else to change the text in the button */
        if($("button").text() == "☰"){
         $("button").text("🞬");
        }else{
          $("button").text("☰");
        }
      
      /* this function toggle the visibility of our "li" elements */
      $("li").toggle("slow");
    });
  });




///////////////////////////////////////////////



////////////////////////////////////////////////


})

//.catch in case of an error
.catch((error) => {
    console.error(error)
})