// add the routes you will use
const router = express.Router();

router.use('/api/v1', );
router.use('/api/v1', );
router.use('/api/v1', );

router.get('/', (req, res) => {
    return res.status(200).json({ message: 'You are not Allowed Here' });
});

module.exports = router;