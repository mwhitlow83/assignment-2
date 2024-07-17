

    // handle form submission
  //  function submitForm() {
            
     
   //    const form = document.getElementById('gogo');
  //      const type = document.querySelector('input[name="content"]:checked').value;
  //       form.addEventListener('submit', (event) => {
  //         event.preventDefault();

   
            

  
//           if (form.searchfield.value == "") {
//                alert("Ensure you input a value in field!");
//            }
//let data = {};


/*
let data = {
    type: "",
    id: "",
    url: "",
    slug: "",
    bitly_gif_url: ""

}
*/
      //  const str = "http://api.giphy.com/v1/gifs/search?q=" + replaceSpacesWithPlus(form.searchfield.value)+"&api_key=GdzP71KoysY0soE6M0xHNip3xwQNCIEe&limit=5";
      
      const str =  "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=GdzP71KoysY0soE6M0xHNip3xwQNCIEe&limit=6"     
            // above is sample url from website 
   
             fetch(str)
            .then((response) => response.json())
            .then((result) => {  document.getElementById('box1').src=result.data[0]["embed_url"];
                                 document.getElementById('box2').src=result.data[1]["embed_url"];
                                 document.getElementById('box3').src=result.data[2]["embed_url"];
                                 document.getElementById('box4').src=result.data[3]["embed_url"];
                                 document.getElementById('box5').src=result.data[4]["embed_url"];
                                 document.getElementById('box6').src=result.data[5]["embed_url"];
                            
                              
                                });
            
            
            
            
           

              
            
           
                
                
      
                
                                //console.log(json) was here before and worked
           //.console.log(data);

  //      });

   //  form.submit();  
 // }

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
