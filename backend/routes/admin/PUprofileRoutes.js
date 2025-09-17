const express = require('express')
const router = express.Router()

const { levelTwoRateLimit } = require('../../middleware/rateLimiters');
const {getallPUprofile, getPUprofileByID,getAllPUMarriageProfile,AdmindeletePUprofile}=require('../../controllers/admin/PUprofileController')

const {protect} = require('../../middleware/authMiddleware')

// router.post('/getPUprofile',getallPUprofile)
// router.get('/getPUprofilebyId',getPUprofileByID)
router.route('/getPUprofile').post(protect,levelTwoRateLimit,getallPUprofile)
router.route('/getPUprofilebyId').get(protect,levelTwoRateLimit,getPUprofileByID)
router.route('/getAllPUMarriageProfile').post(protect,getAllPUMarriageProfile)
router.route('/AdmindeletePUprofile').post(protect,AdmindeletePUprofile)
// router.post('/getAllPUMarriageProfile',getAllPUMarriageProfile)

module.exports=router