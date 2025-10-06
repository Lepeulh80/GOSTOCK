"use strict";
exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditProductModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function EditProductModal({
  product,
  onClose,
  onUpdate
}) {
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => setForm(product ? { ...product
  } : null), [product]);
  if (!form) return null;

  const handleChange = e => setForm({ ...form,
    [e.target.name]: e.target.value
  });

  const submit = async () => {
    try {
      const payload = {
        name: form.name,
        category: form.category,
        stock: parseInt(form.stock, 10) || 0,
        alert_threshold: parseInt(form.alert_threshold, 10) || 0,
        buy_price: parseFloat(form.buy_price) || 0,
        sell_price: parseFloat(form.sell_price) || 0,
        notes: form.notes || '',
        barcode: form.barcode || null
      };
      await onUpdate(form.id, payload);
      onClose();
    } catch (e) {
      alert(e.message || 'Erreur');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-card p-4 border rounded",
    role: "dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Modifier le produit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Nom", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "name",
    value: form.name,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Cat\xE9gorie", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "category",
    value: form.category,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Stock", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "stock",
    value: form.stock,
    onChange: handleChange,
    type: "number"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Seuil d'alerte", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "alert_threshold",
    value: form.alert_threshold,
    onChange: handleChange,
    type: "number"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Prix d'achat", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "buy_price",
    value: form.buy_price,
    onChange: handleChange,
    type: "number",
    step: "0.01"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Prix de vente", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "sell_price",
    value: form.sell_price,
    onChange: handleChange,
    type: "number",
    step: "0.01"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Notes", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    name: "notes",
    value: form.notes,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Code-barres", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "barcode",
    value: form.barcode,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: submit
  }, "Sauvegarder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onClose
  }, "Annuler")));
}

/***/ })

};
;