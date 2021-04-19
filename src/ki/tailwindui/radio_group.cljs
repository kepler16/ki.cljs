(ns ki.tailwindui.radio-group
  (:require [ki.core :as ki]
            [ki.headlessui :as hui]))

(def bcode-type-options
  [{:name "ZIB" :description "Gen 2 - Zero Integration bCODE"}
   {:name "Leased" :description "Gen 1 - Leased Token"}])

(defn ListWithDescription [options [active-option set-active-option!]]
  [hui/RadioGroup {:value active-option :on-change set-active-option!}
   [:div {:css "bg-white rounded-md -space-y-px"}
    (for [option options]
      [hui/RadioGroupOption {:key (:name option)
                             :value option
                             :css [(when (= option (first options))
                                     "rounded-tl-md rounded-tr-md")
                                   (when (= option (last options))
                                     "rounded-bl-md rounded-br-md")
                                   (if (= option active-option)
                                     "bg-indigo-50 border-indigo-200 z-10"
                                     "border-gray-200")
                                   "relative border p-4 flex cursor-pointer focus:outline-none"]}

       (fn [{:keys [checked active]}]
         [:<>
          [:span
           {:aria-hidden "true"
            :css
            [(if checked "bg-indigo-600 border-transparent" "bg-white border-gray-300")
             (if active "ring-2 ring-offset-2 ring-indigo-500" "")
             "h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"]}]
          [:div {:css "ml-3 flex flex-col"}
           [hui/RadioGroupLabel {:as "span"
                                 :css
                                 [(if checked "text-indigo-900" "text-gray-900")
                                  "block text-sm font-medium"]}
            (:name option)]
           [hui/RadioGroupDescription {:as "span"
                                       :css [(if checked "text-indigo-700" "text-gray-500")
                                             "block text-sm"]}
            (:description option)]]])])]])
