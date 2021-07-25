const data = [
    { id: 1, title: "book1", content: "This is book1"},
    { id: 2, title: "book2", content: "This is book2"},
    { id: 3, title: "book3", content: "This is book3"},
    { id: 4, title: "book4", content: "This is book4"},
    { id: 5, title: "book5", content: "This is book5"},
    { id: 6, title: "book6", content: "This is book6"},
    { id: 7, title: "book7", content: "This is book7"},
    { id: 8, title: "book8", content: "This is book8"}
];

const list = () => {
    return [...data]
}

const find = (id) => {
    const book = data.find(book => book.id === +id)
    return {...book}
}

module.exports = {
    list: list,
    find: find
}