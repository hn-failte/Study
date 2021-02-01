import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.use(
  "/signin",
  (req: Request, res: Response, next: NextFunction): void => {
    let cb: string = req.query.cb || "callback";
    if (!req.query.username || !req.query.password) res.sendStatus(420);
    else {
      let userResponse = {
        username: req.query.username,
        password: req.query.password
      };
      res.send(cb + "(" + JSON.stringify(userResponse) + ")");
    }
  }
);
router.use(
  "/regester",
  (req: Request, res: Response, next: NextFunction): void => {
    if (!req.query.username || !req.query.password) res.sendStatus(420);
    // if(!req.query.username || !req.query.password) res.sendStatus(419)
    else {
      let userResponse = {
        username: req.query.username,
        password: req.query.password
      };
      res.json(userResponse);
    }
  }
);
router.use(
  "/signout",
  (req: Request, res: Response, next: NextFunction): void => {
    if (!req.query.username || !req.query.password) res.sendStatus(420);
    // if(!req.query.username || !req.query.password) res.sendStatus(419)
    else {
      let userResponse = {
        username: req.query.username,
        password: req.query.password
      };
      res.json(userResponse);
    }
  }
);
router.use(
  "/logout",
  (req: Request, res: Response, next: NextFunction): void => {
    if (!req.query.username || !req.query.password) res.sendStatus(420);
    // if(!req.query.username || !req.query.password) res.sendStatus(419)
    else {
      let userResponse = {
        username: req.query.username,
        password: req.query.password
      };
      res.json(userResponse);
    }
  }
);

export default router;
