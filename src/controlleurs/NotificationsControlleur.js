const serviceNotification = require('../helpers/services');

// Fonction d'envoie des notifications à tous les utilisateur
exports.touslesutilisateurs = (req, res )=>{

    let { key, appid , titre , contenu , urlimage } = req.body ;

    if (key !="" && appid !="" && titre !="" && contenu !="") {

        var message = {
            app_id : appid,
            headings : {en : titre },
            contents : { en: contenu },
            included_segments : ["All"],
            content_available : true,
            small_icon: "ic_notification_icon",
            big_picture : urlimage,
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
        
    }else{

        res.status(400).json({ resultat : false , titre : "Il y'a des champs vides", "message" : `Veuillez remplir tous les champs pour que la requette puisse etre prise en charge`})
    }
}

exports.specificutilisateurs = (req, res )=>{

    let { key, appid , titre , contenu , urlimage, ids } = req.body ;


    if (key !="" && appid !="" && titre !="" && contenu !="") {

        var message = {
            app_id : appid,
            headings : {en : titre },
            contents : { en: contenu },
            include_player_ids : ids ,
            content_available : true,
            small_icon: "ic_notification_icon",
            big_picture : urlimage,
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
        
    }else{

        res.status(400).json({ resultat : false , titre : "Il y'a des champs vides", "message" : `Veuillez remplir tous les champs pour que la requette puisse etre prise en charge`})
    }



}