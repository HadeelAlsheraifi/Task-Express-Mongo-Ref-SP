const ShopSchema = require("../../models/Shop");

exports.fetchShop = async (shopId, next) => {
  try {
    const shop = await Shop.findById(shopId);
    return shop;
  } catch (error) {
    next(error);
  }
};

exports.shopCreate = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `/${req.file.path}`;
      req.body.image = req.body.image.replace("\\", "/");
    }
    const newProduct = await Shop.create(req.body);
    return res.status(201).json(newShop);
  } catch (error) {
    next(error);
  }
};

// exports.shopUpdate = async (req, res, next) => {
//   try {
//     if (req.file) {
//       req.body.image = `/${req.file.path}`;
//       req.body.image = req.body.image.replace("\\", "/");
//     }
//     const shop = await Shop.findByIdAndUpdate(
//       { _id: req.shop.id },
//       req.body,
//       { new: true, runValidators: true } // returns the updated shop
//     );
//     res.status(204).end();
//   } catch (err) {
//     next(error);
//   }
// };
