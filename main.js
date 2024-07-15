
//'wxr9aVNebIOeCh8xsW3ikOPeltf3PdjK'

// handle form submission
    function submitForm() {
        const form = document.getElementById('gogo');
        form.addEventListener('submit', (event) => {
        event.preventDefault();
        
// Perform validation and processing here
        if (form.searchfield.value == "") {
            alert("Ensure you input a value in field!");
        }
                            // console.log(typeof(form.searchfield.value));
        const str = "http://api.giphy.com/v1/gifs/search?q=" + replaceSpacesWithPlus(form.searchfield.value)+"&api_key=wxr9aVNebIOeCh8xsW3ikOPeltf3PdjK&limit=5";
                            //console.log(str);

//fetch the goodies from giphy
        var result; fetch(str)
        .then((response) => response.json())
        .then((json) => console.log(json));
        
        console.log(result);

    });

    form.submit();  
  }

  //function to replace spaces with + symbols
function replaceSpacesWithPlus(garbage){
    return garbage.replace(' ', '+');
}

const goods = [{

    image: 'src',
    type: 'gif',
    id: 'num'

}]
result.forEach((goods)=>{
    <dive>
     <image src='${goods.image}'>
     </image>
    </dive>

})
