function getrhyme() {
  var textareaInput = $("#word").val();
  var start=$("#startrange").val();
  var end=$("#endrange").val();
  var linkDatamuse = "https://api.datamuse.com/words?rel_rhy=" + textareaInput + "&max=25";
  $.getJSON(linkDatamuse, function (data) {
    data.forEach(function (element) {      
      if(element.score>start&&element.score<end){
      	$("#result").append(element.word + "</br>");
      }
      console.log(element.score)
      console.log(element.word)
   	
    });

  });
}

$("#Button").on("click", function () {
  getrhyme();
});