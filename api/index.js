const router = require('express').Router()

router.get('/portfolio', (req, res) => {
    return res.status(200).send([
            {
                img: '/something/random/img.jpg',
                caption: 'Explore',
                title: 'Graphic Design'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Finish',
                title: 'Identify'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Lines',
                title: 'Branding'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Southwest',
                title: 'Website Design'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Window',
                title: 'Photography'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Coffee',
                title: 'Drink a Lot!' 
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Pizza',
                title: 'I Ate some Pizza!'
            }
        ])
})

module.exports = router