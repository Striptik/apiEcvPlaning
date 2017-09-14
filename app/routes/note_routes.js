module.exports = function (app, db) {
    app.get('/', (req, res) => {
        let hateoas = {
            "get_groups" : "/groups",
        }
        res.json(hateoas).status(200)
    })

    app.get('/groups', (request, response) => {

    })

}