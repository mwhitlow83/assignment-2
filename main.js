

// handle form submission
    function submitForm() {
        
  //get the input field      
        const form = document.getElementById('gogo');
       // const type = document.querySelector('input[name="genderS"]:checked').value;
        form.addEventListener('submit', (event) => {
        event.preventDefault();

  // get the radio field
        

// Perform validation and processing
        if (form.searchfield.value == "") {
            alert("Ensure you input a value in field!");
        }
                            console.log(typeof(form.searchfield.value));
        const str = "http://api.giphy.com/v1/gifs/search?q=" + replaceSpacesWithPlus(form.searchfield.value)+"&api_key=VOk8qTYswyC670MG2Iq7D62o2bnKuc8B=5";
                           // console.log(type);

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
/*
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
*/