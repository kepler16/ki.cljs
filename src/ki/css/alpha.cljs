(ns ki.css.alpha
  (:require [uix.core.alpha :as uix]
            [clojure.string :as str]))

(defn css->classes [css-val]
  (->> (cond
         (nil? css-val) '()
         (string? css-val)  (str/split css-val #" ")
         (keyword? css-val) (-> css-val name (str/split "."))
         (map? css-val) (throw (ex-info "Map not yet supported as a css value. Not hard to do. Just need to do it." css-val))
         (seqable? css-val) (->> css-val (mapcat css->classes)))
       (remove #{""})))

(defn css [css-val]
  (str/join " " (css->classes css-val)))

(comment
  (css->classes " sdf df")

  (css->classes :sdf.sdf)

  (css->classes {})

  (css->classes [:a.b [:x "y z"]])

  (css->classes [:a.b "y z" [:s '(:z)]])

  (css [:a.b "y z" [:s '(:z)]])

  nil)

(defn inject-uix-css-transform! []
  (defonce _init-css-attr-transform
    (do
      (uix/add-transform-fn
       (fn [attrs]
         (if-not (:css attrs)
           attrs
           (if (fn? (:css attrs))
             (-> attrs
                   (dissoc :css)
                   (assoc :class (fn [options]
                                       ((:css attrs) (js->clj options)))))
             (let [class (str (:class attrs) " " (css (:css attrs)))]
               (-> attrs
                   (dissoc :css)
                   (assoc :class class)))))))
      0)))
