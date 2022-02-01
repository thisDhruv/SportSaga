const liveSection=document.querySelector(".liveContent");

    const urlA=["https://www.cricbuzz.com/live-cricket-scores/36332/aus-vs-eng-1st-test-the-ashes-2021-22",
    "https://www.cricbuzz.com/live-cricket-scores/38492/3rd-unofficial-test-india-a-tour-of-south-africa-2021"
    ];
    for(x of urlA)
    {
        const url=`https://cricket-api.vercel.app/cri.php?url=${x}`;
    fetch(url)
    .then((data)=>{
        const json = data.json();
        return json;
        
    })
    .then((json)=>{
    
        // const a=document.createElement("a");
        // a.setAttribute("href","#");
    //     const p=document.createElement("p");
    //     const p1=document.createElement("p");
    //     const hr=document.createElement("hr");
    //     const br=document.createElement("br");
    //     const br1=document.createElement("br");
    //     const div=document.querySelector(".liveContent")
    //     const form=document.createElement("form");
    //     const input=document.createElement("input");
    //     const button=document.createElement("button");
    //     form.setAttribute("action","/cricket");
    //     form.setAttribute("method","post");
    //     form.setAttribute("class","submit");
    //     button.setAttribute("type","submit");
    //     button.classList.add('bn632-hover');
    //     input.setAttribute("type","text");
    //     input.setAttribute("name","url");
    //     input.setAttribute("value",`${url}`);
    //     button.setAttribute("class","button")
    //     input.style.display="none";
        
    
        
    //      button.innerText="SCORECARD";
    //     p.innerText=json.livescore.title;
    //     p1.innerText=`${json.livescore.current} ${json.livescore.runrate}`;
    //     p.style.color="white";
    //     p1.style.color="white";
    //    p.style.textAlign="center";
    //    p1.style.textAlign="center";
    
    //     div.appendChild(form);
    //     form.appendChild(button);
    //     // form.appendChild(a);
    //     form.appendChild(p);
    //     form.appendChild(p1);
    //     form.appendChild(br);
    //     form.appendChild(hr);
    //     form.appendChild(br1);
    //     form.appendChild(input);
        
    for (var key in json.livescore) {
        if (json.livescore.hasOwnProperty(key)) {
    console.log(key + " -> " + json.livescore[key]);
    if(json.livescore[key]=='Data Not Found'){
        json.livescore[key]='.'
    }
        }
    }
    const matchDiv = Object.assign(
        document.createElement(`div`), 
        { 
            innerHTML: `       
            <form action="/cricket" method="post" class="submit">
           
            <br>
            <p text-align: center; class="headLine">${json.livescore.title}</p>
            <p text-align: center; class="status">${json.livescore.current} ${json.livescore.runrate}</p>

            <button type="submit" class="bn632-hover bn24">SCORECARD</button>
            <br>
            <input type="text" name="url" value=${url} style="display: none;">

            </form>
                  `,
          classList: [`matchDiv`], } );
         

          liveSection.append(matchDiv);
        
       
        
       
        
      
    })
    }
    function timedRefresh(timeoutPeriod){
        setTimeout("location.reload(true);",timeoutPeriod);
    }
    window.onload=timedRefresh(15000);
    







