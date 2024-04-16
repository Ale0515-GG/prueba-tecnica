import express from 'express';
import multer from 'multer';
import * as usuarioControllers from "../controllers/usuarioControllers.js";

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get("/",usuarioControllers.getUsuarios);
router.get("/:id", usuarioControllers.getUsuariosUno);
router.post("/create", usuarioControllers.postUsuarios);
router.put("/update/:id", usuarioControllers.putUsuarios);
router.delete("/delete/:id", usuarioControllers.deleteUsuarios);
router.post("/login", usuarioControllers.login);

export { router as routerUsuarios };
