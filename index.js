const express = require("express");
const path = require("path");
const ytdl = require('ytdl-core');
const validUrl = require('valid-url');
const fs = require("fs");
const { gempa } = require("zeev-gempa");
const app = express();
const port = process.env.PORT || 8080;
const { angela,
        ayaka,
        bocchi,
        bunny,
        ganyu,
        ghost,
        genshin,
        nahida,
        osakana,
        waifuAi } = require("./config");

const conf = express.static(path.resolve("./public"));
app.use(conf);
app.use(express.json());
app.set("json spaces",1);
app.use(express.urlencoded({ extended: true }));
app.listen(port);

//json file
app.get("/home/json/angela.json",async(req,res) => {
  fs.readFile("./json/angela.json",(err,data) => {
    res.writeHead(200,{"Content-Type" : "text/json"});
    res.write(data);
    res.end();
  });
});

app.get("/home/json/ghost-blade.json",async(req,res) => {
  fs.readFile("./json/ghost-blade.json",(err,data) => {
    res.writeHead(200,{"Content-Type" : "text/json"});
    res.write(data);
    res.end();
  });
});

//fungsi
app.get("/", async(req,res) => {
  fs.readFile("./public/index.html",(err,data) => {
    if(err) return res.json({mess : 'error code 404'});
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});

app.get("/home", async(req,res) => {
  fs.readFile("./public/home.html",(err,data) => {
    if(err) return res.json({mess : 'error code 404'});
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});

app.get("/home/bocchi", async(req,res) => {
  fs.readFile("./public/bocchi.html",(err,data) => {
    if(err) return res.json({mess : 'error code 404'});
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});

app.get("/home/ayaka", async(req,res) => {
  fs.readFile("./public/ayaka.html",(err,data) => {
    if(err) return res.json({mess : 'error code 404'});
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});

app.get("/home/angela", async(req,res) => {
  fs.readFile("./public/angela.html",(err,data) => {
    if(err) return res.json({mess : 'error code 404'});
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});

app.get("/home/bunny", async(req,res) => {
  fs.readFile("./public/bunny.html",(err,data) => {
    if(err) return res.json({mess : 'error code 404'});
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});

app.get("/home/osakana", async(req,res) => {
  fs.readFile("./public/osakana.html",(err,data) => {
    if(err) return res.json({mess : 'error code 404'});
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});

app.get("/home/ganyu", async(req,res) => {
  fs.readFile("./public/ganyu.html",(err,data) => {
    if(err) return res.json({mess : 'error code 404'});
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});

app.get("/home/ghost", async(req,res) => {
  fs.readFile("./public/ghost.html",(err,data) => {
    if(err) return res.json({mess : 'error code 404'});
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});


app.get("/home/hentai/ai", async(req,res) => {
  fs.readFile("./public/ai-waifu.html",(err,data) => {
    if(err) return res.json({mess : 'error code 404'});
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});

app.get("/home/nahida", async(req,res) => {
  fs.readFile("./public/nahida.html",(err,data) => {
    if(err) return res.json({mess : 'error code 404'});
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});

app.get("/home/gempa", async(req,res) => {
  gempa().then(data => {
   var waktu = data.waktu;
   var lintang = data.lintang;
   var bujur = data.bujur;
   var magnitudo = data.magnitudo;
   var kedalaman = data.kedalaman;
   var wilayah = data.wilayah;
   var map = data.map;
   var html = `<!DOCTYPE HTML>
               <html>
                 <head>
                   <meta charset="UTF-8" name="keywords">
                   <link rel="stylesheet" type="text/css" href="style.css">
                   <title>info-gempa.io</title>
                </head>
                <body id="home">
                  <nav>
                    <a class="logo">Gempa Terkini</a>
                  </nav>
                  <br><br><br><br>
                  <fieldset class="content">
                    <div align="center">
                      <h1>Info Gempa</h1><hr>
                      <img src="${map}" height="500px">
                    </div><hr>
                    <p>Waktu : ${waktu}</p>
                    <p>Lintang : ${lintang}</p>
                    <p>Bujur : ${bujur}</p>
                    <p>Magnitudo : ${magnitudo}</p>
                    <p>Kedalaman : ${kedalaman}</p>
                    <p>Wilayah : ${wilayah}</p><hr>
                    <div class="waterMark" align="center">
                      <h6>©Copyright Zeev-x 2023</h6>
                    </div>
                  </fieldset>
                  <style>
                    fieldset.content {
                      width: 50%;
                      margin: auto;
                      border-radius: 20px;
                      font-family: Monospace;
                    }
                    nav {
                      display: flex;
                      justify-content: space-between;
                      background-color: white;
                      align-items: center;
                      height: 60px;
                      background-clip: #FFFFFF;
                      box-shadow: 2px 2px 12px rgba(0,0,0,0.2);
                      padding: 0px 5%;
                    }
                    a {
                      text-decoration: none;
                    }
                    .logo {
                      font-family: Courier;
                      color: #000000;
                      font-size: 30px;
                      font-weight: bold;
                    }
                  </style>
                </body>
               </html>`;
     res.send(html);
  });
});

//API out

app.get("/home/api/angela", async (req,res) => {
  angela().then(data => {
    res.json(data);
  });
});

app.get("/home/api/ayaka", async (req,res) => {
  ayaka().then(data => {
    res.json(data);
  });
});

app.get("/home/api/bocchi", async (req,res) => {
  bocchi().then(data => {
    res.json(data);
  });
});

app.get("/home/api/bunny", async (req,res) => {
  bunny().then(data => {
    res.json(data);
  });
});

app.get("/home/api/ganyu", async (req,res) => {
  ganyu().then(data => {
    res.json(data);
  });
});

app.get("/home/api/ghost", async (req,res) => {
  ghost().then(data => {
    res.json(data);
  });
});

app.get("/home/api/osakana", async (req,res) => {
  osakana().then(data => {
    res.json(data);
  });
});

app.get("/home/api/nahida", async (req,res) => {
  nahida().then(data => {
    res.json(data);
  });
});

app.get("/home/api/ai-waifu", async (req,res) => {
  waifuAi().then(data => {
    res.json(data);
  });
});

app.get("/home/api/gempa", async (req,res) => {
  gempa().then(data => {
    res.json(data);
  });
});

app.get('/home/api/ytdl', async (req, res) => {
  const videoURL = req.query.url;

  // Validasi URL YouTube
  if (!validUrl.isWebUri(videoURL) || !ytdl.validateURL(videoURL)) {
    return res.status(400).json({ error: 'URL yang diberikan bukan URL dari YouTube.' });
  }

  try {
    const videoInfo = await ytdl.getInfo(videoURL);

    // Filter format untuk mendapatkan audio saja (tanpa video)
    const audioFormats = ytdl.filterFormats(videoInfo.formats, 'audioonly');
    if (audioFormats.length === 0) {
      throw new Error('Tidak ada format audio yang tersedia.');
    }

    // Mengambil format audio dengan kualitas terbaik
    const highestQualityAudioFormat = audioFormats[0];

    // Data audio untuk dijadikan respons JSON
    const audioData = {
      title: videoInfo.videoDetails.title,
      author: videoInfo.videoDetails.author.name,
      duration: videoInfo.videoDetails.lengthSeconds,
      url: videoURL,
      format: highestQualityAudioFormat
    };

    // Mengonversi data audio menjadi JSON dengan opsi indentasi
    const jsonString = JSON.stringify(audioData, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.send(jsonString);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Terjadi kesalahan saat mengunduh audio.' });
  }
});