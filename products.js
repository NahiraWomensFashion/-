/* =====================================================================
   NAHIRA FASHION  |  MASTER INVENTORY  (products.js)
   ---------------------------------------------------------------------
   PART 1 below is the ONLY part you need to edit:
     - add / edit / remove a CATEGORY  -> change the "categories" list
     - add / edit / remove a PRODUCT   -> change the "products" list
   PART 2 (further down) is shared code. Please leave it untouched.

   PHOTOS: put image files in a folder named "images" next to this file
   and write the path in the product, e.g.  images: ["images/wine-1.jpg"]
   If "images" is empty (or a file is missing) a luxury placeholder is shown.
   ===================================================================== */

window.NAHIRA = {

  /* ---------- Boutique settings ---------- */
  config: {
    whatsapp: "919116639756",            // WhatsApp number: country code + number, digits only
    phoneTel: "+919116639756",           // used for "tel:" call links
    phoneDisplay: "+91 91166 39756",     // shown on the pages
    currency: "\u20B9",                  // rupee sign
    defaultSizes: ["M", "L", "XL", "XXL", "XXXL"],
    maxQty: 10,
    coords: "24.5827947\u00B0 N, 73.6676145\u00B0 E",
    mapLink: "https://www.google.com/maps/search/?api=1&query=24.5827947,73.6676145"
  },

  /* ---------- CATEGORIES ---------- */
  categories: [
    { id: "readymade",  name: "Readymade Suits",   tagline: "Designer partywear & daily wear",
      description: "Ready-to-wear suits for festive evenings and easy everyday elegance. Reserve your size and collect it from our Udaipur boutique.",
      icon: "suit", tone: ["#b53b5a", "#4a1220"] },

    { id: "unstitched", name: "Unstitched Fabrics", tagline: "Premium lawn, silk & cotton",
      description: "Beautiful fabric lengths, ready for stitching. Pair any of them with our Custom Tailoring for a perfect fit.",
      icon: "fabric", tone: ["#a9763f", "#3b2314"], sizes: false },

    { id: "burqas",     name: "Burqas & Hijabs",    tagline: "Graceful, modern modest wear",
      description: "Soft, fluid and elegant modest wear in refined fabrics, designed to be worn all day with ease.",
      icon: "hijab", tone: ["#6f3d50", "#1d0b14"] },

    { id: "tailoring",  name: "Custom Tailoring",   tagline: "Stitched to your measurements",
      icon: "scissors", tone: ["#a03450", "#2a0c16"], href: "index.html#tailoring" }
  ],

  /* ---------- PRODUCTS (Your 5 New Suits - Prices Removed) ---------- */
  products: [
    {
      id: "purple-embroidered-cotton-suit",
      category: "readymade",
      name: "Purple Embroidered Cotton Suit Set",
      price: 0,
      badge: "New",
      fabric: "100% Pure & Soft Cotton",
      sizes: ["M", "L", "XL", "XXL", "XXXL"],
      description: "Premium cotton short kurti paired with a soft mal cotton farshi shalwar and pure mal cotton dupatta, featuring intricate traditional embroidery.",
      details: [
        "Top: Premium Cotton Short Kurti",
        "Bottom: Soft Mal Cotton Farshi Shalwar",
        "Dupatta: Pure Mal Cotton Dupatta",
        "Soft and breathable pure cotton"
      ],
      images: ["images/suit-1.jpg"]
    },
    {
      id: "teal-printed-cotton-salwar-suit",
      category: "readymade",
      name: "Teal Printed Cotton Salwar Suit",
      price: 0,
      badge: "New",
      fabric: "100% Pure & Soft Cotton",
      sizes: ["M", "L", "XL", "XXL", "XXXL"],
      description: "Elegant teal block-print style cotton kurti with a matching traditional shalwar and dupatta set, designed for graceful everyday wear.",
      details: [
        "Top: Premium Cotton Short Kurti",
        "Bottom: Soft Mal Cotton Farshi Shalwar",
        "Dupatta: Pure Mal Cotton Dupatta",
        "Lightweight everyday comfort"
      ],
      images: ["images/suit-2.jpg"]
    },
    {
      id: "designer-anarkali-banarasi-suit",
      category: "readymade",
      name: "Designer Anarkali with Banarasi Dupatta",
      price: 0,
      badge: "Bestseller",
      fabric: "Premium Fancy Silk & Banarasi Silk",
      sizes: ["M", "L", "XL", "XXL"],
      description: "Exquisite designer Anarkali suit set in premium fancy silk with intricate cut-dana and beads handwork on the neckline, paired with a rich Banarasi silk dupatta.",
      details: [
        "Kurta & Pant: Premium Fancy Silk Fabric",
        "Dupatta: Rich Banarasi Silk Dupatta with Zari Border",
        "Hand work on neckline with cut-dana & beads",
        "Subtle detailing on sleeve cuffs"
      ],
      images: ["images/suit-3.jpg"]
    },
    {
      id: "yellow-chanderi-silk-anarkali",
      category: "readymade",
      name: "Yellow Chanderi Silk Anarkali Set",
      price: 0,
      badge: "New",
      fabric: "Pure Chanderi Silk",
      sizes: ["L", "XL", "XXL", "3XL"],
      description: "A stunning 3-piece Anarkali kurta with kali plazo and matching dupatta in pure chanderi silk, detailed with gorgeous festive embellishments.",
      details: [
        "Outfit Style: 3-Piece Anarkali Kurta with Kali Plazo and Dupatta",
        "Fabric: Pure Chanderi Silk",
        "Lustrous festive drape",
        "Dry clean recommended"
      ],
      images: ["images/suit-4.jpg"]
    },
    {
      id: "rich-maroon-cotton-palazzo-set",
      category: "readymade",
      name: "Rich Maroon Cotton Palazzo Set",
      price: 0,
      badge: "Bestseller",
      fabric: "Premium 100% Cotton",
      sizes: ["M", "L", "XL", "XXL", "XXXL"],
      description: "A rich maroon straight cotton kurti featuring geometric threadwork detailing on the chest and sleeves, paired with a comfortable matching straight palazzo.",
      details: [
        "Fabric: Premium 100% Cotton (Soft and breathable)",
        "Color: Rich Maroon",
        "Set Includes: Straight Cotton Kurti and matching Straight Palazzo",
        "Gentle hand wash"
      ],
      images: ["images/suit-5.jpg"]
    }
  ]
};


