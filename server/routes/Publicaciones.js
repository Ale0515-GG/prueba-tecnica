import express from 'express';
import * as publicacionControllers from '../controllers/publicacionController.js';

const router = express.Router();

router.get('/', publicacionControllers.getPublicaciones);
router.get('/:id', publicacionControllers.getPublicacionById);
router.get('/autor/:autor', publicacionControllers.getPublicacionesByAutor);
router.post('/', publicacionControllers.createPublicacion);
router.put('/:id', publicacionControllers.updatePublicacion);
router.delete('/:id', publicacionControllers.deletePublicacion);

export { router as routerPublicaciones };
