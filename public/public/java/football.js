const liveSection = document.querySelector('section');
const toggle = document.querySelector('.toggle');
const toggle2 = document.querySelector('.toggle2');


const limitMatches = 2;
const space = " ";

function seriesA(){  
    if(document.querySelector('.matchDiv')!=null){
        var elements = document.getElementsByClassName('matchDiv');

        while (elements.length > 0) {
           liveSection.removeChild(elements[0]);
        }
    }
    
  
  $.ajax({
    headers: { 'X-Auth-Token': '1b01dc1fe35243bfb113fddbd84b6921' },
    url: 'http://api.football-data.org/v2/competitions/2019/matches/',
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
    console.log(response);

  
    if(toggle.checked){
        if(toggle2.checked){
            makeDivsScheduledWithoutImage(response);
        }else{
            makeDivsScheduled(response);
        }
       
    }else {
        if(toggle2.checked){
            makeDivsWithoutImage(response);
        }else{
            makeDivs(response);
        }
      
        }
      
    
    

  });
  
}
function UEFA(){  
    if(document.querySelector('.matchDiv')!=null){
        var elements = document.getElementsByClassName('matchDiv');

        while (elements.length > 0) {
           liveSection.removeChild(elements[0]);
        }
    }
   
    $.ajax({
      headers: { 'X-Auth-Token': '1b01dc1fe35243bfb113fddbd84b6921' },
      url: 'http://api.football-data.org/v2/competitions/2001/matches/',
      dataType: 'json',
      type: 'GET',
    }).done(function(response) {
      console.log(response);
      
     
    
      if(toggle.checked){
        if(toggle2.checked){
            makeDivsScheduledWithoutImage(response);
        }else{
            makeDivsScheduled(response);
        }
       
    }else {
        if(toggle2.checked){
            makeDivsWithoutImage(response);
        }else{
            makeDivs(response);
        }
      
        }
  
    });
    
  }

function bpl(){  
    if(document.querySelector('.matchDiv')!=null){
        var elements = document.getElementsByClassName('matchDiv');

        while (elements.length > 0) {
           liveSection.removeChild(elements[0]);
        }
    }
    
    $.ajax({
      headers: { 'X-Auth-Token': '1b01dc1fe35243bfb113fddbd84b6921' },
      url: 'http://api.football-data.org/v2/competitions/2021/matches/',
      dataType: 'json',
      type: 'GET',
    }).done(function(response) {
      console.log(response);
      
      
    
      if(toggle.checked){
        if(toggle2.checked){
            makeDivsScheduledWithoutImage(response);
        }else{
            makeDivsScheduled(response);
        }
       
    }else {
        if(toggle2.checked){
            makeDivsWithoutImage(response);
        }else{
            makeDivs(response);
        }
      
        }
       
  
    });
    
  }

function laliga(){  

    if(document.querySelector('.matchDiv')!=null){
        var elements = document.getElementsByClassName('matchDiv');

        while (elements.length > 0) {
           liveSection.removeChild(elements[0]);
        }
    }
        const space = " ";
    $.ajax({
      headers: { 'X-Auth-Token': '1b01dc1fe35243bfb113fddbd84b6921' },
      url: 'http://api.football-data.org/v2/competitions/2014/matches/',
      dataType: 'json',
      type: 'GET',
    }).done(function(response) {
      console.log(response);
      

      if(toggle.checked){
        if(toggle2.checked){
            makeDivsScheduledWithoutImage(response);
        }else{
            makeDivsScheduled(response);
        }
       
    }else {
        if(toggle2.checked){
            makeDivsWithoutImage(response);
        }else{
            makeDivs(response);
        }
      
        }
    });
    
  }

//   $.ajax({
//     headers: { 'X-Auth-Token': '1b01dc1fe35243bfb113fddbd84b6921' },
//     url: 'http://api.football-data.org/v2/competitions/2014/matches/',
//     dataType: 'json',
//     type: 'GET',
//   }).done(function(response) {
//     console.log(response);
// });




