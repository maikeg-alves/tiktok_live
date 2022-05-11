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