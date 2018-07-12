(ns banking-web.pages
    "pages built with component composition for application"
    (:require
     ;[gf-client.components :as rcomp]
     [banking-web.login.login :as form-login]
     ;[gf-client.taskservice :as ts]
     ;[gf-client.api :as api]
     )
    )
  
  (defn login []
      [:div
       [:div.well
        [login/signup-view]]
       ]
  )