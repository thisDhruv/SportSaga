const liveSection = document.querySelector('section');

function cricketNews(){

    if(document.querySelector('.newsCard')!=null){
        var elements = document.getElementsByClassName('newsCard');

        while (elements.length > 0) {
           liveSection.removeChild(elements[0]);
        }
    }
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://bing-news-search1.p.rapidapi.com/news/search?q=%3CCRICKET%3E&freshness=Day&textFormat=Raw&safeSearch=Off",
        "method": "GET",
        "headers": {
            "x-bingapis-sdk": "true",
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            "x-rapidapi-key": "c9b4694736msh00fad35433574e3p12944cjsne8a87f23d029"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);

        const newsArray = response.value;

    for(let news of newsArray){
        const teamDiv = Object.assign(
            document.createElement(`div`), 
            { 
                innerHTML: `       
                <img src=${news.image.thumbnail.contentUrl} class="thumbnail">
                <div>
                <h1 class="headline">${news.name}</h1>
                <br><br>
                <h2 class="description">${news.description}</h2>
                </div>
                
                      `,
              classList: [`newsCard`], } );
             
              liveSection.append(teamDiv);
    }

    });
}

function footballNews(){
    if(document.querySelector('.newsCard')!=null){
        var elements = document.getElementsByClassName('newsCard');

        while (elements.length > 0) {
           liveSection.removeChild(elements[0]);
        }
    }
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://bing-news-search1.p.rapidapi.com/news/search?q=%3CFOOTBALL%3E&freshness=Day&textFormat=Raw&safeSearch=Off",
        "method": "GET",
        "headers": {
            "x-bingapis-sdk": "true",
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            "x-rapidapi-key": "c9b4694736msh00fad35433574e3p12944cjsne8a87f23d029"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);

        const newsArray = response.value;

    for(let news of newsArray){
        const teamDiv = Object.assign(
            document.createElement(`div`), 
            { 
                innerHTML: `       
                <img src=${news.image.thumbnail.contentUrl} class="thumbnail">
                <div>
                <h1 class="headline">${news.name}</h1>
                <br><br>
                <h2 class="description">${news.description} <br> <a href=${news.url} id="newsLink">Read More.</a></h2>
                </div>

                
                      `,
              classList: [`newsCard`], } );
             
              liveSection.append(teamDiv);
    }

    });
}
