const express = require("express")
const morgan = require("morgan")
const database = require("./database.js")

const app = express()

app.use(morgan("dev"))

app.get("/", (req, res) => {
    const books = database.list()
    
    const html = `
    <html>
    <head>
    <title>Book List</title>
    </head>
    <body>
    <div>
    ${books.map(book => `
      <div>    
      <span>${book.id}. </span><a href="/books/${book.id}">${book.title}</a>
      </div>`).join("")}
    </div>
    </body>
    </html>
    `
    res.send(html)

})

app.get("/books/:id", (req, res) => {
    const id = req.params.id
    const book = database.find(id)

    if (!book.id) {
        res.status(404)
        const html = `
            <html>
            <head>
            <title>Book List</title>
            </head>
            <body>
            <div>
            Page Not Found
            </div>
            </body>
            </html>
            `
            res.send(html)
    } else {
        const html = `
        <html>
        <head>
        <title>Book List</title>
        </head>
        <body>
        <div>
        <a href="/">${book.title}</a>
        </div>
        <p>
        ${book.content}
        </p>
        </body>
        </html>
        `
        res.send(html)
    }
})


const PORT = 3000

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
})