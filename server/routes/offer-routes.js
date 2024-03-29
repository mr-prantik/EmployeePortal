const express = require('express');
const { check } = require('express-validator');

const offerController = require('../controller/offer-controller');
// const fileUpload = require('../middlewares/file-upload');

const router = express.Router();

// router.get('/', offerController.getOffers);
router.get('/get/internships', offerController.getInternships);
router.get('/get/jobs', offerController.getJobs);
router.get('/get/offercount', offerController.getOfferCount);
router.get('/get/internshipcount', offerController.getInternshipCount);
router.get('/get/jobcount', offerController.getJobCount);
router.get('/get/offer/:oid', offerController.getOffer);

// POST

router.post(
  '/post/offer',
  [
    check('type')
      .not()
      .isEmpty(),
    check('heading')
      .not()
      .isEmpty(),
    check('link')
      .not()
      .isEmpty()
  ],
  offerController.createOffer
);

router.post(
  '/post/internship',
  [
    check('stipend')
      .not()
      .isEmpty(),
    check('heading')
      .not()
      .isEmpty(),
    check('link')
      .not()
      .isEmpty()
  ],
  offerController.createInternshipOffer
);

router.post(
  '/post/job',
  [
    check('ctc')
      .not()
      .isEmpty(),
    check('heading')
      .not()
      .isEmpty(),
    check('link')
      .not()
      .isEmpty()
  ],
  offerController.createJobOffer
);

// PATCH

router.patch(
  '/edit/apply',
  [],
  offerController.applyOffer
)

// DELETE

router.delete(
  '/delete/:oid',
  [],
  offerController.deleteOffer
)

module.exports = router;
