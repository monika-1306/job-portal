const express = require("express");
const router = express.Router();

const { login } = require("../controllers/authController");

// ✅ add this line
const { authMiddleware } = require("../middleware/authMiddleware");

// existing route
router.post("/login", login);

// ✅ add protected route BELOW login
router.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "Protected route accessed",
        user: req.user
    });
});

module.exports = router;