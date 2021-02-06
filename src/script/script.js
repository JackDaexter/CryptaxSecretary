const puppeteer = require('puppeteer');

async function analyze(url){
    
    const browser = await puppeteer.launch({headless : true});
    
    const page = await browser.newPage();
    
    await page.goto("https://twitter.com/search?q=%24DAG&src=typed_query");

    await page.waitForSelector('[aria-label="Fil d\'actualités : Rechercher dans le fil"]',{ waitUntil: 'domcontentloaded' });
    
    const childrenNames = await page.evaluate((selector) => {
        const names = [];
        var likes = 0;
        var rt = 0;
        for (element of document.querySelectorAll(selector)) {
            var i = 1;
            
            for(i = 1; i < 19;i++){
                var elem = document.querySelector(selector).children[0].children[0]
                                .children[0].children[0]
                                .children[0].children[0]
                                .children[0].children[0]
                                .children[1].children[1]
                                .children[1];
                var reaction =  elem.innerText.split("\n");
                likes += parseInt(reaction[2]);
                rt += parseInt(reaction[1]);
            }
        }
        names.push(like);
        return names;
    }, '[aria-label="Fil d\'actualités : Rechercher dans le fil"]');
    
    console.log(childrenNames);  

    //await browser.close();
}

function call(){
    var text = document.getElementById("cryptname").value;
    var url = "https://twitter.com/search?q=%24"+text+"&src=typed_query";
    
    analyze(url);
}


analyze("qqs")