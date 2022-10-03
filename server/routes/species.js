import express from "express";
import db from "../db/db-connection.js";

const router = express.Router();

//get all species
router.get("/",async (req,res)=>{
    
    try { 
       let results = await db.any("SELECT * FROM species")
     res.json(results)   
    } catch (error) {
        res.status(500).json({message: "internal server error"})
    }
})

router.post("/", async(req,res)=>{
try {
    const {common_name, scientific_name,population, conservation_status} = req.body
    let results = await db.none("INSERT INTO species (common_name, scientific_name,population, conservation_status)\
    VALUES ($1, $2, $3, $4)", [common_name, scientific_name,population, conservation_status])
    res.status(201).json({message: "species added"})
} catch (error) {
    res.status(500).json({message: "internal server error"})
    
}

}
)   




export default router