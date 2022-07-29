const express = require("express");
const puppeteer = require("puppeteer");
const axios = require("axios").default;
const cookies = require("/cookies");
const app = express();

app.use(express.json());

app.post("/getdata", async (req, res) => {
  // variaveis de controle do robo
  const { linklive } = req.body;

  console.log(linklive);

  // api

  const putStante = (state, id) => {
    setTimeout(() => {
      axios({
        method: "put",
        url: `http://localhost:3333/play/${id}`,
        data: {
          pause: state,
        },
      });
    }, 1000);
  };

  // verifica se o emoji está presente no texto
  const emojicheck = (data) => {
    // verificando se o emoji corresponde ao emoji de coração

    if (data.includes("❤️", "❤")) {
      console.log("emoji encotrado ✅✅❤️❤️");

      setTimeout(() => {
        putStante(true, 2);
      } , 2000);

      setTimeout(() => {
        putStante(true, 3);
      } , 4000);

      putStante(false, 1);

    }

    // verificando se o emoji corresponde ao emoji de sorrindo
    if (data.includes("🤣")) {
      console.log("emoji encotrado ✅✅🤣🤣");
      
      setTimeout(() => {
        putStante(true, 1);
      } , 2000);

      setTimeout(() => {
        putStante(true, 3);
      } , 4000);

      putStante(false, 2);

    }

    // verificando se o emoji corresponde ao emoji de smiley
    if (data.includes("😍")) {
      console.log("emoji encotrado ✅✅😍😍");

      setTimeout(() => {
        putStante(true, 1);
      } , 2000);

      setTimeout(() => {
        putStante(true, 2);
      } , 4000);

      putStante(false, 3);
    }

    // se não for nenhum dos emojis, o robo não faz nada
    console.log("emoji não encotrado 🚫🚫🚫🚫");
  };

  // mensagem de boas vindas
  console.log("Você não esta logada, PUTA 🦖❌");

  const browser = puppeteer.launch({
    headless: true,
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
  await page.goto(`https://www.tiktok.com/${linklive}/live`, {
    waitUntil: "networkidle2",
    timeout: 0,
  });

  // inicia o loop de verificação de emojis

  console.log(`⭐lendo os comentarios da live🔴⭐`);

  const delay = (d) => new Promise((r) => setTimeout(r, d));

  const data = [];

  async function timer(i = 0) {
    //Opcionalmente configurado para esperar 1000 ms e então continuar
    await delay(5000);

    //clica no elemento, pega os dados etc.
    let productType = await page.evaluate(() => {
      let value = document.querySelectorAll(
        "span.tiktok-1o9hp7f-SpanChatRoomComment"
      );
      let data =
        value.length > 0 ? value[value.length - 1].innerText : "carregando...";
      return data;
    });

    res.json(console.log(`🗨️ `, productType));
    data.push(i);

    /* checkReplyComments(productType); */
    emojicheck(productType);
    //verifica o cumprimento da condição, basicamente você colocar qualquer limite aqui
    if (i >= 10) return data;

    timer().then(console.log);
  }

  timer();
});

const PORNT = process.env.PORT || 5000;

app.listen(PORNT, () => {
  console.log(`servidor online na porta ${PORNT} 🚪✅⚠️`);
});
