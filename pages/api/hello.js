// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function hello (req, res) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
      method: "get",
      headers: myHeaders,
      redirect: "follow",
      
  }

  const dados = await fetch("https://v1.nocodeapi.com/felipedsmartins/google_sheets/CfihZfsZfyUBuNQT?tabId=perguntas", requestOptions)
  const dadosJason = await dados.json()
   
  res.setHeader('Content-Type', 's-maxage=10, stale-while-revalidate');

  res.json(dadosJason)
  console.log(dadosJason.data)
  // res.statusCode = 200
  // res.json({ name: 'John Doe' })
}

export default hello