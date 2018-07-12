(ns figwheel.connect (:require [banking-web.core] [figwheel.client]))
(figwheel.client/start {:on-jsload banking-web.core/on-js-reload, :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

