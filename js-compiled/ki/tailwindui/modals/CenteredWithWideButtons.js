"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormModal = FormModal;
exports.Example = Example;

var _react = require("react");

var _react2 = require("@headlessui/react");

var _outline = require("@heroicons/react/outline");

/* This example requires Tailwind CSS v2.0+ */
function FormModal({
  modelState,
  children
}) {
  const [open, setOpen] = modelState;
  const cancelButtonRef = (0, _react.useRef)();
  return /*#__PURE__*/React.createElement(_react2.Transition.Root, {
    show: open,
    as: _react.Fragment
  }, /*#__PURE__*/React.createElement(_react2.Dialog, {
    as: "div",
    static: true,
    className: "fixed z-10 inset-0 overflow-y-auto",
    initialFocus: cancelButtonRef,
    open: open,
    onClose: setOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  }, /*#__PURE__*/React.createElement(_react2.Transition.Child, {
    as: _react.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/React.createElement(_react2.Dialog.Overlay, {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  })), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true"
  }, "\u200B"), /*#__PURE__*/React.createElement(_react2.Transition.Child, {
    as: _react.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
  }, children)))));
}

function Example() {
  const [open, setOpen] = (0, _react.useState)(true);
  const cancelButtonRef = (0, _react.useRef)();
  return /*#__PURE__*/React.createElement(_react2.Transition.Root, {
    show: open,
    as: _react.Fragment
  }, /*#__PURE__*/React.createElement(_react2.Dialog, {
    as: "div",
    static: true,
    className: "fixed z-10 inset-0 overflow-y-auto",
    initialFocus: cancelButtonRef,
    open: open,
    onClose: setOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  }, /*#__PURE__*/React.createElement(_react2.Transition.Child, {
    as: _react.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/React.createElement(_react2.Dialog.Overlay, {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  })), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true"
  }, "\u200B"), /*#__PURE__*/React.createElement(_react2.Transition.Child, {
    as: _react.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
  }, /*#__PURE__*/React.createElement(_outline.CheckIcon, {
    className: "h-6 w-6 text-green-600",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 text-center sm:mt-5"
  }, /*#__PURE__*/React.createElement(_react2.Dialog.Title, {
    as: "h3",
    className: "text-lg leading-6 font-medium text-gray-900"
  }, "Payment successful"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500"
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.")))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm",
    onClick: () => setOpen(false)
  }, "Deactivate"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm",
    onClick: () => setOpen(false),
    ref: cancelButtonRef
  }, "Cancel")))))));
}