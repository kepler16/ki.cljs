(ns ki.core
  (:require-macros ki.core)
  (:require [uix.core.alpha :as uix]
            [rum.core :as rum]))

(defn browser? []
  (js/exists? js/window))

(defn use-state [& args]
  (apply rum/use-state args))

(defn use-effect! [& args]
  (apply rum/use-effect! args))

(defn use-layout-effect! [& args]
  (apply rum/use-layout-effect! args))

(defn use-callback [& args]
  (apply rum/use-callback args))

(defn use-memo [& args]
  (apply rum/use-memo args))

(defn use-reducer [& args]
  (apply rum/use-reducer args))

(defn use-ref [& args]
  (apply rum/use-ref args))

(defn from-react [component]
  (fn [& args]
    (into [:> component] args)))
