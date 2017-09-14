module.exports = function (app, db) {
    app.get('/', (req, res) => {
        let hateoas = {
            "get_groups" : "/groups",
            "get_courses_by_group" : "/courses/{group}",
            "get_courses_by_group_and_day" : "/courses/{group}/{day}",
            "get_course_by_id" : "/course/{id}"
        };
        res.json(hateoas).status(200)
    });

    app.get('/groups', (request, response) => {

    })
};