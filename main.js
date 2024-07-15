
//'wxr9aVNebIOeCh8xsW3ikOPeltf3PdjK'


//
var str;

// handle form submission
function submitForm() {
    const form = document.getElementById('gogo');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // Perform validation and processing here
      if (form.searchfield.value == "") {
        alert("Ensure you input a value in both fields!");
      }
     // console.log(typeof(form.searchfield.value));
      const str = "http://api.giphy.com/v1/gifs/search?q=" + replaceSpacesWithPlus(form.searchfield.value)+"&api_key=wxr9aVNebIOeCh8xsW3ikOPeltf3PdjK&limit=5";
      //console.log(str);

      var result; fetch(str)
      .then((response) => response.json())
      .then((json) => console.log(json));
    
    console.log(result);
    


    });

    form.submit();  


  }

function replaceSpacesWithPlus(garbage){
    return garbage.replace(' ', '+');
}



/*
var result; fetch("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=wxr9aVNebIOeCh8xsW3ikOPeltf3PdjK&limit=5")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log(result);

*/
