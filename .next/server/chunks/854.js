"use strict";
exports.id = 854;
exports.ids = [854];
exports.modules = {

/***/ 4854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "yo": () => (/* reexport */ components_HeroBanner),
  "Ar": () => (/* reexport */ components_Layout),
  "xs": () => (/* reexport */ components_Product)
});

// UNUSED EXPORTS: Footer, Navbar

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Footer.jsx



const Footer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "blue",
                children: "Контакты"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "contact-details-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "https://vk.com/ikrasamaratlt",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "my-link",
                            children: "vk"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "https://invite.viber.com/?g2=AQB10hNhiBtXEVArsiy9flFRZi7muGNnxV7WCGU94vGlAo4MwwK%2FKY5CeEhgdnfX&lang=en",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "my-link",
                            children: "Viber"
                        })
                    })
                ]
            }),
            "+7 (927) 216-12-81"
        ]
    }));
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Navbar.jsx



// import { Cart } from './';
// import { useStateContext } from '../context/StateContext';
const Navbar = ()=>{
    // const { showCart } = useStateContext();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "navbar-container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "logo",
                children: "+7 (927) 216-12-81"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "my-link",
                    children: "Главная"
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Layout.jsx





const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "samarafish"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "main-container",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
            })
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: ./lib/client.js
var client = __webpack_require__(786);
;// CONCATENATED MODULE: ./components/Product.jsx




const Product = ({ product: { image , name , slug , price  }  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: `/product/${slug.current}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "product-card",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: (0,client/* urlFor */.u)(image && image[0]),
                        width: 250,
                        height: 250,
                        className: "product-image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "product-name",
                        children: name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "product-price",
                        children: [
                            price,
                            " ₽"
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_Product = (Product);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./images/caviar.png
/* harmony default export */ const caviar = ({"src":"/_next/static/media/caviar.35157fff.png","height":1080,"width":884,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAu0lEQVR42gGwAE//AJudkmxtYnl7cm1yaWVnXVRPREpBMADGvragiIKmfXejaV6Vc2iQg3h6dWcA0o+BuBsAuzgluy8buiIAoj4woYuBAL53a6ISAaw0Kp4eG5giH4MAAIxUTgCyW0yxNimrMSabJh6RKSSFHRePNy4AvIp9qBgBnx0TmhoQmB0SlhMBkGdjAMPBtLiKfZhFPZZDP55JQpJkXmJaUwCyrqGno5J7bWF3YVhyYVZUTD9mWUfafkOzC+hQlwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./images/box.png
/* harmony default export */ const box = ({"src":"/_next/static/media/box.a919265d.png","height":1080,"width":736,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAi0lEQVR42gGAAH//AKirq6erqqWtroyPjoaEhACqsLCnsbGgpqVwdXeQlqEArrCvnI+MiGZhjYKFzNPfAKmQjGcAAF0AAGwAAIxqbAChm5y2pKSCU06RcGyckY8AfHp6mJKaxbm7ubKwkJGUAIOAfl9YX5OKkpqWlnx6ewCQjYmDe3p+eHt9eHdnW1KTGT+6E7DfsgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/HeroBanner.jsx





const HeroBanner = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hero-banner-container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hero-banner-heading",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Красная икра и рыба в Самаре/Тольятти с доставкой на дом"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "Безупречное качество продукции.",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "certificate",
                        children: " Сертификат, ветеринарная справка присутствует!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "💯 100% свежесть. Регулярные прямые поставки",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "🚚 Быстрая доставка без предоплаты. По Самаре доставка бесплатная!"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hero-banner-image-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: caviar,
                        alt: "img",
                        width: 300,
                        height: 300,
                        className: 'hero-banner-image'
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: box,
                        alt: "img",
                        width: 300,
                        height: 300,
                        className: 'hero-banner-image'
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_HeroBanner = (HeroBanner);

;// CONCATENATED MODULE: ./components/index.js







/***/ }),

/***/ 786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client),
/* harmony export */   "u": () => (/* binding */ urlFor)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1097);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
    projectId: 'tnzu0hip',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: "skRFwu9RqiZiI6SEaoO5qyMSeyX0cGqyrZ6q4LpNUwrf889qpp3bMXqe1fGyK1UQSvy8qle326tJXAFymy2JZvDePzZ5hBiMIa7nJOGr3617ycvDFtNBeiLP23hjQN07h07gK4KmjKWA3v6Sl0rEgOczJpGDgWOMpQAAQOhR4JeYBSLWEQVd"
});
const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);
const urlFor = (source)=>builder.image(source)
;


/***/ })

};
;