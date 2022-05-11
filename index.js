const  axios = require("axios").default;
const puppeteer = require("puppeteer");
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

    setTimeout(()=>{ 

    putStante(true, 1)

    }, 60000 )
  }
  
  if(data == "🤣"){
    putStante(false, 1)

    setTimeout(()=>{ 

    putStante(true, 1)

    }, 3000 )
  }

  if(data == "😃"){
    putStante(false, 1)

    setTimeout(()=>{ 

    putStante(true, 1)

    }, 3000 )
  } else {
    console.log('⚠️nem um emoji corespondente⚠️')
    /* timer() */ //futuros testes
  } 
}

const cookies = [
  {
    domain: ".tiktok.com",
    expirationDate: 1683573130.350743,
    hostOnly: false,
    httpOnly: false,
    name: "_abck",
    path: "/",
    sameSite: "unspecified",
    secure: true,
    session: false,
    storeId: "0",
    value:
      "D74631A982CBD842E2A7B8D55E9A46E9~-1~YAAQjoYQySKseI+AAQAAWxUWpQfbdVeWMQGGcJCCAF7a/1qBIe5/r54pQlw4cOFgWTEdeSXqX+D5hzwVAcTIzqATP5u7rE5p8GcAB77ZdY/+AQJJ/LaEk3qyXNE/Q/NtAWX5MOMnviwwJVmtr9lhzO20OK9C9Nah/iNps4BYry2XUCjdeQYoRqS0wlP2T4HBepxWFqo6qb+cLnTZtbbrfDgYpA9FrXLCmKRF10LvaaYfzwI4X+Uc77OlFG2l62MeT/MJgMt7G9jM572DToY1hXK4l8OHuZDwumpgvJqo4QHN3erkTEdPCSDP+nEzsmTnMgiskcGtJQn0O2d5RWqomnC222uLtNju07xR670tgM8=~-1~-1~-1",
    id: 1,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1652038190.712225,
    hostOnly: false,
    httpOnly: true,
    name: "ak_bmsc",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value:
      "BDE9FDB723D784FD4D8DBBDCB2F0FEE4~000000000000000000000000000000~YAAQ5YZFsdib842AAQAAlhrvpA/ceQVXocv2mUuCypDf/5HapDNw/5M2W1LDE/HcgbGIYgzS3Uo+T6TXqqYtxxakxAvFQQWgAZihY9ud+DMoUeLCo53xiyhtoYoMpJEA31P9QTuS84ZHzZqmOGCjCj/S4aMjLzn5x2yzSi7M2mcog/+Cbihnzy8Mnw46kT9nx0A/pSWS1Ebv0wZix3lUWZQ/U6GDM/BL1AFW3UHeCUidP+vIjw/tHeNnDkLm65uPxfHkgXqfM7FolFi7J/mClQQxTQNHjAbShsYwAAjksWXHIy086Rdq38cQcoJ7svAT8ZkldfKzKHvOaO0QH+5VdTNms/snJT+DadJ8ODXJBf2ihqAc8tyE76Srk/eWyVZefo3Zlf/3t6eXziaVVt44UHdRD0f18oDaMoSVJTtIvOLtacbTAm4bEaXiKJJsPg==",
    id: 2,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1652038190.915109,
    hostOnly: false,
    httpOnly: false,
    name: "bm_mi",
    path: "/",
    sameSite: "unspecified",
    secure: true,
    session: false,
    storeId: "0",
    value:
      "E56958CC1180B87548593155B5F5ED17~YAAQXkcwyVwaZoaAAQAA0i/epA+fIecwTRKdCzRvFUqvSATPcwsnLNBYdobgaTiBtr2xPcRUPKnrKdh2BjZnGqsOWqoopUT+HzIPAeJF6l3Plv+SHaI2UECe1Q4G7MlY/bS5NInVIOQewcqwpaLKtz/HN9L0w8X8CIn9+UAK6ErZAVoTPQG21l1fDznddgTWE/m3a7HabCU+QJptrjD7Zh97W16RLCEzjr1yohjN6Dgtjt9JUJZIWRRYiea0QON37cvcl7UcYKghvqrMElNWAmFqJwuJrXQuCNnWMuKWEP9Zh/aqkISpJTw1HoM4UgyqtNjpfufsl9e6BGAv~1",
    id: 3,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1652038191.360923,
    hostOnly: false,
    httpOnly: true,
    name: "bm_sv",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value:
      "1ACE1A26A2A1C01AA0013A4DED51930D~OaL8Rf3YmnYndIPy3Wz3hUmw+iyk2bBQx3EEYGijuwJ5YC4a7g7pJ+PZUhEHg2S1IBfIxjLI6Q0WiZtw3+eDn0PdBWyGm8caqj4oG3KCI6I1mEwalYHvR8cvcGF/JJmGj809y10XHagFgL8dnheClfIfUuJVE3LnWVLXb0Jq0Ak=",
    id: 4,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1652045389.795285,
    hostOnly: false,
    httpOnly: false,
    name: "bm_sz",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value:
      "BEDA70E063FFC39F87BC052CCCB87045~YAAQVOtFsR9CXZaAAQAAFmm4pA9pHMwATBojonTaXDwbapwFkc6IdkQWs7jFvF+vS+rT4y+ol0ldQaC3hObYlLrb70/4Ll/rijfXkjxKmSvPFtVDNfFHqHbr7eurZ+LAa3NVCCUfpPdkhj6YowkFj8Af7RvH/AvnhpG3LAuuVs7E/P+vfOmFOBjsaSfuTYYJ3ZGEf4aPkCpBlNg3K/SDTo5FZDcWd6g1cQUL4xrtSH8dpe90uIzUWxn1JKb97Ar10RhLka/on3vbbSzyg4KK93GWZ689h7xnuHZM+vumncbu9nQ=~3355457~4536646",
    id: 5,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1657215360.285747,
    hostOnly: false,
    httpOnly: true,
    name: "cmpl_token",
    path: "/",
    sameSite: "unspecified",
    secure: true,
    session: false,
    storeId: "0",
    value: "AgQQAPNkF-RO0rAzmtyMsl08-BZnKprLv4fvYMe61A",
    id: 6,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1652901128.764546,
    hostOnly: false,
    httpOnly: false,
    name: "msToken",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value:
      "CiyZkOEjrmsXx6ZEmwdvpNlGrmWfxIeUh8st10DLArI_a4hsxwloPcZ23rJyQFniz_FpP99jIBgDHNg9VG5C1_xeSbryY-OQH874Pwb6GRaYkJ5OwSexD_m12l_uhoNEGuenp6N1fwqV7FpK8w==",
    id: 7,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1683573127.464386,
    hostOnly: false,
    httpOnly: true,
    name: "odin_tt",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value:
      "e51d170822c2729ed1a08e9f3c71dafb181a7bc6d3294f49d2283f4e690d1e101890a215d89f308ad097e47576dbb12fe8672b6f935f5a0fcb50e620a2d6068ee0587153821e5e2d364027209bbfe62d",
    id: 8,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1657214989.795123,
    hostOnly: false,
    httpOnly: false,
    name: "passport_csrf_token",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value: "e0456118ac45c97b28f1f49ce6480c3f",
    id: 9,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1657214989.795176,
    hostOnly: false,
    httpOnly: false,
    name: "passport_csrf_token_default",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "e0456118ac45c97b28f1f49ce6480c3f",
    id: 10,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1657215360.286025,
    hostOnly: false,
    httpOnly: true,
    name: "sessionid",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "ca27ea5d7cd7b6e030fa59e4d920d6d8",
    id: 11,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1657215360.28606,
    hostOnly: false,
    httpOnly: true,
    name: "sessionid_ss",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value: "ca27ea5d7cd7b6e030fa59e4d920d6d8",
    id: 12,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1683135360.285795,
    hostOnly: false,
    httpOnly: true,
    name: "sid_guard",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value:
      "ca27ea5d7cd7b6e030fa59e4d920d6d8%7C1652031360%7C5184000%7CThu%2C+07-Jul-2022+17%3A36%3A00+GMT",
    id: 13,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1657215360.285921,
    hostOnly: false,
    httpOnly: true,
    name: "sid_tt",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "ca27ea5d7cd7b6e030fa59e4d920d6d8",
    id: 14,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1657215360.286148,
    hostOnly: false,
    httpOnly: true,
    name: "sid_ucp_v1",
    path: "/",
    sameSite: "unspecified",
    secure: true,
    session: false,
    storeId: "0",
    value:
      "1.0.0-KGM3OWFjZDFmYTkzMWQ1YTg4NjBiOGRkNGNkNWUzNGU3OWNkOWIyZDMKIAiFiIKksI_dhmAQgP_fkwYYswsgDDCG6rWABjgHQPQHEAMaBm1hbGl2YSIgY2EyN2VhNWQ3Y2Q3YjZlMDMwZmE1OWU0ZDkyMGQ2ZDg",
    id: 15,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1657215360.286186,
    hostOnly: false,
    httpOnly: true,
    name: "ssid_ucp_v1",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value:
      "1.0.0-KGM3OWFjZDFmYTkzMWQ1YTg4NjBiOGRkNGNkNWUzNGU3OWNkOWIyZDMKIAiFiIKksI_dhmAQgP_fkwYYswsgDDCG6rWABjgHQPQHEAMaBm1hbGl2YSIgY2EyN2VhNWQ3Y2Q3YjZlMDMwZmE1OWU0ZDkyMGQ2ZDg",
    id: 16,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1657215360.738561,
    hostOnly: false,
    httpOnly: true,
    name: "store-country-code",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "br",
    id: 17,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1657215360.738506,
    hostOnly: false,
    httpOnly: true,
    name: "store-idc",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "maliva",
    id: 18,
  },
  {
    domain: ".tiktok.com",
    hostOnly: false,
    httpOnly: true,
    name: "tt_csrf_token",
    path: "/",
    sameSite: "lax",
    secure: true,
    session: true,
    storeId: "0",
    value: "BCe0Hssi-MAHEEAgjQZNtx7pK7nfx7l2-ygI",
    id: 19,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1657215360.738573,
    hostOnly: false,
    httpOnly: true,
    name: "tt-target-idc",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "useast1a",
    id: 20,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1683573123.741972,
    hostOnly: false,
    httpOnly: true,
    name: "ttwid",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value:
      "1%7CDS213dJbCVacrCudbAVUjFsyIQMiaw2fggqeoTvdXEk%7C1652037123%7Cc620d4470d4460e6937c6202dccb1ba73840b1915495c3c99412cfd10d93e871",
    id: 21,
  },
  {
    domain: ".tiktok.com",
    expirationDate: 1657215360.285836,
    hostOnly: false,
    httpOnly: true,
    name: "uid_tt",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "6d6ea1287a95349a41640576c22f234abc3773d82353a47f365d172c0ac533fd",
    id: 22,
  },
  {
    domain: ".www.tiktok.com",
    expirationDate: 1652641922,
    hostOnly: false,
    httpOnly: false,
    name: "__tea_cache_tokens_1988",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "{%22_type_%22:%22default%22}",
    id: 23,
  },
  {
    domain: ".www.tiktok.com",
    hostOnly: false,
    httpOnly: false,
    name: "passport_fe_beating_status",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: true,
    storeId: "0",
    value: "true",
    id: 24,
  },
  {
    domain: "www.tiktok.com",
    expirationDate: 1659813127,
    hostOnly: true,
    httpOnly: false,
    name: "msToken",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value:
      "xHvgD1KJNVu5AlVbbYFAcokAJ_W6Dy8aI_mP4jcZ1lx-Kc9Ikz2eX6zD9pwE_jFSQHTJwXnQ8qF7zFlt5EZVtB-jiNzfs1lwiLPB2K-E1IaIT6Cl5o0kjH7b931018wjJ6-gqZKV",
    id: 25,
  },
  {
    domain: "www.tiktok.com",
    hostOnly: true,
    httpOnly: false,
    name: "s_v_web_id",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: true,
    storeId: "0",
    value: "verify_l2xkshxo_UF5lPoNU_4ANA_4ESo_ATm4_zo5gOJdyjeD4",
    id: 26,
  },
];

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

