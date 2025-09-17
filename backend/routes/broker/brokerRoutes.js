const { levelOneRateLimit, levelTwoRateLimit, levelThreeRateLimit, levelFourRateLimit, levelFiveRateLimit} = require('../../middleware/rateLimiters');
const express = require('express')
const router = express.Router()

const {getBrokerDetailById,topUpPlanBroker,getBrokerApproveProfileList,BrokerApproveDetailsById,PUProfileRegisterInMarriageProfileTable,
    RejectProfile,getMatchProfile, BrokerToBroker,searchProfileBrokToBrok, getBrokProfById,GetBrokerDetails} = require('../../controllers/broker/brokerController')

const {protect} = require('../../middleware/authMiddleware')

router.route('/topUpPlanBroker').post(protect,levelOneRateLimit,topUpPlanBroker)
router.route('/getBrokerDetailById').post(protect,levelFourRateLimit,getBrokerDetailById)
router.route('/getBrokerApproveProfileList').post(protect,levelFiveRateLimit,getBrokerApproveProfileList)
router.route('/BrokerApproveDetailsById').post(protect,levelThreeRateLimit,BrokerApproveDetailsById)
router.route('/PUProfileRegisterInMarriageProfileTable').post(protect,levelThreeRateLimit,PUProfileRegisterInMarriageProfileTable)
router.route('/RejectProfile').post(protect,levelTwoRateLimit,RejectProfile)
// router.route('/getMatchProfile').post(protect,levelThreeRateLimit,getMatchProfile)
router.route('/getMatchProfile').post(protect,getMatchProfile)
router.route('/BrokerToBroker').post(protect,levelTwoRateLimit,BrokerToBroker)
router.route('/searchProfileBrokToBrok').post(protect,levelFourRateLimit,searchProfileBrokToBrok)
router.route('/getBrokProfById').post(protect,levelThreeRateLimit,getBrokProfById)
router.route('/GetBrokerDetails').post(protect,levelThreeRateLimit,GetBrokerDetails)

module.exports = router