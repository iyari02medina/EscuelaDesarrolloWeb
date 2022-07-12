const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=9";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bc9db147camsh90a96520f3aaacfp1f95d0jsn017346d3f711",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () =>{

})(); // sentencia que carga automaticamente 