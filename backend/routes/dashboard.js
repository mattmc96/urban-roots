const router = require('express').Router()

// dashboard route
// router.get('/authenticated', (req, res) => {
//   res.json({
//     error: null,
//     data: {
//       title: 'My profile',
//       content: 'profile content',
//       user: req.user
//     }
//   })
// })

router.get('/authenticated', (req, res) => {
  const { email } = req.user
  res.status(200).json({ isAuthenticated: true, user: { email } })
})

module.exports = router
