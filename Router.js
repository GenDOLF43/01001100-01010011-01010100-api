const {Router} = require('express')
const router = Router()
const {AccauntSchem} = require('./item')

router.post('/01001100-01010011-01010100/', async(req, res) =>{
    try{
        const { Click } = req.bode
        const { IdUser } = req.body

        const User = await AccauntSchem.findOne({ tg: IdUser})

        if(!User){
            return res.status(300),json({message: 'Хз что за хуйня лол'})
        }

    } catch(error){
        console.error(error)
    }
})

module.exports = router
