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
    try {
        const newFacility = new Facility(req.body);
        newFacility.save();
        return res.status(201).json({ output: "success", newFacility });
    }
    catch (error) {
        return res.status(400).json({ output: "fail", error });
    }
});

/*
*   Update existing facility
*/
FacilityRouter.patch(ID, (req, res) => {
    try {
        Facility.findByIdAndUpdate(req.params.id, req.body, function (err, model) { })
            .then((updatedFacility) => {
                res.status(200).json({ output: "success", facility: updatedFacility });
            })
            .catch((error) => {
                res.status(400).json({ error: "id or data not appropriately provided." });
            });
    }
    catch (error) {
        return res.status(400).json({ output: "fail", error });
    }
});

export default FacilityRouter;
