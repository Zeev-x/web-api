const urlHead = "https://christ.cyclic.cloud";

function waifuAi(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*134)+1;
    var url = `${urlHead}/ai-waifu/zeev-ai-waifu-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Ai waifu',
      genre : 'Nsfw',
      url : url
    };
    resolve(result);
  }).catch((err) => console.log("Error code 404"));
}

function angela(){
  return new Promise((resolve,reject) => {
    const angela = require("./json/angela.json");
    var rand = Math.floor(Math.random()*angela.length);
    var url = angela[rand].img;
    var result = {
      status : true,
      name : 'Cosplay Angela',
      genre : 'Nsfw',
      url : url
    };
    resolve(result);
  }).catch((err) => console.log("Error code 404"));
}

function ayaka(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*57)+1;
    var url = `${urlHead}/ayaka/zeev-kamisato-ayaka-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Cosplay Kamisato Ayaka',
      genre : 'Nsfw',
      url : url
    };
    resolve(result);
  }).catch((err) => console.log("Error code 404"));
}

function bocchi(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*29)+1;
    var url = `${urlHead}/bocchi/zeev-bocchi-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Bocchi Cosplay',
      genre : 'Nsfw',
      url : url,
    };
    resolve(result);
  }).catch((err) => console.log("Error code 404"));
}

function bunny(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*60)+1;
    var url = `${urlHead}/bunny/zeev-bunny-girls-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Bunny Cosplay',
      genre : 'Nsfw',
      url : url
    };
    resolve(result);
  }).catch((err) => console.log("Error code 404"));
}

function ganyu(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*90)+1;
    var url = `${urlHead}/ganyu/zeev-ganyu-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Ganyu cosplay',
      genre : 'Nsfw',
      url : url,
    };
    resolve(result);
  }).catch((err) => console.log("Error code 404"));
}

function ghost(){
  return new Promise((resolve,reject) => {
    const angela = require("./json/ghost-blade.json");
    var rand = Math.floor(Math.random()*angela.length);
    var url = angela[rand].img;
    var result = {
      status : true,
      name : 'Cosplay Ghost Blade',
      genre : 'Nsfw',
      url : url
    };
    resolve(result);
  }).catch((err) => console.log("Error code 404"));
}

function nahida(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*78)+1;
    var url = `${urlHead}/nahida/zeev-nahida-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Nahida cosplay',
      genre : 'Nsfw',
      url : url,
    };
    resolve(result);
  }).catch((err) => console.log("Error code 404"));
}

function osakana(){
  return new Promise((resolve,reject) => {
    var rand = Math.floor(Math.random()*24)+1;
    var url = `${urlHead}/osakana/zeev-osakana-chan-${rand}-image.jpg`;
    var result = {
      status : true,
      name : 'Osakana chan cosplay',
      genre : 'Nsfw',
      url : url,
    };
    resolve(result);
  }).catch((err) => console.log("Error code 404"));
}


module.exports.angela = angela;
module.exports.ayaka = ayaka;
module.exports.bocchi = bocchi;
module.exports.bunny = bunny;
module.exports.ganyu = ganyu;
module.exports.ghost = ghost;
module.exports.nahida = nahida;
module.exports.osakana = osakana;
module.exports.waifuAi = waifuAi;