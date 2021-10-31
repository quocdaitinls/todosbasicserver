import bodyParser from "body-parser";
import cors from "cors";
// import cookieSession from "cookie-session";
import cookieParser from "cookie-parser";
import currentUser from "./middlewares/currentuser.js";

import {signinRouter} from "./routes/auth/signin.js";
import {signupRouter} from "./routes/auth/signup.js";
import {currentuserRouter} from "./routes/auth/currentuser.js";

import {getTasksRouter} from "./routes/tasks/index.js";
import {showTaskRouter} from "./routes/tasks/show.js";
import {createTaskRouter} from "./routes/tasks/new.js";
import {updateTaskRouter} from "./routes/tasks/update.js";
import {deleteTaskRouter} from "./routes/tasks/delete.js";

const corsConfig = {
    credentials: true,
    origin: true,
};

const configInit = (app) => {
    app.set("trust proxy", true);
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(cors(corsConfig));
    app.options("*", cors(corsConfig));
    app.all("*", currentUser);
    app.get("/", (req, res) => {
        res.send("Welcome to todos basic server");
    });
};

const configAuthRoute = (app) => {
    app.use(currentuserRouter);
    app.use(signinRouter);
    app.use(signupRouter);
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
