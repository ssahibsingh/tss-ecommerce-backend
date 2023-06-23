import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the API"
    })
})

// router.get('/compute', (req, res) => {
//     // let {a, b}  = req.query;
//     let a = 10;
//     let b = 20;
//     let c = Number(a) + Number(b);
//     res.send(`The sum of ${a} and ${b} is ${c}`);
// })

// router.post('/compute', (req, res) => {
//     let { a, b } = req.body;
//     let c = a + b;
//     res.json({
//         success: true,
//         sum: c
//     });
// })

// router.get('/secret', (req, res) => {
//     let secret = process.env.SECRET;
//     res.json({
//         success: true,
//         message: secret
//     });
// })

export default router;