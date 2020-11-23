const router = require("express").Router();

// dashboard route
router.get("/profile", (req, res) => {
  res.json({
    error: null,
    data: {
      title: "My profile",
      content: "profile content",
      user: req.user,
    },
  });
});

module.exports = router;