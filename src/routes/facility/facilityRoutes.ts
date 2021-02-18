import { Router } from "express";

import { Facility } from "../../model/model";
import { ID, NEW } from "../routeStrings";

const FacilityRouter = Router();

/*
*   Get a facility by facility id
*/
FacilityRouter.get(ID, (req, res) => {
    Facility.findOne({ _id: req.params.id }, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

/*
*   Create a facility
*/
FacilityRouter.post(NEW, (req, res) => {
    const newFacility = new Facility(req.body);
    newFacility.save((err) => {
        if (err) throw err;
    });
    return res.send(newFacility._id);
});

export default FacilityRouter;
