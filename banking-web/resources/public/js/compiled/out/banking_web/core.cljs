  (ns ^:figwheel-always banking-web.core
    (:require
      [secretary.core :as secretary]
      [banking-web.pages :as pages]
      )    
  )
  
  (defonce navbar-data
    {:brand "E-Banking"
     :items [
             {:name "Login" :page :home :url "#/"}
            ]
     }
    )

  ;; setup secretary
  (def pages
      {:home pages/login
    })

    (defn page []
      [(pages (session/get :page)
              )])
    
    (defroute "/" []
              (session/put! :page :home)
             )

;; initialize
(defn init! []
  (secretary/set-config! :prefix "#")
  (session/put! :page :home)
  (utils/mount-component rcomp/navbar navbar-data "navbar")
  (utils/mount-component page nil "app")
 )

(defn on-js-reload
  "figwheel reload initialization goes here"
  [])

(init!)            