//FUNCTIONS


function makeDivsScheduled(response){


    const matchArray = response.matches;
    let count=0;
    for(let i=0;i<matchArray.length;i++){
        
        let match = matchArray[i];
        if(match.status=='SCHEDULED'){
           
            if(count==limitMatches)break;

            count++;
        let awayTeam = match.awayTeam.name;
        let homeTeam = match.homeTeam.name;
        let winner = match.score.winner;
        let fullTimeAwayTeamScore = match.score.fullTime.awayTeam;
        let fullTimeHomeTeamScore = match.score.fullTime.homeTeam;
        let date = match.utcDate;
            date = date.substring(0,date.indexOf('T'));
        let time = match.utcDate.substring(match.utcDate.indexOf('T')+1,match.utcDate.length-1);    
         


        if(winner==='HOME_TEAM'){
            winner=homeTeam;
        }else{
            if(!(winner==='DRAW'))
            winner=awayTeam;
        }
        if(match.status=='IN_PLAY'){
            winner='TBD';
        }
        
        $.ajax({
            headers: { 'X-Auth-Token': '1b01dc1fe35243bfb113fddbd84b6921' },
            url: 'http://api.football-data.org/v2/teams/'+match.awayTeam.id,
            dataType: 'json',
            type: 'GET',
          }).done(function(response) {
            console.log(response);
            const imgSrc1 = response.crestUrl;

            $.ajax({
                headers: { 'X-Auth-Token': '1b01dc1fe35243bfb113fddbd84b6921' },
                url: 'http://api.football-data.org/v2/teams/'+match.homeTeam.id,
                dataType: 'json',
                type: 'GET',
              }).done(function(response) {
                console.log(response);
                const imgSrc2 = response.crestUrl;

                if(match.status=='SCHEDULED'){
                    const matchDiv = Object.assign(
                        document.createElement(`div`), 
                        { 
                            innerHTML: `       
                            <div class="footScores">
                    <div class="team">
                        <img src=${imgSrc1} class="teamLogo">
                        <h2>${awayTeam}</h2>
                    </div>
                    <h1 class="goals"></h1>
                    <div class="team">
                        <img src=${imgSrc2} class="teamLogo">
                        <h2>${homeTeam}</h2>
                    </div>
                </div>
                <div>
                    <h2 class="winner">Winner: TBD</h2>
                    <h2 class="upcoming">UPCOMING</h2>
                    <h2 class="date"><b>Date</b> : ${date}</h2>
                    <br>  <br>
                    <h2 class="time"><b>Time</b> : ${time}</h2>
      
                            <br>
                            <br>
                            <br>
                        </div>
                                  `,
                          classList: [`matchDiv`], } );
                         
                          liveSection.append(matchDiv);
                }
            
            });


            
        });
       

       
    }

    }
}
function makeDivs(response){


    const matchArray = response.matches;
    let count=0;
    for(let i=matchArray.length-1;i>0;i--){
        
        let match = matchArray[i];
        if(match.status=='IN_PLAY'||match.status=='FINISHED'||match.status=='PAUSED'){
           
            if(count==limitMatches)break;

            count++;
        let awayTeam = match.awayTeam.name;
        let homeTeam = match.homeTeam.name;
        let winner = match.score.winner;
        let fullTimeAwayTeamScore = match.score.fullTime.awayTeam;
        let fullTimeHomeTeamScore = match.score.fullTime.homeTeam;
        let date = match.utcDate;
            date = date.substring(0,date.indexOf('T'));
        let time = match.utcDate.substring(match.utcDate.indexOf('T')+1,match.utcDate.length-1);    
         


        if(winner==='HOME_TEAM'){
            winner=homeTeam;
        }else{
            if(!(winner==='DRAW'))
            winner=awayTeam;
        }
        if(match.status=='IN_PLAY'||match.status=='PAUSED'){
            winner='TBD';
        }
        
        $.ajax({
            headers: { 'X-Auth-Token': '1b01dc1fe35243bfb113fddbd84b6921' },
            url: 'http://api.football-data.org/v2/teams/'+match.awayTeam.id,
            dataType: 'json',
            type: 'GET',
          }).done(function(response) {
            console.log(response);
            const imgSrc1 = response.crestUrl;

            $.ajax({
                headers: { 'X-Auth-Token': '1b01dc1fe35243bfb113fddbd84b6921' },
                url: 'http://api.football-data.org/v2/teams/'+match.homeTeam.id,
                dataType: 'json',
                type: 'GET',
              }).done(function(response) {
                console.log(response);
                const imgSrc2 = response.crestUrl;

                if(match.status=='IN_PLAY'||match.status=='PAUSED'){
                    const matchDiv = Object.assign(
                        document.createElement(`div`), 
                        { 
                            innerHTML: `       
                            <div class="footScores">
                    <div class="team">
                        <img src=${imgSrc1} class="teamLogo">
                        <h2>${awayTeam}</h2>
                    </div>
                    <h1 class="goals">${fullTimeAwayTeamScore + space} - ${space + fullTimeHomeTeamScore}</h1>
                    <div class="team">
                        <img src=${imgSrc2} class="teamLogo">
                        <h2>${homeTeam}</h2>
                    </div>
                </div>
                <div>
                    <h2 class="winner">Winner: ${winner}</h2>
                    <h2 class="live">LIVE</h2>
                    <h2 class="date"><b>Date</b> : ${date}</h2>
                    <br>  <br>
                    <h2 class="time"><b>UTC</b> : ${time}</h2>
      
                            <br>
                            <br>
                            <br>
                        </div>
                                  `,
                          classList: [`matchDiv`], } );
                         
                          liveSection.append(matchDiv);
                }else{
                    const matchDiv = Object.assign(
                        document.createElement(`div`), 
                        { 
                            innerHTML: `       
                            <div class="footScores">
                    <div class="team">
                        <img src=${imgSrc1} class="teamLogo">
                        <h2>${awayTeam}</h2>
                    </div>
                    <h1 class="goals">${fullTimeAwayTeamScore + space} - ${space + fullTimeHomeTeamScore}</h1>
                    <div class="team">
                        <img src=${imgSrc2} class="teamLogo">
                        <h2>${homeTeam}</h2>
                    </div>
                </div>
                <div>
                    <h2 class="winner">Winner: ${winner}</h2>
                    <h2 class="finished">FINISHED</h2>
                    <h2 class="date"><b>DATE</b> : ${date}</h2>
                    <br>  <br>
                    <h2 class="time"><b>UTC</b> : ${time}</h2>
                            <br>
                            <br>
                            <br>
                        </div>
                                  `,
                          classList: [`matchDiv`], } );
                         
                          liveSection.append(matchDiv);
                }
            
            });


            
        });
       

       
    }

    }
}


