"use strict";
(() => {
var exports = {};
exports.id = 375;
exports.ids = [375];
exports.modules = {

/***/ 199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// This is a server-side API handler skeleton where you would use the Supabase service role key
// to perform sensitive operations like recalculating stock value or bulk imports.
// WARNING: Do NOT expose SUPABASE_SERVICE_ROLE_KEY to the browser. This file is for server-side use only.
async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({
    error: 'Method not allowed'
  }); // Example: verify a simple secret header (in production use stronger auth)

  const secret = req.headers['x-internal-secret'];

  if (!secret || secret !== process.env.SERVICE_INTERNAL_SECRET) {
    return res.status(401).json({
      error: 'Unauthorized'
    });
  } // Placeholder: perform sensitive operations here using service role key
  // e.g., initialize supabase client with service role key (server only)
  // const supabaseServer = createServerSupabaseClient({ supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL, supabaseKey: process.env.SUPABASE_SERVICE_ROLE_KEY })
  // ... do work


  res.status(200).json({
    ok: true,
    message: 'Recompute started (placeholder)'
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(199));
module.exports = __webpack_exports__;

})();