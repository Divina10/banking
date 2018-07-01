(ns banking-web.login.login
    (:require 
              ;[cljs.core.async :as async]
              [secretary.core :as secretary]
              [reforms.validation :as v :include-macros true]
              ;[reagent.session :as session]
              [reagent.core :as reagent :refer [atom]]              
              [reagent.core :refer [atom render-component]]
             ; [gf-client.api :as api]
              )
  
    )
  
  (def user (atom {:login "" :password1 ""}))
  (def ui-state (atom {}))
  
  (def signup-validators [
                          (v/present [:login] "Ingrese el nombre de usuario")
                          (v/present [:password1] "La password debe ser escrita")
                          ])
  (defn sign-up!
    [user ui-state]
    (when (apply v/validate! user ui-state signup-validators)
      ;(reset! @api/administracion-person-data (atom ""))
      ;(api/service-login (:login @user) (:password1 @user))
      ;(if (= (aget @api/proveedor-person-data "result") "OK")
      ;    (secretary/dispatch! "/bandeja-entrada")
  
        ;(do
        ;  (js/alert (aget @api/administracion-person-data "message"))
        ;  (reset! user {:login "" :password1 ""})
        ;  (reset! api/administracion-person-data [])
        ;  )
        ;)
        )
      )
  
  
  (defn signup-view
    []
    (fc/panel "E-Banking"
           (v/form ui-state {:on-submit #(sign-up! user ui-state)}
                 (v/text "Login" user [:login] :placeholder "Ingrese su usuario" )
                 (v/password "Password" user [:password1] :placeholder "Ingrese su Password" )
                 (fc/form-buttons
                   (v/button-primary "LOGIN" #(sign-up! user ui-state))
                   ))))