function makeDivsWithoutImage(response){


    const matchArray = response.matches;
    let count=0;
    for(let i=matchArray.length-1;i>0;i--){
        
        let match = matchArray[i];
        if(match.status=='IN_PLAY'||match.status=='FINISHED'||match.status=='PAUSED'){
           

            count++;
        let awayTeam = match.awayTeam.name;
        let homeTeam = match.homeTeam.name;
        let winner = match.score.winner;
        let fullTimeAwayTeamScore = match.score.fullTime.awayTeam;
        let fullTimeHomeTeamScore = match.score.fullTime.homeTeam;
        let date = match.utcDate;
            date = date.substring(0,date.indexOf('T'));
        let time = match.utcDate.substring(match.utcDate.indexOf('T')+1,match.utcDate.length-1);    
         


        if(winner==='HOME_TEAM'){
            winner=homeTeam;
        }else{
            if(!(winner==='DRAW'))
            winner=awayTeam;
        }
        if(match.status=='IN_PLAY'||match.status=='PAUSED'){
            winner='TBD';
        }
        
        

                if(match.status=='IN_PLAY'||match.status=='PAUSED'){
                    const matchDiv = Object.assign(
                        document.createElement(`div`), 
                        { 
                            innerHTML: `       
                            <div class="footScores">
                    <div class="team">
                        <img src="#" class="teamLogo">
                        <h2>${awayTeam}</h2>
                    </div>
                    <h1 class="goals">${fullTimeAwayTeamScore + space} - ${space + fullTimeHomeTeamScore}</h1>
                    <div class="team">
                        <img src="#" class="teamLogo">
                        <h2>${homeTeam}</h2>
                    </div>
                </div>
                <div>
                    <h2 class="winner">Winner: ${winner}</h2>
                    <h2 class="live">LIVE</h2>
                    <h2 class="date"><b>Date</b> : ${date}</h2>
                    <br>  <br>
                    <h2 class="time"><b>UTC</b> : ${time}</h2>
      
                            <br>
                            <br>
                            <br>
                        </div>
                                  `,
                          classList: [`matchDiv`], } );
                         
                          liveSection.append(matchDiv);
                }else{
                    const matchDiv = Object.assign(
                        document.createElement(`div`), 
                        { 
                            innerHTML: `       
                            <div class="footScores">
                    <div class="team">
                        <img src="#" class="teamLogo">
                        <h2>${awayTeam}</h2>
                    </div>
                    <h1 class="goals">${fullTimeAwayTeamScore + space} - ${space + fullTimeHomeTeamScore}</h1>
                    <div class="team">
                        <img src="#" class="teamLogo">
                        <h2>${homeTeam}</h2>
                    </div>
                </div>
                <div>
                    <h2 class="winner">Winner: ${winner}</h2>
                    <h2 class="finished">FINISHED</h2>
                    <h2 class="date"><b>DATE</b> : ${date}</h2>
                    <br>  <br>
                    <h2 class="time"><b>UTC</b> : ${time}</h2>
                            <br>
                            <br>
                            <br>
                        </div>
                                  `,
                          classList: [`matchDiv`], } );
                         
                          liveSection.append(matchDiv);
                }
            
           
       

       
    }

    }
}

