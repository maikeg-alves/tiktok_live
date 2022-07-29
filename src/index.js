const puppeteer = require("puppeteer");
const axios = require("axios").default;
const cookies = require("./services/cookies");
/* const readlineSync = require('readline-sync'); */

const robo = async () => {
  // variaveis de controle do robo
  
  // função que checa se algum dos emojis está presente no texto
  const emojicheck = (data) => {

    // se algum emoji está presente no texto, será retornado para a api o emoji
    const putStante = (state, id) => {
      axios({
        method: "put",
        url: `http://localhost:3000/play/${id}`,
        data: {
          pause: state,
        },
      });
    };

    // verificando se o emoji corresponde ao emoji de coração
    if (data == "💓") {
  
      console.log('emoji encotrado ✅✅💓💓')
      putStante(false, 1);
      putStante(true, 2);
      putStante(true, 3);
      
      setTimeout(() => {
        putStante(true, 1);
      }, 60000);
    }
   
    // verificando se o emoji corresponde ao emoji de sorrindo
    if (data == "🤣") {
      console.log('emoji encotrado ✅✅🤣🤣')
      putStante(true, 1);
      putStante(false, 2);
      putStante(true, 3);
  
      setTimeout(() => {
        putStante(true, 2);
      }, 3000);
    }
   
    // verificando se o emoji corresponde ao emoji de smiley
    if (data == "😃") {
      console.log('emoji encotrado ✅✅😃😃')
      putStante(true, 1);
      putStante(true, 2);
      putStante(false, 3);
  
      setTimeout(() => {
        putStante(true, 3);
      }, 3000);
    } 
      // se não for nenhum dos emojis, o robo não faz nada
      console.log('emoji não encotrado 🚫🚫🚫🚫')
  };

  // mensagem de boas vindas
  console.log("Você não esta logada, PUTA 🦖❌");


  const browser = puppeteer.launch({
    headless: false,
  });

  const page = await (await browser).newPage();
  await page.setViewport({
    width: 1366,
    height: 768,
  });

  // login injetando o cookie na pagina

  const url = "https://www.tiktok.com/@maikewaz0wski";

  await page.goto(url);

  await page.setCookie(...cookies);

  // retorna se o usuario esta logado

  console.log("você está logada, PUTA ✅");

  // entra no link da live do tiktok
  await page.goto("https://www.tiktok.com/@promobot.robots/live", {
    waitUntil: "networkidle2",
  });

  
  // inicia o loop de verificação de emojis

  console.log(`⭐lendo os comentarios da live🔴 ⭐`);

  const delay = (d) => new Promise((r) => setTimeout(r, d));

  const data = [];

  async function timer(i = 0) {
    //Opcionalmente configurado para esperar 1000 ms e então continuar
    await delay(3000);

    //clica no elemento, pega os dados etc.
    let productType = await page.evaluate(() => {
      let value = document.querySelectorAll("span.tiktok-1o9hp7f-SpanChatRoomComment");
      return value ? value[value.length - 1].innerText : "sem valores";
    });

    console.log(`${i} 🗨️ `, productType);
    data.push(i);

    emojicheck(productType);
    //verifica o cumprimento da condição, basicamente você pode colocar qualquer limite aqui
    if (i >= 10) return data;

    timer().then(console.log);
  }

  timer();
};

robo();


