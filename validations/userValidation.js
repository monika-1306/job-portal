const { z } = require("zod");

const validateSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20).optional(),
  email: z.string().email(),
  mobile_number: z.string().regex(/^\+[1-9]\d{1,14}$/),
  password: z.string()
    .min(3)
    .max(10)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/),
});

module.exports = {
  validateSchema,
};