const maleAvatars = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLw4g9oSA1J8gEyjRDHObBGBMAqoHLpc02UVDtIONmua2XaIxKg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHiUWuuN6Psjjt_Lnx7Kr3axeggZ8Ha1q3IzDd35ZhJIUWzsEH",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFb_EMMsqMmSmSaT-qNCj8zl8fd6NKTG02vgJoKcF2exFTQoOX",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1P-nJkLKEPODdPnqQcDQ-9O8hnRE0v12Q2sQ4BdJ6FrpLnc64",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFE0yM4NqK4N7_y00CZg2N43xoKrZUm7u2g1rvDU8aj5tfr3Ep",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMTalAOgHvLZcnQrRVehXTWF1-WzmTLm0Lf2CCRvch-lL7gRA"
]

const femaleAvatars = [
    "http://www.vogatti.co.in/wp-content/uploads/2015/09/alice_smihts_tm.jpg",
    "http://suatgoksahin.com/wp-content/uploads/2013/05/Team-Member-2-270x250.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXm8D28rXhyN4UtDJrCYhdB5tV7p7iKrRvo9rf9uSnDDg9lIV",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7U-wifsuJwIgljCtWp_IEx_6DUg4YPWmUlm9Hhaevl9RhJ5Mm",
    "http://marionmodels.com/wp-content/uploads/2015/09/helen_klover_tm.jpg"
]

export const getRandomMaleAvatar = () => maleAvatars[Math.floor(Math.random() * Math.floor(6))];
export const getRandomFemaleAvatar = () => femaleAvatars[Math.floor(Math.random() * Math.floor(5))];
