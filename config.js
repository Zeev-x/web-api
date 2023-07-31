function waifuAi(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*134)+1;
    var url = `https://zeevalya.cyclic.app/ai-waifu/zeev-ai-waifu-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Ai waifu',
      genre : 'Nsfw',
      url : url,
      source : 'https://zeevalya.cyclic.app'
    };
    resolve(result);
  }).catch(err => console.log(error));
}

function ayaka(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*57)+1;
    var url = `https://zeevalya.cyclic.app/ayaka/zeev-kamisato-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Cosplay Kamisato Ayaka',
      genre : 'Nsfw',
      url : url,
      source : 'https://zeevalya.cyclic.app'
    };
    resolve(result);
  }).catch(err => console.log(error));
}

function bocchi(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*29)+1;
    var url = `https://zeevalya.cyclic.app/bocchi/zeev-bocchi-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Bocchi Cosplay',
      genre : 'Nsfw',
      url : url,
      source : 'https://zeevalya.cyclic.app'
    };
    resolve(result);
  }).catch(err => console.log(error));
}

function bunny(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*60)+1;
    var url = `https://zeevalya.cyclic.app/bunny/zeev-bunny-girls-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Bunny Cosplay',
      genre : 'Nsfw',
      url : url,
      source : 'https://zeevalya.cyclic.app'
    };
    resolve(result);
  }).catch(err => console.log(error));
}

function ganyu(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*90)+1;
    var url = `https://zeevalya.cyclic.app/ganyu/zeev-ganyu-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Ganyu cosplay',
      genre : 'Nsfw',
      url : url,
      source : 'https://zeevalya.cyclic.app'
    };
    resolve(result);
  }).catch(err => console.log(error));
}

function genshin(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*348)+1;
    var url = `https://zeevalya.cyclic.app/genshin/zeev-hentai-genshin-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Genshin Impact hentai images',
      genre : 'Nsfw',
      url : url,
      source : 'https://zeevalya.cyclic.app'
    };
    resolve(result);
  }).catch(err => console.log(error));
}

function nahida(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*78)+1;
    var url = `https://zeevalya.cyclic.app/nahida/zeev-nahida-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Nahida cosplay',
      genre : 'Nsfw',
      url : url,
      source : 'https://zeevalya.cyclic.app'
    };
    resolve(result);
  }).catch(err => console.log(error));
}

function osakana(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*24)+1;
    var url = `https://zeevalya.cyclic.app/osakana/zeev-osakana-chan-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Osakana chan cosplay',
      genre : 'Nsfw',
      url : url,
      source : 'https://zeevalya.cyclic.app'
    };
    resolve(result);
  }).catch(err => console.log(error));
}


module.exports.ayaka = ayaka;
module.exports.bocchi = bocchi;
module.exports.bunny = bunny;
module.exports.ganyu = ganyu;
module.exports.genshin = genshin;
module.exports.nahida = nahida;
module.exports.osakana = osakana;
module.exports.waifuAi = waifuAi;