import { Router } from "express";

export const getSportTypes = Router();

getSportTypes.get("/getWeekData", (req, res) => {
    res.status(200).send({
        data : {
            
        }
    })
});
