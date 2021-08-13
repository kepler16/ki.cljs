(ns ki.tailwindui.modals.core
  (:require [uix.core.alpha :as uix]
            ["./CenteredWithWideButtons" :as CenteredWithWideButtons]))

(defn FormModal [{:keys [modal-state]} children]

  [:> CenteredWithWideButtons/FormModal {:modelState modal-state}
    children])
