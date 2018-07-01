(defproject banking-web "0.1.0-SNAPSHOT"
  :description "Banking WEB"
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [
                  [org.clojure/clojure "1.8.0"]
                  [org.clojure/core.async "0.4.474"]
                  [garden "1.3.5"]
                  [secretary "1.2.3"]
                  [log4j "1.2.15" :exclusions [
                      [javax.mail/mail :extension "jar"]
                      [javax.jms/jms :classifier "*"] com.sun.jdmk/jmxtools com.sun.jmx/jmxri]
                  ]
                  [reagent "0.8.1"]
                  [reagent-reforms "0.4.3"]
                  [reagent-utils "0.3.1"]
                  [reagent-forms "0.5.42"]
                  [mount "0.1.10"]
                  [org.clojure/clojurescript "1.7.107"]
                  [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                ]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.3.1"]
          ]

         
  :source-paths ["src"]

  :cljsbuild {
              :builds [
                        { :id "dev"
                          :source-paths ["src"]

                          :figwheel { :on-jsload "banking-web.core/on-js-reload" }

                          :compiler {:main gf-client.core
                                    :asset-path "js/compiled/out"
                                    :output-to "resources/public/js/compiled/banking-web.js"
                                    :output-dir "resources/public/js/compiled/out"
                                    :closure-defines {"goog.DEBUG" false}
                                    :source-map-timestamp true }
                        }
                        {:id "min"
                          :source-paths ["src"]
                          :compiler {:output-to "resources/public/js/compiled/banking-web.js"
                                    :main banking-web.core
                                    :optimizations :advanced
                                    :pretty-print false}
                        }
                      ]
              }

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :main ^:skip-aot banking-web.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
