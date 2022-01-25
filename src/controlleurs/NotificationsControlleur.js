const serviceNotification = require('../helpers/services');

// Fonction d'envoie des notifications à tous les utilisateur
exports.touslesutilisateurs = (req, res )=>{


    let {key, appid , contenu } = req.body ;

    var message = {
        app_id : appid,
        headings : {en : "test heading"},
        contents : { en: contenu },
        included_segments : ["All"],
        content_available : true,
        small_icon: "ic_notification_icon",
        chrome_web_image : 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png',
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