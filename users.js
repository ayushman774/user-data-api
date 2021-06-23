const Router = require('koa-router');

const router = new Router({
    prefix: '/users'
});

let users = [
    { id: "101", firstName: "Anurag", lastName: "Sharma", contact: "789456123", email: "anurag45@example.com" },
    { id: "102", firstName: "Arag", lastName: "Shara", contact: "784456123", email: "anug45@example.com" },
    { id: "107", firstName: "Anubdk", lastName: "Sharla", contact: "789457823", email: "urag45@example.com" },
    { id: "105", firstName: "Anurns", lastName: "ssarma", contact: "781256123", email: "an560ag45@example.com" }];

 // Routes will go here

router.get('/', (ctx, next) => {
    ctx.body = {
        status: 'success',
        message: users
    };
    next();
});

// to fetch the single user with id

router.get("/:id", (ctx, next) => {

    let currentUser = users.filter((user) => {
        if (user.id == ctx.params.id) {
            return true;
        }
    });
    if (currentUser.length) {
        ctx.body = currentUser[0]
    }
    else {
        ctx.response.status = 404;
        ctx.body = "user not found";
    }
    next();
});

// To add a new user

router.post("/new", (ctx, next) => {

    if (
        !ctx.request.body.id ||
        !ctx.request.body.firstName ||
        !ctx.request.body.lastName ||
        !ctx.request.body.contact ||
        !ctx.request.body.email

    ) {
        ctx.response.status = 400;
        ctx.body = "Please Enter Data "
    }

    else {
        let newUser = users.push({
            id: ctx.request.body.id,
            firstName: ctx.request.body.firstName,
            lastName: ctx.request.body.lastName,
            contact: ctx.request.body.contact,
            email: ctx.request.body.email
        });

        ctx.response.status = 201;
        ctx.body = `New user added with id: ${ctx.request.body.id} & name:  ${ctx.request.body.firstName} ${ctx.request.body.lastName}`;
    }

    next();
})

module.exports = router;