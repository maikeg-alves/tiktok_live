const puppeteer = require("puppeteer");
const axios = require("axios").default;
const cookies = require('./cookies')
/* const readlineSync = require('readline-sync'); */
const putStante = (state, id) => {
    
  axios({
    method: "put",
    url: `http://localhost:3000/play/${id}`,
    data: {
      pause: state
     },
   });

} 

const emojicheck = (data) => {

  if( data == "💓" ) {
    
    putStante(false, 1)
    putStante(true, 2)
    putStante(true, 3)

    setTimeout(()=>{ 

    putStante(true, 1)

    }, 60000 )
  }
  
  if(data == "🤣"){
    putStante(true, 1)
    putStante(false,  2)
    putStante(true,  3)
    

    setTimeout(()=>{ 

    putStante(true, 2)

    }, 3000 )
  }

  if(data == "😃"){
    putStante(true, 1)
    putStante(true, 2)
    putStante(false, 3)

    setTimeout(()=>{ 

    putStante(true, 1)

    }, 3000 )
  } else {
    console.log('⚠️nem um emoji corespondente⚠️')
    /* timer() */ //futuros testes
  } 
}

const robo = async () => {
  console.log("Você não esta logada, PUTA 🦖❌");
  const browser = puppeteer.launch({
    headless: false,
  });

  const page = await (await browser).newPage();
  await page.setViewport({
    width: 1366,
    height: 768,
  });

  const url = "https://www.tiktok.com/@maikewaz0wski";

  await page.goto(url);

  await page.setCookie(...cookies);

  console.log("você está logada, PUTA ✅");

  await page.goto("https://www.tiktok.com/@promobot.robots/live", {
    waitUntil: "networkidle2",
  });

  /* teste de repetição */

  console.log(`⭐lendo os comentarios da live🔴 ⭐`);


  const delay = (d) => new Promise((r) => setTimeout(r, d));

  const data = [];

  async function timer(i = 0 ) {
    //Opcionalmente configurado para esperar 1000 ms e então continuar
    await delay(3000);

    //clica no elemento, pega os dados etc.
    let productType = await page.evaluate(() => {
      let value = document.querySelectorAll("span.tiktok-7b0tfj-SpanChatRoomComment.e11g2s307");
  
      return value ? value[value.length - 1].innerText : "sem valores";
    });

    console.log(`${i} ✅ `, productType);
    data.push(i);

    emojicheck(productType)
    //verifica o cumprimento da condição, basicamente você pode colocar qualquer limite aqui
    if (i >= 10) return data;

    timer().then(console.log);
  }

  timer()

  
};

robo();