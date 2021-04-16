

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

    //  $("figure").mouseleave(
    //     function() {
    //       $(this).removeClass("hover");
    //     }
    //   );

      for (i = 0; i < projects.length; i+=1) {
        //   const project = projects[i]
        const $div = $("<figure>")
        

        const $img = $("<img>").attr("src", projects[i].image)
        $($div).append($img)
        console.log(projects[i].image)
        // const $fig = $("<figcaption>")
        // $($div).append($fig)

        const $a = $("<a>").attr("href", projects[i].liveurl)
        $($div).append($a)

        $(".projects").append($div)
          
    }
  

///////////////////////////////////////////////



////////////////////////////////////////////////


})








//.catch in case of an error
// .catch((error) => {
//     console.error(error)
// })