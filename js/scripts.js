var wordFilter = function(sentence) {
  debugger;
  sentence = sentence.split(" ");
  var words = [];

  sentence.forEach(function(word) {
    if (word.length >= 3) {
      words.push(word);
    };
  });

  words = words.reverse().join(" ");
  return words;
};

$(document).ready(function() {

  $("form#quiz").submit(function(event) {
    debugger;

    var sentence = $("#answer").val();
    var words = wordFilter(sentence);

    $(".rightHere").text(words);
    $(".rightHere").show();


    event.preventDefault();
  });
});
