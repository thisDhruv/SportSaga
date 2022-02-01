const liveSection = document.querySelector('section');

function bpl(){
    if(document.querySelector('.teamCard')!=null){
        var elements = document.getElementsByClassName('teamCard');

        while (elements.length > 0) {
           liveSection.removeChild(elements[0]);
        }
    }
    $.ajax({
        headers: { 'X-Auth-Token': '1b01dc1fe35243bfb113fddbd84b6921' },
        url: 'http://api.football-data.org/v2/competitions/2021/standings/',
        dataType: 'json',
        type: 'GET',
      }).done(function(response) {
        console.log(response);
        makeDivs(response);
      
       
    });
    
}
  
function seriesA(){
    if(document.querySelector('.teamCard')!=null){
        var elements = document.getElementsByClassName('teamCard');

        while (elements.length > 0) {
           liveSection.removeChild(elements[0]);
        }
    }
    $.ajax({
        headers: { 'X-Auth-Token': '1b01dc1fe35243bfb113fddbd84b6921' },
        url: 'http://api.football-data.org/v2/competitions/2019/standings/',
        dataType: 'json',
        type: 'GET',
      }).done(function(response) {
        console.log(response);
        makeDivs(response);
      
       
    });
    
}

function laliga(){
    if(document.querySelector('.teamCard')!=null){
        var elements = document.getElementsByClassName('teamCard');

        while (elements.length > 0) {
           liveSection.removeChild(elements[0]);
        }
    }
    $.ajax({
        headers: { 'X-Auth-Token': '1b01dc1fe35243bfb113fddbd84b6921' },
        url: 'http://api.football-data.org/v2/competitions/2014/standings/',
        dataType: 'json',
        type: 'GET',
      }).done(function(response) {
        console.log(response);
        makeDivs(response);
      
       
    });
    
}

function UEFA(){

    if(document.querySelector('.teamCard')!=null){
        var elements = document.getElementsByClassName('teamCard');

        while (elements.length > 0) {
           liveSection.removeChild(elements[0]);
        }
    }
    $.ajax({
        headers: { 'X-Auth-Token': '1b01dc1fe35243bfb113fddbd84b6921' },
        url: 'http://api.football-data.org/v2/competitions/2001/standings/',
        dataType: 'json',
        type: 'GET',
      }).done(function(response) {
        console.log(response);
        makeDivs(response);
      
       
    });
    
}


function makeDivs(response){
    const matchArray = response.standings[0].table;

    for(let team of matchArray){
        const teamDiv = Object.assign(
            document.createElement(`div`), 
            { 
                innerHTML: `       
                
                <div class="position">
                    ${team.position}

                </div>
                <img src=${team.team.crestUrl} class="teamLogo">
                <h1 class="teamName">${team.team.name}</h1>
                <div class="won"><h1>WON</h1><h2>${team.won}</h2></div>
                <div class="lost"><h1>LOST</h1><h2>${team.lost}</h2></div>
                <div class="draw"><h1>DRAW</h1><h2>${team.draw}</h2></div>
                      `,
              classList: [`teamCard`], } );
             
              liveSection.append(teamDiv);
    }
}



