

    // handle form submission
  function submitForm() {
      
   const sb = document.getElementById("sf").value;
   const lf = document.getElementById("lf").value;    
         
        const str = "http://api.giphy.com/v1/gifs/search?q=" + replaceSpacesWithPlus(sb)+"&api_key=MY_KEY&limit="+lf;
        console.log(str);

      //const str =  "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=MY_KEY&limit=6"     
            // above is sample url from website CcrZiHoB9vpQJuHNpiSYlD1EAuVREs09takeoff
   
             fetch(str)
            .then((response) => response.json())
            .then((result) => {  

              // variable lf is the limit of gifs that my fetch is sending back
              for (let i = 0; i < lf; i++) {
                
                //i want to create an element for each gif
                b = "box" + i.toString();
                const para = document.createElement("iframe");    
                const element = document.getElementById("square-container");
                element.appendChild(para); 
                para.setAttribute("id", b);
                                           
                document.getElementById(b).src=result.data[i]["embed_url"];
                para.setAttribute("class","iframe" );
                                                                                  
              
                                            }   //outside of for loop
                                               
                              });
                    
                      }

    //function to replace spaces with + symbols
    function replaceSpacesWithPlus(garbage){
        return garbage.replace(' ', '+');
    }
    
  