exports.get= (req,res)=>{
    res.send("Get customers here");
}
exports.getName = (req,res)=>{
    res.send("Customer ID:" + req.params.name);
}
exports.editName = (req,res)=>{
    res.send("Customer Name");
}
exports.create = (req,res)=>{
    res.send("New customers");
}
exports.getById = (req,res)=>{
    res.send("Edit customers id:" + req.params.name);
}
exports.patch = (req,res)=>{
    res.send("Patch customers id:" + req.params.name);
}
exports.rmCustomer = (req,res)=>{
    res.send("Create customers id:" + req.params.name);
}