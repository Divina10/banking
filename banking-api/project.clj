(defproject banking-api "0.1.0-SNAPSHOT"
  :description "Exposicion de servicios banking"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                [clj-time "0.12.0"]
  ]
  :main ^:skip-aot banking-api.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
