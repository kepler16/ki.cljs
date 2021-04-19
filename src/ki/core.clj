(ns ki.core
  (:require [rum.core :as rum]))

(defmacro defc [& args]
  `(rum/defc ~@args))
