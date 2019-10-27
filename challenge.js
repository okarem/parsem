const https = require('https')

const makePokeUrl = pokemon => `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
const pikaUrl = makePokeUrl('pikachu')

const myApiCall = (url, callback) => {
  https
    .get(url, resp => {
      let data = ''
      resp.on('data', chunk => {
        data += chunk
      })
      resp.on('end', () => {
        try {
          callback(null, JSON.parse(data))
        } catch (e) {
          callback('Oops, this isn\'t JSON')
        }
      })
    })
    .on('error', err => {
      callback(err.message)
    })
}

// myApiCall(pikaUrl, (err, res) => {
//   if (err) console.log(res)
//   else console.log(res)
// })

//Now let's make it a Promise

const myPromiseApi = (url)=>{
  return new Promise((resolve,reject)=>{
    

    https
    .get(url, resp => {
      let data = ''
      resp.on('data', chunk => {
        data += chunk
      })
      resp.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject('Oops, this isn\'t JSON');
        }
      })
    }).on('error', err => {
      reject(err.message)
    })
  });

};

// And call it here...

// myPromiseApi(pikaUrl).then((data)=>{ console.log(data); }).catch((err)=>{ console.log(err); });

///-------here part 2 --------------------///

const firstHeldItem = (Data) => {
  return new Promise((resolve,reject)=>{
    if(!Data) reject('no pokeData recieved!');
    if(!Data.held_items || Data.held_items == []) reject('it has no held items');
      resolve(Data.held_items[0]);
  });
};

myPromiseApi(pikaUrl).then(data => console.log(firstHeldItem(data))).catch((err)=>{ console.log(err); });