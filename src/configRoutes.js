import bodyParser from "body-parser";
import cors from "cors";
import cookieSession from "cookie-session";
import currentUser from "./middlewares/currentuser.js";

import {signinRouter} from "./routes/auth/signin.js";
import {signupRouter} from "./routes/auth/signup.js";
import {signoutRouter} from "./routes/auth/signout.js";
import {currentuserRouter} from "./routes/auth/currentuser.js";

import {getTasksRouter} from "./routes/tasks/index.js";
import {showTaskRouter} from "./routes/tasks/show.js";
import {createTaskRouter} from "./routes/tasks/new.js";
import {updateTaskRouter} from "./routes/tasks/update.js";
import {deleteTaskRouter} from "./routes/tasks/delete.js";

const configInit = (app) => {
    app.set("trust proxy", true);
    app.use(bodyParser.json());
    app.use(
        cors({
            credentials: true,
            origin: true,
        })
    );
    app.use(
        cookieSession({
            sameSite: "none",
            signed: false,
            secure: true,
        })
    );
    app.all("*", currentUser);
    app.get("/", (req, res) => {
        res.send("Welcome to todos basic server");
    });
};

const configAuthRoute = (app) => {
    app.use(currentuserRouter);
    app.use(signinRouter);
    app.use(signupRouter);
    app.use(signoutRouter);
};

const configTasksRoute = (app) => {
    app.use(getTasksRouter);
    app.use(showTaskRouter);
    app.use(createTaskRouter);
    app.use(updateTaskRouter);
    app.use(deleteTaskRouter);
};

const configRoutes = (app) => {
    configInit(app);
    configAuthRoute(app);
    configTasksRoute(app);
};

export {configRoutes};
