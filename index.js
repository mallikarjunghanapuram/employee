const Koa = require("koa");
const Router = require("koa-router");
const db = require("./mongo")
const BodyParser = require("koa-bodyparser");
const Model = require("./model")

const app = new Koa();
const router = new Router();

const logger = require('koa-logger');
app.use(logger());
db.connect()

router.get("/", async function (ctx) {
    let name = ctx.request.query.name || "World";
    ctx.body = { message: `Hello ${name}!` }
});

// Use the bodyparser middlware
app.use(BodyParser());

router.post("/", async function (ctx) {
    let name = ctx.request.body.name || "World";
    ctx.body = { message: `Hello ${name}!` }
});

// Create new employee
router.post("/employee", async (ctx) => {
    ctx.body = await ctx.app.employee.insert(ctx.request.body);
});

router.post("/test", async (ctx) => {
    const userDetails = new Model(ctx.request.body)
    const response = await userDetails.save();
    console.log(response)
    ctx.body = response
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(8000);