import { Router } from "express";
import { User } from "../../model/model";
import { ID, LIST, NEW } from "../routeStrings";

const UserRouter = Router();

/*
*   Get a user by user id
*/
UserRouter.get(ID, (req, res) => {
    User.findOne({ _id: req.params.id }, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

/*
*   Create a new user
*/
UserRouter.post(NEW, (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err) => {
        if (err) throw err;
    });
    return res.send(newUser._id);
});

/*
*   Get User List
*/
UserRouter.get(LIST, (req, res) => {
    User.find({}, function (err, result) {
        if (err) {
            throw err;
        }
        else {
            const resBody = {
                userList: result
            };
            res.json(resBody);
        }
    });
});

export default UserRouter;