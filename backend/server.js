const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const hamsters = require('./route/hamsters.js')
const matches = require('./route/matches.js')
const winners = require('./route/winners.js')
const losers = require('./route/losers.js')
const matchWinners = require('./route/matchWinners.js')

// Heroku uses process.env.PORT
const PORT = process.env.PORT || 1339

const buildFolder = path.join(__dirname, '../build/static')


//Middleware
//Logger skrit ut info om inkommande request
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url} `,req.params);
	next()
})

app.use( express.json() )
app.use( cors() )
app.use( express.static(buildFolder) )

//routes
app.get('/', (req, res)=>{
    res.send('hello from server')
});

//REST API
app.use('/hamsters', hamsters)
app.use('/matches', matches)
app.use('/winners', winners)
app.use('/losers', losers)
app.use('/matchWinners', matchWinners)


app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'))
})

// starta severn
app.listen(PORT, ()=> {
	console.log('server is listenin on port' + PORT);
})