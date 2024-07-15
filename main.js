
//'wxr9aVNebIOeCh8xsW3ikOPeltf3PdjK'


//



function submitForm() {
    const form = document.getElementById('gogo');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // Perform validation and processing here
      if (form.searchfield.value == "") {
        alert("Ensure you input a value in both fields!");
      }
      console.log(form.searchfield.value);
      
    });

    form.submit();

    
  }





/*
var result; fetch("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=wxr9aVNebIOeCh8xsW3ikOPeltf3PdjK&limit=5")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log(result);

*/
