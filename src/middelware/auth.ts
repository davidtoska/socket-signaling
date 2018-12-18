import {Request, Response, NextFunction} from "express";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    res.locals.isAuth = false;
    next();
};


export const autorize = (req: Request, res: Response) => {

    // if(req.user){
    //     next();
    // } else {
    //     return res.status(401).json({message: "Unauthorized"});
    // }
};

