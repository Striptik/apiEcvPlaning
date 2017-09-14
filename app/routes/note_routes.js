module.exports = function (app, db) {
    app.get('/', (req, res) => {
        let hateoas = {
            "get_groups" : "/groups",
        }
        res.send('Hello')
    })
}