const express = require('express')
const cors = require('cors')
const connectDB = require('./db')
const {Router} = require('express')
const {AccauntSchem} = require('./item')
const { createProxyMiddleware } = require('http-proxy-middleware');

connectDB()

const app = express();
const port = 4444;
const host = 'localhost';

const api_url = `<https://11010110101.com>`

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const proxyOptions = {
  target: api_url,
  changeOrigin: true,
  pathRewrite: {
      [`^/api/main`]: '/main',
  },
}

const proxy = createProxyMiddleware(proxyOptions);
app.use('/api/posts', proxy)

app.use(cors());

app.get('/api/data', async(req, res) => { 
    const account = await AccauntSchem.findOne({tg: 1247098824})
    res.status(201).send(account)
});

app.get('/api/main',async(req,res) => {
  res.status(201).send("Huis")
})

app.post('/api/main', async(req,res) => {
  const account = await AccauntSchem.findOne(req.body.User)
  try {
    res.status(201).json(account)
  }catch(err){
    console.log(err)
  }
})

app.post('/api/main/click', async(req,res) => {
  const account = await AccauntSchem.findOne(req.body.User)
  try {
    const Summ = account.OneClick;
    await AccauntSchem.updateOne(req.body.User,{$inc:{balance: +Summ}});
    res.status(200).json(account.balance);
  }catch(err) {
    console.log(err)
  }
})

app.listen(port, host, () => {
  console.log(`Example app listening on port ${host}:${port}`)
})