/*  document.querySelectorAll('.tiktok-1r7t292 > span > img').length
const over = await page.evaluate(()=>{
    return document.querySelector('div.tiktok-1p1g5jf-DivPeopleCounter.e1108d8t2').innerText;
  const data = document.querySelectorAll('span.tiktok-7b0tfj-SpanChatRoomComment.e11g2s307') */

/*   console.log(over); 30000  */

/* time */

/*   let elements = await page.$$('span.tiktok-7b0tfj-SpanChatRoomComment.e11g2s307'); */

//mostra o status da live
/*     let liveStatus = await page.evaluate(() => {
        let liveValue = document.querySelector('div.eoemvct3.tiktok-l3boot-DivLiveTag-StyledLiveTag.exh5ca40')
        return liveValue ? liveValue.innerText : 'a live está off'
    })
        let scanComments = await page.evaluate(()=>{
            let numberComments = document.querySelectorAll('span.tiktok-7b0tfj-SpanChatRoomComment.e11g2s307')
            return numberComments ? numberComments.length : 0
        })  */

// captura a ultima coisa comentada na live

/*      let productType = await page.evaluate(() => {
        let value = document.querySelectorAll('span.tiktok-7b0tfj-SpanChatRoomComment.e11g2s307')
        return value ? value[value.length - 1].innerText : 'sem valores'
    })

    for (let i = 1; i < elements.length; i++) {
        console.log(`resposta`, i)
    } */
