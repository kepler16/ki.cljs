(ns ki.headlessui
  (:require ["@headlessui/react" :as hui]
            [uix.core.alpha :as uix]
            [cljs-bean.core :as b]))

(defn from-react [component]
  (fn [props & args]
    (into
     [:> component props]
     args)))

(defn from-react-with-render-prop [component]
  (fn [props child-fn]
    [:> component props
     (fn [props]
       (uix/as-element
        (child-fn (b/->clj props))))]))

(def RadioGroup (from-react hui/RadioGroup))
(def RadioGroupLabel (from-react hui/RadioGroup.Label))
(def RadioGroupDescription (from-react hui/RadioGroup.Label))

(def RadioGroupOption (from-react-with-render-prop hui/RadioGroup.Option))


(def Listbox (from-react-with-render-prop hui/Listbox))
(def ListboxButton (from-react hui/Listbox.Button))
(def ListboxOptions (from-react hui/Listbox.Options))
(def ListboxOption (from-react-with-render-prop hui/Listbox.Option))

(def Transition (from-react hui/Transition))
