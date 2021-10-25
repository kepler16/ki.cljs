(ns ki.tailwindui.select-menu
  (:require [ki.core :as ki]
            [ki.css.alpha :as ki.css]
            [ki.headlessui :as hui]
            ["@heroicons/react/solid" :as heroicons]))


(defn CustomWithCheckOnLeft [{:keys [options id-selector text-selector]
                              :or {text-selector :text
                                   id-selector :id}
                              [selected-option set-selected-option!] :selected-option}]
  (let [options (ki/use-memo (constantly options) [(str options)])]
    [hui/Listbox {:value selected-option :on-change set-selected-option!}
     (fn [{:keys [open]}]
       [:div {:class "mt-1 relative"}
        [hui/ListboxButton {:css "relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}
         [:span {:className "block truncate"} (get selected-option text-selector)]
         [:span {:className "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"}
          [:> heroicons/SelectorIcon {:aria-hidden "true", :className "h-5 w-5 text-gray-400"}]]]
        [hui/Transition {:show open
                         :leave "transition ease-in duration-100"
                         :leaveFrom "opacity-100"
                         :leaveTo "opacity-0"}
         [hui/ListboxOptions {:static true
                              :css ["absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base"
                                    "ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"]}
          (for [option options]
            [hui/ListboxOption {:key (get option id-selector)
                                :css (fn [{:keys [active]}]
                                       (ki.css/css
                                        [(if active
                                           "text-white bg-indigo-600"
                                           "text-gray-900")
                                         "cursor-default select-none relative py-2 pl-8 pr-4"]))
                                :value option}
             (fn [{:keys [selected active] :as opts}]
               (prn opts)
               [:<>
                [:span
                 {:css [(if selected "font-semibold" "font-normal")
                        "block truncate"]}
                 (get option text-selector)]
                (when selected
                  [:span {:css [(if active "text-white" "text-indigo-600")
                                "absolute inset-y-0 left-0 flex items-center pl-1.5"]}
                   [:> heroicons/CheckIcon {:class "h-5 w-5" :aria-hidden "true"}]])])])]]])]))
