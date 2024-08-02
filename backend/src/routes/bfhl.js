const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { data } = req.body;
    // const userId = 'your_fullname_ddmmyyyy';
    const userId = 'SunilKumarSharma_17102002';
    // const email = 'your_email@domain.com';
    const email = 'sk5683@srmist.edu.in';
    // const rollNumber = 'your_roll_number';
    const rollNumber = 'RA2111003030110';


    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length ? [alphabets.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? 1 : -1)[0]] : [];

    res.json({
        is_success: true,
        user_id: userId,
        email,
        roll_number: rollNumber,
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

router.get('/', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

module.exports = router;