function makeDivsScheduledWithoutImage(response){


    const matchArray = response.matches;
    let count=0;
    for(let i=0;i<matchArray.length;i++){
        
        let match = matchArray[i];
        if(match.status=='SCHEDULED'){
           

            count++;
        let awayTeam = match.awayTeam.name;
        let homeTeam = match.homeTeam.name;
        let winner = match.score.winner;
        let fullTimeAwayTeamScore = match.score.fullTime.awayTeam;
        let fullTimeHomeTeamScore = match.score.fullTime.homeTeam;
        let date = match.utcDate;
            date = date.substring(0,date.indexOf('T'));
        let time = match.utcDate.substring(match.utcDate.indexOf('T')+1,match.utcDate.length-1);    
         


        if(winner==='HOME_TEAM'){
            winner=homeTeam;
        }else{
            if(!(winner==='DRAW'))
            winner=awayTeam;
        }
        if(match.status=='IN_PLAY'){
            winner='TBD';
        }
        
       

                if(match.status=='SCHEDULED'){
                    const matchDiv = Object.assign(
                        document.createElement(`div`), 
                        { 
                            innerHTML: `       
                            <div class="footScores">
                    <div class="team">
                        <img src="#"  class="teamLogo">
                        <h2>${awayTeam}</h2>
                    </div>
                    <h1 class="goals"></h1>
                    <div class="team">
                        <img src="#" class="teamLogo">
                        <h2>${homeTeam}</h2>
                    </div>
                </div>
                <div>
                    <h2 class="winner">Winner: TBD</h2>
                    <h2 class="upcoming">UPCOMING</h2>
                    <h2 class="date"><b>Date</b> : ${date}</h2>
                    <br>  <br>
                    <h2 class="time"><b>Time</b> : ${time}</h2>
      
                            <br>
                            <br>
                            <br>
                        </div>
                                  `,
                          classList: [`matchDiv`], } );
                         
                          liveSection.append(matchDiv);
                }
            
        

       
    }

    }
}