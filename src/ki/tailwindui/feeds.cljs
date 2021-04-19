(ns ki.tailwindui.feeds
  (:require ["@heroicons/react/solid" :as icons]
            ["timeago.js" :as timeago]
            [ki.core :as ki]))


(def example-timeline
   [
     {:id 1,
      :content "Applied to",
      :target "Front End Developer",
      :href "#",
      :date "Sep 20",
      :datetime "2020-09-20",
      :icon icons/UserIcon,
      :iconBackground "bg-gray-400"}

     {:id 2,
      :content "Advanced to phone screening by",
      :target "Bethany Blake",
      :href "#",
      :date "Sep 22",
      :datetime "2020-09-22",
      :icon icons/ThumbUpIcon,
      :iconBackground "bg-blue-500"}

     {:id 3,
      :content "Completed phone screening with",
      :target "Martha Gardner",
      :href "#",
      :date "Sep 28",
      :datetime "2020-09-28",
      :icon icons/CheckIcon,
      :iconBackground "bg-green-500"}

     {:id 4,
      :content "Advanced to interview by",
      :target "Bethany Blake",
      :href "#",
      :date "Sep 30",
      :datetime "2020-09-30",
      :icon icons/ThumbUpIcon,
      :iconBackground "bg-blue-500"}

     {:id 5,
      :content "Completed interview with",
      :target "Katherine Snyder",
      :href "#",
      :date "Oct 4",
      :datetime "2020-10-04",
      :icon icons/CheckIcon,
      :iconBackground "bg-green-500"}])

(defn SimpleWithIcons [timeline]
  (let [[_ refresh!] (ki/use-state 0)]
    (ki/use-effect!
     (fn []
       (let [timeout-id (js/setTimeout #(refresh! (rand-int 1000)) 5000)]
         #(js/clearTimeout timeout-id)))))
  [:div {:className "flow-root mt-8"}
   [:ul {:className "-mb-8"}
      (for [event timeline]
        ^{:key (:id event)}
        [:li
         [:div {:className "relative pb-8"}
          (when (not= event (last timeline))
            [:span
             {:css "absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200",
              :aria-hidden "true"}])
          [:div {:css "relative flex space-x-3"}
           [:div
            [:span {:css [(:iconBackground event)
                          "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"]}
             [:> (:icon event)
              {:css "h-5 w-5 text-white", :aria-hidden "true"}]]]
           [:div
            {:css "min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"}
            [:div {}
             [:p {:className "text-sm text-gray-500"} (:content event) " "
              [:a
               {:href (:href event),
                :className "font-medium text-gray-900"} (:target event)]]]
            [:div
             {:className "text-right text-sm whitespace-nowrap text-gray-500"}
             [:time {:dateTime (:datetime event)}
              (timeago/format (:date event))]]]]]])]])
