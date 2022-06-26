const Pupil = require('../model/Pupil');
const User = require('../model/User');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');

exports.registerPupil = asyncHandler(
    async ( req, res, next ) => {        
        req.body.registeredby = req.user.id    
        const pupil = await Pupil.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Pupil has been created successfully',
            data: pupil
        })
    }
)