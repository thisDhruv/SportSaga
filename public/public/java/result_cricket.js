const live=document.querySelector("#live");

    const urlA=["https://www.cricbuzz.com/live-cricket-scores/38587/2nd-test-new-zealand-tour-of-india-2021",
"https://www.cricbuzz.com/live-cricket-scores/38582/1st-test-new-zealand-tour-of-india-2021",
"https://www.cricbuzz.com/live-cricket-scores/38506/1st-test-pakistan-tour-of-bangladesh-2021",
"https://www.cricbuzz.com/live-cricket-scores/39806/2nd-test-west-indies-tour-of-sri-lanka-2021",
"https://www.cricbuzz.com/live-cricket-scores/39801/1st-test-west-indies-tour-of-sri-lanka-2021"];
    for(x of urlA)
    {
        const url=`https://cricket-api.vercel.app/cri.php?url=${x}`;
    fetch(url)
    .then((data)=>{
        const json = data.json();
        return json;
        
    })
    .then((json)=>{
     const table=document.createElement("table");
     const tr1=document.createElement("tr");
     const tr2=document.createElement("tr");
     const tr3=document.createElement("tr");
     const td1=document.createElement("td");
     const td2=document.createElement("td");
     const td3=document.createElement("td");
     const td4=document.createElement("td");
     const div=document.querySelector(".liveContent");
     div.append(table);
     table.append(tr1);
     table.append(tr2);
     table.append(tr3);
     tr1.append(td1);
     tr2.append(td2);
     tr2.append(td3);
     tr3.append(td4);
     td1.innerText=json.livescore.title;
     td2.innerText=json.livescore.teamone;
     td3.innerText=json.livescore.teamtwo;
     td4.innerText=json.livescore.update;
    table.className="table";
    tr1.className="row";
    tr2.className="row";
    tr3.className="row";
    td1.className="data1";
    td2.className="data2";
    td3.className="data2";
    td4.className="data1";
    td1.setAttribute("colspan","2");
    td4.setAttribute("colspan","2");
    var x=Math.floor(Math.random()*255);
    var y=Math.floor(Math.random()*255);
    var z=Math.floor(Math.random()*255);
    td1.style.border=`2px solid rgb(${x},${y},${z})`;
    td2.style.border=`2px solid rgb(${x},${y},${z})`;
    td3.style.border=`2px solid rgb(${x},${y},${z})`;
    td4.style.border=`2px solid rgb(${x},${y},${z})`;

        
        
        
       
        
       
        
      
    })
    }
    function timedRefresh(timeoutPeriod){
        setTimeout("location.reload(true);",timeoutPeriod);
    }
    // window.onload=timedRefresh(15000);
//json.livescore.title;    
//json.livescore.teamone+"-----"+json.livescore.teamtwo;
//json.livescore.update;