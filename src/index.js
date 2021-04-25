const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 3000

const { getContribution } = require('./controller')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('This server is up and running')
})

app.post('/', getContribution)

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})