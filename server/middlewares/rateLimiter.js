const rateLimit = require("express-rate-limit");

const rateLimitHandler = (message) => (req, res) => {
    res.status(429).json({
        success: false,
        message,
    });
};

// AUTH routes (/api/v1/auth) - login/signup/OTP brute-force se bchane ke liye
exports.authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    handler: rateLimitHandler(
        "Too many login/signup attempts. Please try again after 15 minutes."
    ),
});

// AI TOOLS routes (/api/v1/ai-tools) - cost/abuse control
exports.aiLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
    handler: rateLimitHandler(
        "Too many AI requests. Please slow down and try again shortly."
    ),
});

// PAYMENT routes (/api/v1/payment) - fraud / card-testing se bchane ke liye
exports.paymentLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    handler: rateLimitHandler(
        "Too many payment requests. Please try again after some time."
    ),
});