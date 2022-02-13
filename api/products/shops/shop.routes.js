const { Router } = require("express");
const express = require("express");

const {
  fetchShop,
  shopCreate,
  shopDelete,
  shopUpdate,
} = require("./shop.controller");
const upload = require("./middleware/multer");

//middleware
const router = express.Router();

router.param("shopId", async (req, res, next, shopId) => {
  const shop = await getSingleshop(shopId, next);
  req.shop = shop;
  next();
});

router.get("/", fetchShop);
// router.get("/:shopId", upload.single("image"), getSingleshop);
router.post("/", shopCreate);
router.delete("/:shopId", shopDelete);
router.put("/:shopId", upload.single("image"), shopUpdate);

module.exports = router;
