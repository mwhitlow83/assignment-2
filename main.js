

    // handle form submission
  function submitForm() {
           
    let sb = document.getElementById("sf").value;
    let rb = document.getElementById("content").value;
   console.log(rb);

        const str = "http://api.giphy.com/v1/"+rb+"/search?q=" + replaceSpacesWithPlus(sb)+"&api_key=GdzP71KoysY0soE6M0xHNip3xwQNCIEe&limit=6";
      console.log(str);
      //const str =  "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=GdzP71KoysY0soE6M0xHNip3xwQNCIEe&limit=6"     
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
                        

                           

                            };

    //function to replace spaces with + symbols
    function replaceSpacesWithPlus(garbage){
        return garbage.replace(' ', '+');
    }
    
  