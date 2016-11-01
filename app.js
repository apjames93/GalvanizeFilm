$(document).ready(function() {

    $(".submit").click(function(e) {
        event.preventDefault();
        var movieValue = $(".movieTitle").val()
        var genreValue = $(".genre").val()
        var discriptionValue = $(".discription").val()
        var imgSrc = $(".imgURL").val()
        var ratingValue = $(".rating").val()
var data= {
    title: movieValue,
    genre: genreValue,
    description: discriptionValue,
    coverPicture: imgSrc,
    rating: ratingValue
}

        $.post("https://mighty-eyrie-15280.herokuapp.com/films", data).done(function(data1){
           $(".data-back").append(data1.responseText)
          console.log(data1.Object.responseText);
        }).fail(function(error){
          console.log(error);
        });


    })
})
