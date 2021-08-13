(ns ki.tailwindui.forms.labels-on-left
  (:require ["./LabelsOnLeft.js" :as LabelsOnLeft]))

(def example LabelsOnLeft/default)

(defn Example []
  [:form {:css "space-y-8 divide-y divide-gray-200"}
   [:div {:css "space-y-8 divide-y divide-gray-200 sm:space-y-5"}
    [:div {}
     [:div {}
      [:h3 {:css "text-lg leading-6 font-medium text-gray-900"}
       "Profile"]
      [:p {:css "mt-1 max-w-2xl text-sm text-gray-500"}
       "This information will be displayed publicly so be careful what you share."]]
     [:div {:css "mt-6 sm:mt-5 space-y-6 sm:space-y-5"}
      [:div
       {:css "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"}
       [:label {:htmlFor "username",
                :css "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"}
        "Username"]
       [:div {:css "mt-1 sm:mt-0 sm:col-span-2"}
        [:div {:css "max-w-lg flex rounded-md shadow-sm"}
         [:span {:css "inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"}
          "transit.kepler16.com/"]
         [:input {:type "text",
                  :name "username",
                  :id "username",
                  :autoComplete "username",
                  :css "flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"}]]]]
      [:div
       {:css "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"}
       [:label {:htmlFor "about",
                :css "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"}
        "About"]
       [:div {:css "mt-1 sm:mt-0 sm:col-span-2"}
        [:textarea {:id "about",
                    :name "about",
                    :rows 3,
                    :css "max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md",
                    :defaultValue ""}]
        [:p {:css "mt-2 text-sm text-gray-500"}
         "Write a few sentences about yourself."]]]
      [:div
       {:css "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"}
       [:label {:htmlFor "photo", :css "block text-sm font-medium text-gray-700"}
        "Photo"]
       [:div {:css "mt-1 sm:mt-0 sm:col-span-2"}
        [:div {:css "flex items-center"}
         [:span {:css "h-12 w-12 rounded-full overflow-hidden bg-gray-100"}
          [:svg {:css "h-full w-full text-gray-300",
                 :fill "currentColor",
                 :viewBox "0 0 24 24"}
           [:path {:d "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"}]]]
         [:button {:type "button",
                   :css "ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}
          "Change"]]]]
      [:div
       {:css "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"}
       [:label {:htmlFor "cover_photo",
                :css "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"}
        "Cover photo"]
       [:div {:css "mt-1 sm:mt-0 sm:col-span-2"}
        [:div {:css "max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"}
         [:div {:css "space-y-1 text-center"}
          [:svg {:css "mx-auto h-12 w-12 text-gray-400",
                 :stroke "currentColor",
                 :fill "none",
                 :viewBox "0 0 48 48",
                 :aria-hidden "true"}
           [:path {:d "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                   :strokeWidth 2,
                   :strokeLinecap "round",
                   :strokeLinejoin "round"}]]
          [:div {:css "flex text-sm text-gray-600"}
           [:label {:htmlFor "file-upload",
                    :css "relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"}
            [:span {} "Upload a file"]
            [:input {:id "file-upload",
                     :name "file-upload",
                     :type "file",
                     :css "sr-only"}]]
           [:p {:css "pl-1"} "or drag and drop"]]
          [:p {:css "text-xs text-gray-500"}
           "PNG, JPG, GIF up to 10MB"]]]]]]]
    [:div {:css "pt-8 space-y-6 sm:pt-10 sm:space-y-5"}
     [:div {}
      [:h3 {:css "text-lg leading-6 font-medium text-gray-900"}
       "Personal Information"]
      [:p {:css "mt-1 max-w-2xl text-sm text-gray-500"}
       "Use a permanent address where you can receive mail."]]
     [:div {:css "space-y-6 sm:space-y-5"}
      [:div
       {:css "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"}
       [:label {:htmlFor "first_name",
                :css "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"}
        "First name"]
       [:div {:css "mt-1 sm:mt-0 sm:col-span-2"}
        [:input {:type "text",
                 :name "first_name",
                 :id "first_name",
                 :autoComplete "given-name",
                 :css "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"}]]]
      [:div
       {:css "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"}
       [:label {:htmlFor "last_name",
                :css "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"}
        "Last name"]
       [:div {:css "mt-1 sm:mt-0 sm:col-span-2"}
        [:input {:type "text",
                 :name "last_name",
                 :id "last_name",
                 :autoComplete "family-name",
                 :css "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"}]]]
      [:div
       {:css "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"}
       [:label {:htmlFor "email",
                :css "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"}
        "Email address"]
       [:div {:css "mt-1 sm:mt-0 sm:col-span-2"}
        [:input {:id "email",
                 :name "email",
                 :type "email",
                 :autoComplete "email",
                 :css "block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"}]]]
      [:div
       {:css "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"}
       [:label
        {:htmlFor "country",
         :css "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"}
        "Country / Region"]
       [:div {:css "mt-1 sm:mt-0 sm:col-span-2"}
        [:select
         {:id "country",
          :name "country",
          :autoComplete "country",
          :css "max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"}
         [:option {} "United States"] [:option {} "Canada"]
         [:option {} "Mexico"]]]]
      [:div
       {:css "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"}
       [:label
        {:htmlFor "street_address",
         :css "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"}
        "Street address"]
       [:div {:css "mt-1 sm:mt-0 sm:col-span-2"}
        [:input
         {:type "text",
          :name "street_address",
          :id "street_address",
          :autoComplete "street-address",
          :css "block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"}]]]
      [:div
       {:css "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"}
       [:label
        {:htmlFor "city",
         :css "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"}
        "City"]
       [:div {:css "mt-1 sm:mt-0 sm:col-span-2"}
        [:input
         {:type "text",
          :name "city",
          :id "city",
          :css "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"}]]]
      [:div
       {:css "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"}
       [:label
        {:htmlFor "state",
         :css "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"}
        "State / Province"]
       [:div {:css "mt-1 sm:mt-0 sm:col-span-2"}
        [:input
         {:type "text",
          :name "state",
          :id "state",
          :css "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"}]]]
      [:div
       {:css "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"}
       [:label
        {:htmlFor "zip",
         :css "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"}
        "ZIP / Postal"]
       [:div {:css "mt-1 sm:mt-0 sm:col-span-2"}
        [:input {:type "text",
                 :name "zip",
                 :id "zip",
                 :autoComplete "postal-code",
                 :css "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"}]]]]]
    [:div {:css "divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5"}
     [:div {}
      [:h3 {:css "text-lg leading-6 font-medium text-gray-900"}
       "Notifications"]
      [:p {:css "mt-1 max-w-2xl text-sm text-gray-500"}
       "We'll always let you know about important changes, but you pick what else you want to hear about."]]
     [:div {:css "space-y-6 sm:space-y-5 divide-y divide-gray-200"}
      [:div {:css "pt-6 sm:pt-5"}
       [:div {:role "group", :aria-labelledby "label-email"}
        [:div {:css "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline"}
         [:div {}
          [:div
           {:css "text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700",
            :id "label-email"}
           "By Email"]]
         [:div {:css "mt-4 sm:mt-0 sm:col-span-2"}
          [:div {:css "max-w-lg space-y-4"}
           [:div {:css "relative flex items-start"}
            [:div {:css "flex items-center h-5"}
             [:input
              {:id "comments",
               :name "comments",
               :type "checkbox",
               :css "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"}]]
            [:div {:css "ml-3 text-sm"}
             [:label {:htmlFor "comments"
                      :css "font-medium text-gray-700"}
              "Comments"]
             [:p {:css "text-gray-500"}
              "Get notified when someones posts a comment on a posting."]]]
           [:div {}
            [:div {:css "relative flex items-start"}
             [:div {:css "flex items-center h-5"}
              [:input {:id "candidates",
                       :name "candidates",
                       :type "checkbox",
                       :css
                         "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"}]]
             [:div {:css "ml-3 text-sm"}
              [:label {:htmlFor "candidates"
                       :css "font-medium text-gray-700"}
               "Candidates"]
              [:p {:css "text-gray-500"}
               "Get notified when a candidate applies for a job."]]]]
           [:div {}
            [:div {:css "relative flex items-start"}
             [:div {:css "flex items-center h-5"}
              [:input {:id "offers",
                       :name "offers",
                       :type "checkbox",
                       :css "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"}]]
             [:div {:css "ml-3 text-sm"}
              [:label {:htmlFor "offers", :css "font-medium text-gray-700"}
               "Offers"]
              [:p {:css "text-gray-500"}
               "Get notified when a candidate accepts or rejects an offer."]]]]]]]]]
      [:div {:css "pt-6 sm:pt-5"}
       [:div {:role "group", :aria-labelledby "label-notifications"}
        [:div {:css "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline"}
         [:div {}
          [:div {:css "text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700",
                 :id "label-notifications"}
           "Push Notifications"]]
         [:div {:css "sm:col-span-2"}
          [:div {:css "max-w-lg"}
           [:p {:css "text-sm text-gray-500"}
            "These are delivered via SMS to your mobile phone."]
           [:div {:css "mt-4 space-y-4"}
            [:div {:css "flex items-center"}
             [:input {:id "push_everything",
                      :name "push_notifications",
                      :type "radio",
                      :css
                        "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"}]
             [:label {:htmlFor "push_everything",
                      :css "ml-3 block text-sm font-medium text-gray-700"}
              "Everything"]]
            [:div {:css "flex items-center"}
             [:input {:id "push_email",
                      :name "push_notifications",
                      :type "radio",
                      :css
                        "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"}]
             [:label {:htmlFor "push_email",
                      :css "ml-3 block text-sm font-medium text-gray-700"}
              "Same as email"]]
            [:div {:css "flex items-center"}
             [:input {:id "push_nothing",
                      :name "push_notifications",
                      :type "radio",
                      :css
                        "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"}]
             [:label {:htmlFor "push_nothing",
                      :css "ml-3 block text-sm font-medium text-gray-700"}
              "No push notifications"]]]]]]]]]]]
   [:div {:css "pt-5"}
    [:div {:css "flex justify-end"}
     [:button {:type "button",
               :css
                 "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}
      "Cancel"]
     [:button {:type "submit",
               :css "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}
      "Save"]]]])
