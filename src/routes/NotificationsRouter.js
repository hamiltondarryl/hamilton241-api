const express  = require('express');
const router = express.Router();
const controller = require('../controlleurs/NotificationsControlleur');

// Envoie de la notification à tous les utilisateurs 
router.post("/tous-les-utilisateurs", controller.touslesutilisateurs);

// Envoie de la notification à des utilisateurs bien defini par token
router.post("/specifiques-utilisateurs", controller.specificutilisateurs);

module.exports = router ;