import express from "express"

const router = express.Router()

// Routes
router.get("/test", (req, res) => {
  res.send("TEST API IS WORKING")
})

export default router