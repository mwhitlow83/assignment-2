
//'wxr9aVNebIOeCh8xsW3ikOPeltf3PdjK'


//



var result; fetch("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=wxr9aVNebIOeCh8xsW3ikOPeltf3PdjK&limit=5")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log(result);


