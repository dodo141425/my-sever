// funtions ที่ทำงานตาม route
exports.get = (req, res)=>{
    res.send("Get product here");
}

exports.getById = (req, res)=>{
    res.send("Get product" + req.params.id);
}

exports.create =  (req, res)=>{
    res.send("Create a product");
}