
const express = require("express");
const port = 3000;


const app = express();

app.use(
    express.json()
)
const user1 = { name:"jhon",
    kidney:[{
        healthy:true
    },{healthy:false}]};

const users = [
   user1]

app.get("/",function(req,res){
    const user1kidneys = users[0].kidney;
    const NumOfKidneys = user1kidneys.length;
    const NumOfHealthyKidneys = user1kidneys.filter((value)=>{
        return value.healthy == true;
    }).length
    
    console.log("total number of kidneys is :",NumOfKidneys);
    console.log("total number of healthy kidneys is : ",NumOfHealthyKidneys);
    const NumOfUnHealthyKidneys=NumOfKidneys-NumOfHealthyKidneys
    res.json({
        NumOfKidneys,
        NumOfHealthyKidneys,
        NumOfUnHealthyKidneys
    })
})

app.post("/",(req,res)=>{
    let KidneyInput = req.body.KidneyInput
    users[0].kidney.push({healthy: KidneyInput});
    res.json({msg:"done!"});
    
})

app.put("/",(req,res)=>{
    users[0].kidney.forEach((value)=>{value.healthy = true})
    res.json({msg:"done"})
})

app.listen(port,()=>{
    console.log(`running in http://localhost:${port}/`);
});

