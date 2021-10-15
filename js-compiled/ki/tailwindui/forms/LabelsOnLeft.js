"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Example;

/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
function Example() {
  return /*#__PURE__*/React.createElement("form", {
    className: "space-y-8 divide-y divide-gray-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-8 divide-y divide-gray-200 sm:space-y-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, "Profile"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 max-w-2xl text-sm text-gray-500"
  }, "This information will be displayed publicly so be careful what you share.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 sm:mt-5 space-y-6 sm:space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "username",
    className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
  }, "Username"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 sm:mt-0 sm:col-span-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-lg flex rounded-md shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
  }, "workcation.com/"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "username",
    id: "username",
    autoComplete: "username",
    className: "flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "about",
    className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
  }, "About"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 sm:mt-0 sm:col-span-2"
  }, /*#__PURE__*/React.createElement("textarea", {
    id: "about",
    name: "about",
    rows: 3,
    className: "max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md",
    defaultValue: ""
  }), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm text-gray-500"
  }, "Write a few sentences about yourself."))), /*#__PURE__*/React.createElement("div", {
    className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "photo",
    className: "block text-sm font-medium text-gray-700"
  }, "Photo"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 sm:mt-0 sm:col-span-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-12 w-12 rounded-full overflow-hidden bg-gray-100"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "h-full w-full text-gray-300",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Change")))), /*#__PURE__*/React.createElement("div", {
    className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cover_photo",
    className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
  }, "Cover photo"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 sm:mt-0 sm:col-span-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 text-center"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "mx-auto h-12 w-12 text-gray-400",
    stroke: "currentColor",
    fill: "none",
    viewBox: "0 0 48 48",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex text-sm text-gray-600"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "file-upload",
    className: "relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
  }, /*#__PURE__*/React.createElement("span", null, "Upload a file"), /*#__PURE__*/React.createElement("input", {
    id: "file-upload",
    name: "file-upload",
    type: "file",
    className: "sr-only"
  })), /*#__PURE__*/React.createElement("p", {
    className: "pl-1"
  }, "or drag and drop")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500"
  }, "PNG, JPG, GIF up to 10MB"))))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-8 space-y-6 sm:pt-10 sm:space-y-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, "Personal Information"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 max-w-2xl text-sm text-gray-500"
  }, "Use a permanent address where you can receive mail.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 sm:space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "first_name",
    className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
  }, "First name"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 sm:mt-0 sm:col-span-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "first_name",
    id: "first_name",
    autoComplete: "given-name",
    className: "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "last_name",
    className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
  }, "Last name"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 sm:mt-0 sm:col-span-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "last_name",
    id: "last_name",
    autoComplete: "family-name",
    className: "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
  }, "Email address"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 sm:mt-0 sm:col-span-2"
  }, /*#__PURE__*/React.createElement("input", {
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    className: "block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "country",
    className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
  }, "Country / Region"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 sm:mt-0 sm:col-span-2"
  }, /*#__PURE__*/React.createElement("select", {
    id: "country",
    name: "country",
    autoComplete: "country",
    className: "max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
  }, /*#__PURE__*/React.createElement("option", null, "United States"), /*#__PURE__*/React.createElement("option", null, "Canada"), /*#__PURE__*/React.createElement("option", null, "Mexico")))), /*#__PURE__*/React.createElement("div", {
    className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "street_address",
    className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
  }, "Street address"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 sm:mt-0 sm:col-span-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "street_address",
    id: "street_address",
    autoComplete: "street-address",
    className: "block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "city",
    className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
  }, "City"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 sm:mt-0 sm:col-span-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "city",
    id: "city",
    className: "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "state",
    className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
  }, "State / Province"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 sm:mt-0 sm:col-span-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "state",
    id: "state",
    className: "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "zip",
    className: "block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
  }, "ZIP / Postal"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 sm:mt-0 sm:col-span-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "zip",
    id: "zip",
    autoComplete: "postal-code",
    className: "max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, "Notifications"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 max-w-2xl text-sm text-gray-500"
  }, "We'll always let you know about important changes, but you pick what else you want to hear about.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 sm:space-y-5 divide-y divide-gray-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pt-6 sm:pt-5"
  }, /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-labelledby": "label-email"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700",
    id: "label-email"
  }, "By Email")), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 sm:mt-0 sm:col-span-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-lg space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center h-5"
  }, /*#__PURE__*/React.createElement("input", {
    id: "comments",
    name: "comments",
    type: "checkbox",
    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ml-3 text-sm"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "comments",
    className: "font-medium text-gray-700"
  }, "Comments"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500"
  }, "Get notified when someones posts a comment on a posting."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center h-5"
  }, /*#__PURE__*/React.createElement("input", {
    id: "candidates",
    name: "candidates",
    type: "checkbox",
    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ml-3 text-sm"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "candidates",
    className: "font-medium text-gray-700"
  }, "Candidates"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500"
  }, "Get notified when a candidate applies for a job.")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center h-5"
  }, /*#__PURE__*/React.createElement("input", {
    id: "offers",
    name: "offers",
    type: "checkbox",
    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ml-3 text-sm"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "offers",
    className: "font-medium text-gray-700"
  }, "Offers"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500"
  }, "Get notified when a candidate accepts or rejects an offer."))))))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 sm:pt-5"
  }, /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-labelledby": "label-notifications"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700",
    id: "label-notifications"
  }, "Push Notifications")), /*#__PURE__*/React.createElement("div", {
    className: "sm:col-span-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-lg"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500"
  }, "These are delivered via SMS to your mobile phone."), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("input", {
    id: "push_everything",
    name: "push_notifications",
    type: "radio",
    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "push_everything",
    className: "ml-3 block text-sm font-medium text-gray-700"
  }, "Everything")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("input", {
    id: "push_email",
    name: "push_notifications",
    type: "radio",
    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "push_email",
    className: "ml-3 block text-sm font-medium text-gray-700"
  }, "Same as email")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("input", {
    id: "push_nothing",
    name: "push_notifications",
    type: "radio",
    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "push_nothing",
    className: "ml-3 block text-sm font-medium text-gray-700"
  }, "No push notifications"))))))))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Save"))));
}