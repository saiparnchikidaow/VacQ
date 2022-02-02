//@dec    Get all hospitals
//@route  GET /api/v1/hospitals
//@access Public
exports.getHospitals = (req,res,next) => {
    res.status(200).json({success:true, msg: 'Get all hospitals'});
};

//@dec    Get single hospital
//@route  GET /api/v1/hospitals/:id
//@access Public
exports.getHospital = (req,res,next) => {
    res.status(200).json({success:true, msg: `Get hospital ${req.params.id}`});
};

//@dec    Create a hospital
//@route  POST /api/v1/hospitals
//@access Private
exports.createHospital = (req,res,next) => {
    res.status(200).json({success:true, msg: 'Create a hospital'});
};

//@dec    Update single hospital
//@route  PUT /api/v1/hospitals/:id
//@access Private
exports.updateHospital = (req,res,next) => {
    res.status(200).json({success:true, msg: `Update hospital ${req.params.id}`});
};

//@dec    Delete single hospital
//@route  DELETE /api/v1/hospitals/:id
//@access Private
exports.deleteHospital = (req,res,next) => {
    res.status(200).json({success:true, msg: `Delete hospital ${req.params.id}`});
};
