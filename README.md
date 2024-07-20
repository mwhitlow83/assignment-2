# assignment-2
#### Building a search engine
##### How the code works

1. Add an html form to collect search input and clip limit. This also creates buttons for submitting and clearing the input form.

 > <div class="form" id="form">
                 <label for="">Enter keyword: 
                <input 
                  type="text" 
                  name="sf" 
                  id="sf"
                  placeholder="search">

                  <label for="">Show: 
                    <input 
                      type="text" 
                      name="lf" 
                      id="lf"
                      placeholder="limit"
                      size="4">

                <button onclick="submitForm()">Submit</button> 
                <button onclick="submitClear()">Clear</button></label> 
            
              </div>

2. Create a container in html for the populated gifs. We will later address this in javascript.

> div class="square-container" id="square-container" 

3. Collect input vairables and generate a string formated as followed. 

 >  const sb = document.getElementById("sf").value;
   const lf = document.getElementById("lf").value;    
         
        const str = "http://api.giphy.com/v1/gifs/search?q="+replaceSpacesWithPlus(sb)+"&api_key="+MY_KEY+"&limit="+lf;

NOTE: the string must not contain spaces so a function is needed to replace spaces with + symbols.

>  function replaceSpacesWithPlus(garbage){
        return garbage.replace(' ', '+');
    }

4. Fetch using GET and await for the server to respond.

>  fetch(str)
            .then((response) => response.json())
            .then((result) => {  

5. Esablish a function to render the results into the above html container.

> for (let i = 0; i < lf; i++) {
                b = "box" + i.toString();
                const para = document.createElement("iframe");    
                const element = document.getElementById("square-container");
                element.appendChild(para); 
                para.setAttribute("id", b);                  
                document.getElementById(b).src=result.data[i]["embed_url"];
                para.setAttribute("class","iframe" );               }                             

6. Add a function to clear the page by reloading.

> function submitClear(){     
      location.reload();
    };

7. Lastly  lets style the fonts with soemthing special. Google fonts can be used by placing some code into the header.

 > link rel="preconnect" href="https://fonts.googleapis.com">
 link rel="preconnect" href="https:// fonts.gstatic.com" crossorigin> <linkhref="https://fonts.googleapis.com/css2?family=Playwrite+AU+SA:wght@100..400&display=swap" rel="stylesheet"> 

