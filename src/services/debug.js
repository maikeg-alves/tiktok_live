const axios = require('axios').default;
const readlineSync = require('readline-sync')


  const putStante = (state, id) => {
    
    axios({
      method: "put",
      url: `http://localhost:3000/play/${id}`,
      data: {
        pause: state
       },
     });
 
  } 


  const robo = () => {
     
    let productType = readlineSync.question("aperte enter para testar a api" ) || "💓"

    if (productType == "💓") {    
    
       putStante(false, 1)
 
     setTimeout(()=>{ 
       putStante(true, 1)
     }, 3000 )
 
    } else {
     return  console.log("sem dados para a leitura ⚠️")
    }
  }

  robo()




 /**
 * Scraper
 * Use this instead of scrape variable
 */
let browser, page;

const scraper = {
  async open() {

    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    const url = "https://www.timeanddate.com/worldclock/personal.html";
    await page.goto(url);
    await page.waitFor(300);
  },
  
  async getTime() {
    return page.evaluate(() => {
      return document.querySelector(".c-city__digitalClock").innerText; // time with seconds 5:43:22am
    });
  }
};

  //<--Passa o socket para que ele possa usá-lo
async runEvents(socket) {
  //Cria um rastreador de eventos Shadow no marionetista
  await page.exposeFunction("emitter", (...data) => {
    socket.emit(...data)
  });

  await page.evaluate(function observeDom() {
    //expor o observador que vai assistir
    //Mais detalhes https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
    //seleciona o nó de destino
    var target = document.querySelector(".c-city__digitalClock");
    //cria uma instância de observador
    var observer = new MutationObserver(function(mutations) {
     //Faça algo na mudança
      emitter("refresh", target.innerText); //<--aciona o evento sempre que houver uma mudança
    });

    //configuração do observador:
    var config = { childList: true, subtree: true };
    //passa no nó de destino, bem como as opções do observador
    observer.observe(target, config);
  });


}