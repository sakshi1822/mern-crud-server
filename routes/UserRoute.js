import express from "express";
import {
  create,
  deleteUser,
  getAllUsers,
  getUserById,
  update,
} from "../controller/UserController.js";
const router = express.Router();

router.post("/", create);
router.get("/", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteUser);

export default router;
