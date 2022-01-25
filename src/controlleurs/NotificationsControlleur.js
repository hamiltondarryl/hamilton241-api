const serviceNotification = require('../helpers/services');

// Fonction d'envoie des notifications à tous les utilisateur
exports.touslesutilisateurs = (req, res )=>{


    let { key, appid , titre , contenu  } = req.body ;

    var message = {
        app_id : appid,
        headings : {en : titre },
        contents : { en: contenu },
        included_segments : ["All"],
        content_available : true,
        small_icon: "ic_notification_icon",
        big_picture : 'https://img.cuisineaz.com/680x357/2016/07/25/i18826-tbikha-aubergine.jpg',
        chrome_web_image : 'https://serveur-sodepsi.com/CRYSTAL/assets/img/uploads/plat1.jpg',
        huawei_big_picture : 'https://www.mutuellebleue.fr/conseils-sante-bien-etre/wp-content/uploads/sites/2/2020/07/des-plats-%C3%A9quiliobr%C3%A9s-et-color%C3%A9s.jpg',
        data : {
            "PushTitle" : "Custom notifications"
        }
    }

    serviceNotification.sendAll(message, key, (errorr, result) => {

        if (errorr) {
            res.status(400).json({ resultat : false , titre : "Probléme décelé", "message" : errorr })
        } else {
            if (result.errors) {
                res.status(400).json({ resultat : false , titre : "Erreur d'envoie", "message" : `${result.errors}` })
            }else{
                res.status(200).json({ resultat : true , titre : "Envoie reussi", "message" : "Les notifications ont été envoyé avec success"  })
            }
        }
      
    });



}