import { Router } from "express";
import { DataLog } from "../../model/model";
import { DATALOG_BY_FACILITY, DATALOG_BY_ID, NEW } from "../routeStrings";

const DatalogRouter = Router();

/*
*   Get a data log by data log id
*/
DatalogRouter.get(DATALOG_BY_ID, (req, res) => {
    DataLog.findOne({ _id: req.params.id }, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

/*
*   Get a list of data log by facility id
*/
DatalogRouter.get(DATALOG_BY_FACILITY, (req, res) => {
    DataLog.find({ facility: req.params.facilityId }, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

/*
*   Create a data log
*/
DatalogRouter.get(NEW, (req, res) => {
    const newDataLog = new DataLog(req.body);
    newDataLog.save((err) => {
        if (err) throw err;
    });
    return res.send(newDataLog._id);
});

export default DatalogRouter;