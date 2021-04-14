(ns ki.core
  (:require [uix.core.alpha :as uix]))

(defn browser? []
  (js/exists? js/window))

(defn use-state [default]
  (let [s* (uix/state default)]
    [@s* #(reset! s* %)]))
