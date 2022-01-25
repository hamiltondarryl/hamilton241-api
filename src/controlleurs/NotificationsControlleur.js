const serviceNotification = require('../helpers/services');

// Fonction d'envoie des notifications à tous les utilisateur
exports.touslesutilisateurs = (req, res )=>{

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.json({response : "ok gar"})

    /*
    let {key, appid , contenu } = req.body ;

    var message = {
        app_id : appid,
        contents : { en: contenu },
        included_segments : ["All"],
        content_available : true,
        small_icon: "ic_notification_icon",
        data : {
            "PushTitle" : "Custom notifications"
        }
    }

    serviceNotification.sendAll(message, key, (errorr, result) => {

        if (errorr) {
            res.status(400).json({ resultat : false , titre : "Probléme décelé", "message" : errorr })
        } else {
            if (result.errors) {
                res.status(400).json({ resultat : false , titre : "Erreur d'envoie", "message" : result.errors })
            }else{
                res.status(200).json({ resultat : true , titre : "Envoie reussi", "message" : "Les notifications ont été envoyé avec success"  })
            }
        }
      
    });
*/


}