/* =====================================================================
   PART 2  |  SHARED CODE  (please do not edit below this line)
   ===================================================================== */
(function (N) {
  "use strict";

  var C = N.config;

  /* ----- safe text / data helpers ----- */
  N.esc = function (v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  };
  N.price = function (n) {
    return (typeof n === "number" && n > 0) ? C.currency + n.toLocaleString("en-IN") : "Price on request";
  };
  N.tone = function (arr) {
    var ok = function (c) { return typeof c === "string" && /^#[0-9a-f]{3,8}$/i.test(c); };
    return (arr && ok(arr[0]) && ok(arr[1])) ? arr : ["#7a2238", "#2c0c16"];
  };
  var low = function (v) { return String(v == null ? "" : v).trim().toLowerCase(); };

  N.cat = function (id) { return N.categories.filter(function (c) { return low(c.id) === low(id); })[0] || null; };
  N.product = function (id) { return N.products.filter(function (p) { return low(p.id) === low(id); })[0] || null; };
  N.inCat = function (id) { return N.products.filter(function (p) { return low(p.category) === low(id); }); };
  N.wa = function (text) { return "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(text); };
  N.sizesFor = function (p) {
    var c = N.cat(p.category) || {};
    if (p.sizes === false || (p.sizes === undefined && c.sizes === false)) return null;
    return p.sizes || c.sizes || C.defaultSizes;
  };

  /* ----- icons (inline SVG, inherit colour) ----- */
  var ICONS = {
    suit: '<path d="M23 6c1.5 5 5 8 9 8s7.5-3 9-8l11 7-5 10-6-2 4 35H19l4-35-6 2-5-10z"/><path d="M32 14v42"/><path d="M27 7l5 9 5-9"/><circle cx="32" cy="26" r="1" fill="currentColor"/><circle cx="32" cy="34" r="1" fill="currentColor"/><circle cx="32" cy="42" r="1" fill="currentColor"/>',
    fabric: '<ellipse cx="18" cy="26" rx="7" ry="13"/><ellipse cx="18" cy="26" rx="2.5" ry="5"/><path d="M18 13h28c4 0 7 5.8 7 13s-3 13-7 13H18"/><path d="M26 19c3 2 5-2 8 0s5-2 8 0M26 26c3 2 5-2 8 0s5-2 8 0M26 33c3 2 5-2 8 0s5-2 8 0"/><path d="M22 39c5 5 12-1 20 4s9 9 9 14c-9-3-14 2-21-2s-8-9-8-16z"/>',
    hijab: '<path d="M32 5c-9 0-14 7-14 16 0 6 2 9 2 13L11 58h42l-9-24c0-4 2-7 2-13 0-9-5-16-14-16z"/><ellipse cx="32" cy="22" rx="6.5" ry="8.5"/><path d="M32 34v24M22 40c3 2 6 3 10 3s7-1 10-3"/>',
    scissors: '<circle cx="19" cy="40" r="5.5"/><circle cx="45" cy="40" r="5.5"/><path d="M22 35L44 6M42 35L20 6"/><circle cx="32" cy="22.5" r="1.4" fill="currentColor"/><rect x="5" y="52" width="54" height="8" rx="1.5"/><path d="M12 52v4M19 52v3M26 52v4M33 52v3M40 52v4M47 52v3M54 52v4"/>',
    gem: '<path d="M32 6l7 16 17 2-13 11 4 17-15-9-15 9 4-17L8 24l17-2z"/>'
  };
  N.icon = function (name) {
    return '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.gem) + "</svg>";
  };

  /* ----- product picture: placeholder always sits underneath, so a missing photo falls back gracefully ----- */
  N.media = function (p, cls, imgIndex) {
    var c = N.cat(p.category) || {};
    var t = N.tone(p.tone || c.tone);
    var src = (p.images && p.images[imgIndex || 0]) || "";
    return '<div class="media ' + (cls || "") + '" style="--c1:' + t[0] + ";--c2:" + t[1] + '">' +
      '<div class="ph" aria-hidden="true"><span>' + N.icon(c.icon) + "</span></div>" +
      (src ? '<img src="' + N.esc(src) + '" alt="' + N.esc(p.name) + '" loading="lazy" decoding="async">' : "") +
      "</div>";
  };
  document.addEventListener("error", function (e) {      /* broken image -> remove it, placeholder shows */
    var t = e.target;
    if (t && t.tagName === "IMG" && t.closest && t.closest(".media")) t.remove();
  }, true);

  /* ----- product card (used by category + related lists) ----- */
  N.card = function (p, i) {
    var c = N.cat(p.category) || {};
    var sold = p.inStock === false;
    return '<a class="pc sw" href="product.html?id=' + encodeURIComponent(p.id) + '" style="animation-delay:' + Math.min(i || 0, 8) * 70 + 'ms" aria-label="' + N.esc(p.name + ", " + N.price(p.price) + ". View details") + '">' +
      '<div class="mwrap">' + N.media(p) + ((sold || p.badge) ? '<span class="badge">' + N.esc(sold ? "Sold out" : p.badge) + "</span>" : "") + "</div>" +
      '<div class="pi"><p class="pcat">' + N.esc(c.name || "") + "</p><h3>" + N.esc(p.name) + "</h3>" +
      '<p class="pp">' + N.esc(N.price(p.price)) + (p.mrp > p.price ? " <s>" + N.esc(N.price(p.mrp)) + "</s>" : "") + "</p>" +
      '<span class="vd">View Details</span></div></a>';
  };

  /* ----- shared page behaviour: menu, WhatsApp button, year ----- */
  N.initShell = function () {
    var burger = document.getElementById("burger"), links = document.getElementById("links");
    function setMenu(o) {
      if (!links || !burger) return;
      links.classList.toggle("open", o);
      burger.setAttribute("aria-expanded", String(o));
      burger.setAttribute("aria-label", o ? "Close menu" : "Open menu");
    }
    if (burger) burger.addEventListener("click", function () { setMenu(!links.classList.contains("open")); });
    document.addEventListener("pointerdown", function (e) {
      if (links && links.classList.contains("open") && !links.contains(e.target) && !burger.contains(e.target)) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links && links.classList.contains("open")) { setMenu(false); burger.focus(); }
    });
    var fab = document.getElementById("fab");
    if (fab) fab.href = N.wa("Hello Nahira Fashion, I would like to chat.");
    var yr = document.getElementById("yr");
    if (yr) yr.textContent = new Date().getFullYear();
  };

  /* ----- friendly warnings in the browser console if the data above has a mistake ----- */
  (function validate() {
    var seen = {};
    N.products.forEach(function (p, i) {
      var tag = 'products[' + i + '] "' + (p.id || "?") + '"';
      if (!p.id || /\s/.test(p.id)) console.warn("NAHIRA data: " + tag + " needs an id without spaces.");
      if (seen[low(p.id)]) console.warn("NAHIRA data: duplicate product id " + tag);
      seen[low(p.id)] = true;
      if (!N.cat(p.category)) console.warn("NAHIRA data: " + tag + ' uses unknown category "' + p.category + '".');
      if (!p.name) console.warn("NAHIRA data: " + tag + " has no name.");
    });
  })();

})(window.NAHIRA);
