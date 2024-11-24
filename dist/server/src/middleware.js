// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[727],{

/***/ 399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ nHandler)
});

// NAMESPACE OBJECT: ./src/temp/site-resolver-plugins.ts
var site_resolver_plugins_namespaceObject = {};
__webpack_require__.r(site_resolver_plugins_namespaceObject);
__webpack_require__.d(site_resolver_plugins_namespaceObject, {
  defaultPlugin: () => (defaultPlugin)
});

// NAMESPACE OBJECT: ./src/temp/middleware-plugins.ts
var middleware_plugins_namespaceObject = {};
__webpack_require__.r(middleware_plugins_namespaceObject);
__webpack_require__.d(middleware_plugins_namespaceObject, {
  redirectsPlugin: () => (redirectsPlugin)
});

// NAMESPACE OBJECT: ./src/middleware.ts
var src_middleware_namespaceObject = {};
__webpack_require__.r(src_middleware_namespaceObject);
__webpack_require__.d(src_middleware_namespaceObject, {
  config: () => (middleware_config),
  "default": () => (src_middleware)
});

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/web/globals.js
async function registerInstrumentation() {
    if ("_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && _ENTRIES.middleware_instrumentation.register) {
        try {
            await _ENTRIES.middleware_instrumentation.register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if (!registerInstrumentationPromise) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === "then") {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === "function") {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== __webpack_require__.g.process) {
        // prefer local process but global.process has correct "env"
        process.env = __webpack_require__.g.process.env;
        __webpack_require__.g.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, "__import_unsupported", {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    // Eagerly fire instrumentation hook to make the startup faster.
    void ensureInstrumentationRegistered();
}
enhanceGlobals(); //# sourceMappingURL=globals.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/web/error.js
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map

// EXTERNAL MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/web/utils.js
var utils = __webpack_require__(1489);
;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js

const responseSymbol = Symbol("response");
const passThroughSymbol = Symbol("passThrough");
const waitUntilSymbol = Symbol("waitUntil");
class FetchEvent {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){
        this[waitUntilSymbol] = [];
        this[passThroughSymbol] = false;
    }
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        super(params.request);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
} //# sourceMappingURL=fetch-event.js.map

// EXTERNAL MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/web/next-url.js + 12 modules
var next_url = __webpack_require__(6294);
// EXTERNAL MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/web/spec-extension/cookies.js
var spec_extension_cookies = __webpack_require__(7292);
;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/web/spec-extension/request.js




const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0,utils/* validateURL */.r4)(url);
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new next_url/* NextURL */.c(url, {
            headers: (0,utils/* toNodeOutgoingHttpHeaders */.lb)(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new spec_extension_cookies/* RequestCookies */.q(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url:  false ? 0 : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map

// EXTERNAL MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/web/spec-extension/response.js
var spec_extension_response = __webpack_require__(3914);
;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js
/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ function relativizeURL(url, base) {
    const baseURL = typeof base === "string" ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = baseURL.protocol + "//" + baseURL.host;
    return relative.protocol + "//" + relative.host === origin ? relative.toString().replace(origin, "") : relative.toString();
} //# sourceMappingURL=relativize-url.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/client/components/app-router-headers.js
const RSC = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = RSC + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH + ", " + NEXT_URL;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc"; //# sourceMappingURL=app-router-headers.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/internal-utils.js

const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextInferredLocaleFromDefault",
    "__nextDefaultLocale",
    "__nextIsNotFound",
    NEXT_RSC_UNION_QUERY
];
const EDGE_EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(url, isEdge) {
    const isStringUrl = typeof url === "string";
    const instance = isStringUrl ? new URL(url) : url;
    for (const name of INTERNAL_QUERY_NAMES){
        instance.searchParams.delete(name);
    }
    if (isEdge) {
        for (const name of EDGE_EXTENDED_INTERNAL_QUERY_NAMES){
            instance.searchParams.delete(name);
        }
    }
    return isStringUrl ? instance.toString() : instance;
}
/**
 * Headers that are set by the Next.js server and should be stripped from the
 * request headers going to the user's application.
 */ const INTERNAL_HEADERS = (/* unused pure expression or super */ null && ([
    "x-invoke-path",
    "x-invoke-status",
    "x-invoke-error",
    "x-invoke-query",
    "x-invoke-output",
    "x-middleware-invoke"
]));
/**
 * Strip internal headers from the request headers.
 *
 * @param headers the headers to strip of internal headers
 */ function stripInternalHeaders(headers) {
    for (const key of INTERNAL_HEADERS){
        delete headers[key];
    }
} //# sourceMappingURL=internal-utils.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js


/**
 * Normalizes an app route so it represents the actual request path. Essentially
 * performing the following transformations:
 *
 * - `/(dashboard)/user/[id]/page` to `/user/[id]`
 * - `/(dashboard)/account/page` to `/account`
 * - `/user/[id]/page` to `/user/[id]`
 * - `/account/page` to `/account`
 * - `/page` to `/`
 * - `/(dashboard)/user/[id]/route` to `/user/[id]`
 * - `/(dashboard)/account/route` to `/account`
 * - `/user/[id]/route` to `/user/[id]`
 * - `/account/route` to `/account`
 * - `/route` to `/`
 * - `/` to `/`
 *
 * @param route the app route to normalize
 * @returns the normalized pathname
 */ function normalizeAppPath(route) {
    return ensureLeadingSlash(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (isGroupSegment(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
/**
 * Strips the `.rsc` extension if it's in the pathname.
 * Since this function is used on full urls it checks `?` for searchParams handling.
 */ function normalizeRscPath(pathname, enabled) {
    return enabled ? pathname.replace(/\.rsc($|\?)/, "$1") : pathname;
} //# sourceMappingURL=app-paths.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/lib/constants.js
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
const NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
const NEXT_CACHE_SOFT_TAGS_HEADER = "x-next-cache-soft-tags";
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
// in seconds
const CACHE_ONE_YEAR = 31536000;
// Patterns to detect middleware files
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = (/* unused pure expression or super */ null && (`(?:src/)?${MIDDLEWARE_FILENAME}`));
// Pattern to detect instrumentation hooks file
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
// Because on Windows absolute paths in the generated code can break because of numbers, eg 1 in the path,
// we have to use a private alias
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
const RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-action-proxy";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = (/* unused pure expression or super */ null && (`You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`));
const SSG_GET_INITIAL_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`));
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`));
const SERVER_PROPS_SSG_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`));
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = (/* unused pure expression or super */ null && (`can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`));
const SERVER_PROPS_EXPORT_ERROR = (/* unused pure expression or super */ null && (`pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`));
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = (/* unused pure expression or super */ null && ("The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead."));
const GSSP_COMPONENT_MEMBER_ERROR = (/* unused pure expression or super */ null && (`can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`));
const NON_STANDARD_NODE_ENV = (/* unused pure expression or super */ null && (`You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`));
const SSG_FALLBACK_EXPORT_ERROR = (/* unused pure expression or super */ null && (`Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`));
const ESLINT_DEFAULT_DIRS = (/* unused pure expression or super */ null && ([
    "app",
    "pages",
    "components",
    "lib",
    "src"
]));
const ESLINT_PROMPT_VALUES = [
    {
        title: "Strict",
        recommended: true,
        config: {
            extends: "next/core-web-vitals"
        }
    },
    {
        title: "Base",
        config: {
            extends: "next"
        }
    },
    {
        title: "Cancel",
        config: null
    }
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: "shared",
    /**
   * React Server Components layer (rsc).
   */ reactServerComponents: "rsc",
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: "ssr",
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: "action-browser",
    /**
   * The layer for the API routes.
   */ api: "api",
    /**
   * The layer for the middleware code.
   */ middleware: "middleware",
    /**
   * The layer for assets on the edge.
   */ edgeAsset: "edge-asset",
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: "app-pages-browser",
    /**
   * The server bundle layer for metadata routes.
   */ appMetadataRoute: "app-metadata-route",
    /**
   * The layer for the server bundle for App Route handlers.
   */ appRouteHandler: "app-route-handler"
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        server: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler
        ],
        nonClientServerTarget: [
            // plus middleware and pages api
            WEBPACK_LAYERS_NAMES.middleware,
            WEBPACK_LAYERS_NAMES.api
        ],
        app: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: "__next_edge_ssr_entry__",
    metadata: "__next_metadata__",
    metadataRoute: "__next_metadata_route__",
    metadataImageMeta: "__next_metadata_image_meta__"
};
 //# sourceMappingURL=constants.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js

/**
 * @internal
 */ class ReadonlyHeadersError extends Error {
    constructor(){
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === "symbol") {
                    return ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === "undefined") return;
                // If the original casing exists, return the value.
                return ReflectAdapter.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === "symbol") {
                    return ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return ReflectAdapter.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === "symbol") return ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === "undefined") return false;
                // If the original casing exists, return true.
                return ReflectAdapter.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === "symbol") return ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === "undefined") return true;
                // If the original casing exists, delete the property.
                return ReflectAdapter.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case "append":
                    case "delete":
                    case "set":
                        return ReadonlyHeadersError.callable;
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== "undefined";
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js


/**
 * @internal
 */ class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case "clear":
                    case "delete":
                    case "set":
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookes = new spec_extension_cookies/* ResponseCookies */.n(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookes.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            var _fetch___nextGetStaticStore;
            // TODO-APP: change method of getting staticGenerationAsyncStore
            const staticGenerationAsyncStore = fetch.__nextGetStaticStore == null ? void 0 : (_fetch___nextGetStaticStore = fetch.__nextGetStaticStore.call(fetch)) == null ? void 0 : _fetch___nextGetStaticStore.getStore();
            if (staticGenerationAsyncStore) {
                staticGenerationAsyncStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookes.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new spec_extension_cookies/* ResponseCookies */.n(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        return new Proxy(responseCookes, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case "delete":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case "set":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                return target.set(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
} //# sourceMappingURL=request-cookies.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/api-utils/index.js


/**
 *
 * @param res response object
 * @param statusCode `HTTP` status code of response
 */ function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
/**
 *
 * @param res response object
 * @param [statusOrUrl] `HTTP` status code of redirect
 * @param url URL of redirect
 */ function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = HeadersAdapter.from(req.headers);
    const previewModeId = headers.get(PRERENDER_REVALIDATE_HEADER);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = (/* unused pure expression or super */ null && (4 * 1024 * 1024));
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __webpack_require__(3006);
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
/**
 * Custom error class
 */ class ApiError extends (/* unused pure expression or super */ null && (Error)) {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
/**
 * Sends error in `response`
 * @param res response object
 * @param statusCode of response
 * @param message of response
 */ function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
/**
 * Execute getter function only if its needed
 * @param LazyProps `req` and `params` for lazyProp
 * @param prop name of property
 * @param getter function to get data
 */ function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js

class DraftModeProvider {
    constructor(previewProps, req, cookies, mutableCookies){
        var _cookies_get;
        // The logic for draftMode() is very similar to tryGetPreviewData()
        // but Draft Mode does not have any data associated with it.
        const isOnDemandRevalidate = previewProps && checkIsOnDemandRevalidate(req, previewProps).isOnDemandRevalidate;
        const cookieValue = (_cookies_get = cookies.get(COOKIE_NAME_PRERENDER_BYPASS)) == null ? void 0 : _cookies_get.value;
        this.isEnabled = Boolean(!isOnDemandRevalidate && cookieValue && previewProps && cookieValue === previewProps.previewModeId);
        this._previewModeId = previewProps == null ? void 0 : previewProps.previewModeId;
        this._mutableCookies = mutableCookies;
    }
    enable() {
        if (!this._previewModeId) {
            throw new Error("Invariant: previewProps missing previewModeId this should never happen");
        }
        this._mutableCookies.set({
            name: COOKIE_NAME_PRERENDER_BYPASS,
            value: this._previewModeId,
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/"
        });
    }
    disable() {
        // To delete a cookie, set `expires` to a date in the past:
        // https://tools.ietf.org/html/rfc6265#section-4.1.1
        // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
        this._mutableCookies.set({
            name: COOKIE_NAME_PRERENDER_BYPASS,
            value: "",
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            expires: new Date(0)
        });
    }
} //# sourceMappingURL=draft-mode-provider.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/async-storage/request-async-storage-wrapper.js





function getHeaders(headers) {
    const cleaned = HeadersAdapter.from(headers);
    for (const param of FLIGHT_PARAMETERS){
        cleaned.delete(param.toString().toLowerCase());
    }
    return HeadersAdapter.seal(cleaned);
}
function getCookies(headers) {
    const cookies = new spec_extension_cookies/* RequestCookies */.q(HeadersAdapter.from(headers));
    return RequestCookiesAdapter.seal(cookies);
}
function getMutableCookies(headers, onUpdateCookies) {
    const cookies = new spec_extension_cookies/* RequestCookies */.q(HeadersAdapter.from(headers));
    return MutableRequestCookiesAdapter.wrap(cookies, onUpdateCookies);
}
const RequestAsyncStorageWrapper = {
    /**
   * Wrap the callback with the given store so it can access the underlying
   * store using hooks.
   *
   * @param storage underlying storage object returned by the module
   * @param context context to seed the store
   * @param callback function to call within the scope of the context
   * @returns the result returned by the callback
   */ wrap (storage, { req, res, renderOpts }, callback) {
        let previewProps = undefined;
        if (renderOpts && "previewProps" in renderOpts) {
            // TODO: investigate why previewProps isn't on RenderOpts
            previewProps = renderOpts.previewProps;
        }
        function defaultOnUpdateCookies(cookies) {
            if (res) {
                res.setHeader("Set-Cookie", cookies);
            }
        }
        const cache = {};
        const store = {
            get headers () {
                if (!cache.headers) {
                    // Seal the headers object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.headers = getHeaders(req.headers);
                }
                return cache.headers;
            },
            get cookies () {
                if (!cache.cookies) {
                    // Seal the cookies object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.cookies = getCookies(req.headers);
                }
                return cache.cookies;
            },
            get mutableCookies () {
                if (!cache.mutableCookies) {
                    cache.mutableCookies = getMutableCookies(req.headers, (renderOpts == null ? void 0 : renderOpts.onUpdateCookies) || (res ? defaultOnUpdateCookies : undefined));
                }
                return cache.mutableCookies;
            },
            get draftMode () {
                if (!cache.draftMode) {
                    cache.draftMode = new DraftModeProvider(previewProps, req, this.cookies, this.mutableCookies);
                }
                return cache.draftMode;
            }
        };
        return storage.run(store, callback, store);
    }
}; //# sourceMappingURL=request-async-storage-wrapper.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/client/components/async-local-storage.js
const sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
}
const maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
} //# sourceMappingURL=async-local-storage.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/client/components/request-async-storage.external.js

const requestAsyncStorage = createAsyncLocalStorage(); //# sourceMappingURL=request-async-storage.external.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/web/adapter.js















class NextRequestHint extends NextRequest {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
}
const adapter_FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
async function adapter(params) {
    await ensureInstrumentationRegistered();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== "undefined";
    const prerenderManifest = typeof self.__PRERENDER_MANIFEST === "string" ? JSON.parse(self.__PRERENDER_MANIFEST) : undefined;
    params.request.url = normalizeRscPath(params.request.url, true);
    const requestUrl = new next_url/* NextURL */.c(params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.
    // Instead we use the keys before iteration.
    const keys = [
        ...requestUrl.searchParams.keys()
    ];
    for (const key of keys){
        const value = requestUrl.searchParams.getAll(key);
        if (key !== NEXT_QUERY_PARAM_PREFIX && key.startsWith(NEXT_QUERY_PARAM_PREFIX)) {
            const normalizedKey = key.substring(NEXT_QUERY_PARAM_PREFIX.length);
            requestUrl.searchParams.delete(normalizedKey);
            for (const val of value){
                requestUrl.searchParams.append(normalizedKey, val);
            }
            requestUrl.searchParams.delete(key);
        }
    }
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = "";
    const isDataReq = params.request.headers["x-nextjs-data"];
    if (isDataReq && requestUrl.pathname === "/index") {
        requestUrl.pathname = "/";
    }
    const requestHeaders = (0,utils/* fromNodeOutgoingHttpHeaders */.EK)(params.request.headers);
    const flightHeaders = new Map();
    // Parameters should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const param of adapter_FLIGHT_PARAMETERS){
            const key = param.toString().toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, requestHeaders.get(key));
                requestHeaders.delete(key);
            }
        }
    }
    const normalizeUrl =  false ? 0 : requestUrl;
    const request = new NextRequestHint({
        page: params.page,
        // Strip internal query parameters off the request.
        input: stripInternalSearchParams(normalizeUrl, true).toString(),
        init: {
            body: params.request.body,
            geo: params.request.geo,
            headers: requestHeaders,
            ip: params.request.ip,
            method: params.request.method,
            nextConfig: params.request.nextConfig,
            signal: params.request.signal
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isDataReq) {
        Object.defineProperty(request, "__isData", {
            enumerable: false,
            value: true
        });
    }
    if (!globalThis.__incrementalCache && params.IncrementalCache) {
        globalThis.__incrementalCache = new params.IncrementalCache({
            appDir: true,
            fetchCache: true,
            minimalMode: "production" !== "development",
            fetchCacheKeyPrefix: undefined,
            dev: "production" === "development",
            requestHeaders: params.request.headers,
            requestProtocol: "https",
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: {
                        previewModeId: "development-id"
                    }
                };
            }
        });
    }
    const event = new NextFetchEvent({
        request,
        page: params.page
    });
    let response;
    let cookiesFromResponse;
    // we only care to make async storage available for middleware
    const isMiddleware = params.page === "/middleware" || params.page === "/src/middleware";
    if (isMiddleware) {
        response = await RequestAsyncStorageWrapper.wrap(requestAsyncStorage, {
            req: request,
            renderOpts: {
                onUpdateCookies: (cookies)=>{
                    cookiesFromResponse = cookies;
                },
                // @ts-expect-error: TODO: investigate why previewProps isn't on RenderOpts
                previewProps: (prerenderManifest == null ? void 0 : prerenderManifest.preview) || {
                    previewModeId: "development-id",
                    previewModeEncryptionKey: "",
                    previewModeSigningKey: ""
                }
            }
        }, ()=>params.handler(request, event));
    } else {
        response = await params.handler(request, event);
    }
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError("Expected an instance of Response to be returned");
    }
    if (response && cookiesFromResponse) {
        response.headers.set("set-cookie", cookiesFromResponse);
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get("x-middleware-rewrite");
    if (response && rewrite) {
        const rewriteUrl = new next_url/* NextURL */.c(rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (true) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set("x-middleware-rewrite", String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = relativizeURL(String(rewriteUrl), String(requestUrl));
        if (isDataReq && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(undefined && 0)) {
            response.headers.set("x-nextjs-rewrite", relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get("Location");
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new next_url/* NextURL */.c(redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (true) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set("Location", String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isDataReq) {
            response.headers.delete("Location");
            response.headers.set("x-nextjs-redirect", relativizeURL(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : spec_extension_response/* NextResponse */.x.next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get("x-middleware-override-headers");
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set("x-middleware-override-headers", middlewareOverrideHeaders + "," + overwrittenHeaders.join(","));
        }
    }
    return {
        response: finalResponse,
        waitUntil: Promise.all(event[waitUntilSymbol]),
        fetchMetrics: request.fetchMetrics
    };
} //# sourceMappingURL=adapter.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/web/exports/next-response.js
// This file is for modularized imports for next/server to get fully-treeshaking.
 //# sourceMappingURL=next-response.js.map

// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss-nextjs/dist/cjs/middleware/index.js
var middleware = __webpack_require__(1783);
// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss-nextjs/dist/cjs/site/index.js
var site = __webpack_require__(889);
// EXTERNAL MODULE: ./src/temp/config.js
var config = __webpack_require__(4271);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// CONCATENATED MODULE: ./src/lib/site-resolver/plugins/default.ts

class DefaultPlugin {
    exec(sites) {
        // Add default/configured site
        sites.unshift({
            name: (config_default()).sitecoreSiteName,
            language: (config_default()).defaultLanguage,
            hostName: "*"
        });
        return sites;
    }
}
const defaultPlugin = new DefaultPlugin();

;// CONCATENATED MODULE: ./src/temp/site-resolver-plugins.ts


;// CONCATENATED MODULE: ./src/lib/site-resolver/index.ts


const sites = Object.values(site_resolver_plugins_namespaceObject).reduce((sites, plugin)=>plugin.exec(sites), []);
const siteResolver = new site/* SiteResolver */.J(sites);

// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss-nextjs/dist/cjs/graphql/index.js
var graphql = __webpack_require__(422);
;// CONCATENATED MODULE: ./src/lib/graphql-client-factory/create.ts

/**
 * Creates a new GraphQLRequestClientFactory instance
 * @param config jss config
 * @returns GraphQLRequestClientFactory instance
 */ const createGraphQLClientFactory = (config)=>{
    let clientConfig;
    if (config.graphQLEndpoint && config.sitecoreApiKey) {
        clientConfig = {
            endpoint: config.graphQLEndpoint,
            apiKey: config.sitecoreApiKey
        };
    } else {
        throw new Error("Please configure your graphQLEndpoint and sitecoreApiKey.");
    }
    return graphql/* GraphQLRequestClient */.$m.createClientFactory(clientConfig);
};

;// CONCATENATED MODULE: ./src/lib/graphql-client-factory/index.ts


// The GraphQLRequestClientFactory serves as the central hub for executing GraphQL requests within the application
// Create a new instance on each import call
/* harmony default export */ const graphql_client_factory = (createGraphQLClientFactory((config_default())));

;// CONCATENATED MODULE: ./src/lib/middleware/plugins/redirects.ts



class RedirectsPlugin {
    constructor(){
        this.order = 0;
        this.redirectsMiddleware = new middleware/* RedirectsMiddleware */.ME({
            // Client factory implementation
            clientFactory: graphql_client_factory,
            // These are all the locales you support in your application.
            // These should match those in your next.config.js (i18n.locales).
            locales: [
                "en"
            ],
            // This function determines if a route should be excluded from RedirectsMiddleware.
            // Certain paths are ignored by default (e.g. Next.js API routes), but you may wish to exclude more.
            // This is an important performance consideration since Next.js Edge middleware runs on every request.
            excludeRoute: ()=>false,
            // This function determines if the middleware should be turned off.
            // By default it is disabled while in development mode.
            disabled: ()=>"production" === "development",
            // Site resolver implementation
            siteResolver: siteResolver
        });
    }
    /**
   * exec async method - to find coincidence in url.pathname and redirects of site
   * @param req<NextRequest>
   * @returns Promise<NextResponse>
   */ async exec(req, res) {
        return this.redirectsMiddleware.getHandler()(req, res);
    }
}
const redirectsPlugin = new RedirectsPlugin();

;// CONCATENATED MODULE: ./src/temp/middleware-plugins.ts


;// CONCATENATED MODULE: ./src/lib/middleware/index.ts



async function middleware_middleware(req, ev) {
    const response = spec_extension_response/* NextResponse */.x.next();
    middleware/* debug */.fF.common("next middleware start");
    const start = Date.now();
    const finalRes = await Object.values(middleware_plugins_namespaceObject).sort((p1, p2)=>p1.order - p2.order).reduce((p, plugin)=>p.then((res)=>plugin.exec(req, res, ev)), Promise.resolve(response));
    middleware/* debug */.fF.common("next middleware end in %dms", Date.now() - start);
    return finalRes;
}

;// CONCATENATED MODULE: ./src/middleware.ts

// eslint-disable-next-line
/* harmony default export */ async function src_middleware(req, ev) {
    return middleware_middleware(req, ev);
}
const middleware_config = {
    /*
   * Match all paths except for:
   * 1. /api routes
   * 2. /_next (Next.js internals)
   * 3. /sitecore/api (Sitecore API routes)
   * 4. /- (Sitecore media)
   * 5. /healthz (Health check)
   * 6. all root files inside /public
   */ matcher: [
        "/",
        "/((?!api/|_next/|healthz|sitecore/api/|-/|favicon.ico|sc_logo.svg).*)"
    ]
};

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=private-next-root-dir%2Fsrc%2Fmiddleware.ts&page=%2Fsrc%2Fmiddleware&rootDir=C%3A%5Ccf%5CSUGLATAM_Headless%5CnextjsOshyn&matchers=W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg%2FOlxcLygoPyFfbmV4dFxcLylbXi8uXXsxLH0pKSh8XFwuanNvbnxcXC8%2FaW5kZXh8XFwvP2luZGV4XFwuanNvbik%2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii8ifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT8oPzpcXC8oKD8hX25leHRcXC8pW14vLl17MSx9KSkoPzpcXC8oKD8hYXBpXFwvfF9uZXh0XFwvfGhlYWx0aHp8c2l0ZWNvcmVcXC9hcGlcXC98LVxcL3xmYXZpY29uLmljb3xzY19sb2dvLnN2ZykuKikpKC5qc29uKT9bXFwvI1xcP10%2FJCIsIm9yaWdpbmFsU291cmNlIjoiLygoPyFhcGkvfF9uZXh0L3xoZWFsdGh6fHNpdGVjb3JlL2FwaS98LS98ZmF2aWNvbi5pY298c2NfbG9nby5zdmcpLiopIn1d&preferredRegion=&middlewareConfig=eyJtYXRjaGVycyI6W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg%2FOlxcLygoPyFfbmV4dFxcLylbXi8uXXsxLH0pKSh8XFwuanNvbnxcXC8%2FaW5kZXh8XFwvP2luZGV4XFwuanNvbik%2FW1xcLyNcXD9dPyQiLCJvcmlnaW5hbFNvdXJjZSI6Ii8ifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT8oPzpcXC8oKD8hX25leHRcXC8pW14vLl17MSx9KSkoPzpcXC8oKD8hYXBpXFwvfF9uZXh0XFwvfGhlYWx0aHp8c2l0ZWNvcmVcXC9hcGlcXC98LVxcL3xmYXZpY29uLmljb3xzY19sb2dvLnN2ZykuKikpKC5qc29uKT9bXFwvI1xcP10%2FJCIsIm9yaWdpbmFsU291cmNlIjoiLygoPyFhcGkvfF9uZXh0L3xoZWFsdGh6fHNpdGVjb3JlL2FwaS98LS98ZmF2aWNvbi5pY298c2NfbG9nby5zdmcpLiopIn1dfQ%3D%3D!


// Import the userland code.

const mod = {
    ...src_middleware_namespaceObject
};
const handler = mod.middleware || mod.default;
const page = "/src/middleware";
if (typeof handler !== "function") {
    throw new Error(`The Middleware "${page}" must export a \`middleware\` or a \`default\` function`);
}
function nHandler(opts) {
    return adapter({
        ...opts,
        page,
        handler
    });
}

//# sourceMappingURL=middleware.js.map

/***/ }),

/***/ 1817:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    return `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0].path,
            args[0].domain
        ];
        return this.set({
            name,
            path,
            domain,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ 3006:
/***/ ((module) => {

"use strict";
var __dirname = "/";

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();


/***/ }),

/***/ 6294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ NextURL)
});

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":")[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js

/**
 * Adds the provided prefix to the given path. It first ensures that the path
 * is indeed starting with a slash.
 */ function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js

/**
 * Similarly to `addPathPrefix`, this function adds a suffix at the end on the
 * provided path. It also works only for paths ensuring the argument starts
 * with a slash.
 */ function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js

/**
 * Checks if a given path starts with a given prefix. It ensures it matches
 * exactly without containing extra chars. e.g. prefix /docs should replace
 * for /docs, /docs/, /docs/a but not /docsss
 * @param path The path to check.
 * @param prefix The prefix to check against.
 */ function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = parsePath(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js


/**
 * For a given path and a locale, if the locale is given, it will prefix the
 * locale. The path shouldn't be an API path. If a default locale is given the
 * prefix will be omitted if the locale is already the default locale.
 */ function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if (pathHasPrefix(lower, "/api")) return path;
        if (pathHasPrefix(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return addPathPrefix(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js




function formatNextPathnameInfo(info) {
    let pathname = addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = removeTrailingSlash(pathname);
    }
    if (info.buildId) {
        pathname = addPathSuffix(addPathPrefix(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = addPathPrefix(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? addPathSuffix(pathname, "/") : pathname : removeTrailingSlash(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/shared/lib/get-hostname.js
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":")[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js
/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js

/**
 * Given a path and a prefix it will remove the prefix when it exists in the
 * given path. It ensures it matches exactly without containing extra chars
 * and if the prefix is not there it will be noop.
 *
 * @param path The path to remove the prefix from.
 * @param prefix The prefix to be removed.
 */ function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!pathHasPrefix(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js



function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && pathHasPrefix(info.pathname, basePath)) {
        info.pathname = removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : normalizeLocalePath(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map

;// CONCATENATED MODULE: ../../../Users/pc/AppData/Roaming/nvm/v20.10.0/node_modules/next/dist/esm/server/web/next-url.js




const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = getNextPathnameInfo(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = getHostname(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : detectDomainLocale((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return formatNextPathnameInfo({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map


/***/ }),

/***/ 7292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* reexport safe */ next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__.ResponseCookies),
/* harmony export */   q: () => (/* reexport safe */ next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__.RequestCookies)
/* harmony export */ });
/* harmony import */ var next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1817);
/* harmony import */ var next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__);
 //# sourceMappingURL=cookies.js.map


/***/ }),

/***/ 3914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ NextResponse)
/* harmony export */ });
/* harmony import */ var _next_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6294);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1489);
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7292);



const INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[INTERNALS] = {
            cookies: new _cookies__WEBPACK_IMPORTED_MODULE_1__/* .ResponseCookies */ .n(this.headers),
            url: init.url ? new _next_url__WEBPACK_IMPORTED_MODULE_0__/* .NextURL */ .c(init.url, {
                headers: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .toNodeOutgoingHttpHeaders */ .lb)(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .validateURL */ .r4)(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .validateURL */ .r4)(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map


/***/ }),

/***/ 1489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EK: () => (/* binding */ fromNodeOutgoingHttpHeaders),
/* harmony export */   lb: () => (/* binding */ toNodeOutgoingHttpHeaders),
/* harmony export */   r4: () => (/* binding */ validateURL)
/* harmony export */ });
/* unused harmony export splitCookiesString */
/**
 * Converts a Node.js IncomingHttpHeaders object to a Headers object. Any
 * headers with multiple values will be joined with a comma and space. Any
 * headers that have an undefined value will be ignored and others will be
 * coerced to strings.
 *
 * @param nodeHeaders the headers object to convert
 * @returns the converted headers object
 */ function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.
  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.
  
  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/ function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
/**
 * Converts a Headers object to a Node.js OutgoingHttpHeaders object. This is
 * required to support the set-cookie header, which may have multiple values.
 *
 * @param headers the headers object to convert
 * @returns the converted headers object
 */ function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
/**
 * Validate the correctness of a user-provided URL.
 */ function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 8659:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SITECORE_EDGE_URL = exports.LIBRARY_VERSION = exports.DEFAULT_COOKIE_EXPIRY_DAYS = exports.DAILY_SECONDS = exports.COOKIE_NAME_PREFIX = exports.API_VERSION = exports.getBrowserIdFromRequest = exports.pageName = exports.language = exports.validateSettings = exports.initCoreServer = exports.getSettingsServer = exports.initCore = exports.getSettings = exports.createSettings = exports.getGuestId = exports.fetchBrowserIdFromEdgeProxy = exports.getBrowserId = exports.handleServerCookie = exports.handleNextJsMiddlewareCookie = exports.handleHttpCookie = exports.getDefaultCookieAttributes = exports.getBrowserIdFromMiddlewareRequest = exports.createCookie = void 0;
var create_cookie_1 = __webpack_require__(6333);
Object.defineProperty(exports, "createCookie", ({
    enumerable: true,
    get: function() {
        return create_cookie_1.createCookie;
    }
}));
var get_browser_id_from_middleware_request_1 = __webpack_require__(6526);
Object.defineProperty(exports, "getBrowserIdFromMiddlewareRequest", ({
    enumerable: true,
    get: function() {
        return get_browser_id_from_middleware_request_1.getBrowserIdFromMiddlewareRequest;
    }
}));
var get_default_cookie_attributes_1 = __webpack_require__(3504);
Object.defineProperty(exports, "getDefaultCookieAttributes", ({
    enumerable: true,
    get: function() {
        return get_default_cookie_attributes_1.getDefaultCookieAttributes;
    }
}));
var handle_http_cookie_1 = __webpack_require__(2996);
Object.defineProperty(exports, "handleHttpCookie", ({
    enumerable: true,
    get: function() {
        return handle_http_cookie_1.handleHttpCookie;
    }
}));
var handle_next_js_middleware_cookie_1 = __webpack_require__(1268);
Object.defineProperty(exports, "handleNextJsMiddlewareCookie", ({
    enumerable: true,
    get: function() {
        return handle_next_js_middleware_cookie_1.handleNextJsMiddlewareCookie;
    }
}));
var handle_server_cookie_1 = __webpack_require__(7483);
Object.defineProperty(exports, "handleServerCookie", ({
    enumerable: true,
    get: function() {
        return handle_server_cookie_1.handleServerCookie;
    }
}));
var get_browser_id_1 = __webpack_require__(6054);
Object.defineProperty(exports, "getBrowserId", ({
    enumerable: true,
    get: function() {
        return get_browser_id_1.getBrowserId;
    }
}));
var fetch_browser_id_from_edge_proxy_1 = __webpack_require__(91);
Object.defineProperty(exports, "fetchBrowserIdFromEdgeProxy", ({
    enumerable: true,
    get: function() {
        return fetch_browser_id_from_edge_proxy_1.fetchBrowserIdFromEdgeProxy;
    }
}));
var get_guest_id_1 = __webpack_require__(2960);
Object.defineProperty(exports, "getGuestId", ({
    enumerable: true,
    get: function() {
        return get_guest_id_1.getGuestId;
    }
}));
var create_settings_1 = __webpack_require__(9983);
Object.defineProperty(exports, "createSettings", ({
    enumerable: true,
    get: function() {
        return create_settings_1.createSettings;
    }
}));
var init_core_1 = __webpack_require__(6743);
Object.defineProperty(exports, "getSettings", ({
    enumerable: true,
    get: function() {
        return init_core_1.getSettings;
    }
}));
Object.defineProperty(exports, "initCore", ({
    enumerable: true,
    get: function() {
        return init_core_1.initCore;
    }
}));
var init_core_server_1 = __webpack_require__(2562);
Object.defineProperty(exports, "getSettingsServer", ({
    enumerable: true,
    get: function() {
        return init_core_server_1.getSettingsServer;
    }
}));
Object.defineProperty(exports, "initCoreServer", ({
    enumerable: true,
    get: function() {
        return init_core_server_1.initCoreServer;
    }
}));
var validate_settings_1 = __webpack_require__(5814);
Object.defineProperty(exports, "validateSettings", ({
    enumerable: true,
    get: function() {
        return validate_settings_1.validateSettings;
    }
}));
var infer_1 = __webpack_require__(1906);
Object.defineProperty(exports, "language", ({
    enumerable: true,
    get: function() {
        return infer_1.language;
    }
}));
Object.defineProperty(exports, "pageName", ({
    enumerable: true,
    get: function() {
        return infer_1.pageName;
    }
}));
var get_browser_id_from_request_1 = __webpack_require__(6540);
Object.defineProperty(exports, "getBrowserIdFromRequest", ({
    enumerable: true,
    get: function() {
        return get_browser_id_from_request_1.getBrowserIdFromRequest;
    }
}));
var consts_1 = __webpack_require__(90);
Object.defineProperty(exports, "API_VERSION", ({
    enumerable: true,
    get: function() {
        return consts_1.API_VERSION;
    }
}));
Object.defineProperty(exports, "COOKIE_NAME_PREFIX", ({
    enumerable: true,
    get: function() {
        return consts_1.COOKIE_NAME_PREFIX;
    }
}));
Object.defineProperty(exports, "DAILY_SECONDS", ({
    enumerable: true,
    get: function() {
        return consts_1.DAILY_SECONDS;
    }
}));
Object.defineProperty(exports, "DEFAULT_COOKIE_EXPIRY_DAYS", ({
    enumerable: true,
    get: function() {
        return consts_1.DEFAULT_COOKIE_EXPIRY_DAYS;
    }
}));
Object.defineProperty(exports, "LIBRARY_VERSION", ({
    enumerable: true,
    get: function() {
        return consts_1.LIBRARY_VERSION;
    }
}));
Object.defineProperty(exports, "SITECORE_EDGE_URL", ({
    enumerable: true,
    get: function() {
        return consts_1.SITECORE_EDGE_URL;
    }
}));


/***/ }),

/***/ 90:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SITECORE_EDGE_URL = exports.API_VERSION = exports.DAILY_SECONDS = exports.DEFAULT_COOKIE_EXPIRY_DAYS = exports.COOKIE_NAME_PREFIX = exports.LIBRARY_VERSION = void 0;
/* eslint-disable @typescript-eslint/naming-convention */ const package_json_1 = __importDefault(__webpack_require__(7329));
exports.LIBRARY_VERSION = package_json_1.default.version;
exports.COOKIE_NAME_PREFIX = "sc_";
exports.DEFAULT_COOKIE_EXPIRY_DAYS = 730;
exports.DAILY_SECONDS = 86400;
exports.API_VERSION = "v1.2";
exports.SITECORE_EDGE_URL = "https://edge-platform.sitecorecloud.io";


/***/ }),

/***/ 6333:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createCookie = void 0;
const utils_1 = __webpack_require__(2885);
const get_default_cookie_attributes_1 = __webpack_require__(3504);
const fetch_browser_id_from_edge_proxy_1 = __webpack_require__(91);
/**
 * Creates and adds the cookie to the document
 * @param settings - The CookieSettings settings object
 * @returns - browserId or undefined on error
 */ async function createCookie(settings) {
    if ((0, utils_1.cookieExists)(window.document.cookie, settings.cookieSettings.cookieName)) return;
    const { browserId } = await (0, fetch_browser_id_from_edge_proxy_1.fetchBrowserIdFromEdgeProxy)(settings.sitecoreEdgeUrl, settings.sitecoreEdgeContextId);
    const attributes = (0, get_default_cookie_attributes_1.getDefaultCookieAttributes)(settings.cookieSettings.cookieExpiryDays, settings.cookieSettings.cookieDomain);
    document.cookie = (0, utils_1.createCookieString)(settings.cookieSettings.cookieName, browserId, attributes);
}
exports.createCookie = createCookie;


/***/ }),

/***/ 6526:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getBrowserIdFromMiddlewareRequest = void 0;
/**
 * Retrieves the browser ID from the provided Middleware Request by extracting the cookie value
 * associated with the specified 'cookieName'. The function first checks for Next.js v12 cookie values,
 * and if not found, it checks for Next.js v13 cookie values.
 *
 * @param request - The Middleware Request object.
 * @param cookieName - The name of the cookie to retrieve.
 * @returns The browser ID extracted from the cookie, or undefined if not found.
 */ function getBrowserIdFromMiddlewareRequest(request, cookieName) {
    const cookieValueFromRequest = request.cookies.get(cookieName);
    // It checks nextjs v12 cookie values
    if (typeof cookieValueFromRequest === "string") return cookieValueFromRequest;
    // It checks nextjs v13 cookie values
    if (typeof cookieValueFromRequest === "object") return cookieValueFromRequest.value;
    return undefined;
}
exports.getBrowserIdFromMiddlewareRequest = getBrowserIdFromMiddlewareRequest;


/***/ }),

/***/ 6540:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getBrowserIdFromRequest = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const utils_1 = __webpack_require__(2885);
const get_browser_id_from_middleware_request_1 = __webpack_require__(6526);
/**
 * Retrieves the browser ID from the provided request object ('T'), using the specified 'cookieName'.
 *
 * @param request - The request object, either a Middleware Request or an HTTP Request.
 * @param cookieName - The name of the cookie to retrieve the browser ID from.
 * @returns The browser ID extracted from the cookie or an empty string if not found.
 */ function getBrowserIdFromRequest(request, cookieName) {
    let browserId = undefined;
    if ((0, utils_1.isNextJsMiddlewareRequest)(request)) {
        browserId = (0, get_browser_id_from_middleware_request_1.getBrowserIdFromMiddlewareRequest)(request, cookieName);
    } else if ((0, utils_1.isHttpRequest)(request)) {
        const cookieHeader = request.headers.cookie;
        browserId = (0, utils_1.getCookieServerSide)(cookieHeader, cookieName)?.value;
    }
    return browserId ?? "";
}
exports.getBrowserIdFromRequest = getBrowserIdFromRequest;


/***/ }),

/***/ 3504:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
/**
 * Gets the default Cookie Attributes
 * @param  maxAge - Set the cookie "Max-Age" attribute in days.
 * @returns the default configuration settings for the cookie string
 */ Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getDefaultCookieAttributes = void 0;
const consts_1 = __webpack_require__(90);
// eslint-disable-next-line max-len
function getDefaultCookieAttributes(maxAge = consts_1.DEFAULT_COOKIE_EXPIRY_DAYS, cookieDomain) {
    return {
        domain: cookieDomain,
        maxAge: maxAge * consts_1.DAILY_SECONDS,
        path: "/",
        sameSite: "None",
        secure: true
    };
}
exports.getDefaultCookieAttributes = getDefaultCookieAttributes;


/***/ }),

/***/ 2996:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handleHttpCookie = void 0;
const get_default_cookie_attributes_1 = __webpack_require__(3504);
const utils_1 = __webpack_require__(2885);
const fetch_browser_id_from_edge_proxy_1 = __webpack_require__(91);
/**
 * Handles HTTP Cookie operations for setting the browser ID cookie in the request and response.
 *
 * @param request - The HTTP Request object containing request headers and data.
 * @param response - The HTTP Response object.
 * @param options - The settings object containing configuration options.
 * @param timeout - The timeout for the call to proxy to get browserId.
 * @returns A Promise that resolves once the browser ID cookie is handled.
 *
 * @throws [IE-0003] - This exception is thrown in the case getBrowserIdFromEP wasn't able to retrieve a browser id.
 */ async function handleHttpCookie(request, response, options, timeout) {
    const { cookieName } = options.cookieSettings;
    const cookieValueFromRequest = request.headers.cookie;
    let cookie;
    let cookieValue;
    if (cookieValueFromRequest) {
        cookie = (0, utils_1.getCookieServerSide)(cookieValueFromRequest, cookieName);
        if (cookie) cookieValue = cookie.value;
    }
    if (!cookieValue) cookieValue = (await (0, fetch_browser_id_from_edge_proxy_1.fetchBrowserIdFromEdgeProxy)(options.sitecoreEdgeUrl, options.sitecoreEdgeContextId, timeout)).browserId;
    const defaultCookieAttributes = (0, get_default_cookie_attributes_1.getDefaultCookieAttributes)(options.cookieSettings.cookieExpiryDays, options.cookieSettings.cookieDomain);
    const cookieString = (0, utils_1.createCookieString)(cookieName, cookieValue, defaultCookieAttributes);
    if (!cookie) request.headers.cookie = cookieValueFromRequest ? cookieValueFromRequest + "; " + cookieString : cookieString;
    response.setHeader("Set-Cookie", cookieString);
}
exports.handleHttpCookie = handleHttpCookie;


/***/ }),

/***/ 1268:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handleNextJsMiddlewareCookie = void 0;
const get_browser_id_from_middleware_request_1 = __webpack_require__(6526);
const get_default_cookie_attributes_1 = __webpack_require__(3504);
const fetch_browser_id_from_edge_proxy_1 = __webpack_require__(91);
/**
 * Handles the Middleware Request and sets a cookie with the provided 'cookieName' and 'cookieValue'.
 * If 'cookieValue' is not present in the request, it fetches it using the 'fetchBrowserIdFromEdgeProxy' function
 * and stores it in the request's cookies with the specified 'defaultCookieAttributes'.
 *
 * @param request - The Middleware Request object.
 * @param response - The Middleware Response object.
 * @param options - The settings object containing configuration options.
 * @param defaultCookieAttributes - The default attributes for the cookie.
 *
 * @throws [IE-0003] - This exception is thrown in the case fetchBrowserIdFromEdgeProxy wasn't able to retrieve a browserId.
 *
 */ async function handleNextJsMiddlewareCookie(request, response, options, timeout) {
    const { cookieName } = options.cookieSettings;
    let cookieValue = (0, get_browser_id_from_middleware_request_1.getBrowserIdFromMiddlewareRequest)(request, cookieName);
    if (!cookieValue) cookieValue = (await (0, fetch_browser_id_from_edge_proxy_1.fetchBrowserIdFromEdgeProxy)(options.sitecoreEdgeUrl, options.sitecoreEdgeContextId, timeout)).browserId;
    const defaultCookieAttributes = (0, get_default_cookie_attributes_1.getDefaultCookieAttributes)(options.cookieSettings.cookieExpiryDays, options.cookieSettings.cookieDomain);
    request.cookies.set(cookieName, cookieValue, defaultCookieAttributes);
    response.cookies.set(cookieName, cookieValue, defaultCookieAttributes);
}
exports.handleNextJsMiddlewareCookie = handleNextJsMiddlewareCookie;


/***/ }),

/***/ 7483:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handleServerCookie = void 0;
const utils_1 = __webpack_require__(2885);
const init_core_server_1 = __webpack_require__(2562);
const handle_next_js_middleware_cookie_1 = __webpack_require__(1268);
const handle_http_cookie_1 = __webpack_require__(2996);
/**
 * Handles server-side cookie operations based on the provided 'request' and 'response' objects.
 *
 * @param request - The request object, either a Middleware Request or an HTTP Request.
 * @param response - The response object, either a Middleware Next Response or an HTTP Response.
 * @param timeout - The timeout for the call to proxy to get browserId.
 * @returns A Promise that resolves once the cookie handling is complete.
 */ async function handleServerCookie(request, response, timeout) {
    const settings = (0, init_core_server_1.getSettingsServer)();
    if ((0, utils_1.isNextJsMiddlewareRequest)(request) && (0, utils_1.isNextJsMiddlewareResponse)(response)) {
        await (0, handle_next_js_middleware_cookie_1.handleNextJsMiddlewareCookie)(request, response, settings, timeout);
    } else if ((0, utils_1.isHttpRequest)(request) && (0, utils_1.isHttpResponse)(response)) {
        await (0, handle_http_cookie_1.handleHttpCookie)(request, response, settings, timeout);
    }
}
exports.handleServerCookie = handleServerCookie;


/***/ }),

/***/ 1906:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.pageName = exports.language = void 0;
/**
 * Returns the uppercase language code of the current web page's root HTML element, using the "lang" attribute.
 * If unavailable or invalid, an undefined is returned.
 * @returns - Language attribute or undefined
 */ function language() {
    return  true ? undefined : 0;
}
exports.language = language;
/**
 * Returns the name of the current page extracted from the URL's pathname.
 * If it's the home page, it returns 'Home Page'.
 * @returns - Home Page if root or pathname
 */ function pageName() {
    if (true) return "";
    return window.location.pathname === "/" ? "Home Page" : window.location.pathname.split("/").pop();
}
exports.pageName = pageName;


/***/ }),

/***/ 8242:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.constructGetBrowserIdUrl = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const consts_1 = __webpack_require__(90);
/**
 * Constructs the URL for retrieving the proxy settings from EDGE events proxy
 * @param sitecoreEdgeUrl - The baseURL for the EDGE proxy
 * @param sitecoreEdgeContextId - The sitecoreContextId for the EDGE proxy
 * @returns The URL string for retrieving the browser ID and ClientKey
 */ function constructGetBrowserIdUrl(sitecoreEdgeUrl, sitecoreEdgeContextId) {
    return `${sitecoreEdgeUrl}/events/${consts_1.API_VERSION}/browser/create.json?sitecoreContextId=${sitecoreEdgeContextId}&client_key=`;
}
exports.constructGetBrowserIdUrl = constructGetBrowserIdUrl;


/***/ }),

/***/ 91:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fetchBrowserIdFromEdgeProxy = void 0;
const utils_1 = __webpack_require__(2885);
const consts_1 = __webpack_require__(90);
const construct_get_browser_id_url_1 = __webpack_require__(8242);
/**
 * Gets the browser ID and Client Key from Sitecore Edge Proxy
 * @param sitecoreEdgeUrl - The baseURL for the Edge Proxy API.
 * @param sitecoreEdgeContextId - The sitecoreContextId param for the edge Proxy API.
 * @param timeout - The timeout for the call to proxy
 * @returns the browser ID
 */ async function fetchBrowserIdFromEdgeProxy(sitecoreEdgeUrl, sitecoreEdgeContextId, timeout) {
    const fetchOptions = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        headers: {
            "X-Library-Version": consts_1.LIBRARY_VERSION
        }
    };
    const url = (0, construct_get_browser_id_url_1.constructGetBrowserIdUrl)(sitecoreEdgeUrl, sitecoreEdgeContextId);
    let payload;
    if (timeout !== undefined) {
        payload = await (0, utils_1.fetchWithTimeout)(url, timeout, fetchOptions);
    } else {
        payload = await fetch(url, fetchOptions).then((res)=>res.json()).then((data)=>data).catch(()=>undefined);
    }
    if (!payload?.ref) throw new Error("[IE-0003] Unable to set the cookie because the browser ID could not be retrieved from the server. Try again later, or use try-catch blocks to handle this error.");
    const { ref: browserId } = payload;
    return {
        browserId
    };
}
exports.fetchBrowserIdFromEdgeProxy = fetchBrowserIdFromEdgeProxy;


/***/ }),

/***/ 6054:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getBrowserId = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const utils_1 = __webpack_require__(2885);
const init_core_1 = __webpack_require__(6743);
/**
 * Get the browser ID from the cookie
 * @returns The browser ID if the cookie exists
 */ function getBrowserId() {
    const settings = (0, init_core_1.getSettings)();
    return (0, utils_1.getCookieValueClientSide)(settings.cookieSettings.cookieName);
}
exports.getBrowserId = getBrowserId;


/***/ }),

/***/ 2960:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getGuestId = void 0;
const consts_1 = __webpack_require__(90);
/**
 * A function that gets the guest ref from EP.
 * @param browserId - The browser id of the client
 * @param sitecoreEdgeContextId - The sitecoreEdgeContextId
 * @returns - A promise that resolves with the guest ref
 * @throws - Will throw an error if the clientKey/browser id is invalid
 */ async function getGuestId(browserId, sitecoreEdgeContextId, sitecoreEdgeUrl) {
    // eslint-disable-next-line max-len
    const url = `${sitecoreEdgeUrl}/events/${consts_1.API_VERSION}/browser/${browserId}/show.json?sitecoreContextId=${sitecoreEdgeContextId}&client_key=&api_token=`;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const response = await fetch(url, {
        headers: {
            "X-Library-Version": consts_1.LIBRARY_VERSION
        }
    });
    const data = await response.json();
    if (!response.ok) {
        const { error_msg: errorMsg, moreInfo } = data;
        throw new Error(`${errorMsg}, for more info: ${moreInfo}`);
    }
    return data.customer.ref;
}
exports.getGuestId = getGuestId;


/***/ }),

/***/ 2562:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.initCoreServer = exports.getSettingsServer = exports.setCoreSettings = void 0;
const handle_server_cookie_1 = __webpack_require__(7483);
const create_settings_1 = __webpack_require__(9983);
/**
 * Internal settings object to be used by all functions in module caching.
 * It starts with a null value and is set to the proper object by the  function. *
 * Can be retrieved only through the  function.
 */ let coreSettings = null;
function setCoreSettings(settings) {
    coreSettings = settings;
}
exports.setCoreSettings = setCoreSettings;
/**
 * Initializes the core settings for browser-based applications.
 *
 * This function initializes core settings for the application, including creating settings and handling cookies if enabled.
 *
 * @param settingsInput - The settings input to configure the core settings.
 * @returns A Promise that resolves when initialization is complete.
 */ function getSettingsServer() {
    if (!coreSettings) {
        throw Error('[IE-0008] You must first initialize the "core" package. Run the "init" function.');
    }
    return coreSettings;
}
exports.getSettingsServer = getSettingsServer;
/**
 * Initializes the core settings for browser-based applications.
 *
 * This function initializes core settings for the application, including creating settings and handling cookies if enabled.
 *
 * @param settingsInput - The settings input to configure the core settings.
 * @returns A Promise that resolves when initialization is complete.
 */ async function initCoreServer(settingsInput, request, response) {
    if (!coreSettings) coreSettings = (0, create_settings_1.createSettings)(settingsInput);
    if (settingsInput.enableServerCookie) {
        await (0, handle_server_cookie_1.handleServerCookie)(request, response, settingsInput.timeout);
    }
}
exports.initCoreServer = initCoreServer;


/***/ }),

/***/ 6743:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.setCookiePromise = exports.setCoreSettings = exports.initCore = exports.getSettings = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const create_cookie_1 = __webpack_require__(6333);
const create_settings_1 = __webpack_require__(9983);
/**
 * Internal settings object to be used by all functions in module caching.
 * It starts with a null value and is set to the proper object by the  function. *
 * Can be retrieved only through the  function.
 */ let coreSettings = null;
/**
 * Retrieves the core settings object.
 *
 * This function ensures that the core settings have been initialized and contain essential properties like `clientKey`, `cookieSettings`, and `targetURL`.
 *
 * @returns The core settings object.
 * @throws Error if the core settings haven't been initialized with the required properties.
 */ function getSettings() {
    if (!coreSettings) {
        throw Error(`[IE-0008] You must first initialize the "core" package. Run the "init" function.`);
    }
    return coreSettings;
}
exports.getSettings = getSettings;
let createCookiePromise = null;
/**
 * Initializes the core settings for browser-based applications.
 *
 * This function initializes core settings for the application, including creating settings and handling cookies if enabled.
 *
 * @param settingsInput - The settings input to configure the core settings.
 * @returns A Promise that resolves when initialization is complete.
 */ async function initCore(settingsInput) {
    if (coreSettings === null) coreSettings = (0, create_settings_1.createSettings)(settingsInput);
    if (settingsInput.enableBrowserCookie && createCookiePromise === null) createCookiePromise = (0, create_cookie_1.createCookie)(coreSettings);
    await createCookiePromise;
}
exports.initCore = initCore;
/**
 * Helper functions for tests
 */ function setCoreSettings(settings) {
    coreSettings = settings;
}
exports.setCoreSettings = setCoreSettings;
function setCookiePromise(promise) {
    createCookiePromise = promise;
}
exports.setCookiePromise = setCookiePromise;


/***/ }),

/***/ 9983:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createSettings = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const consts_1 = __webpack_require__(90);
const validate_settings_1 = __webpack_require__(5814);
/**
 * Creates the global settings object, to be used by the library
 * @param settingsInput - Global settings added by the developer.
 * @returns an Settings with the settings added by the developer
 */ function createSettings(settingsInput) {
    (0, validate_settings_1.validateSettings)(settingsInput);
    const { siteName, sitecoreEdgeContextId, cookieDomain, cookiePath, cookieExpiryDays, sitecoreEdgeUrl } = settingsInput;
    return {
        cookieSettings: {
            cookieDomain,
            cookieExpiryDays: cookieExpiryDays || consts_1.DEFAULT_COOKIE_EXPIRY_DAYS,
            cookieName: `${consts_1.COOKIE_NAME_PREFIX}${sitecoreEdgeContextId}`,
            cookiePath: cookiePath || "/"
        },
        siteName,
        sitecoreEdgeContextId,
        sitecoreEdgeUrl: sitecoreEdgeUrl ?? consts_1.SITECORE_EDGE_URL
    };
}
exports.createSettings = createSettings;


/***/ }),

/***/ 5814:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.validateSettings = void 0;
/**
 * Validates the core settings to ensure they meet required criteria.
 *
 * This function validates the provided core settings object to ensure that essential properties such as "sitecoreEdgeContextId," and "siteName" meet specific criteria and are not empty.
 *
 * @param settings - The core settings object to validate.
 * @throws Error with specific error codes if any required property is missing or empty.
 */ function validateSettings(settings) {
    const { sitecoreEdgeContextId, siteName, sitecoreEdgeUrl } = settings;
    if (!sitecoreEdgeContextId || sitecoreEdgeContextId.trim().length === 0) throw new Error(`[MV-0001] "sitecoreEdgeContextId" is required.`);
    if (!siteName || siteName.trim().length === 0) throw new Error(`[MV-0002] "siteName" is required.`);
    if (sitecoreEdgeUrl !== undefined) {
        try {
            new URL(sitecoreEdgeUrl);
        } catch (e) {
            throw new Error(`[IV-0001] Incorrect value for "sitecoreEdgeUrl" parameter. Set the value to a valid URL string.`);
        }
    }
}
exports.validateSettings = validateSettings;


/***/ }),

/***/ 59:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.LIBRARY_VERSION = void 0;
/* eslint-disable @typescript-eslint/naming-convention */ const package_json_1 = __importDefault(__webpack_require__(3720));
/**
 * Returns the version of the library.
 */ exports.LIBRARY_VERSION = package_json_1.default.version;


/***/ }),

/***/ 7001:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.initServer = exports.getServerDependencies = exports.setDependencies = void 0;
const core_1 = __webpack_require__(8659);
const callflow_edge_proxy_client_1 = __webpack_require__(8565);
let serverDependencies = null;
/**
 * Sets the personalize settings to be used by the application.
 *
 * @param settings - The personalize settings to be set, or `null` to clear the settings.
 */ function setDependencies(settings) {
    serverDependencies = settings;
}
exports.setDependencies = setDependencies;
/**
 * Retrieves the personalize server settings used by the application.
 *
 * @returns The personalize server settings.
 * @throws Error if the personalize server settings haven't been initialized.
 */ function getServerDependencies() {
    if (!serverDependencies) {
        throw Error(`[IE-0007] You must first initialize the "personalize/server" module. Run the "init" function.`);
    }
    return serverDependencies;
}
exports.getServerDependencies = getServerDependencies;
/**
 * Initiates the server Engage library using the global settings added by the developer
 * @param settings - Global settings added by the developer
 * @returns A promise that resolves with an object that handles the library functionality
 */ async function initServer(settingsInput, request, response) {
    await (0, core_1.initCoreServer)(settingsInput, request, response);
    const settings = (0, core_1.getSettingsServer)();
    const callFlowEdgeProxyClient = new callflow_edge_proxy_client_1.CallFlowEdgeProxyClient(settings);
    setDependencies({
        callFlowEdgeProxyClient,
        settings: settings
    });
}
exports.initServer = initServer;


/***/ }),

/***/ 8565:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.CallFlowEdgeProxyClient = void 0;
const utils_1 = __webpack_require__(2885);
const consts_1 = __webpack_require__(59);
class CallFlowEdgeProxyClient {
    /**
     * A helper class which handles the functionality for sending CALLFLOW requests
     * @param personalizeData - The mandatory payload to be send to Sitecore EP
     * @param settings - The global settings
     */ constructor(settings){
        this.settings = settings;
    }
    /**
     * A function that sends a CallFlow request to Sitecore EP
     * @param personalizeData - Properties to be send to Sitecore EP
     * @param timeout - Optional timeout in milliseconds to cancel the request
     * @returns - A promise that resolves with either the Sitecore EP response object or unknown
     */ async sendCallFlowsRequest(epCallFlowsBody, timeout) {
        const requestUrl = `${this.settings.sitecoreEdgeUrl}/personalize/v2/callFlows?sitecoreContextId=${this.settings.sitecoreEdgeContextId}&siteId=${this.settings.siteName}`;
        const fetchOptions = {
            body: JSON.stringify(epCallFlowsBody),
            headers: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                "Content-Type": "application/json",
                // eslint-disable-next-line @typescript-eslint/naming-convention
                "X-Library-Version": consts_1.LIBRARY_VERSION
            },
            method: "POST"
        };
        if (timeout === undefined) return fetch(requestUrl, fetchOptions).then((response)=>response.json()).then((data)=>data).catch(()=>{
            return null;
        });
        return (0, utils_1.fetchWithTimeout)(requestUrl, timeout, fetchOptions);
    }
}
exports.CallFlowEdgeProxyClient = CallFlowEdgeProxyClient;


/***/ }),

/***/ 8772:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.personalizeServer = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const core_1 = __webpack_require__(8659);
const initializer_1 = __webpack_require__(7001);
const personalizer_1 = __webpack_require__(8903);
/**
 * A function that executes an interactive experiment or web experiment over any web-based or mobile application.
 * @param personalizeData - The required/optional attributes in order to create a flow execution
 * @param request - Interface with constraint for extending request
 * @param timeout - Optional timeout in milliseconds.
 * Used to abort the request to execute an interactive experiment or web experiment.
 * @returns A flow execution response
 */ function personalizeServer(personalizeData, request, timeout) {
    const { callFlowEdgeProxyClient, settings } = (0, initializer_1.getServerDependencies)();
    const id = (0, core_1.getBrowserIdFromRequest)(request, settings.cookieSettings.cookieName);
    return new personalizer_1.Personalizer(callFlowEdgeProxyClient, id).getInteractiveExperienceData(personalizeData, timeout);
}
exports.personalizeServer = personalizeServer;


/***/ }),

/***/ 8903:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Personalizer = void 0;
const core_1 = __webpack_require__(8659);
const utils_1 = __webpack_require__(2885);
class Personalizer {
    /**
     * The Personalizer Class runs a flow of interactive experiments.
     * @param personalizeClient - The data to be send to Sitecore EP
     * @param infer - The source of methods to estimate language and page parameters
     */ constructor(personalizeClient, id){
        this.personalizeClient = personalizeClient;
        this.id = id;
    }
    /**
     * A function to make a request to the Sitecore EP /callFlows API endpoint
     * @param timeout - Optional timeout in milliseconds to cancel the request
     * @returns - A promise that resolves with either the Sitecore EP response object or null
     */ async getInteractiveExperienceData(personalizeInput, timeout) {
        this.validate(personalizeInput);
        const sanitizedInput = this.sanitizeInput(personalizeInput);
        const mappedData = this.mapPersonalizeInputToEPData(sanitizedInput);
        if (!mappedData.email && !mappedData.identifiers) mappedData.browserId = this.id;
        const response = await this.personalizeClient.sendCallFlowsRequest(mappedData, timeout);
        return response;
    }
    /**
     * A function that sanitizes the personalize input data
     * @returns - The sanitized object
     */ sanitizeInput(personalizerInput) {
        const sanitizedInput = {
            channel: personalizerInput.channel,
            currency: personalizerInput.currency,
            friendlyId: personalizerInput.friendlyId,
            language: personalizerInput.language
        };
        if (personalizerInput.identifier && personalizerInput.identifier.id && personalizerInput.identifier.id.trim().length > 0) sanitizedInput.identifier = personalizerInput.identifier;
        if (personalizerInput.email && personalizerInput.email.trim().length > 0) sanitizedInput.email = personalizerInput.email;
        if (personalizerInput.params && Object.keys(personalizerInput.params).length > 0) sanitizedInput.params = (0, utils_1.flattenObject)({
            object: personalizerInput.params
        });
        return sanitizedInput;
    }
    /**
     * A function that maps the personalize input data with the EP
     * @returns - The EP object
     */ mapPersonalizeInputToEPData(input) {
        const mappedData = {
            channel: input.channel,
            clientKey: "",
            currencyCode: input.currency,
            email: input.email,
            friendlyId: input.friendlyId,
            identifiers: input.identifier,
            language: input.language ?? (0, core_1.language)(),
            params: input.params,
            pointOfSale: ""
        };
        return mappedData;
    }
    /**
     * A validation method to throw error for the mandatory property for runtime users
     */ validate({ friendlyId }) {
        if (!friendlyId || friendlyId.trim().length === 0) throw new Error(`[MV-0004] "friendlyId" is required.`);
    }
}
exports.Personalizer = Personalizer;


/***/ }),

/***/ 6277:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.LIBRARY_VERSION = exports.personalize = exports.init = void 0;
var initializer_1 = __webpack_require__(7001);
Object.defineProperty(exports, "init", ({
    enumerable: true,
    get: function() {
        return initializer_1.initServer;
    }
}));
var personalizeServer_1 = __webpack_require__(8772);
Object.defineProperty(exports, "personalize", ({
    enumerable: true,
    get: function() {
        return personalizeServer_1.personalizeServer;
    }
}));
var consts_1 = __webpack_require__(59);
Object.defineProperty(exports, "LIBRARY_VERSION", ({
    enumerable: true,
    get: function() {
        return consts_1.LIBRARY_VERSION;
    }
}));


/***/ }),

/***/ 2885:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isValidEmail = exports.isShortISODateString = exports.flattenObject = exports.cookieExists = exports.getCookieServerSide = exports.getCookie = exports.isHttpResponse = exports.isHttpRequest = exports.isNextJsMiddlewareResponse = exports.isNextJsMiddlewareRequest = exports.getCookieValueClientSide = exports.fetchWithTimeout = exports.createCookieString = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const create_cookie_string_1 = __webpack_require__(6611);
Object.defineProperty(exports, "createCookieString", ({
    enumerable: true,
    get: function() {
        return create_cookie_string_1.createCookieString;
    }
}));
const fetch_with_timeout_1 = __webpack_require__(9249);
Object.defineProperty(exports, "fetchWithTimeout", ({
    enumerable: true,
    get: function() {
        return fetch_with_timeout_1.fetchWithTimeout;
    }
}));
const get_cookie_value_client_side_1 = __webpack_require__(230);
Object.defineProperty(exports, "getCookieValueClientSide", ({
    enumerable: true,
    get: function() {
        return get_cookie_value_client_side_1.getCookieValueClientSide;
    }
}));
const is_next_js_middleware_request_1 = __webpack_require__(9185);
Object.defineProperty(exports, "isNextJsMiddlewareRequest", ({
    enumerable: true,
    get: function() {
        return is_next_js_middleware_request_1.isNextJsMiddlewareRequest;
    }
}));
const is_next_js_middleware_response_1 = __webpack_require__(201);
Object.defineProperty(exports, "isNextJsMiddlewareResponse", ({
    enumerable: true,
    get: function() {
        return is_next_js_middleware_response_1.isNextJsMiddlewareResponse;
    }
}));
const is_http_request_1 = __webpack_require__(3058);
Object.defineProperty(exports, "isHttpRequest", ({
    enumerable: true,
    get: function() {
        return is_http_request_1.isHttpRequest;
    }
}));
const is_http_response_1 = __webpack_require__(3142);
Object.defineProperty(exports, "isHttpResponse", ({
    enumerable: true,
    get: function() {
        return is_http_response_1.isHttpResponse;
    }
}));
const get_cookie_1 = __webpack_require__(6490);
Object.defineProperty(exports, "getCookie", ({
    enumerable: true,
    get: function() {
        return get_cookie_1.getCookie;
    }
}));
const get_cookie_server_side_1 = __webpack_require__(3038);
Object.defineProperty(exports, "getCookieServerSide", ({
    enumerable: true,
    get: function() {
        return get_cookie_server_side_1.getCookieServerSide;
    }
}));
const cookie_exists_1 = __webpack_require__(3573);
Object.defineProperty(exports, "cookieExists", ({
    enumerable: true,
    get: function() {
        return cookie_exists_1.cookieExists;
    }
}));
const flatten_object_1 = __webpack_require__(7813);
Object.defineProperty(exports, "flattenObject", ({
    enumerable: true,
    get: function() {
        return flatten_object_1.flattenObject;
    }
}));
const is_short_iso_date_string_1 = __webpack_require__(5178);
Object.defineProperty(exports, "isShortISODateString", ({
    enumerable: true,
    get: function() {
        return is_short_iso_date_string_1.isShortISODateString;
    }
}));
const is_valid_email_1 = __webpack_require__(1923);
Object.defineProperty(exports, "isValidEmail", ({
    enumerable: true,
    get: function() {
        return is_valid_email_1.isValidEmail;
    }
}));


/***/ }),

/***/ 7813:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.flattenObject = void 0;
/**
 * A function that flattens an object, by combining the keys with an "_".
 * @param data - An object that has the required data to perform the flattening
 * @returns - A new flattened object
 * @example
 *
 * ```ts
 * const object = {order:{amount: 1, delivered: false}}
 * const flattenedObject = flattenObject(object)
 * // flattenedObject will be {order_amount: 1, order_delivered: false}
 * ```
 */ function flattenObject(data) {
    const { currentKey, object } = data;
    const newObject = data.newObject ?? {};
    for(const key in object){
        const value = object[key];
        if (value === undefined) continue;
        if (typeof value === "object" && !Array.isArray(value)) flattenObject({
            currentKey: `${currentKey ? `${currentKey}_${key}` : key}`,
            newObject,
            object: value
        });
        else newObject[currentKey ? `${currentKey}_${key}` : key] = value;
    }
    return newObject;
}
exports.flattenObject = flattenObject;


/***/ }),

/***/ 3573:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.cookieExists = void 0;
/**
 * Checks if the cookie exists in the cookie string
 * @param cookieStr - The cookie string containing every cookie
 * @param cookieName - The cookie name to be found
 * @returns - boolean value, if the cookie is found in the cookie string
 */ function cookieExists(cookieStr, cookieName) {
    return cookieStr.split("; ").some((cookie)=>cookie.split("=")[0] === cookieName);
}
exports.cookieExists = cookieExists;


/***/ }),

/***/ 6611:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createCookieString = void 0;
/**
 * Creates the cookie string with the respectively cookie attributes
 * @param name - name of the cookie
 * @param value - value of the cookie
 * @param attributes - an object of supported cookie attributes
 * @returns - a string that will be passed to document.cookie
 */ function createCookieString(name, value, attributes) {
    let cookieString = `${name}=${value};`;
    cookieString += ` Max-Age=${attributes.maxAge}; SameSite=${attributes.sameSite};`;
    cookieString += attributes.secure ? " Secure;" : "";
    cookieString += attributes.path ? ` Path=${attributes.path};` : "";
    cookieString += attributes.domain ? ` Domain=${attributes.domain};` : "";
    cookieString = cookieString.substring(0, cookieString.length - 1);
    return cookieString;
}
exports.createCookieString = createCookieString;


/***/ }),

/***/ 3038:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getCookieServerSide = void 0;
const get_cookie_1 = __webpack_require__(6490);
/**
 * Retrieves the cookie name and value from the request header
 * @param cookiesHeader - The cookie string of the request header
 * @param cookieName - The cookie name to be found
 * @returns - The name and value of the cookie, or undefined
 */ function getCookieServerSide(cookiesHeader, cookieName) {
    return (0, get_cookie_1.getCookie)(cookiesHeader, cookieName);
}
exports.getCookieServerSide = getCookieServerSide;


/***/ }),

/***/ 230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getCookieValueClientSide = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
const get_cookie_1 = __webpack_require__(6490);
/**
 * Gets the value for a given cookie name
 * @param cookieName - The cookie name to be found
 * @returns - The value of the cookie if it exists or empty string
 */ function getCookieValueClientSide(cookieName) {
    const cookie = (0, get_cookie_1.getCookie)(document.cookie, cookieName);
    return cookie?.value ?? "";
}
exports.getCookieValueClientSide = getCookieValueClientSide;


/***/ }),

/***/ 6490:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getCookie = void 0;
/**
 * Retrieves the cookie, if it exists in the cookie string
 * @param cookieStr - The cookie string containing every cookie
 * @param cookieName - The cookie name to be found
 * @returns - an object that contains the cookie name and value or undefined, if not found
 */ function getCookie(cookieStr, cookieName) {
    if (!cookieStr) return undefined;
    const found = cookieStr.split("; ").find((cookie)=>{
        return cookie.indexOf("=") > 0 && cookie.split("=")[0] === cookieName;
    });
    return found !== undefined ? {
        name: found.split("=")[0],
        value: found.split("=")[1]
    } : undefined;
}
exports.getCookie = getCookie;


/***/ }),

/***/ 9249:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fetchWithTimeout = void 0;
/**
 * Fetches data from the specified URL within the given timeout period.
 *
 * @param url - The URL to fetch data from.
 * @param timeout - The time in milliseconds to wait before timing out the request.
 * @param fetchOptions - The options to pass to the fetch API.
 * @returns - A Promise that resolves to the fetched data, or null if the request was aborted or timed out.
 * @throws  - If the timeout value is invalid.
 */ async function fetchWithTimeout(url, timeout, fetchOptions) {
    if (!Number.isInteger(timeout) || timeout < 0) throw new Error("[IV-0006] Incorrect value for the timeout parameter. Set the value to an integer greater than or equal to 0.");
    const abortController = new AbortController();
    const signal = abortController.signal;
    const timeoutHandler = setTimeout(()=>{
        abortController.abort();
    }, timeout);
    return fetch(url, {
        ...fetchOptions,
        signal
    }).then((response)=>{
        clearTimeout(timeoutHandler);
        return response.json();
    }).then((data)=>data).catch((error)=>{
        if (error.name === "AbortError") throw new Error("[IE-0002] Timeout exceeded. The server did not respond within the allotted time.");
        return null;
    });
}
exports.fetchWithTimeout = fetchWithTimeout;


/***/ }),

/***/ 3058:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isHttpRequest = void 0;
/**
 * Checks if the given 'request' object is a valid HTTP Request
 * by verifying the presence of necessary properties.
 *
 * @param request - The request object to be validated.
 * @returns Returns true if 'request' is a valid HTTP Request, otherwise false.
 */ function isHttpRequest(request) {
    return "headers" in request;
}
exports.isHttpRequest = isHttpRequest;


/***/ }),

/***/ 3142:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isHttpResponse = void 0;
/**
 * Checks if the given 'response' object is a valid HTTP Response
 * by verifying the presence of necessary properties.
 *
 * @param response - MiddlewareNextResponse | HttpResponse - The response object to be validated.
 * @returns Returns true if 'response' is a valid HTTP Response, otherwise false.
 */ function isHttpResponse(response) {
    return "setHeader" in response;
}
exports.isHttpResponse = isHttpResponse;


/***/ }),

/***/ 9185:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isNextJsMiddlewareRequest = void 0;
/**
 * Checks if the given 'request' object is a valid Middleware Request
 * by verifying the presence of necessary properties.
 *
 * @param request - The request object to be validated.
 * @returns Returns true if 'request' is a valid Middleware Request, otherwise false.
 */ function isNextJsMiddlewareRequest(request) {
    return "cookies" in request && "get" in request.cookies && "set" in request.cookies;
}
exports.isNextJsMiddlewareRequest = isNextJsMiddlewareRequest;


/***/ }),

/***/ 201:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isNextJsMiddlewareResponse = void 0;
/**
 * Checks if the given 'response' object is a valid MiddlewareNextResponse Response
 * by verifying the presence of necessary properties.
 *
 * @param response - MiddlewareNextResponse | HttpResponse - The response object to be validated.
 * @returns Returns true if 'response' is a valid MiddlewareNextResponse Response, otherwise false.
 */ function isNextJsMiddlewareResponse(response) {
    return "cookies" in response && "set" in response.cookies;
}
exports.isNextJsMiddlewareResponse = isNextJsMiddlewareResponse;


/***/ }),

/***/ 5178:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isShortISODateString = void 0;
/**
 * Checks if the provided string is a shortened version of ISO 8601 date format ‘YYYY-MM-DD’T’hh:mm’
 * @param date - The date string provided by the developer
 * @returns - A boolean if the string is valid otherwise false
 */ function isShortISODateString(date) {
    try {
        const dateString = date + "Z";
        const convertedDate = new Date(dateString).toISOString().substring(0, 16);
        return convertedDate === date;
    } catch (_) {
        return false;
    }
}
exports.isShortISODateString = isShortISODateString;


/***/ }),

/***/ 1923:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isValidEmail = void 0;
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.
/**
 *
 * @param email - the email string to be validated
 * @returns - a boolean value depending on whether the email value passed is valid
 */ function isValidEmail(email) {
    const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regx.test(email);
}
exports.isValidEmail = isValidEmail;


/***/ }),

/***/ 422:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = exports.$m = __webpack_unused_export__ = void 0;
var graphql_1 = __webpack_require__(908);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return graphql_1.DefaultRetryStrategy;
    }
});
Object.defineProperty(exports, "$m", ({
    enumerable: true,
    get: function() {
        return graphql_1.GraphQLRequestClient;
    }
}));
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return graphql_1.getEdgeProxyContentUrl;
    }
});


/***/ }),

/***/ 1783:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = exports.ME = exports.fF = void 0;
var sitecore_jss_1 = __webpack_require__(4880);
Object.defineProperty(exports, "fF", ({
    enumerable: true,
    get: function() {
        return sitecore_jss_1.debug;
    }
}));
var redirects_middleware_1 = __webpack_require__(4944);
Object.defineProperty(exports, "ME", ({
    enumerable: true,
    get: function() {
        return redirects_middleware_1.RedirectsMiddleware;
    }
}));
var personalize_middleware_1 = __webpack_require__(1253);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return personalize_middleware_1.PersonalizeMiddleware;
    }
});
var multisite_middleware_1 = __webpack_require__(1238);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return multisite_middleware_1.MultisiteMiddleware;
    }
});


/***/ }),

/***/ 3682:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.MiddlewareBase = void 0;
class MiddlewareBase {
    constructor(config){
        this.config = config;
        this.SITE_SYMBOL = "sc_site";
        this.defaultHostname = config.defaultHostname || "localhost";
    }
    /**
     * Determines if mode is preview
     * @param {NextRequest} req request
     * @returns {boolean} is preview
     */ isPreview(req) {
        var _a, _b;
        return !!(((_a = req.cookies.get("__prerender_bypass")) === null || _a === void 0 ? void 0 : _a.value) || ((_b = req.cookies.get("__next_preview_data")) === null || _b === void 0 ? void 0 : _b.value));
    }
    excludeRoute(pathname) {
        var _a, _b;
        return pathname.startsWith("/api/") || // Ignore Next.js API calls
        pathname.startsWith("/sitecore/") || // Ignore Sitecore API calls
        pathname.startsWith("/_next") || // Ignore next service calls
        ((_a = this.config) === null || _a === void 0 ? void 0 : _a.excludeRoute) && ((_b = this.config) === null || _b === void 0 ? void 0 : _b.excludeRoute(pathname));
    }
    /**
     * Safely extract all headers for debug logging
     * Necessary to avoid middleware issue https://github.com/vercel/next.js/issues/39765
     * @param {Headers} incomingHeaders Incoming headers
     * @returns Object with headers as key/value pairs
     */ extractDebugHeaders(incomingHeaders) {
        const headers = {};
        incomingHeaders.forEach((value, key)=>headers[key] = value);
        return headers;
    }
    /**
     * Provides used language
     * @param {NextRequest} req request
     * @returns {string} language
     */ getLanguage(req) {
        return req.nextUrl.locale || req.nextUrl.defaultLocale || "en";
    }
    /**
     * Extract 'host' header
     * @param {NextRequest} req request
     */ getHostHeader(req) {
        var _a;
        return (_a = req.headers.get("host")) === null || _a === void 0 ? void 0 : _a.split(":")[0];
    }
    /**
     * Get site information.
     * Can not be used in **Preview** mode, since site will not be resolved
     * @param {NextRequest} req request
     * @param {NextResponse} [res] response
     * @returns {SiteInfo} site information
     */ getSite(req, res) {
        var _a;
        const siteNameCookie = (_a = res === null || res === void 0 ? void 0 : res.cookies.get(this.SITE_SYMBOL)) === null || _a === void 0 ? void 0 : _a.value;
        if (siteNameCookie) return this.config.siteResolver.getByName(siteNameCookie);
        const hostname = this.getHostHeader(req) || this.defaultHostname;
        return this.config.siteResolver.getByHost(hostname);
    }
}
exports.MiddlewareBase = MiddlewareBase;


/***/ }),

/***/ 1238:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

const NextResponse = (__webpack_require__(3914)/* .NextResponse */ .x);
var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.MultisiteMiddleware = void 0;
;
const site_1 = __webpack_require__(5946);
const sitecore_jss_1 = __webpack_require__(4880);
const middleware_1 = __webpack_require__(3682);
/**
 * Middleware / handler for multisite support
 */ class MultisiteMiddleware extends middleware_1.MiddlewareBase {
    /**
     * @param {MultisiteMiddlewareConfig} [config] Multisite middleware config
     */ constructor(config){
        super(config);
        this.config = config;
        this.handler = (req, res)=>__awaiter(this, void 0, void 0, function*() {
                var _a;
                const pathname = req.nextUrl.pathname;
                const language = this.getLanguage(req);
                const hostname = this.getHostHeader(req) || this.defaultHostname;
                const startTimestamp = Date.now();
                sitecore_jss_1.debug.multisite("multisite middleware start: %o", {
                    pathname,
                    language,
                    hostname
                });
                // Response will be provided if other middleware is run before us
                let response = res || NextResponse.next();
                if (this.isPreview(req) || this.excludeRoute(pathname)) {
                    sitecore_jss_1.debug.multisite("skipped (%s)", this.isPreview(req) ? "preview" : "route excluded");
                    return response;
                }
                // Site name can be forced by query string parameter or cookie
                const siteName = req.nextUrl.searchParams.get(this.SITE_SYMBOL) || this.config.useCookieResolution && this.config.useCookieResolution(req) && ((_a = req.cookies.get(this.SITE_SYMBOL)) === null || _a === void 0 ? void 0 : _a.value) || this.config.siteResolver.getByHost(hostname).name;
                // Rewrite to site specific path
                const rewritePath = (0, site_1.getSiteRewrite)(pathname, {
                    siteName
                });
                // Note an absolute URL is required: https://nextjs.org/docs/messages/middleware-relative-urls
                const rewriteUrl = req.nextUrl.clone();
                rewriteUrl.pathname = rewritePath;
                response = NextResponse.rewrite(rewriteUrl);
                // Share site name with the following executed middlewares
                response.cookies.set(this.SITE_SYMBOL, siteName);
                // Share rewrite path with following executed middlewares
                response.headers.set("x-sc-rewrite", rewritePath);
                sitecore_jss_1.debug.multisite("multisite middleware end in %dms: %o", Date.now() - startTimestamp, {
                    rewritePath,
                    siteName,
                    headers: this.extractDebugHeaders(response.headers),
                    cookies: response.cookies
                });
                return response;
            });
    }
    /**
     * Gets the Next.js middleware handler with error handling
     * @returns middleware handler
     */ getHandler() {
        return (req, res)=>__awaiter(this, void 0, void 0, function*() {
                try {
                    return yield this.handler(req, res);
                } catch (error) {
                    console.log("Multisite middleware failed:");
                    console.log(error);
                    return res || NextResponse.next();
                }
            });
    }
    excludeRoute(pathname) {
        // ignore files
        return pathname.includes(".") || super.excludeRoute(pathname);
    }
}
exports.MultisiteMiddleware = MultisiteMiddleware;


/***/ }),

/***/ 1253:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

const NextResponse = (__webpack_require__(3914)/* .NextResponse */ .x);
var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.PersonalizeMiddleware = void 0;
;
const personalize_1 = __webpack_require__(1690);
const sitecore_jss_1 = __webpack_require__(4880);
const middleware_1 = __webpack_require__(3682);
const server_2 = __webpack_require__(194);
/**
 * Middleware / handler to support Sitecore Personalize
 */ class PersonalizeMiddleware extends middleware_1.MiddlewareBase {
    /**
     * @param {PersonalizeMiddlewareConfig} [config] Personalize middleware config
     */ constructor(config){
        super(config);
        this.config = config;
        this.handler = (req, res)=>__awaiter(this, void 0, void 0, function*() {
                const pathname = req.nextUrl.pathname;
                const language = this.getLanguage(req);
                const hostname = this.getHostHeader(req) || this.defaultHostname;
                const startTimestamp = Date.now();
                const timeout = this.config.cdpConfig.timeout;
                // Response will be provided if other middleware is run before us (e.g. redirects)
                let response = res || NextResponse.next();
                sitecore_jss_1.debug.personalize("personalize middleware start: %o", {
                    pathname,
                    language,
                    hostname,
                    headers: this.extractDebugHeaders(req.headers)
                });
                if (this.config.disabled && this.config.disabled(req, response)) {
                    sitecore_jss_1.debug.personalize("skipped (personalize middleware is disabled)");
                    return response;
                }
                if (response.redirected || // Don't attempt to personalize a redirect
                this.isPreview(req) || // No need to personalize for preview (layout data is already prepared for preview)
                this.excludeRoute(pathname)) {
                    sitecore_jss_1.debug.personalize("skipped (%s)", response.redirected ? "redirected" : this.isPreview(req) ? "preview" : "route excluded");
                    return response;
                }
                const site = this.getSite(req, response);
                // Get personalization info from Experience Edge
                const personalizeInfo = yield this.personalizeService.getPersonalizeInfo(pathname, language, site.name);
                if (!personalizeInfo) {
                    // Likely an invalid route / language
                    sitecore_jss_1.debug.personalize("skipped (personalize info not found)");
                    return response;
                }
                if (personalizeInfo.variantIds.length === 0) {
                    sitecore_jss_1.debug.personalize("skipped (no personalization configured)");
                    return response;
                }
                yield this.initPersonalizeServer({
                    hostname,
                    siteName: site.name,
                    request: req,
                    response
                });
                const params = this.getExperienceParams(req);
                sitecore_jss_1.debug.personalize("executing experience for %s %o", personalizeInfo.contentId, params);
                let variantId;
                // Execute targeted experience in Personalize SDK
                // eslint-disable-next-line no-useless-catch
                try {
                    const personalization = yield this.personalize({
                        personalizeInfo,
                        params,
                        language,
                        timeout
                    }, req);
                    variantId = personalization.variantId;
                } catch (error) {
                    throw error;
                }
                if (!variantId) {
                    sitecore_jss_1.debug.personalize("skipped (no variant identified)");
                    return response;
                }
                if (!personalizeInfo.variantIds.includes(variantId)) {
                    sitecore_jss_1.debug.personalize("skipped (invalid variant)");
                    return response;
                }
                // Path can be rewritten by previously executed middleware
                const basePath = (res === null || res === void 0 ? void 0 : res.headers.get("x-sc-rewrite")) || pathname;
                // Rewrite to persononalized path
                const rewritePath = (0, personalize_1.getPersonalizedRewrite)(basePath, {
                    variantId
                });
                // Note an absolute URL is required: https://nextjs.org/docs/messages/middleware-relative-urls
                const rewriteUrl = req.nextUrl.clone();
                // Preserve cookies from previous response
                const cookies = response.cookies.getAll();
                rewriteUrl.pathname = rewritePath;
                response = NextResponse.rewrite(rewriteUrl, response);
                // Disable preflight caching to force revalidation on client-side navigation (personalization may be influenced)
                // See https://github.com/vercel/next.js/issues/32727
                response.headers.set("x-middleware-cache", "no-cache");
                // Share rewrite path with following executed middleware
                response.headers.set("x-sc-rewrite", rewritePath);
                // Share site name with the following executed middlewares
                response.cookies.set(this.SITE_SYMBOL, site.name);
                // Restore cookies from previous response since
                // browserId cookie gets omitted after rewrite
                cookies.forEach((cookie)=>{
                    response.cookies.set(cookie);
                });
                sitecore_jss_1.debug.personalize("personalize middleware end in %dms: %o", Date.now() - startTimestamp, {
                    rewritePath,
                    headers: this.extractDebugHeaders(response.headers)
                });
                return response;
            });
        // NOTE: we provide native fetch for compatibility on Next.js Edge Runtime
        // (underlying default 'cross-fetch' is not currently compatible: https://github.com/lquixada/cross-fetch/issues/78)
        this.personalizeService = new personalize_1.GraphQLPersonalizeService(Object.assign(Object.assign({}, config.edgeConfig), {
            fetch: fetch
        }));
    }
    /**
     * Gets the Next.js middleware handler with error handling
     * @returns middleware handler
     */ getHandler() {
        return (req, res)=>__awaiter(this, void 0, void 0, function*() {
                try {
                    return yield this.handler(req, res);
                } catch (error) {
                    console.log("Personalize middleware failed:");
                    console.log(error);
                    return res || NextResponse.next();
                }
            });
    }
    initPersonalizeServer({ hostname, siteName, request, response }) {
        return __awaiter(this, void 0, void 0, function*() {
            yield (0, server_2.init)({
                sitecoreEdgeUrl: this.config.cdpConfig.sitecoreEdgeUrl,
                sitecoreEdgeContextId: this.config.cdpConfig.sitecoreEdgeContextId,
                siteName,
                cookieDomain: hostname,
                enableServerCookie: true
            }, request, response);
        });
    }
    personalize({ params, personalizeInfo, language, timeout }, request) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            const personalizationData = {
                channel: this.config.cdpConfig.channel || "WEB",
                currency: (_a = this.config.cdpConfig.currency) !== null && _a !== void 0 ? _a : "USD",
                friendlyId: personalizeInfo.contentId,
                params,
                language
            };
            return yield (0, server_2.personalize)(personalizationData, request, timeout);
        });
    }
    getExperienceParams(req) {
        const utm = {
            campaign: req.nextUrl.searchParams.get("utm_campaign") || undefined,
            content: req.nextUrl.searchParams.get("utm_content") || undefined,
            medium: req.nextUrl.searchParams.get("utm_medium") || undefined,
            source: req.nextUrl.searchParams.get("utm_source") || undefined
        };
        return {
            // It's expected that the header name "referer" is actually a misspelling of the word "referrer"
            // req.referrer is used during fetching to determine the value of the Referer header of the request being made,
            // used as a fallback
            referrer: req.headers.get("referer") || req.referrer,
            utm: utm
        };
    }
    excludeRoute(pathname) {
        // ignore files
        return pathname.includes(".") || super.excludeRoute(pathname);
    }
}
exports.PersonalizeMiddleware = PersonalizeMiddleware;


/***/ }),

/***/ 4944:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

const NextResponse = (__webpack_require__(3914)/* .NextResponse */ .x);
var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.RedirectsMiddleware = void 0;
const regex_parser_1 = __importDefault(__webpack_require__(8619));
;
const site_1 = __webpack_require__(5946);
const sitecore_jss_1 = __webpack_require__(4880);
const middleware_1 = __webpack_require__(3682);
const REGEXP_CONTEXT_SITE_LANG = new RegExp(/\$siteLang/, "gi");
/**
 * Middleware / handler fetches all redirects from Sitecore instance by grapqhl service
 * compares with current url and redirects to target url
 */ class RedirectsMiddleware extends middleware_1.MiddlewareBase {
    /**
     * @param {RedirectsMiddlewareConfig} [config] redirects middleware config
     */ constructor(config){
        super(config);
        this.config = config;
        this.handler = (req, res)=>__awaiter(this, void 0, void 0, function*() {
                const pathname = req.nextUrl.pathname;
                const language = this.getLanguage(req);
                const hostname = this.getHostHeader(req) || this.defaultHostname;
                let site;
                const startTimestamp = Date.now();
                sitecore_jss_1.debug.redirects("redirects middleware start: %o", {
                    pathname,
                    language,
                    hostname
                });
                const createResponse = ()=>__awaiter(this, void 0, void 0, function*() {
                        if (this.config.disabled && this.config.disabled(req, NextResponse.next())) {
                            sitecore_jss_1.debug.redirects("skipped (redirects middleware is disabled)");
                            return res || NextResponse.next();
                        }
                        if (this.isPreview(req) || this.excludeRoute(pathname)) {
                            sitecore_jss_1.debug.redirects("skipped (%s)", this.isPreview(req) ? "preview" : "route excluded");
                            return res || NextResponse.next();
                        }
                        site = this.getSite(req, res);
                        // Find the redirect from result of RedirectService
                        const existsRedirect = yield this.getExistsRedirect(req, site.name);
                        if (!existsRedirect) {
                            sitecore_jss_1.debug.redirects("skipped (redirect does not exist)");
                            return res || NextResponse.next();
                        }
                        // Find context site language and replace token
                        if (REGEXP_CONTEXT_SITE_LANG.test(existsRedirect.target)) {
                            existsRedirect.target = existsRedirect.target.replace(REGEXP_CONTEXT_SITE_LANG, site.language);
                        }
                        const url = req.nextUrl.clone();
                        const absoluteUrlRegex = new RegExp("^(?:[a-z]+:)?//", "i");
                        if (absoluteUrlRegex.test(existsRedirect.target)) {
                            url.href = existsRedirect.target;
                            url.locale = req.nextUrl.locale;
                        } else {
                            url.search = existsRedirect.isQueryStringPreserved ? url.search : "";
                            const urlFirstPart = existsRedirect.target.split("/")[1];
                            if (this.locales.includes(urlFirstPart)) {
                                url.locale = urlFirstPart;
                                existsRedirect.target = existsRedirect.target.replace(`/${urlFirstPart}`, "");
                            }
                            url.pathname = url.pathname.replace((0, regex_parser_1.default)(existsRedirect.pattern), existsRedirect.target).replace(/^\/\//, "/");
                        }
                        const redirectUrl = decodeURIComponent(url.href);
                        /** return Response redirect with http code of redirect type **/ switch(existsRedirect.redirectType){
                            case site_1.REDIRECT_TYPE_301:
                                return NextResponse.redirect(redirectUrl, 301);
                            case site_1.REDIRECT_TYPE_302:
                                return NextResponse.redirect(redirectUrl, 302);
                            case site_1.REDIRECT_TYPE_SERVER_TRANSFER:
                                return NextResponse.rewrite(redirectUrl);
                            default:
                                return NextResponse.next();
                        }
                    });
                const response = yield createResponse();
                // Share site name with the following executed middlewares
                // Don't need to set when middleware is disabled
                site && response.cookies.set(this.SITE_SYMBOL, site.name);
                sitecore_jss_1.debug.redirects("redirects middleware end in %dms: %o", Date.now() - startTimestamp, {
                    redirected: response.redirected,
                    status: response.status,
                    url: response.url,
                    headers: this.extractDebugHeaders(response.headers)
                });
                return response;
            });
        // NOTE: we provide native fetch for compatibility on Next.js Edge Runtime
        // (underlying default 'cross-fetch' is not currently compatible: https://github.com/lquixada/cross-fetch/issues/78)
        this.redirectsService = new site_1.GraphQLRedirectsService(Object.assign(Object.assign({}, config), {
            fetch: fetch
        }));
        this.locales = config.locales;
    }
    /**
     * Gets the Next.js middleware handler with error handling
     * @returns route handler
     */ getHandler() {
        return (req, res)=>__awaiter(this, void 0, void 0, function*() {
                try {
                    return yield this.handler(req, res);
                } catch (error) {
                    console.log("Redirect middleware failed:");
                    console.log(error);
                    return res || NextResponse.next();
                }
            });
    }
    /**
     * Method returns RedirectInfo when matches
     * @param {NextRequest} req request
     * @param {string} siteName site name
     * @returns Promise<RedirectInfo | undefined>
     * @private
     */ getExistsRedirect(req, siteName) {
        return __awaiter(this, void 0, void 0, function*() {
            const redirects = yield this.redirectsService.fetchRedirects(siteName);
            const tragetURL = req.nextUrl.pathname;
            const targetQS = req.nextUrl.search || "";
            const language = this.getLanguage(req);
            const modifyRedirects = JSON.parse(JSON.stringify(redirects));
            return modifyRedirects.length ? modifyRedirects.find((redirect)=>{
                redirect.pattern = redirect.pattern.replace(RegExp(`^[^]?/${language}/`, "gi"), "");
                redirect.pattern = `/^\/${redirect.pattern.replace(/^\/|\/$/g, "").replace(/^\^\/|\/\$$/g, "").replace(/^\^|\$$/g, "").replace(/\$\/gi$/g, "")}[\/]?$/gi`;
                return ((0, regex_parser_1.default)(redirect.pattern).test(tragetURL) || (0, regex_parser_1.default)(redirect.pattern).test(`${tragetURL}${targetQS}`) || (0, regex_parser_1.default)(redirect.pattern).test(`/${req.nextUrl.locale}${tragetURL}`) || (0, regex_parser_1.default)(redirect.pattern).test(`/${req.nextUrl.locale}${tragetURL}${targetQS}`)) && (redirect.locale ? redirect.locale.toLowerCase() === req.nextUrl.locale.toLowerCase() : true);
            }) : undefined;
        });
    }
}
exports.RedirectsMiddleware = RedirectsMiddleware;


/***/ }),

/***/ 889:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.J = void 0;
var site_1 = __webpack_require__(5946);
Object.defineProperty(exports, "J", ({
    enumerable: true,
    get: function() {
        return site_1.SiteResolver;
    }
}));


/***/ }),

/***/ 8120:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.MemoryCacheClient = void 0;
const memory_cache_1 = __webpack_require__(2130);
/**
 * Default cache configuration
 */ const DEFAULTS = Object.freeze({
    cacheTimeout: 60,
    cacheEnabled: true
});
/**
 * A cache client that uses the 'memory-cache' library (https://github.com/ptarjan/node-cache).
 * This class is meant to be extended or used as a mixin; it's not meant to be used directly.
 * @template T The type of data being cached.
 * @mixin
 */ class MemoryCacheClient {
    /**
     * Initializes a new instance of @see MemoryCacheClient using the provided @see CacheOptions
     * @param {CacheOptions} options Configuration options
     */ constructor(options){
        var _a;
        this.options = options;
        this.cache = new memory_cache_1.Cache();
        this.options.cacheTimeout = ((_a = this.options.cacheTimeout) !== null && _a !== void 0 ? _a : DEFAULTS.cacheTimeout) * 1000;
        if (this.options.cacheEnabled === undefined) {
            this.options.cacheEnabled = DEFAULTS.cacheEnabled;
        }
    }
    /**
     * Retrieves a value from the cache.
     * @template T The type of data being cached.
     * @param {string} key The cache key.
     * @returns The cache value as {T}, or null if the specified key is not found in the cache.
     */ getCacheValue(key) {
        return this.options.cacheEnabled ? this.cache.get(key) : null;
    }
    /**
     * Adds a value to the cache for the specified cache key.
     * @template T The type of data being cached.
     * @param {string} key The cache key.
     * @param {T} value The value to cache.
     * @returns The value added to the cache.
     */ setCacheValue(key, value) {
        return this.options.cacheEnabled ? this.cache.put(key, value, this.options.cacheTimeout) : value;
    }
}
exports.MemoryCacheClient = MemoryCacheClient;


/***/ }),

/***/ 4602:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SITECORE_EDGE_URL_DEFAULT = exports.siteNameError = exports.JSS_MODE = exports.FETCH_WITH = exports.SitecoreTemplateId = void 0;
var SitecoreTemplateId;
(function(SitecoreTemplateId) {
    // /sitecore/templates/Foundation/JavaScript Services/App
    SitecoreTemplateId["JssApp"] = "061cba1554744b918a0617903b102b82";
    // /sitecore/templates/System/Dictionary/Dictionary entry
    SitecoreTemplateId["DictionaryEntry"] = "6d1cd89719364a3aa511289a94c2a7b1";
})(SitecoreTemplateId = exports.SitecoreTemplateId || (exports.SitecoreTemplateId = {}));
exports.FETCH_WITH = {
    GRAPHQL: "GraphQL",
    REST: "Rest"
};
exports.JSS_MODE = {
    CONNECTED: "connected",
    DISCONNECTED: "disconnected"
};
exports.siteNameError = "The siteName cannot be empty";
exports.SITECORE_EDGE_URL_DEFAULT = "https://edge-platform.sitecorecloud.io";


/***/ }),

/***/ 9762:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var _a;
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.enableDebug = void 0;
const debug_1 = __importDefault(__webpack_require__(1885));
const is_server_1 = __importDefault(__webpack_require__(605));
const rootNamespace = "sitecore-jss";
// On server/node side, allow switching from the built-in
// `%o` (pretty-print single line) and `%O` (pretty-print multiple line)
// with a `DEBUG_MULTILINE` environment variable.
if (is_server_1.default() && ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.DEBUG_MULTILINE) === "true" && debug_1.default.formatters.o && debug_1.default.formatters.O) {
    debug_1.default.formatters.o = debug_1.default.formatters.O;
}
/**
 * Enable debug logging dynamically
 * @param {string} namespaces space-separated list of namespaces to enable
 */ const enableDebug = (namespaces)=>debug_1.default.enable(namespaces);
exports.enableDebug = enableDebug;
/**
 * Default Sitecore JSS 'debug' module debuggers. Uses namespace prefix 'sitecore-jss:'.
 * See {@link https://www.npmjs.com/package/debug} for details.
 */ exports["default"] = {
    common: debug_1.default(`${rootNamespace}:common`),
    http: debug_1.default(`${rootNamespace}:http`),
    layout: debug_1.default(`${rootNamespace}:layout`),
    dictionary: debug_1.default(`${rootNamespace}:dictionary`),
    editing: debug_1.default(`${rootNamespace}:editing`),
    sitemap: debug_1.default(`${rootNamespace}:sitemap`),
    multisite: debug_1.default(`${rootNamespace}:multisite`),
    robots: debug_1.default(`${rootNamespace}:robots`),
    redirects: debug_1.default(`${rootNamespace}:redirects`),
    personalize: debug_1.default(`${rootNamespace}:personalize`),
    errorpages: debug_1.default(`${rootNamespace}:errorpages`)
};


/***/ }),

/***/ 3920:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GraphQLRequestClient = exports.DefaultRetryStrategy = void 0;
const graphql_request_1 = __webpack_require__(284);
const url_parse_1 = __importDefault(__webpack_require__(5911));
const debug_1 = __importDefault(__webpack_require__(9762));
const timeout_promise_1 = __importDefault(__webpack_require__(1144));
/**
 * Represents a default retry strategy for handling retry attempts in case of specific HTTP status codes.
 * This class implements the RetryStrategy interface and provides methods to determine whether a request
 * should be retried and calculates the delay before the next retry attempt.
 */ class DefaultRetryStrategy {
    /**
     * @param {Object} options Configurable options for retry mechanism.
     * @param {number[]} options.statusCodes HTTP status codes to trigger retries on
     * @param {number} options.factor Factor by which the delay increases with each retry attempt
     */ constructor(options = {}){
        this.statusCodes = options.statusCodes || [
            429
        ];
        this.factor = options.factor || 2;
    }
    shouldRetry(error, attempt, retries) {
        var _a;
        return retries > 0 && attempt <= retries && ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) !== undefined && this.statusCodes.includes(error.response.status);
    }
    getDelay(error, attempt) {
        var _a;
        const rawHeaders = (_a = error.response) === null || _a === void 0 ? void 0 : _a.headers;
        const delaySeconds = (rawHeaders === null || rawHeaders === void 0 ? void 0 : rawHeaders.get("Retry-After")) ? Number.parseInt(rawHeaders === null || rawHeaders === void 0 ? void 0 : rawHeaders.get("Retry-After"), 10) : Math.pow(this.factor, attempt - 1);
        return delaySeconds * 1000;
    }
}
exports.DefaultRetryStrategy = DefaultRetryStrategy;
/**
 * A GraphQL client for Sitecore APIs that uses the 'graphql-request' library.
 * https://github.com/prisma-labs/graphql-request
 */ class GraphQLRequestClient {
    /**
     * Provides ability to execute graphql query using given `endpoint`
     * @param {string} endpoint The Graphql endpoint
     * @param {GraphQLRequestClientConfig} [clientConfig] GraphQL request client configuration.
     */ constructor(endpoint, clientConfig = {}){
        this.endpoint = endpoint;
        this.headers = {};
        if (clientConfig.apiKey) {
            this.headers.sc_apikey = clientConfig.apiKey;
        }
        if (!endpoint || !url_parse_1.default(endpoint).hostname) {
            throw new Error(`Invalid GraphQL endpoint '${endpoint}'. Verify that 'layoutServiceHost' property in 'scjssconfig.json' file or appropriate environment variable is set`);
        }
        this.timeout = clientConfig.timeout;
        this.retries = clientConfig.retries || 0;
        this.retryStrategy = clientConfig.retryStrategy || new DefaultRetryStrategy({
            statusCodes: [
                429,
                502,
                503,
                504,
                520,
                521,
                522,
                523,
                524
            ]
        });
        this.client = new graphql_request_1.GraphQLClient(endpoint, {
            headers: this.headers,
            fetch: clientConfig.fetch
        });
        this.debug = clientConfig.debugger || debug_1.default.http;
    }
    /**
     * Factory method for creating a GraphQLRequestClientFactory.
     * @param {Object} config - client configuration options.
     * @param {string} config.endpoint - endpoint
     * @param {string} [config.apiKey] - apikey
     */ static createClientFactory({ endpoint, apiKey }) {
        return (config = {})=>new GraphQLRequestClient(endpoint, Object.assign(Object.assign({}, config), {
                apiKey
            }));
    }
    /**
     * Execute graphql request
     * @param {string | DocumentNode} query graphql query
     * @param {Object} variables graphql variables
     */ request(query, variables) {
        return __awaiter(this, void 0, void 0, function*() {
            let attempt = 1;
            const retryer = ()=>__awaiter(this, void 0, void 0, function*() {
                    // Note we don't have access to raw request/response with graphql-request
                    // (or nice hooks like we have with Axios), but we should log whatever we have.
                    this.debug("request: %o", {
                        url: this.endpoint,
                        headers: this.headers,
                        query,
                        variables
                    });
                    const startTimestamp = Date.now();
                    const fetchWithOptionalTimeout = [
                        this.client.request(query, variables)
                    ];
                    if (this.timeout) {
                        this.abortTimeout = new timeout_promise_1.default(this.timeout);
                        fetchWithOptionalTimeout.push(this.abortTimeout.start);
                    }
                    return Promise.race(fetchWithOptionalTimeout).then((data)=>{
                        var _a;
                        (_a = this.abortTimeout) === null || _a === void 0 ? void 0 : _a.clear();
                        this.debug("response in %dms: %o", Date.now() - startTimestamp, data);
                        return Promise.resolve(data);
                    }, (error)=>__awaiter(this, void 0, void 0, function*() {
                            var _a, _b;
                            (_a = this.abortTimeout) === null || _a === void 0 ? void 0 : _a.clear();
                            this.debug("response error: %o", error.response || error.message || error);
                            const status = (_b = error.response) === null || _b === void 0 ? void 0 : _b.status;
                            const shouldRetry = this.retryStrategy.shouldRetry(error, attempt, this.retries);
                            if (shouldRetry) {
                                const delayMs = this.retryStrategy.getDelay(error, attempt);
                                this.debug("Error: %d. Retrying in %dms (attempt %d).", status, delayMs, attempt);
                                attempt++;
                                return new Promise((resolve)=>setTimeout(resolve, delayMs)).then(retryer);
                            } else {
                                return Promise.reject(error);
                            }
                        }));
                });
            return retryer();
        });
    }
}
exports.GraphQLRequestClient = GraphQLRequestClient;


/***/ }),

/***/ 2970:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getAppRootId = exports.languageError = exports.siteNameError = void 0;
const constants_1 = __webpack_require__(4602);
/** @private */ exports.siteNameError = "The site name must be a non-empty string";
/** @private */ exports.languageError = "The language must be a non-empty string";
/*
 * GraphQL query that returns the ID of the root item of the specified site and language
 */ const appRootQuery = /* GraphQL */ `
  query AppRootQuery($jssAppTemplateId: String!, $siteName: String!, $language: String!) {
    layout(site: $siteName, routePath: "/", language: $language) {
      homePage: item {
        rootItem: ancestors(includeTemplateIDs: [$jssAppTemplateId]) {
          id
        }
      }
    }
  }
`;
/**
 * Gets the ID of the JSS App root item for the specified site and language.
 * @param {GraphQLClient} client that fetches data from a GraphQL endpoint.
 * @param {string} siteName the name of the Sitecore site.
 * @param {string} language the item language version.
 * @param {string} [jssAppTemplateId] optional template ID of the app root item. If not
 * specified, the ID of the "/sitecore/templates/Foundation/JavaScript Services/App"
 * item is used.
 * @returns the root item ID of the JSS App in Sitecore. Returns null if the app root item is not found.
 * @throws {RangeError} if a valid site name value is not provided.
 * @throws {RangeError} if a valid language value is not provided.
 * @summary This function intentionally avoids throwing an error if a root item is not found,
 * leaving that decision up to implementations.
 */ function getAppRootId(client, siteName, language, jssAppTemplateId) {
    var _a, _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function*() {
        if (!siteName) {
            throw new RangeError(exports.siteNameError);
        }
        if (!language) {
            throw new RangeError(exports.languageError);
        }
        let fetchResponse = yield client.request(appRootQuery, {
            jssAppTemplateId: jssAppTemplateId || constants_1.SitecoreTemplateId.JssApp,
            siteName,
            language
        });
        if (!((_c = (_b = (_a = fetchResponse === null || fetchResponse === void 0 ? void 0 : fetchResponse.layout) === null || _a === void 0 ? void 0 : _a.homePage) === null || _b === void 0 ? void 0 : _b.rootItem) === null || _c === void 0 ? void 0 : _c.length) && language !== "en") {
            fetchResponse = yield client.request(appRootQuery, {
                jssAppTemplateId: jssAppTemplateId || constants_1.SitecoreTemplateId.JssApp,
                siteName,
                language: "en"
            });
        }
        if (!((_f = (_e = (_d = fetchResponse === null || fetchResponse === void 0 ? void 0 : fetchResponse.layout) === null || _d === void 0 ? void 0 : _d.homePage) === null || _e === void 0 ? void 0 : _e.rootItem) === null || _f === void 0 ? void 0 : _f.length)) {
            return null;
        }
        return fetchResponse.layout.homePage.rootItem[0].id;
    });
}
exports.getAppRootId = getAppRootId;


/***/ }),

/***/ 9790:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getEdgeProxyContentUrl = void 0;
const constants_1 = __webpack_require__(4602);
/**
 * Generates a URL for accessing Sitecore Edge Platform Content using the provided endpoint and context ID.
 * @param {string} sitecoreEdgeContextId - The unique context id.
 * @param {string} [sitecoreEdgeUrl] - The base endpoint URL for the Edge Platform. Default is https://edge-platform.sitecorecloud.io
 * @returns {string} The complete URL for accessing content through the Edge Platform.
 */ const getEdgeProxyContentUrl = (sitecoreEdgeContextId, sitecoreEdgeUrl = constants_1.SITECORE_EDGE_URL_DEFAULT)=>`${sitecoreEdgeUrl}/v1/content/api/graphql/v1?sitecoreContextId=${sitecoreEdgeContextId}`;
exports.getEdgeProxyContentUrl = getEdgeProxyContentUrl;


/***/ }),

/***/ 8455:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getEdgeProxyContentUrl = exports.SearchQueryService = exports.GraphQLRequestClient = exports.DefaultRetryStrategy = exports.getAppRootId = void 0;
var app_root_query_1 = __webpack_require__(2970);
Object.defineProperty(exports, "getAppRootId", ({
    enumerable: true,
    get: function() {
        return app_root_query_1.getAppRootId;
    }
}));
var graphql_request_client_1 = __webpack_require__(3920);
Object.defineProperty(exports, "DefaultRetryStrategy", ({
    enumerable: true,
    get: function() {
        return graphql_request_client_1.DefaultRetryStrategy;
    }
}));
Object.defineProperty(exports, "GraphQLRequestClient", ({
    enumerable: true,
    get: function() {
        return graphql_request_client_1.GraphQLRequestClient;
    }
}));
var search_service_1 = __webpack_require__(1814);
Object.defineProperty(exports, "SearchQueryService", ({
    enumerable: true,
    get: function() {
        return search_service_1.SearchQueryService;
    }
}));
var graphql_edge_proxy_1 = __webpack_require__(9790);
Object.defineProperty(exports, "getEdgeProxyContentUrl", ({
    enumerable: true,
    get: function() {
        return graphql_edge_proxy_1.getEdgeProxyContentUrl;
    }
}));


/***/ }),

/***/ 1814:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SearchQueryService = void 0;
/**
 * Provides functionality for performing GraphQL 'search' operations, including handling pagination.
 * This class is meant to be extended or used as a mixin; it's not meant to be used directly.
 * @template T The type of objects being requested.
 * @mixin
 */ class SearchQueryService {
    /**
     * Creates an instance of search query service.
     * @param {GraphQLClient} client that fetches data from a GraphQL endpoint.
     */ constructor(client){
        this.client = client;
    }
    /**
     * 1. Validates mandatory search query arguments
     * 2. Executes search query with pagination
     * 3. Aggregates pagination results into a single result-set.
     * @template T The type of objects being requested.
     * @param {string | DocumentNode} query the search query.
     * @param {SearchQueryVariables} args search query arguments.
     * @returns {T[]} array of result objects.
     * @throws {RangeError} if a valid root item ID is not provided.
     * @throws {RangeError} if the provided language(s) is(are) not valid.
     */ fetch(query, args) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            if (!args.rootItemId) {
                throw new RangeError('"rootItemId" and "language" must be non-empty strings');
            }
            if (!args.language) {
                throw new RangeError('"rootItemId" and "language" must be non-empty strings');
            }
            let results = [];
            let hasNext = true;
            let after = "";
            while(hasNext){
                const fetchResponse = yield this.client.request(query, Object.assign(Object.assign({}, args), {
                    after
                }));
                results = results.concat((_a = fetchResponse === null || fetchResponse === void 0 ? void 0 : fetchResponse.search) === null || _a === void 0 ? void 0 : _a.results);
                hasNext = fetchResponse.search.pageInfo.hasNext;
                after = fetchResponse.search.pageInfo.endCursor;
            }
            return results;
        });
    }
}
exports.SearchQueryService = SearchQueryService;


/***/ }),

/***/ 8114:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GraphQLPersonalizeService = void 0;
const graphql_request_client_1 = __webpack_require__(3920);
const debug_1 = __importDefault(__webpack_require__(9762));
const utils_1 = __webpack_require__(2412);
const utils_2 = __webpack_require__(6748);
const cache_client_1 = __webpack_require__(8120);
class GraphQLPersonalizeService {
    /**
     * Fetch personalize data using the Sitecore GraphQL endpoint.
     * @param {GraphQLPersonalizeServiceConfig} config
     */ constructor(config){
        this.config = config;
        this.config.timeout = config.timeout || 400;
        this.graphQLClient = this.getGraphQLClient();
        this.cache = this.getCacheClient();
    }
    get query() {
        return /* GraphQL */ `
      query($siteName: String!, $language: String!, $itemPath: String!) {
        layout(site: $siteName, routePath: $itemPath, language: $language) {
          item {
            id
            version
            personalization {
              variantIds
            }
          }
        }
      }
    `;
    }
    /**
     * Get personalize information for a route
     * @param {string} itemPath page route
     * @param {string} language language
     * @param {string} siteName site name
     * @returns {Promise<PersonalizeInfo | undefined>} the personalize information or undefined (if itemPath / language not found)
     */ getPersonalizeInfo(itemPath, language, siteName) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            debug_1.default.personalize("fetching personalize info for %s %s %s", siteName, itemPath, language);
            const cacheKey = this.getCacheKey(itemPath, language, siteName);
            let data = this.cache.getCacheValue(cacheKey);
            if (!data) {
                try {
                    data = yield this.graphQLClient.request(this.query, {
                        siteName,
                        itemPath,
                        language
                    });
                    this.cache.setCacheValue(cacheKey, data);
                } catch (error) {
                    if (utils_1.isTimeoutError(error)) {
                        return undefined;
                    }
                    throw error;
                }
            }
            return ((_a = data === null || data === void 0 ? void 0 : data.layout) === null || _a === void 0 ? void 0 : _a.item) ? {
                // CDP expects content id format `embedded_[<scope>_]<id>_<lang>` (lowercase)
                contentId: utils_2.CdpHelper.getContentId(data.layout.item.id, language, this.config.scope),
                variantIds: data.layout.item.personalization.variantIds
            } : undefined;
        });
    }
    /**
     * Gets cache client implementation
     * Override this method if custom cache needs to be used
     * @returns CacheClient instance
     */ getCacheClient() {
        var _a, _b;
        return new cache_client_1.MemoryCacheClient({
            cacheEnabled: (_a = this.config.cacheEnabled) !== null && _a !== void 0 ? _a : true,
            cacheTimeout: (_b = this.config.cacheTimeout) !== null && _b !== void 0 ? _b : 10
        });
    }
    getCacheKey(itemPath, language, siteName) {
        return `${siteName}-${itemPath}-${language}`;
    }
    /**
     * Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
     * library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
     * want to use something else.
     * @returns {GraphQLClient} implementation
     */ getGraphQLClient() {
        if (!this.config.endpoint) {
            if (!this.config.clientFactory) {
                throw new Error("You should provide either an endpoint and apiKey, or a clientFactory.");
            }
            return this.config.clientFactory({
                debugger: debug_1.default.personalize,
                fetch: this.config.fetch,
                timeout: this.config.timeout
            });
        }
        return new graphql_request_client_1.GraphQLRequestClient(this.config.endpoint, {
            apiKey: this.config.apiKey,
            debugger: debug_1.default.personalize,
            fetch: this.config.fetch,
            timeout: this.config.timeout
        });
    }
}
exports.GraphQLPersonalizeService = GraphQLPersonalizeService;


/***/ }),

/***/ 6529:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.CdpHelper = exports.normalizePersonalizedRewrite = exports.getPersonalizedRewriteData = exports.getPersonalizedRewrite = exports.GraphQLPersonalizeService = exports.personalizeLayout = void 0;
var layout_personalizer_1 = __webpack_require__(155);
Object.defineProperty(exports, "personalizeLayout", ({
    enumerable: true,
    get: function() {
        return layout_personalizer_1.personalizeLayout;
    }
}));
var graphql_personalize_service_1 = __webpack_require__(8114);
Object.defineProperty(exports, "GraphQLPersonalizeService", ({
    enumerable: true,
    get: function() {
        return graphql_personalize_service_1.GraphQLPersonalizeService;
    }
}));
var utils_1 = __webpack_require__(6748);
Object.defineProperty(exports, "getPersonalizedRewrite", ({
    enumerable: true,
    get: function() {
        return utils_1.getPersonalizedRewrite;
    }
}));
Object.defineProperty(exports, "getPersonalizedRewriteData", ({
    enumerable: true,
    get: function() {
        return utils_1.getPersonalizedRewriteData;
    }
}));
Object.defineProperty(exports, "normalizePersonalizedRewrite", ({
    enumerable: true,
    get: function() {
        return utils_1.normalizePersonalizedRewrite;
    }
}));
Object.defineProperty(exports, "CdpHelper", ({
    enumerable: true,
    get: function() {
        return utils_1.CdpHelper;
    }
}));


/***/ }),

/***/ 155:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.personalizeComponent = exports.personalizePlaceholder = exports.personalizeLayout = void 0;
/**
 * Apply personalization to layout data. This will recursively go through all placeholders/components, check experiences nodes and replace default with object from specific experience.
 * @param {LayoutServiceData} layout Layout data
 * @param {string} variantId variant id
 */ function personalizeLayout(layout, variantId) {
    var _a;
    // Add variantId to Sitecore context so that it is accessible here
    layout.sitecore.context.variantId = variantId;
    const placeholders = (_a = layout.sitecore.route) === null || _a === void 0 ? void 0 : _a.placeholders;
    if (Object.keys(placeholders !== null && placeholders !== void 0 ? placeholders : {}).length === 0) {
        return;
    }
    if (placeholders) {
        Object.keys(placeholders).forEach((placeholder)=>{
            placeholders[placeholder] = personalizePlaceholder(placeholders[placeholder], variantId);
        });
    }
}
exports.personalizeLayout = personalizeLayout;
/**

 * @param {Array} components components within placeholder
 * @param {string} variantId variant id
 * @returns {Array<ComponentRendering | HtmlElementRendering>} components with personalization applied
 */ function personalizePlaceholder(components, variantId) {
    return components.map((component)=>{
        const rendering = component;
        if (rendering.experiences !== undefined) {
            return personalizeComponent(rendering, variantId);
        } else if (rendering.placeholders) {
            const placeholders = rendering.placeholders;
            Object.keys(placeholders).forEach((placeholder)=>{
                placeholders[placeholder] = personalizePlaceholder(placeholders[placeholder], variantId);
            });
        }
        return component;
    }).filter(Boolean);
}
exports.personalizePlaceholder = personalizePlaceholder;
/**
 * @param {ComponentRenderingWithExperiences} component component with experiences
 * @param {string} variantId variant id
 * @returns {ComponentRendering | null} component with personalization applied or null if hidden
 */ function personalizeComponent(component, variantId) {
    const variant = component.experiences[variantId];
    if (variant === undefined && component.componentName === undefined) {
        // DEFAULT IS HIDDEN
        return null;
    } else if (variant && variant.componentName === null && variant.dataSource === null) {
        // HIDDEN
        return null;
    } else if (variant) {
        component = variant;
    }
    // remove unused experiences from layout data
    if (component.experiences) {
        component.experiences = {};
    }
    if (!component.placeholders) return component;
    Object.keys(component === null || component === void 0 ? void 0 : component.placeholders).forEach((placeholder)=>{
        if (component.placeholders) {
            component.placeholders[placeholder] = personalizePlaceholder(component.placeholders[placeholder], variantId);
        }
    });
    return component;
}
exports.personalizeComponent = personalizeComponent;


/***/ }),

/***/ 6748:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.CdpHelper = exports.normalizePersonalizedRewrite = exports.getPersonalizedRewriteData = exports.getPersonalizedRewrite = exports.VARIANT_PREFIX = exports.DEFAULT_VARIANT = void 0;
exports.DEFAULT_VARIANT = "_default";
exports.VARIANT_PREFIX = "_variantId_";
/**
 * Get a personalized rewrite path for given pathname
 * @param {string} pathname the pathname
 * @param {PersonalizedRewriteData} data the personalize data to include in the rewrite
 * @returns {string} the rewrite path
 */ function getPersonalizedRewrite(pathname, data) {
    const path = pathname.startsWith("/") ? pathname : "/" + pathname;
    return `/${exports.VARIANT_PREFIX}${data.variantId}${path}`;
}
exports.getPersonalizedRewrite = getPersonalizedRewrite;
/**
 * Get personalize data from the rewrite path
 * @param {string} pathname the pathname
 * @returns {PersonalizedRewriteData} the personalize data from the rewrite
 */ function getPersonalizedRewriteData(pathname) {
    const data = {
        variantId: exports.DEFAULT_VARIANT
    };
    const path = pathname.endsWith("/") ? pathname : pathname + "/";
    const result = path.match(`${exports.VARIANT_PREFIX}(.*?)\\/`);
    if (result) {
        data.variantId = result[1];
    }
    return data;
}
exports.getPersonalizedRewriteData = getPersonalizedRewriteData;
/**
 * Normalize a personalized rewrite path (remove personalize data)
 * @param {string} pathname the pathname
 * @returns {string} the pathname with personalize data removed
 */ function normalizePersonalizedRewrite(pathname) {
    if (!pathname.includes(exports.VARIANT_PREFIX)) {
        return pathname;
    }
    const result = pathname.match(`${exports.VARIANT_PREFIX}.*?(?:\\/|$)`);
    return result === null ? pathname : pathname.replace(result[0], "");
}
exports.normalizePersonalizedRewrite = normalizePersonalizedRewrite;
/**
 * Static utility class for Sitecore CDP
 */ class CdpHelper {
    /**
     * Gets the page variant id for CDP in the required format
     * @param {string} pageId the page id
     * @param {string} language the language
     * @param {string} variantId the variant id
     * @param {string} [scope] the scope value
     * @returns {string} the formatted page variant id
     */ static getPageVariantId(pageId, language, variantId, scope) {
        const formattedPageId = pageId.replace(/[{}-]/g, "");
        const formattedLanguage = language.replace("-", "_");
        const scopeId = scope ? `${this.normalizeScope(scope)}_` : "";
        let formattedVariantId = variantId;
        if (!variantId || variantId === exports.DEFAULT_VARIANT) {
            formattedVariantId = "default";
        }
        return `${scopeId}${formattedPageId}_${formattedLanguage}_${formattedVariantId}`.toLowerCase();
    }
    /**
     * Gets the content id for CDP in the required format `embedded_[<scope>_]<id>_<lang>`
     * @param {string} pageId the page id
     * @param {string} language the language
     * @param {string} [scope] the scope value
     * @returns {string} the content id
     */ static getContentId(pageId, language, scope) {
        const formattedPageId = pageId.replace(/[{}-]/g, "");
        const formattedLanguage = language.replace("-", "_");
        const scopeId = scope ? `${this.normalizeScope(scope)}_` : "";
        return `embedded_${scopeId}${formattedPageId}_${formattedLanguage}`.toLowerCase();
    }
    /**
     * Normalizes the scope from the given string value
     * Removes all non-alphanumeric characters
     * @param {string} [scope] the scope value
     * @returns {string} normalized scope value
     */ static normalizeScope(scope) {
        return (scope === null || scope === void 0 ? void 0 : scope.replace(/[^a-zA-Z0-9]+/g, "")) || "";
    }
}
exports.CdpHelper = CdpHelper;


/***/ }),

/***/ 7210:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GraphQLErrorPagesService = void 0;
const graphql_1 = __webpack_require__(8455);
const constants_1 = __webpack_require__(4602);
const debug_1 = __importDefault(__webpack_require__(9762));
// The default query for request error handling
const defaultQuery = /* GraphQL */ `
  query ErrorPagesQuery($siteName: String!, $language: String!) {
    site {
      siteInfo(site: $siteName) {
        errorHandling(language: $language) {
          notFoundPage {
            rendered
          }
          notFoundPagePath
          serverErrorPage {
            rendered
          }
          serverErrorPagePath
        }
      }
    }
  }
`;
/**
 * Service that fetch the error pages data using Sitecore's GraphQL API.
 */ class GraphQLErrorPagesService {
    /**
     * Creates an instance of graphQL error pages service with the provided options
     * @param {GraphQLErrorPagesServiceConfig} options instance
     */ constructor(options){
        this.options = options;
        this.graphQLClient = this.getGraphQLClient();
    }
    get query() {
        return defaultQuery;
    }
    /**
     * Fetch list of error pages for the site
     * @returns {ErrorPages} list of url's error pages
     * @throws {Error} if the siteName is empty.
     */ fetchErrorPages() {
        return __awaiter(this, void 0, void 0, function*() {
            const siteName = this.options.siteName;
            const language = this.options.language;
            if (!siteName) {
                throw new Error(constants_1.siteNameError);
            }
            return this.graphQLClient.request(this.query, {
                siteName,
                language
            }).then((result)=>result.site.siteInfo ? result.site.siteInfo.errorHandling : null).catch((e)=>Promise.reject(e));
        });
    }
    /**
     * Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
     * library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
     * want to use something else.
     * @returns {GraphQLClient} implementation
     */ getGraphQLClient() {
        if (!this.options.endpoint) {
            if (!this.options.clientFactory) {
                throw new Error("You should provide either an endpoint and apiKey, or a clientFactory.");
            }
            return this.options.clientFactory({
                debugger: debug_1.default.errorpages,
                retries: this.options.retries,
                retryStrategy: this.options.retryStrategy
            });
        }
        return new graphql_1.GraphQLRequestClient(this.options.endpoint, {
            apiKey: this.options.apiKey,
            debugger: debug_1.default.errorpages,
            retries: this.options.retries,
            retryStrategy: this.options.retryStrategy
        });
    }
}
exports.GraphQLErrorPagesService = GraphQLErrorPagesService;


/***/ }),

/***/ 825:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GraphQLRedirectsService = exports.REDIRECT_TYPE_SERVER_TRANSFER = exports.REDIRECT_TYPE_302 = exports.REDIRECT_TYPE_301 = void 0;
const graphql_1 = __webpack_require__(8455);
const constants_1 = __webpack_require__(4602);
const debug_1 = __importDefault(__webpack_require__(9762));
const cache_client_1 = __webpack_require__(8120);
exports.REDIRECT_TYPE_301 = "REDIRECT_301";
exports.REDIRECT_TYPE_302 = "REDIRECT_302";
exports.REDIRECT_TYPE_SERVER_TRANSFER = "SERVER_TRANSFER";
// The default query for request redirects of site
const defaultQuery = /* GraphQL */ `
  query RedirectsQuery($siteName: String!) {
    site {
      siteInfo(site: $siteName) {
        redirects {
          pattern
          target
          redirectType
          isQueryStringPreserved
          locale
        }
      }
    }
  }
`;
/**
 *  The GraphQLRedirectsService class is used to query the JSS redirects using Graphql endpoint
 */ class GraphQLRedirectsService {
    /**
     * Creates an instance of graphQL redirects service with the provided options
     * @param {GraphQLRedirectsServiceConfig} options instance
     */ constructor(options){
        this.options = options;
        this.graphQLClient = this.getGraphQLClient();
        this.cache = this.getCacheClient();
    }
    get query() {
        return defaultQuery;
    }
    /**
     * Fetch an array of redirects from API
     * @param {string} siteName site name
     * @returns Promise<RedirectInfo[]>
     * @throws {Error} if the siteName is empty.
     */ fetchRedirects(siteName) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            if (!siteName) {
                throw new Error(constants_1.siteNameError);
            }
            const cacheKey = `redirects-${siteName}`;
            let data = this.cache.getCacheValue(cacheKey);
            if (!data) {
                data = yield this.graphQLClient.request(this.query, {
                    siteName
                });
                this.cache.setCacheValue(cacheKey, data);
            }
            return ((_b = (_a = data === null || data === void 0 ? void 0 : data.site) === null || _a === void 0 ? void 0 : _a.siteInfo) === null || _b === void 0 ? void 0 : _b.redirects) || [];
        });
    }
    /**
     * Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
     * library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
     * want to use something else.
     * @returns {GraphQLClient} implementation
     */ getGraphQLClient() {
        if (!this.options.endpoint) {
            if (!this.options.clientFactory) {
                throw new Error("You should provide either an endpoint and apiKey, or a clientFactory.");
            }
            return this.options.clientFactory({
                debugger: debug_1.default.redirects,
                fetch: this.options.fetch
            });
        }
        return new graphql_1.GraphQLRequestClient(this.options.endpoint, {
            apiKey: this.options.apiKey,
            debugger: debug_1.default.redirects,
            fetch: this.options.fetch
        });
    }
    /**
     * Gets cache client implementation
     * Override this method if custom cache needs to be used
     * @returns CacheClient instance
     */ getCacheClient() {
        var _a, _b;
        return new cache_client_1.MemoryCacheClient({
            cacheEnabled: (_a = this.options.cacheEnabled) !== null && _a !== void 0 ? _a : true,
            cacheTimeout: (_b = this.options.cacheTimeout) !== null && _b !== void 0 ? _b : 10
        });
    }
}
exports.GraphQLRedirectsService = GraphQLRedirectsService;


/***/ }),

/***/ 7079:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GraphQLRobotsService = void 0;
const graphql_1 = __webpack_require__(8455);
const constants_1 = __webpack_require__(4602);
const debug_1 = __importDefault(__webpack_require__(9762));
// The default query for request robots.txt
const defaultQuery = /* GraphQL */ `
  query RobotsQuery($siteName: String!) {
    site {
      siteInfo(site: $siteName) {
        robots
      }
    }
  }
`;
/**
 * Service that fetch the robots.txt data using Sitecore's GraphQL API.
 */ class GraphQLRobotsService {
    /**
     * Creates an instance of graphQL robots.txt service with the provided options
     * @param {GraphQLRobotsServiceConfig} options instance
     */ constructor(options){
        this.options = options;
        this.graphQLClient = this.getGraphQLClient();
    }
    get query() {
        return defaultQuery;
    }
    /**
     * Fetch a data of robots.txt from API
     * @returns text of robots.txt
     * @throws {Error} if the siteName is empty.
     */ fetchRobots() {
        return __awaiter(this, void 0, void 0, function*() {
            const siteName = this.options.siteName;
            if (!siteName) {
                throw new Error(constants_1.siteNameError);
            }
            const robotsResult = this.graphQLClient.request(this.query, {
                siteName
            });
            try {
                return robotsResult.then((result)=>{
                    var _a, _b;
                    return (_b = (_a = result === null || result === void 0 ? void 0 : result.site) === null || _a === void 0 ? void 0 : _a.siteInfo) === null || _b === void 0 ? void 0 : _b.robots;
                });
            } catch (e) {
                return Promise.reject(e);
            }
        });
    }
    /**
     * Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
     * library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
     * want to use something else.
     * @returns {GraphQLClient} implementation
     */ getGraphQLClient() {
        if (!this.options.endpoint) {
            if (!this.options.clientFactory) {
                throw new Error("You should provide either an endpoint and apiKey, or a clientFactory.");
            }
            return this.options.clientFactory({
                debugger: debug_1.default.robots
            });
        }
        return new graphql_1.GraphQLRequestClient(this.options.endpoint, {
            apiKey: this.options.apiKey,
            debugger: debug_1.default.robots
        });
    }
}
exports.GraphQLRobotsService = GraphQLRobotsService;


/***/ }),

/***/ 5673:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GraphQLSiteInfoService = void 0;
const graphql_1 = __webpack_require__(8455);
const debug_1 = __importDefault(__webpack_require__(9762));
const cache_client_1 = __webpack_require__(8120);
const headlessSiteGroupingTemplate = "E46F3AF2-39FA-4866-A157-7017C4B2A40C";
const sitecoreContentRootItem = "0DE95AE4-41AB-4D01-9EB0-67441B7C2450";
const defaultQuery = /* GraphQL */ `
  query($pageSize: Int = 10, $after: String) {
    search(
      where: {
        AND: [
          { name: "_templates", value: "${headlessSiteGroupingTemplate}", operator: CONTAINS }
          { name: "_path", value: "${sitecoreContentRootItem}", operator: CONTAINS }
        ]
      }
      first: $pageSize
      after: $after
    ) {
      pageInfo {
        endCursor
        hasNext
      }
      results {
        ... on Item {
          name: field(name: "SiteName") {
            value
          }
          hostName: field(name: "Hostname") {
            value
          }
          language: field(name: "Language") {
            value
          }
        }
      }
    }
  }
`;
class GraphQLSiteInfoService {
    /**
     * Creates an instance of graphQL service to retrieve site configuration list from Sitecore
     * @param {GraphQLSiteInfoServiceConfig} config instance
     */ constructor(config){
        this.config = config;
        this.graphQLClient = this.getGraphQLClient();
        this.cache = this.getCacheClient();
    }
    get query() {
        return defaultQuery;
    }
    fetchSiteInfo() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            const cachedResult = this.cache.getCacheValue(this.getCacheKey());
            if (cachedResult) {
                return cachedResult;
            }
            if (process.env.SITECORE) {
                debug_1.default.multisite("Skipping site information fetch (building on XM Cloud)");
                return [];
            }
            const results = [];
            let hasNext = true;
            let after = "";
            while(hasNext){
                const response = yield this.graphQLClient.request(this.query, {
                    pageSize: this.config.pageSize,
                    after
                });
                const result = (_b = (_a = response === null || response === void 0 ? void 0 : response.search) === null || _a === void 0 ? void 0 : _a.results) === null || _b === void 0 ? void 0 : _b.reduce((result, current)=>{
                    result.push({
                        name: current.name.value,
                        hostName: current.hostName.value,
                        language: current.language.value
                    });
                    return result;
                }, []);
                results.push(...result);
                hasNext = response.search.pageInfo.hasNext;
                after = response.search.pageInfo.endCursor;
            }
            this.cache.setCacheValue(this.getCacheKey(), results);
            return results;
        });
    }
    /**
     * Gets cache client implementation
     * Override this method if custom cache needs to be used
     * @returns CacheClient instance
     */ getCacheClient() {
        var _a, _b;
        return new cache_client_1.MemoryCacheClient({
            cacheEnabled: (_a = this.config.cacheEnabled) !== null && _a !== void 0 ? _a : true,
            cacheTimeout: (_b = this.config.cacheTimeout) !== null && _b !== void 0 ? _b : 10
        });
    }
    /**
     * Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
     * library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
     * want to use something else.
     * @returns {GraphQLClient} implementation
     */ getGraphQLClient() {
        if (!this.config.endpoint) {
            if (!this.config.clientFactory) {
                throw new Error("You should provide either an endpoint and apiKey, or a clientFactory.");
            }
            return this.config.clientFactory({
                debugger: debug_1.default.multisite
            });
        }
        return new graphql_1.GraphQLRequestClient(this.config.endpoint, {
            apiKey: this.config.apiKey,
            debugger: debug_1.default.multisite
        });
    }
    getCacheKey() {
        return "siteinfo-service-cache";
    }
}
exports.GraphQLSiteInfoService = GraphQLSiteInfoService;


/***/ }),

/***/ 9061:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GraphQLSitemapXmlService = void 0;
const graphql_1 = __webpack_require__(8455);
const constants_1 = __webpack_require__(4602);
const debug_1 = __importDefault(__webpack_require__(9762));
const PREFIX_NAME_SITEMAP = "sitemap";
// The default query for request sitemaps
const defaultQuery = /* GraphQL */ `
  query SitemapQuery($siteName: String!) {
    site {
      siteInfo(site: $siteName) {
        sitemap
      }
    }
  }
`;
/**
 * Service that fetch the sitemaps data using Sitecore's GraphQL API.
 */ class GraphQLSitemapXmlService {
    /**
     * Creates an instance of graphQL sitemaps service with the provided options
     * @param {GraphQLSitemapXmlServiceConfig} options instance
     */ constructor(options){
        this.options = options;
        this.graphQLClient = this.getGraphQLClient();
    }
    get query() {
        return defaultQuery;
    }
    /**
     * Fetch list of sitemaps for the site
     * @returns {string[]} list of sitemap paths
     * @throws {Error} if the siteName is empty.
     */ fetchSitemaps() {
        return __awaiter(this, void 0, void 0, function*() {
            const siteName = this.options.siteName;
            if (!siteName) {
                throw new Error(constants_1.siteNameError);
            }
            const sitemapResult = this.graphQLClient.request(this.query, {
                siteName
            });
            try {
                return sitemapResult.then((result)=>result.site.siteInfo.sitemap);
            } catch (e) {
                return Promise.reject(e);
            }
        });
    }
    /**
     * Get sitemap file path for sitemap id
     * @param {string} id the sitemap id (can be empty for default 'sitemap.xml' file)
     * @returns {string | undefined} the sitemap file path or undefined if one doesn't exist
     */ getSitemap(id) {
        return __awaiter(this, void 0, void 0, function*() {
            const searchSitemap = `${PREFIX_NAME_SITEMAP}${id}.xml`;
            const sitemaps = yield this.fetchSitemaps();
            return sitemaps.find((sitemap)=>sitemap.includes(searchSitemap));
        });
    }
    /**
     * Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
     * library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
     * want to use something else.
     * @returns {GraphQLClient} implementation
     */ getGraphQLClient() {
        if (!this.options.endpoint) {
            if (!this.options.clientFactory) {
                throw new Error("You should provide either an endpoint and apiKey, or a clientFactory.");
            }
            return this.options.clientFactory({
                debugger: debug_1.default.sitemap
            });
        }
        return new graphql_1.GraphQLRequestClient(this.options.endpoint, {
            apiKey: this.options.apiKey,
            debugger: debug_1.default.sitemap
        });
    }
}
exports.GraphQLSitemapXmlService = GraphQLSitemapXmlService;


/***/ }),

/***/ 4562:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SiteResolver = exports.normalizeSiteRewrite = exports.getSiteRewriteData = exports.getSiteRewrite = exports.GraphQLSiteInfoService = exports.GraphQLErrorPagesService = exports.GraphQLSitemapXmlService = exports.GraphQLRedirectsService = exports.REDIRECT_TYPE_SERVER_TRANSFER = exports.REDIRECT_TYPE_302 = exports.REDIRECT_TYPE_301 = exports.GraphQLRobotsService = void 0;
var graphql_robots_service_1 = __webpack_require__(7079);
Object.defineProperty(exports, "GraphQLRobotsService", ({
    enumerable: true,
    get: function() {
        return graphql_robots_service_1.GraphQLRobotsService;
    }
}));
var graphql_redirects_service_1 = __webpack_require__(825);
Object.defineProperty(exports, "REDIRECT_TYPE_301", ({
    enumerable: true,
    get: function() {
        return graphql_redirects_service_1.REDIRECT_TYPE_301;
    }
}));
Object.defineProperty(exports, "REDIRECT_TYPE_302", ({
    enumerable: true,
    get: function() {
        return graphql_redirects_service_1.REDIRECT_TYPE_302;
    }
}));
Object.defineProperty(exports, "REDIRECT_TYPE_SERVER_TRANSFER", ({
    enumerable: true,
    get: function() {
        return graphql_redirects_service_1.REDIRECT_TYPE_SERVER_TRANSFER;
    }
}));
Object.defineProperty(exports, "GraphQLRedirectsService", ({
    enumerable: true,
    get: function() {
        return graphql_redirects_service_1.GraphQLRedirectsService;
    }
}));
var graphql_sitemap_service_1 = __webpack_require__(9061);
Object.defineProperty(exports, "GraphQLSitemapXmlService", ({
    enumerable: true,
    get: function() {
        return graphql_sitemap_service_1.GraphQLSitemapXmlService;
    }
}));
var graphql_error_pages_service_1 = __webpack_require__(7210);
Object.defineProperty(exports, "GraphQLErrorPagesService", ({
    enumerable: true,
    get: function() {
        return graphql_error_pages_service_1.GraphQLErrorPagesService;
    }
}));
var graphql_siteinfo_service_1 = __webpack_require__(5673);
Object.defineProperty(exports, "GraphQLSiteInfoService", ({
    enumerable: true,
    get: function() {
        return graphql_siteinfo_service_1.GraphQLSiteInfoService;
    }
}));
var utils_1 = __webpack_require__(519);
Object.defineProperty(exports, "getSiteRewrite", ({
    enumerable: true,
    get: function() {
        return utils_1.getSiteRewrite;
    }
}));
Object.defineProperty(exports, "getSiteRewriteData", ({
    enumerable: true,
    get: function() {
        return utils_1.getSiteRewriteData;
    }
}));
Object.defineProperty(exports, "normalizeSiteRewrite", ({
    enumerable: true,
    get: function() {
        return utils_1.normalizeSiteRewrite;
    }
}));
var site_resolver_1 = __webpack_require__(4147);
Object.defineProperty(exports, "SiteResolver", ({
    enumerable: true,
    get: function() {
        return site_resolver_1.SiteResolver;
    }
}));


/***/ }),

/***/ 4147:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SiteResolver = void 0;
// Delimiters for multi-value hostnames
const DELIMITERS = /\||,|;/g;
/**
 * Resolves site based on the provided host or site name
 */ class SiteResolver {
    /**
     * @param {SiteInfo[]} sites Array of sites to be used in resolution
     */ constructor(sites){
        this.sites = sites;
        /**
         * Resolve site by host name
         * @param {string} hostName the host name
         * @returns {SiteInfo} the resolved site
         * @throws {Error} if a matching site is not found
         */ this.getByHost = (hostName)=>{
            for (const [hostname, site] of this.getHostMap()){
                if (this.matchesPattern(hostName, hostname)) {
                    return site;
                }
            }
            throw new Error(`Could not resolve site for host ${hostName}`);
        };
        /**
         * Resolve site by site name
         * @param {string} siteName the site name
         * @returns {SiteInfo} the resolved site
         * @throws {Error} if a matching site is not found
         */ this.getByName = (siteName)=>{
            const siteInfo = this.sites.find((info)=>info.name.toLocaleLowerCase() === siteName.toLocaleLowerCase());
            if (!siteInfo) {
                throw new Error(`Could not resolve site for name ${siteName}`);
            }
            return siteInfo;
        };
        this.getHostMap = ()=>{
            const map = new Map();
            // First collect unique hostnames.
            // For sites with same hostname defined, priority is given to the first encountered.
            this.sites.forEach((site)=>{
                const hostnames = site.hostName.replace(/\s/g, "").toLocaleLowerCase().split(DELIMITERS);
                hostnames.forEach((hostname)=>{
                    if (!map.has(hostname)) {
                        map.set(hostname, site);
                    }
                });
            });
            // Now order by specificity.
            // This equivalates to sorting from longest to shortest with the assumption
            // that your match is less specific as wildcards are introduced.
            // E.g. order.eu.site.com → *.eu.site.com → *.site.com → *
            // In case of a tie (e.g. *.site.com vs i.site.com), prefer one with less wildcards.
            return new Map(Array.from(map).sort((a, b)=>{
                if (a[0].length === b[0].length) {
                    return (a[0].match(/\*/g) || []).length - (b[0].match(/\*/g) || []).length;
                }
                return b[0].length - a[0].length;
            }));
        };
    }
    // b[0].match(/\*/g) || []).length
    matchesPattern(hostname, pattern) {
        // dots should be treated as chars
        // stars should be treated as wildcards
        const regExpPattern = pattern.replace(/\./g, "\\.").replace(/\*/g, ".*");
        const regExp = new RegExp(`^${regExpPattern}$`, "gi");
        return !!hostname.match(regExp);
    }
}
exports.SiteResolver = SiteResolver;


/***/ }),

/***/ 519:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizeSiteRewrite = exports.getSiteRewriteData = exports.getSiteRewrite = exports.SITE_PREFIX = void 0;
exports.SITE_PREFIX = "_site_";
/**
 * Get a site rewrite path for given pathname
 * @param {string} pathname the pathname
 * @param {SiteRewriteData} data the site data to include in the rewrite
 * @returns {string} the rewrite path
 */ function getSiteRewrite(pathname, data) {
    const path = pathname.startsWith("/") ? pathname : "/" + pathname;
    return `/${exports.SITE_PREFIX}${data.siteName}${path}`;
}
exports.getSiteRewrite = getSiteRewrite;
/**
 * Get site data from the rewrite path
 * @param {string} pathname the pathname
 * @param {string} defaultSiteName the default site name
 * @returns {SiteRewriteData} the site data from the rewrite
 */ function getSiteRewriteData(pathname, defaultSiteName) {
    const data = {
        siteName: defaultSiteName
    };
    const path = pathname.endsWith("/") ? pathname : pathname + "/";
    const result = path.match(`${exports.SITE_PREFIX}(.*?)\\/`);
    if (result && result[1] !== "") {
        data.siteName = result[1];
    }
    return data;
}
exports.getSiteRewriteData = getSiteRewriteData;
/**
 * Normalize a site rewrite path (remove site data)
 * @param {string} pathname the pathname
 * @returns {string} the pathname with site data removed
 */ function normalizeSiteRewrite(pathname) {
    const result = pathname.match(`${exports.SITE_PREFIX}.*?(?:\\/|$)`);
    return result === null ? pathname : pathname.replace(result[0], "");
}
exports.normalizeSiteRewrite = normalizeSiteRewrite;


/***/ }),

/***/ 8472:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.commandBuilder = exports.mapButtonToCommand = exports.DefaultEditFrameButtons = exports.DefaultEditFrameButton = exports.DefaultEditFrameButtonIds = void 0;
exports.DefaultEditFrameButtonIds = {
    edit: "{70C4EED5-D4CD-4D7D-9763-80C42504F5E7}"
};
exports.DefaultEditFrameButton = {
    insert: {
        header: "Insert New",
        icon: "/~/icon/Office/16x16/insert_from_template.png",
        click: "webedit:new",
        tooltip: "Insert a new item"
    },
    editRelatedItem: {
        header: "Edit the related item",
        icon: "/~/icon/Office/16x16/cubes.png",
        click: "webedit:open",
        tooltip: "Edit the related item in the Content Editor."
    },
    edit: {
        header: "Edit Item",
        icon: "/~/icon/people/16x16/cubes_blue.png",
        fields: [
            "Title",
            "Text"
        ],
        tooltip: "Edit the item fields."
    }
};
exports.DefaultEditFrameButtons = [
    exports.DefaultEditFrameButton.editRelatedItem,
    exports.DefaultEditFrameButton.insert,
    exports.DefaultEditFrameButton.edit
];
/**
 * @param {WebEditButton | FieldEditButton} button the button to determine the type of
 */ function isWebEditButton(button) {
    return button.click !== undefined;
}
/**
 * Map the edit button types to chrome data
 * @param {EditButtonTypes } button the edit button to build a ChromeCommand for
 * @param {string} itemId the ID of the item the EditFrame is associated with
 * @param {Record<string, string | number | boolean | undefined | null>} frameParameters additional parameters passed to the EditFrame
 */ function mapButtonToCommand(button, itemId, frameParameters) {
    if (button === "|" || button.isDivider) {
        return {
            click: "chrome:dummy",
            header: "Separator",
            icon: "",
            isDivider: true,
            tooltip: null,
            type: "separator"
        };
    } else if (isWebEditButton(button)) {
        return commandBuilder(button, itemId, frameParameters);
    } else {
        const fieldsString = button.fields.join("|");
        const editButton = Object.assign({
            click: `webedit:fieldeditor(command=${exports.DefaultEditFrameButtonIds.edit},fields=${fieldsString})`
        }, button);
        return commandBuilder(editButton, itemId, frameParameters);
    }
}
exports.mapButtonToCommand = mapButtonToCommand;
/**
 * Build a ChromeCommand from a web edit button. Merging the parameters from the button, frame and id
 * @param {WebEditButton } button the web edit button to build a ChromeCommand for
 * @param {string} itemId the ID of the item the EditFrame is associated with
 * @param {Record<string, string>} frameParameters additional parameters passed to the EditFrame
 */ function commandBuilder(button, itemId, frameParameters) {
    if (!button.click) {
        return Object.assign({
            isDivider: false,
            type: button.type || null,
            header: button.header || "",
            icon: button.icon || "",
            tooltip: button.tooltip || ""
        }, button);
    } else if (button.click.startsWith("javascript:") || button.click.startsWith("chrome:")) {
        return Object.assign({
            isDivider: false,
            type: button.type || null,
            header: button.header || "",
            icon: button.icon || "",
            tooltip: button.tooltip || ""
        }, button);
    } else {
        if (!itemId) {
            return Object.assign({
                isDivider: false,
                type: button.type || null,
                header: button.header || "",
                icon: button.icon || "",
                tooltip: button.tooltip || ""
            }, button);
        } else {
            let message = button.click;
            let parameters = {};
            // Extract any parameters already in the command
            const length = button.click.indexOf("(");
            if (length >= 0) {
                const end = button.click.indexOf(")");
                if (end < 0) {
                    throw new Error('Message with arguments must end with ")".');
                }
                parameters = button.click.substring(length + 1, end).split(",").map((_)=>_.trim()).reduce((previous, current)=>{
                    const parts = current.split("=");
                    if (parts.length < 2) {
                        previous[parts[0]] = "";
                    } else {
                        previous[parts[0]] = parts[1];
                    }
                    return previous;
                }, {});
                message = button.click.substring(0, length);
            }
            parameters.id = itemId;
            if (button.parameters) {
                Object.keys(button.parameters).forEach((_)=>{
                    var _a;
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    parameters[_] = ((_a = button.parameters[_]) === null || _a === void 0 ? void 0 : _a.toString()) || "";
                });
            }
            if (frameParameters) {
                Object.keys(frameParameters).forEach((_)=>{
                    var _a;
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    parameters[_] = ((_a = frameParameters[_]) === null || _a === void 0 ? void 0 : _a.toString()) || "";
                });
            }
            const parameterString = Object.keys(parameters).map((_)=>`${_}=${parameters[_]}`).join(", ");
            const click = `${message}(${parameterString})`;
            return {
                isDivider: false,
                click: `javascript:Sitecore.PageModes.PageEditor.postRequest('${click}',null,false)`,
                header: button.header || "",
                icon: button.icon || "",
                tooltip: button.tooltip || "",
                type: button.type || null
            };
        }
    }
}
exports.commandBuilder = commandBuilder;


/***/ }),

/***/ 6984:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handleEditorAnchors = exports.resetEditorChromes = exports.isEditorActive = exports.HorizonEditor = exports.ChromeRediscoveryGlobalFunctionName = exports.ExperienceEditor = void 0;
const is_server_1 = __importDefault(__webpack_require__(605));
/**
 * Static utility class for Sitecore Experience Editor
 */ class ExperienceEditor {
    /**
     * Determines whether the current execution context is within a Experience Editor.
     * Experience Editor environment can be identified only in the browser
     * @returns true if executing within a Experience Editor
     */ static isActive() {
        if (is_server_1.default()) {
            return false;
        }
        // eslint-disable-next-line
        const sc = window.Sitecore;
        return Boolean(sc && sc.PageModes && sc.PageModes.ChromeManager);
    }
    static resetChromes() {
        if (is_server_1.default()) {
            return;
        }
        window.Sitecore.PageModes.ChromeManager.resetChromes();
    }
}
exports.ExperienceEditor = ExperienceEditor;
/**
 * Copy of chrome rediscovery contract from Horizon (chrome-rediscovery.contract.ts)
 */ exports.ChromeRediscoveryGlobalFunctionName = {
    name: "Sitecore.Horizon.ResetChromes"
};
/**
 * Static utility class for Sitecore Horizon Editor
 */ class HorizonEditor {
    /**
     * Determines whether the current execution context is within a Horizon Editor.
     * Horizon Editor environment can be identified only in the browser
     * @returns true if executing within a Horizon Editor
     */ static isActive() {
        if (is_server_1.default()) {
            return false;
        }
        // Horizon will add "sc_horizon=editor" query string parameter for the editor and "sc_horizon=simulator" for the preview
        return window.location.search.indexOf("sc_horizon=editor") > -1;
    }
    static resetChromes() {
        if (is_server_1.default()) {
            return;
        }
        // Reset chromes in Horizon
        window[exports.ChromeRediscoveryGlobalFunctionName.name] && window[exports.ChromeRediscoveryGlobalFunctionName.name]();
    }
}
exports.HorizonEditor = HorizonEditor;
/**
 * Determines whether the current execution context is within a Sitecore editor.
 * Sitecore Editor environment can be identified only in the browser
 * @returns true if executing within a Sitecore editor
 */ const isEditorActive = ()=>{
    return ExperienceEditor.isActive() || HorizonEditor.isActive();
};
exports.isEditorActive = isEditorActive;
/**
 * Resets Sitecore editor "chromes"
 */ const resetEditorChromes = ()=>{
    if (ExperienceEditor.isActive()) {
        ExperienceEditor.resetChromes();
    } else if (HorizonEditor.isActive()) {
        HorizonEditor.resetChromes();
    }
};
exports.resetEditorChromes = resetEditorChromes;
/**
 * @description in Experience Editor, anchor tags
 * with both onclick and href attributes will use the href, blocking the onclick from firing.
 * This function makes it so the anchor tags function as intended in the sample when using Experience Editor
 *
 * The Mutation Observer API is used to observe changes to the body, then select all elements with href="#" and an onclick,
 * and replaces the # value with javascript:void(0); which prevents the anchor tag from blocking the onclick event handler.
 * @see Mutation Observer API: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver
 */ const handleEditorAnchors = ()=>{
    // The sample gives the href attribute priority over the onclick attribute if both are present, so we must replace
    // the href attribute to avoid overriding the onclick in Experience Editor
    if (!window || !ExperienceEditor.isActive()) {
        return;
    }
    const targetNode = document.querySelector("body");
    const callback = (mutationList)=>{
        mutationList.forEach((mutation)=>{
            const btns = document.querySelectorAll('.scChromeDropDown > a[href="#"], .scChromeDropDown > a[href="#!"], a[onclick]');
            if (mutation.type === "childList") {
                btns.forEach((link)=>{
                    link.href = "javascript:void(0);";
                });
            }
            return;
        });
    };
    const observer = new MutationObserver(callback);
    const observerOptions = {
        childList: true,
        subtree: true
    };
    if (targetNode) {
        observer.observe(targetNode, observerOptions);
    }
};
exports.handleEditorAnchors = handleEditorAnchors;


/***/ }),

/***/ 31:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.tryParseEnvValue = void 0;
/**
 * Method to parse JSON-formatted environment variables
 * @param {string} envValue - can be undefined when providing values via process.env
 * @param {T} defaultValue - default value
 * @returns {T | string} parsed value
 */ const tryParseEnvValue = (envValue, defaultValue)=>{
    if (!envValue) {
        return defaultValue;
    }
    if (envValue.startsWith("{") && envValue.endsWith("}")) {
        try {
            return JSON.parse(envValue);
        } catch (error) {
            console.warn("Parsing of env variable failed");
            console.warn(`Attempted to parse ${envValue}`);
            return defaultValue;
        }
    }
    return defaultValue;
};
exports.tryParseEnvValue = tryParseEnvValue;


/***/ }),

/***/ 2412:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mapButtonToCommand = exports.DefaultEditFrameButtonIds = exports.DefaultEditFrameButtons = exports.DefaultEditFrameButton = exports.handleEditorAnchors = exports.resetEditorChromes = exports.isEditorActive = exports.HorizonEditor = exports.ExperienceEditor = exports.tryParseEnvValue = exports.isTimeoutError = exports.isAbsoluteUrl = exports.resolveUrl = exports.isServer = void 0;
var is_server_1 = __webpack_require__(605);
Object.defineProperty(exports, "isServer", ({
    enumerable: true,
    get: function() {
        return __importDefault(is_server_1).default;
    }
}));
var utils_1 = __webpack_require__(5920);
Object.defineProperty(exports, "resolveUrl", ({
    enumerable: true,
    get: function() {
        return utils_1.resolveUrl;
    }
}));
Object.defineProperty(exports, "isAbsoluteUrl", ({
    enumerable: true,
    get: function() {
        return utils_1.isAbsoluteUrl;
    }
}));
Object.defineProperty(exports, "isTimeoutError", ({
    enumerable: true,
    get: function() {
        return utils_1.isTimeoutError;
    }
}));
var env_1 = __webpack_require__(31);
Object.defineProperty(exports, "tryParseEnvValue", ({
    enumerable: true,
    get: function() {
        return env_1.tryParseEnvValue;
    }
}));
var editing_1 = __webpack_require__(6984);
Object.defineProperty(exports, "ExperienceEditor", ({
    enumerable: true,
    get: function() {
        return editing_1.ExperienceEditor;
    }
}));
Object.defineProperty(exports, "HorizonEditor", ({
    enumerable: true,
    get: function() {
        return editing_1.HorizonEditor;
    }
}));
Object.defineProperty(exports, "isEditorActive", ({
    enumerable: true,
    get: function() {
        return editing_1.isEditorActive;
    }
}));
Object.defineProperty(exports, "resetEditorChromes", ({
    enumerable: true,
    get: function() {
        return editing_1.resetEditorChromes;
    }
}));
Object.defineProperty(exports, "handleEditorAnchors", ({
    enumerable: true,
    get: function() {
        return editing_1.handleEditorAnchors;
    }
}));
var edit_frame_1 = __webpack_require__(8472);
Object.defineProperty(exports, "DefaultEditFrameButton", ({
    enumerable: true,
    get: function() {
        return edit_frame_1.DefaultEditFrameButton;
    }
}));
Object.defineProperty(exports, "DefaultEditFrameButtons", ({
    enumerable: true,
    get: function() {
        return edit_frame_1.DefaultEditFrameButtons;
    }
}));
Object.defineProperty(exports, "DefaultEditFrameButtonIds", ({
    enumerable: true,
    get: function() {
        return edit_frame_1.DefaultEditFrameButtonIds;
    }
}));
Object.defineProperty(exports, "mapButtonToCommand", ({
    enumerable: true,
    get: function() {
        return edit_frame_1.mapButtonToCommand;
    }
}));


/***/ }),

/***/ 605:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
/**
 * Determines whether the current execution context is server-side
 * @returns true if executing server-side
 */ function isServer() {
    return !( false && 0);
}
exports["default"] = isServer;


/***/ }),

/***/ 1144:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
/**
 * A helper to assign timeouts to fetch or other promises
 * Useful in nextjs middleware until fetch.signal is fully supported by Vercel edge functions
 */ class TimeoutPromise {
    constructor(timeout){
        this.timeout = timeout;
        this.timeoutId = undefined;
    }
    /**
     * Creates a timeout promise
     */ get start() {
        return new Promise((_, reject)=>{
            this.timeoutId = setTimeout(()=>{
                const abortError = new Error(`Request timed out, timeout of ${this.timeout}ms is exceeded`);
                abortError.name = "AbortError";
                reject(abortError);
            }, this.timeout);
        });
    }
    /**
     * Clears the timeout from timeout promise
     */ clear() {
        this.timeoutId && clearTimeout(this.timeoutId);
    }
}
exports["default"] = TimeoutPromise;


/***/ }),

/***/ 5920:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isTimeoutError = exports.isAbsoluteUrl = exports.resolveUrl = void 0;
const is_server_1 = __importDefault(__webpack_require__(605));
/**
 * note: encodeURIComponent is available via browser (window) or natively in node.js
 * if you use another js engine for server-side rendering you may not have native encodeURIComponent
 * and would then need to install a package for that functionality
 * @param {ParsedUrlQueryInput} params query string parameters
 * @returns {string} query string
 */ function getQueryString(params) {
    return Object.keys(params).map((k)=>`${encodeURIComponent(k)}=${encodeURIComponent(String(params[k]))}`).join("&");
}
/**
 * Resolves a base URL that may contain query string parameters and an additional set of query
 * string parameters into a unified string representation.
 * @param {string} urlBase the base URL that may contain query string parameters
 * @param {ParsedUrlQueryInput} params query string parameters
 * @returns a URL string
 * @throws {RangeError} if the provided url is an empty string
 */ function resolveUrl(urlBase, params = {}) {
    if (!urlBase) {
        throw new RangeError("url must be a non-empty string");
    }
    // This is a better way to work with URLs since it handles different user input
    // edge cases. This works in Node and all browser except IE11.
    // https://developer.mozilla.org/en-US/docs/Web/API/URL
    // TODO: Verify our browser support requirements.
    if (is_server_1.default()) {
        const url = new URL(urlBase);
        for(const key in params){
            if (({}).hasOwnProperty.call(params, key)) {
                url.searchParams.append(key, String(params[key]));
            }
        }
        const result = url.toString();
        return result;
    }
    const qs = getQueryString(params);
    const result = urlBase.indexOf("?") !== -1 ? `${urlBase}&${qs}` : `${urlBase}?${qs}`;
    return result;
}
exports.resolveUrl = resolveUrl;
const isAbsoluteUrl = (url)=>{
    if (!url) {
        return false;
    }
    if (typeof url !== "string") {
        throw new TypeError("Expected a string");
    }
    return /^[a-z][a-z0-9+.-]*:/.test(url);
};
exports.isAbsoluteUrl = isAbsoluteUrl;
/**
 * Indicates whether the error is a timeout error
 * @param {unknown} error error
 * @returns {boolean} is timeout error
 */ const isTimeoutError = (error)=>{
    var _a;
    return error.code === "408" || error.code === "ECONNABORTED" || error.code === "ETIMEDOUT" || ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 408 || error.name === "AbortError";
};
exports.isTimeoutError = isTimeoutError;


/***/ }),

/***/ 4880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AxiosDataFetcher: () => (/* reexport */ AxiosDataFetcher),
  ClientError: () => (/* reexport */ dist.ClientError),
  DefaultRetryStrategy: () => (/* reexport */ DefaultRetryStrategy),
  GraphQLRequestClient: () => (/* reexport */ GraphQLRequestClient),
  NativeDataFetcher: () => (/* reexport */ NativeDataFetcher),
  constants: () => (/* reexport */ constants_namespaceObject),
  debug: () => (/* reexport */ esm_debug),
  enableDebug: () => (/* reexport */ enableDebug),
  fetchData: () => (/* reexport */ fetchData)
});

// NAMESPACE OBJECT: ./node_modules/@sitecore-jss/sitecore-jss/dist/esm/constants.js
var constants_namespaceObject = {};
__webpack_require__.r(constants_namespaceObject);
__webpack_require__.d(constants_namespaceObject, {
  FETCH_WITH: () => (FETCH_WITH),
  JSS_MODE: () => (JSS_MODE),
  SITECORE_EDGE_URL_DEFAULT: () => (SITECORE_EDGE_URL_DEFAULT),
  SitecoreTemplateId: () => (SitecoreTemplateId),
  siteNameError: () => (siteNameError)
});

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/dist/esm/constants.js
var SitecoreTemplateId;
(function(SitecoreTemplateId) {
    // /sitecore/templates/Foundation/JavaScript Services/App
    SitecoreTemplateId["JssApp"] = "061cba1554744b918a0617903b102b82";
    // /sitecore/templates/System/Dictionary/Dictionary entry
    SitecoreTemplateId["DictionaryEntry"] = "6d1cd89719364a3aa511289a94c2a7b1";
})(SitecoreTemplateId || (SitecoreTemplateId = {}));
const FETCH_WITH = {
    GRAPHQL: "GraphQL",
    REST: "Rest"
};
const JSS_MODE = {
    CONNECTED: "connected",
    DISCONNECTED: "disconnected"
};
const siteNameError = "The siteName cannot be empty";
const SITECORE_EDGE_URL_DEFAULT = "https://edge-platform.sitecorecloud.io";

// EXTERNAL MODULE: ./node_modules/debug/src/browser.js
var browser = __webpack_require__(1885);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/dist/esm/utils/is-server.js
/**
 * Determines whether the current execution context is server-side
 * @returns true if executing server-side
 */ function isServer() {
    return !( false && 0);
}
/* harmony default export */ const is_server = (isServer);

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/dist/esm/debug.js
var _a;


const rootNamespace = "sitecore-jss";
// On server/node side, allow switching from the built-in
// `%o` (pretty-print single line) and `%O` (pretty-print multiple line)
// with a `DEBUG_MULTILINE` environment variable.
if (is_server() && ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.DEBUG_MULTILINE) === "true" && (browser_default()).formatters.o && (browser_default()).formatters.O) {
    (browser_default()).formatters.o = (browser_default()).formatters.O;
}
/**
 * Enable debug logging dynamically
 * @param {string} namespaces space-separated list of namespaces to enable
 */ const enableDebug = (namespaces)=>browser_default().enable(namespaces);
/**
 * Default Sitecore JSS 'debug' module debuggers. Uses namespace prefix 'sitecore-jss:'.
 * See {@link https://www.npmjs.com/package/debug} for details.
 */ /* harmony default export */ const esm_debug = ({
    common: browser_default()(`${rootNamespace}:common`),
    http: browser_default()(`${rootNamespace}:http`),
    layout: browser_default()(`${rootNamespace}:layout`),
    dictionary: browser_default()(`${rootNamespace}:dictionary`),
    editing: browser_default()(`${rootNamespace}:editing`),
    sitemap: browser_default()(`${rootNamespace}:sitemap`),
    multisite: browser_default()(`${rootNamespace}:multisite`),
    robots: browser_default()(`${rootNamespace}:robots`),
    redirects: browser_default()(`${rootNamespace}:redirects`),
    personalize: browser_default()(`${rootNamespace}:personalize`),
    errorpages: browser_default()(`${rootNamespace}:errorpages`)
});

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/dist/esm/utils/utils.js

/**
 * note: encodeURIComponent is available via browser (window) or natively in node.js
 * if you use another js engine for server-side rendering you may not have native encodeURIComponent
 * and would then need to install a package for that functionality
 * @param {ParsedUrlQueryInput} params query string parameters
 * @returns {string} query string
 */ function getQueryString(params) {
    return Object.keys(params).map((k)=>`${encodeURIComponent(k)}=${encodeURIComponent(String(params[k]))}`).join("&");
}
/**
 * Resolves a base URL that may contain query string parameters and an additional set of query
 * string parameters into a unified string representation.
 * @param {string} urlBase the base URL that may contain query string parameters
 * @param {ParsedUrlQueryInput} params query string parameters
 * @returns a URL string
 * @throws {RangeError} if the provided url is an empty string
 */ function resolveUrl(urlBase, params = {}) {
    if (!urlBase) {
        throw new RangeError("url must be a non-empty string");
    }
    // This is a better way to work with URLs since it handles different user input
    // edge cases. This works in Node and all browser except IE11.
    // https://developer.mozilla.org/en-US/docs/Web/API/URL
    // TODO: Verify our browser support requirements.
    if (is_server()) {
        const url = new URL(urlBase);
        for(const key in params){
            if (({}).hasOwnProperty.call(params, key)) {
                url.searchParams.append(key, String(params[key]));
            }
        }
        const result = url.toString();
        return result;
    }
    const qs = getQueryString(params);
    const result = urlBase.indexOf("?") !== -1 ? `${urlBase}&${qs}` : `${urlBase}?${qs}`;
    return result;
}
const isAbsoluteUrl = (url)=>{
    if (!url) {
        return false;
    }
    if (typeof url !== "string") {
        throw new TypeError("Expected a string");
    }
    return /^[a-z][a-z0-9+.-]*:/.test(url);
};
/**
 * Indicates whether the error is a timeout error
 * @param {unknown} error error
 * @returns {boolean} is timeout error
 */ const isTimeoutError = (error)=>{
    var _a;
    return error.code === "408" || error.code === "ECONNABORTED" || error.code === "ETIMEDOUT" || ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 408 || error.name === "AbortError";
};

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/dist/esm/data-fetcher.js

class ResponseError extends Error {
    constructor(message, response){
        super(message);
        Object.setPrototypeOf(this, ResponseError.prototype);
        this.response = response;
    }
}
/**
 * @param {HttpResponse<T>} response the response to check
 * @throws {ResponseError} if response code is not ok
 */ function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new ResponseError(response.statusText, response);
    throw error;
}
/**
 * @param {string} url the URL to request; may include query string
 * @param {HttpDataFetcher} fetcher the fetcher to use to perform the request
 * @param {ParsedUrlQueryInput} params the query string parameters to send with the request
 */ function fetchData(url, fetcher, params = {}) {
    return fetcher(resolveUrl(url, params)).then(checkStatus).then((response)=>{
        // axios auto-parses JSON responses, don't need to JSON.parse
        return response.data;
    });
}

// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql-request/dist/index.js
var dist = __webpack_require__(284);
// EXTERNAL MODULE: ./node_modules/url-parse/index.js
var url_parse = __webpack_require__(5911);
var url_parse_default = /*#__PURE__*/__webpack_require__.n(url_parse);
;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/dist/esm/utils/timeout-promise.js
/**
 * A helper to assign timeouts to fetch or other promises
 * Useful in nextjs middleware until fetch.signal is fully supported by Vercel edge functions
 */ class TimeoutPromise {
    constructor(timeout){
        this.timeout = timeout;
        this.timeoutId = undefined;
    }
    /**
     * Creates a timeout promise
     */ get start() {
        return new Promise((_, reject)=>{
            this.timeoutId = setTimeout(()=>{
                const abortError = new Error(`Request timed out, timeout of ${this.timeout}ms is exceeded`);
                abortError.name = "AbortError";
                reject(abortError);
            }, this.timeout);
        });
    }
    /**
     * Clears the timeout from timeout promise
     */ clear() {
        this.timeoutId && clearTimeout(this.timeoutId);
    }
}

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/dist/esm/graphql-request-client.js
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * Represents a default retry strategy for handling retry attempts in case of specific HTTP status codes.
 * This class implements the RetryStrategy interface and provides methods to determine whether a request
 * should be retried and calculates the delay before the next retry attempt.
 */ class DefaultRetryStrategy {
    /**
     * @param {Object} options Configurable options for retry mechanism.
     * @param {number[]} options.statusCodes HTTP status codes to trigger retries on
     * @param {number} options.factor Factor by which the delay increases with each retry attempt
     */ constructor(options = {}){
        this.statusCodes = options.statusCodes || [
            429
        ];
        this.factor = options.factor || 2;
    }
    shouldRetry(error, attempt, retries) {
        var _a;
        return retries > 0 && attempt <= retries && ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) !== undefined && this.statusCodes.includes(error.response.status);
    }
    getDelay(error, attempt) {
        var _a;
        const rawHeaders = (_a = error.response) === null || _a === void 0 ? void 0 : _a.headers;
        const delaySeconds = (rawHeaders === null || rawHeaders === void 0 ? void 0 : rawHeaders.get("Retry-After")) ? Number.parseInt(rawHeaders === null || rawHeaders === void 0 ? void 0 : rawHeaders.get("Retry-After"), 10) : Math.pow(this.factor, attempt - 1);
        return delaySeconds * 1000;
    }
}
/**
 * A GraphQL client for Sitecore APIs that uses the 'graphql-request' library.
 * https://github.com/prisma-labs/graphql-request
 */ class GraphQLRequestClient {
    /**
     * Provides ability to execute graphql query using given `endpoint`
     * @param {string} endpoint The Graphql endpoint
     * @param {GraphQLRequestClientConfig} [clientConfig] GraphQL request client configuration.
     */ constructor(endpoint, clientConfig = {}){
        this.endpoint = endpoint;
        this.headers = {};
        if (clientConfig.apiKey) {
            this.headers.sc_apikey = clientConfig.apiKey;
        }
        if (!endpoint || !url_parse_default()(endpoint).hostname) {
            throw new Error(`Invalid GraphQL endpoint '${endpoint}'. Verify that 'layoutServiceHost' property in 'scjssconfig.json' file or appropriate environment variable is set`);
        }
        this.timeout = clientConfig.timeout;
        this.retries = clientConfig.retries || 0;
        this.retryStrategy = clientConfig.retryStrategy || new DefaultRetryStrategy({
            statusCodes: [
                429,
                502,
                503,
                504,
                520,
                521,
                522,
                523,
                524
            ]
        });
        this.client = new dist.GraphQLClient(endpoint, {
            headers: this.headers,
            fetch: clientConfig.fetch
        });
        this.debug = clientConfig.debugger || esm_debug.http;
    }
    /**
     * Factory method for creating a GraphQLRequestClientFactory.
     * @param {Object} config - client configuration options.
     * @param {string} config.endpoint - endpoint
     * @param {string} [config.apiKey] - apikey
     */ static createClientFactory({ endpoint, apiKey }) {
        return (config = {})=>new GraphQLRequestClient(endpoint, Object.assign(Object.assign({}, config), {
                apiKey
            }));
    }
    /**
     * Execute graphql request
     * @param {string | DocumentNode} query graphql query
     * @param {Object} variables graphql variables
     */ request(query, variables) {
        return __awaiter(this, void 0, void 0, function*() {
            let attempt = 1;
            const retryer = ()=>__awaiter(this, void 0, void 0, function*() {
                    // Note we don't have access to raw request/response with graphql-request
                    // (or nice hooks like we have with Axios), but we should log whatever we have.
                    this.debug("request: %o", {
                        url: this.endpoint,
                        headers: this.headers,
                        query,
                        variables
                    });
                    const startTimestamp = Date.now();
                    const fetchWithOptionalTimeout = [
                        this.client.request(query, variables)
                    ];
                    if (this.timeout) {
                        this.abortTimeout = new TimeoutPromise(this.timeout);
                        fetchWithOptionalTimeout.push(this.abortTimeout.start);
                    }
                    return Promise.race(fetchWithOptionalTimeout).then((data)=>{
                        var _a;
                        (_a = this.abortTimeout) === null || _a === void 0 ? void 0 : _a.clear();
                        this.debug("response in %dms: %o", Date.now() - startTimestamp, data);
                        return Promise.resolve(data);
                    }, (error)=>__awaiter(this, void 0, void 0, function*() {
                            var _a, _b;
                            (_a = this.abortTimeout) === null || _a === void 0 ? void 0 : _a.clear();
                            this.debug("response error: %o", error.response || error.message || error);
                            const status = (_b = error.response) === null || _b === void 0 ? void 0 : _b.status;
                            const shouldRetry = this.retryStrategy.shouldRetry(error, attempt, this.retries);
                            if (shouldRetry) {
                                const delayMs = this.retryStrategy.getDelay(error, attempt);
                                this.debug("Error: %d. Retrying in %dms (attempt %d).", status, delayMs, attempt);
                                attempt++;
                                return new Promise((resolve)=>setTimeout(resolve, delayMs)).then(retryer);
                            } else {
                                return Promise.reject(error);
                            }
                        }));
                });
            return retryer();
        });
    }
}

// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/axios/index.js
var axios = __webpack_require__(9005);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/dist/esm/axios-fetcher.js
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};


/**
 * Determines whether error is AxiosError
 * @param {unknown} error
 */ const isAxiosError = (error)=>{
    return error.isAxiosError !== undefined;
};
/**
 *  AxisoDataFetcher is a wrapper for axios library.
 */ class AxiosDataFetcher {
    /**
     * @param {AxiosDataFetcherConfig} dataFetcherConfig Axios data fetcher configuration.
     * Note `withCredentials` is set to `true` by default in order for Sitecore cookies to
     * be included in CORS requests (which is necessary for analytics and such).
     */ constructor(dataFetcherConfig = {}){
        const { onReq, onRes, onReqError, onResError, debugger: debuggerOverride } = dataFetcherConfig, axiosConfig = __rest(dataFetcherConfig, [
            "onReq",
            "onRes",
            "onReqError",
            "onResError",
            "debugger"
        ]);
        if (axiosConfig.withCredentials === undefined) {
            axiosConfig.withCredentials = true;
        }
        this.instance = axios_default().create(axiosConfig);
        const debug = debuggerOverride || esm_debug.http;
        // Note Axios response interceptors are applied in registered order;
        // however, request interceptors are REVERSED (https://github.com/axios/axios/issues/1663).
        // Hence, we're adding our request debug logging first (since we want that performed after any onReq)
        // and our response debug logging second (since we want that performed after any onRes).
        if (debug.enabled) {
            this.instance.interceptors.request.use((config)=>{
                debug("request: %o", config);
                // passing timestamp for debug logging
                config.headers.timestamp = Date.now();
                return config;
            }, (error)=>{
                debug("request error: %o", isAxiosError(error) ? error.toJSON() : error);
                return Promise.reject(error);
            });
        }
        if (onReq) {
            this.instance.interceptors.request.use(onReq, onReqError);
        }
        if (onRes) {
            this.instance.interceptors.response.use(onRes, onResError);
        }
        if (debug.enabled) {
            this.instance.interceptors.response.use((response)=>{
                // Note we're removing redundant properties (already part of request log above) to trim down log entry
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { request, config } = response, rest = __rest(response, [
                    "request",
                    "config"
                ]);
                const duration = Date.now() - config.headers.timestamp;
                delete response.config.headers.timestamp;
                debug("response in %dms: %o", duration, rest);
                return response;
            }, (error)=>{
                debug("response error: %o", isAxiosError(error) ? error.toJSON() : error);
                return Promise.reject(error);
            });
        }
    }
    /**
     * Implements a data fetcher. @see HttpDataFetcher<T> type for implementation details/notes.
     * @param {string} url The URL to request; may include query string
     * @param {unknown} [data] Optional data to POST with the request.
     * @returns {Promise<AxiosResponse<T>>} response
     */ fetch(url, data) {
        return this.instance.request({
            url,
            method: data ? "POST" : "GET",
            data
        });
    }
    /**
     * Perform a GET request
     * @param {string} url The URL to request; may include query string
     * @param {AxiosRequestConfig} [config] Axios config
     * @returns {Promise<AxiosResponse<T>>} response
     */ get(url, config) {
        return this.instance.get(url, config);
    }
    /**
     * Perform a HEAD request
     * @param {string} url The URL to request; may include query string
     * @param {AxiosRequestConfig} [config] Axios config
     * @returns {Promise<AxiosResponse>} response
     */ head(url, config) {
        return this.instance.head(url, config);
    }
    /**
     * Perform a POST request
     * @param {string} url The URL to request; may include query string
     * @param {unknown} [data] Data to POST with the request.
     * @param {AxiosRequestConfig} [config] Axios config
     * @returns {Promise<AxiosResponse>} response
     */ post(url, data, config) {
        return this.instance.post(url, data, config);
    }
    /**
     * Perform a PUT request
     * @param {string} url The URL to request; may include query string
     * @param {unknown} [data] Data to PUT with the request.
     * @param {AxiosRequestConfig} [config] Axios config
     * @returns {Promise<AxiosResponse>} response
     */ put(url, data, config) {
        return this.instance.put(url, data, config);
    }
    /**
     * Perform a DELETE request
     * @param {string} url The URL to request; may include query string
     * @param {AxiosRequestConfig} [config] Axios config
     * @returns {Promise<AxiosResponse>} response
     */ delete(url, config) {
        return this.instance.delete(url, config);
    }
}

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/dist/esm/native-fetcher.js
var native_fetcher_awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var native_fetcher_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};


class NativeDataFetcher {
    constructor(config = {}){
        this.config = config;
    }
    /**
     * Implements a data fetcher. @see HttpDataFetcher<T> type for implementation details/notes.
     * @param {string} url The URL to request; may include query string
     * @param {unknown} [data] Optional data to POST with the request.
     * @returns {Promise<HttpResponse<T>>} response
     */ fetch(url, data) {
        var _a;
        return native_fetcher_awaiter(this, void 0, void 0, function*() {
            const _b = this.config, { debugger: debugOverride, fetch: fetchOverride } = _b, init = native_fetcher_rest(_b, [
                "debugger",
                "fetch"
            ]);
            const startTimestamp = Date.now();
            const fetchImpl = fetchOverride || fetch;
            const debug = debugOverride || esm_debug.http;
            const requestInit = this.getRequestInit(init, data);
            const fetchWithOptionalTimeout = [
                fetchImpl(url, requestInit)
            ];
            if (init.timeout) {
                this.abortTimeout = new TimeoutPromise(init.timeout);
                fetchWithOptionalTimeout.push(this.abortTimeout.start);
            }
            // Note a goal here is to provide consistent debug logging and error handling
            // as we do in AxiosDataFetcher and GraphQLRequestClient
            const { headers: reqHeaders } = requestInit, rest = native_fetcher_rest(requestInit, [
                "headers"
            ]);
            debug("request: %o", Object.assign({
                url,
                headers: this.extractDebugHeaders(reqHeaders)
            }, rest));
            const response = yield Promise.race(fetchWithOptionalTimeout).then((res)=>{
                var _a;
                (_a = this.abortTimeout) === null || _a === void 0 ? void 0 : _a.clear();
                return res;
            }).catch((error)=>{
                var _a;
                (_a = this.abortTimeout) === null || _a === void 0 ? void 0 : _a.clear();
                debug("request error: %o", error);
                throw error;
            });
            // Note even an error status may send useful json data in response (which we want for logging)
            let respData = undefined;
            const isJson = (_a = response.headers.get("Content-Type")) === null || _a === void 0 ? void 0 : _a.includes("application/json");
            if (isJson) {
                respData = yield response.json().catch((error)=>{
                    debug("response.json() error: %o", error);
                });
            }
            const debugResponse = {
                status: response.status,
                statusText: response.statusText,
                headers: this.extractDebugHeaders(response.headers),
                url: response.url,
                redirected: response.redirected,
                data: respData
            };
            if (!response.ok) {
                debug("response error: %o", debugResponse);
                throw new Error(`HTTP ${response.status} ${response.statusText}`);
            }
            debug("response in %dms: %o", Date.now() - startTimestamp, debugResponse);
            return Object.assign(Object.assign({}, response), {
                data: respData
            });
        });
    }
    /**
     * Determines settings for the request
     * @param {RequestInit} init Custom settings for request
     * @param {unknown} [data] Optional data to POST with the request
     * @returns {RequestInit} The final request settings
     */ getRequestInit(init = {}, data) {
        // This is a focused implementation (GET or POST only using JSON input/output)
        // so we are opinionated about method, body, and Content-Type
        init.method = data ? "POST" : "GET";
        init.body = data ? JSON.stringify(data) : undefined;
        const headers = new Headers(init.headers);
        headers.set("Content-Type", "application/json");
        init.headers = headers;
        return init;
    }
    /**
     * Safely extract all headers for debug logging
     * @param {HeadersInit} incomingHeaders Incoming headers
     * @returns Object with headers as key/value pairs
     */ extractDebugHeaders(incomingHeaders = {}) {
        const headers = {};
        if (typeof (incomingHeaders === null || incomingHeaders === void 0 ? void 0 : incomingHeaders.forEach) !== "string" && incomingHeaders.forEach) {
            incomingHeaders === null || incomingHeaders === void 0 ? void 0 : incomingHeaders.forEach((value, key)=>{
                headers[key] = value;
            });
        }
        return headers;
    }
}

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/dist/esm/index.js
// NOTE: all imports are now named as to not make breaking changes
// and to keep react-native working with cjs modules.










/***/ }),

/***/ 908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(8455);


/***/ }),

/***/ 9005:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(8204);


/***/ }),

/***/ 9905:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(7917);
var settle = __webpack_require__(8571);
var cookies = __webpack_require__(2064);
var buildURL = __webpack_require__(6210);
var buildFullPath = __webpack_require__(685);
var parseHeaders = __webpack_require__(1225);
var isURLSameOrigin = __webpack_require__(5580);
var createError = __webpack_require__(4122);
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        if (utils.isFormData(requestData)) {
            delete requestHeaders["Content-Type"]; // Let the browser set it
        }
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) {
                return;
            }
            // Prepare the response
            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(resolve, reject, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) {
            // Use onloadend if available
            request.onloadend = onloadend;
        } else {
            // Listen for ready state to emulate onloadend
            request.onreadystatechange = function handleLoad() {
                if (!request || request.readyState !== 4) {
                    return;
                }
                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                    return;
                }
                // readystate handler is calling before onerror or ontimeout handlers,
                // so we should call onloadend on the next 'tick'
                setTimeout(onloadend);
            };
        }
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) {
                return;
            }
            reject(createError("Request aborted", config, "ECONNABORTED", request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError("Network Error", config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
            if (config.timeoutErrorMessage) {
                timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(createError(timeoutErrorMessage, config, config.transitional && config.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
        }
        // Add headers to the request
        if ("setRequestHeader" in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
                    // Remove Content-Type if data is undefined
                    delete requestHeaders[key];
                } else {
                    // Otherwise add header to the request
                    request.setRequestHeader(key, val);
                }
            });
        }
        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
        }
        // Add responseType to request if needed
        if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
        }
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", config.onDownloadProgress);
        }
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken) {
            // Handle cancellation
            config.cancelToken.promise.then(function onCanceled(cancel) {
                if (!request) {
                    return;
                }
                request.abort();
                reject(cancel);
                // Clean up request
                request = null;
            });
        }
        if (!requestData) {
            requestData = null;
        }
        // Send the request
        request.send(requestData);
    });
};


/***/ }),

/***/ 8204:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(7917);
var bind = __webpack_require__(8580);
var Axios = __webpack_require__(2485);
var mergeConfig = __webpack_require__(3550);
var defaults = __webpack_require__(1448);
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Factory for creating new instances
axios.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios.defaults, instanceConfig));
};
// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(3911);
axios.CancelToken = __webpack_require__(4658);
axios.isCancel = __webpack_require__(3185);
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = __webpack_require__(9269);
// Expose isAxiosError
axios.isAxiosError = __webpack_require__(7178);
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ 3911:
/***/ ((module) => {

"use strict";

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function Cancel(message) {
    this.message = message;
}
Cancel.prototype.toString = function toString() {
    return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;


/***/ }),

/***/ 4658:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var Cancel = __webpack_require__(3911);
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function CancelToken(executor) {
    if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    executor(function cancel(message) {
        if (token.reason) {
            // Cancellation has already been requested
            return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
        throw this.reason;
    }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;


/***/ }),

/***/ 3185:
/***/ ((module) => {

"use strict";

module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 2485:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(7917);
var buildURL = __webpack_require__(6210);
var InterceptorManager = __webpack_require__(1558);
var dispatchRequest = __webpack_require__(5135);
var mergeConfig = __webpack_require__(3550);
var validator = __webpack_require__(3978);
var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === "string") {
        config = arguments[1] || {};
        config.url = arguments[0];
    } else {
        config = config || {};
    }
    config = mergeConfig(this.defaults, config);
    // Set config.method
    if (config.method) {
        config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
    } else {
        config.method = "get";
    }
    var transitional = config.transitional;
    if (transitional !== undefined) {
        validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
            forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
            clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
        }, false);
    }
    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
            return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            dispatchRequest,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while(chain.length){
            promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
    }
    var newConfig = config;
    while(requestInterceptorChain.length){
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = dispatchRequest(newConfig);
    } catch (error) {
        return Promise.reject(error);
    }
    while(responseInterceptorChain.length){
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    }
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
// Provide aliases for supported request methods
utils.forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
utils.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: data
        }));
    };
});
module.exports = Axios;


/***/ }),

/***/ 1558:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(7917);
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
        this.handlers[id] = null;
    }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
            fn(h);
        }
    });
};
module.exports = InterceptorManager;


/***/ }),

/***/ 685:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isAbsoluteURL = __webpack_require__(1163);
var combineURLs = __webpack_require__(8945);
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
};


/***/ }),

/***/ 4122:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var enhanceError = __webpack_require__(6986);
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 5135:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(7917);
var transformData = __webpack_require__(9349);
var isCancel = __webpack_require__(3185);
var defaults = __webpack_require__(1448);
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach([
        "delete",
        "get",
        "head",
        "post",
        "put",
        "patch",
        "common"
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
            }
        }
        return Promise.reject(reason);
    });
};


/***/ }),

/***/ 6986:
/***/ ((module) => {

"use strict";

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */ module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) {
        error.code = code;
    }
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code
        };
    };
    return error;
};


/***/ }),

/***/ 3550:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(7917);
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    var valueFromConfig2Keys = [
        "url",
        "method",
        "data"
    ];
    var mergeDeepPropertiesKeys = [
        "headers",
        "auth",
        "proxy",
        "params"
    ];
    var defaultToConfig2Keys = [
        "baseURL",
        "transformRequest",
        "transformResponse",
        "paramsSerializer",
        "timeout",
        "timeoutMessage",
        "withCredentials",
        "adapter",
        "responseType",
        "xsrfCookieName",
        "xsrfHeaderName",
        "onUploadProgress",
        "onDownloadProgress",
        "decompress",
        "maxContentLength",
        "maxBodyLength",
        "maxRedirects",
        "transport",
        "httpAgent",
        "httpsAgent",
        "cancelToken",
        "socketPath",
        "responseEncoding"
    ];
    var directMergeKeys = [
        "validateStatus"
    ];
    function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
        } else if (utils.isArray(source)) {
            return source.slice();
        }
        return source;
    }
    function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
            config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
            config[prop] = getMergedValue(undefined, config1[prop]);
        }
    }
    utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
            config[prop] = getMergedValue(undefined, config2[prop]);
        }
    });
    utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
    utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
            config[prop] = getMergedValue(undefined, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
            config[prop] = getMergedValue(undefined, config1[prop]);
        }
    });
    utils.forEach(directMergeKeys, function merge(prop) {
        if (prop in config2) {
            config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
            config[prop] = getMergedValue(undefined, config1[prop]);
        }
    });
    var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
    var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
    });
    utils.forEach(otherKeys, mergeDeepProperties);
    return config;
};


/***/ }),

/***/ 8571:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var createError = __webpack_require__(4122);
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
    } else {
        reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
    }
};


/***/ }),

/***/ 9349:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(7917);
var defaults = __webpack_require__(1448);
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    var context = this || defaults;
    /*eslint no-param-reassign:0*/ utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};


/***/ }),

/***/ 1448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(7917);
var normalizeHeaderName = __webpack_require__(702);
var enhanceError = __webpack_require__(6986);
var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
    }
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== "undefined") {
        // For browsers use XHR adapter
        adapter = __webpack_require__(9905);
    } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        // For node use HTTP adapter
        adapter = __webpack_require__(9905);
    }
    return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) {
        try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
        } catch (e) {
            if (e.name !== "SyntaxError") {
                throw e;
            }
        }
    }
    return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
    transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
    },
    adapter: getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            normalizeHeaderName(headers, "Accept");
            normalizeHeaderName(headers, "Content-Type");
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
                return data;
            }
            if (utils.isArrayBufferView(data)) {
                return data.buffer;
            }
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
                return data.toString();
            }
            if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
                setContentTypeIfUnset(headers, "application/json");
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            var transitional = this.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
            if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") {
                            throw enhanceError(e, this, "E_JSON_PARSE");
                        }
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    }
};
defaults.headers = {
    common: {
        "Accept": "application/json, text/plain, */*"
    }
};
utils.forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;


/***/ }),

/***/ 8580:
/***/ ((module) => {

"use strict";

module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++){
            args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
    };
};


/***/ }),

/***/ 6210:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(7917);
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) {
        return url;
    }
    var serializedParams;
    if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
    } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") {
                return;
            }
            if (utils.isArray(val)) {
                key = key + "[]";
            } else {
                val = [
                    val
                ];
            }
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) {
                    v = v.toISOString();
                } else if (utils.isObject(v)) {
                    v = JSON.stringify(v);
                }
                parts.push(encode(key) + "=" + encode(v));
            });
        });
        serializedParams = parts.join("&");
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
};


/***/ }),

/***/ 8945:
/***/ ((module) => {

"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};


/***/ }),

/***/ 2064:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(7917);
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) {
                cookie.push("expires=" + new Date(expires).toGMTString());
            }
            if (utils.isString(path)) {
                cookie.push("path=" + path);
            }
            if (utils.isString(domain)) {
                cookie.push("domain=" + domain);
            }
            if (secure === true) {
                cookie.push("secure");
            }
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();


/***/ }),

/***/ 1163:
/***/ ((module) => {

"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 7178:
/***/ ((module) => {

"use strict";

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return typeof payload === "object" && payload.isAxiosError === true;
};


/***/ }),

/***/ 5580:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(7917);
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement("a");
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();


/***/ }),

/***/ 702:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(7917);
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};


/***/ }),

/***/ 1225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var utils = __webpack_require__(7917);
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) {
        return parsed;
    }
    utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                return;
            }
            if (key === "set-cookie") {
                parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                    val
                ]);
            } else {
                parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }
        }
    });
    return parsed;
};


/***/ }),

/***/ 9269:
/***/ ((module) => {

"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};


/***/ }),

/***/ 3978:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var pkg = __webpack_require__(6034);
var validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach(function(type, i) {
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
var deprecatedWarnings = {};
var currentVerArr = pkg.version.split(".");
/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */ function isOlderVersion(version, thanVersion) {
    var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
    var destVer = version.split(".");
    for(var i = 0; i < 3; i++){
        if (pkgVersionArr[i] > destVer[i]) {
            return true;
        } else if (pkgVersionArr[i] < destVer[i]) {
            return false;
        }
    }
    return false;
}
/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    var isDeprecated = version && isOlderVersion(version);
    function formatMessage(opt, desc) {
        return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
        if (validator === false) {
            throw new Error(formatMessage(opt, " has been removed in " + version));
        }
        if (isDeprecated && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
        throw new TypeError("options must be an object");
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while(i-- > 0){
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) {
                throw new TypeError("option " + opt + " must be " + result);
            }
            continue;
        }
        if (allowUnknown !== true) {
            throw Error("Unknown option " + opt);
        }
    }
}
module.exports = {
    isOlderVersion: isOlderVersion,
    assertOptions: assertOptions,
    validators: validators
};


/***/ }),

/***/ 7917:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(8580);
// utils is a library of generic helper functions non-specific to axios
var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function isArray(val) {
    return toString.call(val) === "[object Array]";
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function isUndefined(val) {
    return typeof val === "undefined";
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ function isArrayBuffer(val) {
    return toString.call(val) === "[object ArrayBuffer]";
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function isFormData(val) {
    return typeof FormData !== "undefined" && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
    } else {
        result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    }
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function isString(val) {
    return typeof val === "string";
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function isNumber(val) {
    return typeof val === "number";
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function isObject(val) {
    return val !== null && typeof val === "object";
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function isPlainObject(val) {
    if (toString.call(val) !== "[object Object]") {
        return false;
    }
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ function isDate(val) {
    return toString.call(val) === "[object Date]";
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ function isFile(val) {
    return toString.call(val) === "[object File]";
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ function isBlob(val) {
    return toString.call(val) === "[object Blob]";
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function isFunction(val) {
    return toString.call(val) === "[object Function]";
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
    }
    return  false && 0;
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") {
        return;
    }
    // Force an array if not already something iterable
    if (typeof obj !== "object") {
        /*eslint no-param-reassign:0*/ obj = [
            obj
        ];
    }
    if (isArray(obj)) {
        // Iterate over array values
        for(var i = 0, l = obj.length; i < l; i++){
            fn.call(null, obj[i], i, obj);
        }
    } else {
        // Iterate over object keys
        for(var key in obj){
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function merge() {
    var result = {};
    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
        } else if (isArray(val)) {
            result[key] = val.slice();
        } else {
            result[key] = val;
        }
    }
    for(var i = 0, l = arguments.length; i < l; i++){
        forEach(arguments[i], assignValue);
    }
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
            a[key] = bind(val, thisArg);
        } else {
            a[key] = val;
        }
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }
    return content;
}
module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
};


/***/ }),

/***/ 7300:
/***/ ((module, exports) => {

"use strict";

var global = typeof self !== "undefined" ? self : void 0;
var __self__ = function() {
    function F() {
        this.fetch = false;
        this.DOMException = global.DOMException;
    }
    F.prototype = global;
    return new F();
}();
(function(self1) {
    var irrelevant = function(exports1) {
        var support = {
            searchParams: "URLSearchParams" in self1,
            iterable: "Symbol" in self1 && "iterator" in Symbol,
            blob: "FileReader" in self1 && "Blob" in self1 && function() {
                try {
                    new Blob();
                    return true;
                } catch (e) {
                    return false;
                }
            }(),
            formData: "FormData" in self1,
            arrayBuffer: "ArrayBuffer" in self1
        };
        function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
            var viewClasses = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]"
            ];
            var isArrayBufferView = ArrayBuffer.isView || function(obj) {
                return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
            };
        }
        function normalizeName(name) {
            if (typeof name !== "string") {
                name = String(name);
            }
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
                throw new TypeError("Invalid character in header field name");
            }
            return name.toLowerCase();
        }
        function normalizeValue(value) {
            if (typeof value !== "string") {
                value = String(value);
            }
            return value;
        }
        // Build a destructive iterator for the value list
        function iteratorFor(items) {
            var iterator = {
                next: function() {
                    var value = items.shift();
                    return {
                        done: value === undefined,
                        value: value
                    };
                }
            };
            if (support.iterable) {
                iterator[Symbol.iterator] = function() {
                    return iterator;
                };
            }
            return iterator;
        }
        function Headers(headers) {
            this.map = {};
            if (headers instanceof Headers) {
                headers.forEach(function(value, name) {
                    this.append(name, value);
                }, this);
            } else if (Array.isArray(headers)) {
                headers.forEach(function(header) {
                    this.append(header[0], header[1]);
                }, this);
            } else if (headers) {
                Object.getOwnPropertyNames(headers).forEach(function(name) {
                    this.append(name, headers[name]);
                }, this);
            }
        }
        Headers.prototype.append = function(name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            var oldValue = this.map[name];
            this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name) {
            delete this.map[normalizeName(name)];
        };
        Headers.prototype.get = function(name) {
            name = normalizeName(name);
            return this.has(name) ? this.map[name] : null;
        };
        Headers.prototype.has = function(name) {
            return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers.prototype.set = function(name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
            for(var name in this.map){
                if (this.map.hasOwnProperty(name)) {
                    callback.call(thisArg, this.map[name], name, this);
                }
            }
        };
        Headers.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push(name);
            });
            return iteratorFor(items);
        };
        Headers.prototype.values = function() {
            var items = [];
            this.forEach(function(value) {
                items.push(value);
            });
            return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push([
                    name,
                    value
                ]);
            });
            return iteratorFor(items);
        };
        if (support.iterable) {
            Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        }
        function consumed(body) {
            if (body.bodyUsed) {
                return Promise.reject(new TypeError("Already read"));
            }
            body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
            return new Promise(function(resolve, reject) {
                reader.onload = function() {
                    resolve(reader.result);
                };
                reader.onerror = function() {
                    reject(reader.error);
                };
            });
        }
        function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
        }
        function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsText(blob);
            return promise;
        }
        function readArrayBufferAsText(buf) {
            var view = new Uint8Array(buf);
            var chars = new Array(view.length);
            for(var i = 0; i < view.length; i++){
                chars[i] = String.fromCharCode(view[i]);
            }
            return chars.join("");
        }
        function bufferClone(buf) {
            if (buf.slice) {
                return buf.slice(0);
            } else {
                var view = new Uint8Array(buf.byteLength);
                view.set(new Uint8Array(buf));
                return view.buffer;
            }
        }
        function Body() {
            this.bodyUsed = false;
            this._initBody = function(body) {
                this._bodyInit = body;
                if (!body) {
                    this._bodyText = "";
                } else if (typeof body === "string") {
                    this._bodyText = body;
                } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                    this._bodyBlob = body;
                } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                    this._bodyFormData = body;
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                    this._bodyText = body.toString();
                } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                    this._bodyArrayBuffer = bufferClone(body.buffer);
                    // IE 10-11 can't handle a DataView body.
                    this._bodyInit = new Blob([
                        this._bodyArrayBuffer
                    ]);
                } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                    this._bodyArrayBuffer = bufferClone(body);
                } else {
                    this._bodyText = body = Object.prototype.toString.call(body);
                }
                if (!this.headers.get("content-type")) {
                    if (typeof body === "string") {
                        this.headers.set("content-type", "text/plain;charset=UTF-8");
                    } else if (this._bodyBlob && this._bodyBlob.type) {
                        this.headers.set("content-type", this._bodyBlob.type);
                    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                        this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                    }
                }
            };
            if (support.blob) {
                this.blob = function() {
                    var rejected = consumed(this);
                    if (rejected) {
                        return rejected;
                    }
                    if (this._bodyBlob) {
                        return Promise.resolve(this._bodyBlob);
                    } else if (this._bodyArrayBuffer) {
                        return Promise.resolve(new Blob([
                            this._bodyArrayBuffer
                        ]));
                    } else if (this._bodyFormData) {
                        throw new Error("could not read FormData body as blob");
                    } else {
                        return Promise.resolve(new Blob([
                            this._bodyText
                        ]));
                    }
                };
                this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) {
                        return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                    } else {
                        return this.blob().then(readBlobAsArrayBuffer);
                    }
                };
            }
            this.text = function() {
                var rejected = consumed(this);
                if (rejected) {
                    return rejected;
                }
                if (this._bodyBlob) {
                    return readBlobAsText(this._bodyBlob);
                } else if (this._bodyArrayBuffer) {
                    return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
                } else if (this._bodyFormData) {
                    throw new Error("could not read FormData body as text");
                } else {
                    return Promise.resolve(this._bodyText);
                }
            };
            if (support.formData) {
                this.formData = function() {
                    return this.text().then(decode);
                };
            }
            this.json = function() {
                return this.text().then(JSON.parse);
            };
            return this;
        }
        // HTTP methods whose capitalization should be normalized
        var methods = [
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "POST",
            "PUT"
        ];
        function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
                if (input.bodyUsed) {
                    throw new TypeError("Already read");
                }
                this.url = input.url;
                this.credentials = input.credentials;
                if (!options.headers) {
                    this.headers = new Headers(input.headers);
                }
                this.method = input.method;
                this.mode = input.mode;
                this.signal = input.signal;
                if (!body && input._bodyInit != null) {
                    body = input._bodyInit;
                    input.bodyUsed = true;
                }
            } else {
                this.url = String(input);
            }
            this.credentials = options.credentials || this.credentials || "same-origin";
            if (options.headers || !this.headers) {
                this.headers = new Headers(options.headers);
            }
            this.method = normalizeMethod(options.method || this.method || "GET");
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && body) {
                throw new TypeError("Body not allowed for GET or HEAD requests");
            }
            this._initBody(body);
        }
        Request.prototype.clone = function() {
            return new Request(this, {
                body: this._bodyInit
            });
        };
        function decode(body) {
            var form = new FormData();
            body.trim().split("&").forEach(function(bytes) {
                if (bytes) {
                    var split = bytes.split("=");
                    var name = split.shift().replace(/\+/g, " ");
                    var value = split.join("=").replace(/\+/g, " ");
                    form.append(decodeURIComponent(name), decodeURIComponent(value));
                }
            });
            return form;
        }
        function parseHeaders(rawHeaders) {
            var headers = new Headers();
            // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
            // https://tools.ietf.org/html/rfc7230#section-3.2
            var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
            preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
                var parts = line.split(":");
                var key = parts.shift().trim();
                if (key) {
                    var value = parts.join(":").trim();
                    headers.append(key, value);
                }
            });
            return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
            if (!options) {
                options = {};
            }
            this.type = "default";
            this.status = options.status === undefined ? 200 : options.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = "statusText" in options ? options.statusText : "OK";
            this.headers = new Headers(options.headers);
            this.url = options.url || "";
            this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Headers(this.headers),
                url: this.url
            });
        };
        Response.error = function() {
            var response = new Response(null, {
                status: 0,
                statusText: ""
            });
            response.type = "error";
            return response;
        };
        var redirectStatuses = [
            301,
            302,
            303,
            307,
            308
        ];
        Response.redirect = function(url, status) {
            if (redirectStatuses.indexOf(status) === -1) {
                throw new RangeError("Invalid status code");
            }
            return new Response(null, {
                status: status,
                headers: {
                    location: url
                }
            });
        };
        exports1.DOMException = self1.DOMException;
        try {
            new exports1.DOMException();
        } catch (err) {
            exports1.DOMException = function(message, name) {
                this.message = message;
                this.name = name;
                var error = Error(message);
                this.stack = error.stack;
            };
            exports1.DOMException.prototype = Object.create(Error.prototype);
            exports1.DOMException.prototype.constructor = exports1.DOMException;
        }
        function fetch(input, init) {
            return new Promise(function(resolve, reject) {
                var request = new Request(input, init);
                if (request.signal && request.signal.aborted) {
                    return reject(new exports1.DOMException("Aborted", "AbortError"));
                }
                var xhr = new XMLHttpRequest();
                function abortXhr() {
                    xhr.abort();
                }
                xhr.onload = function() {
                    var options = {
                        status: xhr.status,
                        statusText: xhr.statusText,
                        headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                    };
                    options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                    var body = "response" in xhr ? xhr.response : xhr.responseText;
                    resolve(new Response(body, options));
                };
                xhr.onerror = function() {
                    reject(new TypeError("Network request failed"));
                };
                xhr.ontimeout = function() {
                    reject(new TypeError("Network request failed"));
                };
                xhr.onabort = function() {
                    reject(new exports1.DOMException("Aborted", "AbortError"));
                };
                xhr.open(request.method, request.url, true);
                if (request.credentials === "include") {
                    xhr.withCredentials = true;
                } else if (request.credentials === "omit") {
                    xhr.withCredentials = false;
                }
                if ("responseType" in xhr && support.blob) {
                    xhr.responseType = "blob";
                }
                request.headers.forEach(function(value, name) {
                    xhr.setRequestHeader(name, value);
                });
                if (request.signal) {
                    request.signal.addEventListener("abort", abortXhr);
                    xhr.onreadystatechange = function() {
                        // DONE (success or failure)
                        if (xhr.readyState === 4) {
                            request.signal.removeEventListener("abort", abortXhr);
                        }
                    };
                }
                xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
            });
        }
        fetch.polyfill = true;
        if (!self1.fetch) {
            self1.fetch = fetch;
            self1.Headers = Headers;
            self1.Request = Request;
            self1.Response = Response;
        }
        exports1.Headers = Headers;
        exports1.Request = Request;
        exports1.Response = Response;
        exports1.fetch = fetch;
        Object.defineProperty(exports1, "__esModule", {
            value: true
        });
        return exports1;
    }({});
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
;
exports["default"] = ctx.fetch // For TypeScript consumers without esModuleInterop.
;
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
;
exports.Headers = ctx.Headers;
exports.Request = ctx.Request;
exports.Response = ctx.Response;
module.exports = exports;


/***/ }),

/***/ 9008:
/***/ ((module) => {

"use strict";
/* eslint-env browser */ 
module.exports = typeof self == "object" ? self.FormData : window.FormData;


/***/ }),

/***/ 8240:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var extract_files_1 = __webpack_require__(926);
var form_data_1 = __importDefault(__webpack_require__(9008));
var defaultJsonSerializer_1 = __webpack_require__(9145);
/**
 * Duck type if NodeJS stream
 * https://github.com/sindresorhus/is-stream/blob/3750505b0727f6df54324784fe369365ef78841e/index.js#L3
 */ var isExtractableFileEnhanced = function(value) {
    return extract_files_1.isExtractableFile(value) || value !== null && typeof value === "object" && typeof value.pipe === "function";
};
/**
 * Returns Multipart Form if body contains files
 * (https://github.com/jaydenseric/graphql-multipart-request-spec)
 * Otherwise returns JSON
 */ function createRequestBody(query, variables, operationName, jsonSerializer) {
    if (jsonSerializer === void 0) {
        jsonSerializer = defaultJsonSerializer_1.defaultJsonSerializer;
    }
    var _a = extract_files_1.extractFiles({
        query: query,
        variables: variables,
        operationName: operationName
    }, "", isExtractableFileEnhanced), clone = _a.clone, files = _a.files;
    if (files.size === 0) {
        if (!Array.isArray(query)) {
            return jsonSerializer.stringify(clone);
        }
        if (typeof variables !== "undefined" && !Array.isArray(variables)) {
            throw new Error("Cannot create request body with given variable type, array expected");
        }
        // Batch support
        var payload = query.reduce(function(accu, currentQuery, index) {
            accu.push({
                query: currentQuery,
                variables: variables ? variables[index] : undefined
            });
            return accu;
        }, []);
        return jsonSerializer.stringify(payload);
    }
    var Form = typeof FormData === "undefined" ? form_data_1.default : FormData;
    var form = new Form();
    form.append("operations", jsonSerializer.stringify(clone));
    var map = {};
    var i = 0;
    files.forEach(function(paths) {
        map[++i] = paths;
    });
    form.append("map", jsonSerializer.stringify(map));
    i = 0;
    files.forEach(function(paths, file) {
        form.append("" + ++i, file);
    });
    return form;
}
exports["default"] = createRequestBody; //# sourceMappingURL=createRequestBody.js.map


/***/ }),

/***/ 9145:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.defaultJsonSerializer = void 0;
exports.defaultJsonSerializer = {
    parse: JSON.parse,
    stringify: JSON.stringify
}; //# sourceMappingURL=defaultJsonSerializer.js.map


/***/ }),

/***/ 2662:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __assign = (void 0) && (void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (void 0) && (void 0).__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GraphQLWebSocketClient = void 0;
var types_1 = __webpack_require__(9812);
var _1 = __webpack_require__(284);
var CONNECTION_INIT = "connection_init";
var CONNECTION_ACK = "connection_ack";
var PING = "ping";
var PONG = "pong";
var SUBSCRIBE = "subscribe";
var NEXT = "next";
var ERROR = "error";
var COMPLETE = "complete";
var GraphQLWebSocketMessage = /** @class */ function() {
    function GraphQLWebSocketMessage(type, payload, id) {
        this._type = type;
        this._payload = payload;
        this._id = id;
    }
    Object.defineProperty(GraphQLWebSocketMessage.prototype, "type", {
        get: function() {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphQLWebSocketMessage.prototype, "id", {
        get: function() {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphQLWebSocketMessage.prototype, "payload", {
        get: function() {
            return this._payload;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphQLWebSocketMessage.prototype, "text", {
        get: function() {
            var result = {
                type: this.type
            };
            if (this.id != null && this.id != undefined) result.id = this.id;
            if (this.payload != null && this.payload != undefined) result.payload = this.payload;
            return JSON.stringify(result);
        },
        enumerable: false,
        configurable: true
    });
    GraphQLWebSocketMessage.parse = function(data, f) {
        var _a = JSON.parse(data), type = _a.type, payload = _a.payload, id = _a.id;
        return new GraphQLWebSocketMessage(type, f(payload), id);
    };
    return GraphQLWebSocketMessage;
}();
var GraphQLWebSocketClient = /** @class */ function() {
    function GraphQLWebSocketClient(socket, _a) {
        var _this = this;
        var onInit = _a.onInit, onAcknowledged = _a.onAcknowledged, onPing = _a.onPing, onPong = _a.onPong;
        this.socketState = {
            acknowledged: false,
            lastRequestId: 0,
            subscriptions: {}
        };
        this.socket = socket;
        socket.onopen = function(e) {
            return __awaiter(_this, void 0, void 0, function() {
                var _a, _b, _c, _d;
                return __generator(this, function(_e) {
                    switch(_e.label){
                        case 0:
                            this.socketState.acknowledged = false;
                            this.socketState.subscriptions = {};
                            _b = (_a = socket).send;
                            _c = ConnectionInit;
                            if (!onInit) return [
                                3 /*break*/ ,
                                2
                            ];
                            return [
                                4 /*yield*/ ,
                                onInit()
                            ];
                        case 1:
                            _d = _e.sent();
                            return [
                                3 /*break*/ ,
                                3
                            ];
                        case 2:
                            _d = null;
                            _e.label = 3;
                        case 3:
                            _b.apply(_a, [
                                _c.apply(void 0, [
                                    _d
                                ]).text
                            ]);
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        };
        socket.onclose = function(e) {
            _this.socketState.acknowledged = false;
            _this.socketState.subscriptions = {};
        };
        socket.onerror = function(e) {
            console.error(e);
        };
        socket.onmessage = function(e) {
            try {
                var message = parseMessage(e.data);
                switch(message.type){
                    case CONNECTION_ACK:
                        {
                            if (_this.socketState.acknowledged) {
                                console.warn("Duplicate CONNECTION_ACK message ignored");
                            } else {
                                _this.socketState.acknowledged = true;
                                if (onAcknowledged) onAcknowledged(message.payload);
                            }
                            return;
                        }
                    case PING:
                        {
                            if (onPing) onPing(message.payload).then(function(r) {
                                return socket.send(Pong(r).text);
                            });
                            else socket.send(Pong(null).text);
                            return;
                        }
                    case PONG:
                        {
                            if (onPong) onPong(message.payload);
                            return;
                        }
                }
                if (!_this.socketState.acknowledged) {
                    // Web-socket connection not acknowledged
                    return;
                }
                if (message.id === undefined || message.id === null || !_this.socketState.subscriptions[message.id]) {
                    // No subscription identifer or subscription indentifier is not found
                    return;
                }
                var _a = _this.socketState.subscriptions[message.id], query = _a.query, variables = _a.variables, subscriber = _a.subscriber;
                switch(message.type){
                    case NEXT:
                        {
                            if (!message.payload.errors && message.payload.data) {
                                subscriber.next && subscriber.next(message.payload.data);
                            }
                            if (message.payload.errors) {
                                subscriber.error && subscriber.error(new types_1.ClientError(__assign(__assign({}, message.payload), {
                                    status: 200
                                }), {
                                    query: query,
                                    variables: variables
                                }));
                            } else {}
                            return;
                        }
                    case ERROR:
                        {
                            subscriber.error && subscriber.error(new types_1.ClientError({
                                errors: message.payload,
                                status: 200
                            }, {
                                query: query,
                                variables: variables
                            }));
                            return;
                        }
                    case COMPLETE:
                        {
                            subscriber.complete && subscriber.complete();
                            delete _this.socketState.subscriptions[message.id];
                            return;
                        }
                }
            } catch (e) {
                // Unexpected errors while handling graphql-ws message
                console.error(e);
                socket.close(1006);
            }
            socket.close(4400, "Unknown graphql-ws message.");
        };
    }
    GraphQLWebSocketClient.prototype.makeSubscribe = function(query, operationName, variables, subscriber) {
        var _this = this;
        var subscriptionId = (this.socketState.lastRequestId++).toString();
        this.socketState.subscriptions[subscriptionId] = {
            query: query,
            variables: variables,
            subscriber: subscriber
        };
        this.socket.send(Subscribe(subscriptionId, {
            query: query,
            operationName: operationName,
            variables: variables
        }).text);
        return function() {
            _this.socket.send(Complete(subscriptionId).text);
            delete _this.socketState.subscriptions[subscriptionId];
        };
    };
    GraphQLWebSocketClient.prototype.rawRequest = function(query, variables) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var result;
            _this.rawSubscribe(query, {
                next: function(data, extensions) {
                    return result = {
                        data: data,
                        extensions: extensions
                    };
                },
                error: reject,
                complete: function() {
                    return resolve(result);
                }
            }, variables);
        });
    };
    GraphQLWebSocketClient.prototype.request = function(document, variables) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var result;
            _this.subscribe(document, {
                next: function(data) {
                    return result = data;
                },
                error: reject,
                complete: function() {
                    return resolve(result);
                }
            }, variables);
        });
    };
    GraphQLWebSocketClient.prototype.subscribe = function(document, subscriber, variables) {
        var _a = _1.resolveRequestDocument(document), query = _a.query, operationName = _a.operationName;
        return this.makeSubscribe(query, operationName, variables, subscriber);
    };
    GraphQLWebSocketClient.prototype.rawSubscribe = function(query, subscriber, variables) {
        return this.makeSubscribe(query, undefined, variables, subscriber);
    };
    GraphQLWebSocketClient.prototype.ping = function(payload) {
        this.socket.send(Ping(payload).text);
    };
    GraphQLWebSocketClient.prototype.close = function() {
        this.socket.close(1000);
    };
    GraphQLWebSocketClient.PROTOCOL = "graphql-transport-ws";
    return GraphQLWebSocketClient;
}();
exports.GraphQLWebSocketClient = GraphQLWebSocketClient;
// Helper functions
function parseMessage(data, f) {
    if (f === void 0) {
        f = function(a) {
            return a;
        };
    }
    var m = GraphQLWebSocketMessage.parse(data, f);
    return m;
}
function ConnectionInit(payload) {
    return new GraphQLWebSocketMessage(CONNECTION_INIT, payload);
}
function Ping(payload) {
    return new GraphQLWebSocketMessage(PING, payload, undefined);
}
function Pong(payload) {
    return new GraphQLWebSocketMessage(PONG, payload, undefined);
}
function Subscribe(id, payload) {
    return new GraphQLWebSocketMessage(SUBSCRIBE, payload, id);
}
function Complete(id) {
    return new GraphQLWebSocketMessage(COMPLETE, undefined, id);
} //# sourceMappingURL=graphql-ws.js.map


/***/ }),

/***/ 284:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __assign = (void 0) && (void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (void 0) && (void 0).__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = (void 0) && (void 0).__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = (void 0) && (void 0).__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (void 0) && (void 0).__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __rest = (void 0) && (void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GraphQLWebSocketClient = exports.gql = exports.resolveRequestDocument = exports.batchRequests = exports.request = exports.rawRequest = exports.GraphQLClient = exports.ClientError = void 0;
var cross_fetch_1 = __importStar(__webpack_require__(7300)), CrossFetch = cross_fetch_1;
var parser_1 = __webpack_require__(2301);
var printer_1 = __webpack_require__(456);
var createRequestBody_1 = __importDefault(__webpack_require__(8240));
var defaultJsonSerializer_1 = __webpack_require__(9145);
var parseArgs_1 = __webpack_require__(1833);
var types_1 = __webpack_require__(9812);
Object.defineProperty(exports, "ClientError", ({
    enumerable: true,
    get: function() {
        return types_1.ClientError;
    }
}));
/**
 * Convert the given headers configuration into a plain object.
 */ var resolveHeaders = function(headers) {
    var oHeaders = {};
    if (headers) {
        if (typeof Headers !== "undefined" && headers instanceof Headers || headers instanceof CrossFetch.Headers) {
            oHeaders = HeadersInstanceToPlainObject(headers);
        } else if (Array.isArray(headers)) {
            headers.forEach(function(_a) {
                var name = _a[0], value = _a[1];
                oHeaders[name] = value;
            });
        } else {
            oHeaders = headers;
        }
    }
    return oHeaders;
};
/**
 * Clean a GraphQL document to send it via a GET query
 *
 * @param {string} str GraphQL query
 * @returns {string} Cleaned query
 */ var queryCleanner = function(str) {
    return str.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim();
};
/**
 * Create query string for GraphQL request
 *
 * @param {object} param0 -
 *
 * @param {string|string[]} param0.query the GraphQL document or array of document if it's a batch request
 * @param {string|undefined} param0.operationName the GraphQL operation name
 * @param {any|any[]} param0.variables the GraphQL variables to use
 */ var buildGetQueryParams = function(_a) {
    var query = _a.query, variables = _a.variables, operationName = _a.operationName, jsonSerializer = _a.jsonSerializer;
    if (!Array.isArray(query)) {
        var search = [
            "query=" + encodeURIComponent(queryCleanner(query))
        ];
        if (variables) {
            search.push("variables=" + encodeURIComponent(jsonSerializer.stringify(variables)));
        }
        if (operationName) {
            search.push("operationName=" + encodeURIComponent(operationName));
        }
        return search.join("&");
    }
    if (typeof variables !== "undefined" && !Array.isArray(variables)) {
        throw new Error("Cannot create query with given variable type, array expected");
    }
    // Batch support
    var payload = query.reduce(function(accu, currentQuery, index) {
        accu.push({
            query: queryCleanner(currentQuery),
            variables: variables ? jsonSerializer.stringify(variables[index]) : undefined
        });
        return accu;
    }, []);
    return "query=" + encodeURIComponent(jsonSerializer.stringify(payload));
};
/**
 * Fetch data using POST method
 */ var post = function(_a) {
    var url = _a.url, query = _a.query, variables = _a.variables, operationName = _a.operationName, headers = _a.headers, fetch = _a.fetch, fetchOptions = _a.fetchOptions;
    return __awaiter(void 0, void 0, void 0, function() {
        var body;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    body = createRequestBody_1.default(query, variables, operationName, fetchOptions.jsonSerializer);
                    return [
                        4 /*yield*/ ,
                        fetch(url, __assign({
                            method: "POST",
                            headers: __assign(__assign({}, typeof body === "string" ? {
                                "Content-Type": "application/json"
                            } : {}), headers),
                            body: body
                        }, fetchOptions))
                    ];
                case 1:
                    return [
                        2 /*return*/ ,
                        _b.sent()
                    ];
            }
        });
    });
};
/**
 * Fetch data using GET method
 */ var get = function(_a) {
    var url = _a.url, query = _a.query, variables = _a.variables, operationName = _a.operationName, headers = _a.headers, fetch = _a.fetch, fetchOptions = _a.fetchOptions;
    return __awaiter(void 0, void 0, void 0, function() {
        var queryParams;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    queryParams = buildGetQueryParams({
                        query: query,
                        variables: variables,
                        operationName: operationName,
                        jsonSerializer: fetchOptions.jsonSerializer
                    });
                    return [
                        4 /*yield*/ ,
                        fetch(url + "?" + queryParams, __assign({
                            method: "GET",
                            headers: headers
                        }, fetchOptions))
                    ];
                case 1:
                    return [
                        2 /*return*/ ,
                        _b.sent()
                    ];
            }
        });
    });
};
/**
 * GraphQL Client.
 */ var GraphQLClient = /** @class */ function() {
    function GraphQLClient(url, options) {
        this.url = url;
        this.options = options || {};
    }
    GraphQLClient.prototype.rawRequest = function(queryOrOptions, variables, requestHeaders) {
        return __awaiter(this, void 0, void 0, function() {
            var rawRequestOptions, _a, headers, _b, fetch, _c, method, fetchOptions, url, operationName;
            return __generator(this, function(_d) {
                rawRequestOptions = parseArgs_1.parseRawRequestArgs(queryOrOptions, variables, requestHeaders);
                _a = this.options, headers = _a.headers, _b = _a.fetch, fetch = _b === void 0 ? cross_fetch_1.default : _b, _c = _a.method, method = _c === void 0 ? "POST" : _c, fetchOptions = __rest(_a, [
                    "headers",
                    "fetch",
                    "method"
                ]);
                url = this.url;
                if (rawRequestOptions.signal !== undefined) {
                    fetchOptions.signal = rawRequestOptions.signal;
                }
                operationName = resolveRequestDocument(rawRequestOptions.query).operationName;
                return [
                    2 /*return*/ ,
                    makeRequest({
                        url: url,
                        query: rawRequestOptions.query,
                        variables: rawRequestOptions.variables,
                        headers: __assign(__assign({}, resolveHeaders(callOrIdentity(headers))), resolveHeaders(rawRequestOptions.requestHeaders)),
                        operationName: operationName,
                        fetch: fetch,
                        method: method,
                        fetchOptions: fetchOptions
                    })
                ];
            });
        });
    };
    GraphQLClient.prototype.request = function(documentOrOptions, variables, requestHeaders) {
        return __awaiter(this, void 0, void 0, function() {
            var requestOptions, _a, headers, _b, fetch, _c, method, fetchOptions, url, _d, query, operationName, data;
            return __generator(this, function(_e) {
                switch(_e.label){
                    case 0:
                        requestOptions = parseArgs_1.parseRequestArgs(documentOrOptions, variables, requestHeaders);
                        _a = this.options, headers = _a.headers, _b = _a.fetch, fetch = _b === void 0 ? cross_fetch_1.default : _b, _c = _a.method, method = _c === void 0 ? "POST" : _c, fetchOptions = __rest(_a, [
                            "headers",
                            "fetch",
                            "method"
                        ]);
                        url = this.url;
                        if (requestOptions.signal !== undefined) {
                            fetchOptions.signal = requestOptions.signal;
                        }
                        _d = resolveRequestDocument(requestOptions.document), query = _d.query, operationName = _d.operationName;
                        return [
                            4 /*yield*/ ,
                            makeRequest({
                                url: url,
                                query: query,
                                variables: requestOptions.variables,
                                headers: __assign(__assign({}, resolveHeaders(callOrIdentity(headers))), resolveHeaders(requestOptions.requestHeaders)),
                                operationName: operationName,
                                fetch: fetch,
                                method: method,
                                fetchOptions: fetchOptions
                            })
                        ];
                    case 1:
                        data = _e.sent().data;
                        return [
                            2 /*return*/ ,
                            data
                        ];
                }
            });
        });
    };
    GraphQLClient.prototype.batchRequests = function(documentsOrOptions, requestHeaders) {
        return __awaiter(this, void 0, void 0, function() {
            var batchRequestOptions, _a, headers, _b, fetch, _c, method, fetchOptions, url, queries, variables, data;
            return __generator(this, function(_d) {
                switch(_d.label){
                    case 0:
                        batchRequestOptions = parseArgs_1.parseBatchRequestArgs(documentsOrOptions, requestHeaders);
                        _a = this.options, headers = _a.headers, _b = _a.fetch, fetch = _b === void 0 ? cross_fetch_1.default : _b, _c = _a.method, method = _c === void 0 ? "POST" : _c, fetchOptions = __rest(_a, [
                            "headers",
                            "fetch",
                            "method"
                        ]);
                        url = this.url;
                        if (batchRequestOptions.signal !== undefined) {
                            fetchOptions.signal = batchRequestOptions.signal;
                        }
                        queries = batchRequestOptions.documents.map(function(_a) {
                            var document = _a.document;
                            return resolveRequestDocument(document).query;
                        });
                        variables = batchRequestOptions.documents.map(function(_a) {
                            var variables = _a.variables;
                            return variables;
                        });
                        return [
                            4 /*yield*/ ,
                            makeRequest({
                                url: url,
                                query: queries,
                                variables: variables,
                                headers: __assign(__assign({}, resolveHeaders(callOrIdentity(headers))), resolveHeaders(batchRequestOptions.requestHeaders)),
                                operationName: undefined,
                                fetch: fetch,
                                method: method,
                                fetchOptions: fetchOptions
                            })
                        ];
                    case 1:
                        data = _d.sent().data;
                        return [
                            2 /*return*/ ,
                            data
                        ];
                }
            });
        });
    };
    GraphQLClient.prototype.setHeaders = function(headers) {
        this.options.headers = headers;
        return this;
    };
    /**
     * Attach a header to the client. All subsequent requests will have this header.
     */ GraphQLClient.prototype.setHeader = function(key, value) {
        var _a;
        var headers = this.options.headers;
        if (headers) {
            // todo what if headers is in nested array form... ?
            //@ts-ignore
            headers[key] = value;
        } else {
            this.options.headers = (_a = {}, _a[key] = value, _a);
        }
        return this;
    };
    /**
     * Change the client endpoint. All subsequent requests will send to this endpoint.
     */ GraphQLClient.prototype.setEndpoint = function(value) {
        this.url = value;
        return this;
    };
    return GraphQLClient;
}();
exports.GraphQLClient = GraphQLClient;
function makeRequest(_a) {
    var url = _a.url, query = _a.query, variables = _a.variables, headers = _a.headers, operationName = _a.operationName, fetch = _a.fetch, _b = _a.method, method = _b === void 0 ? "POST" : _b, fetchOptions = _a.fetchOptions;
    return __awaiter(this, void 0, void 0, function() {
        var fetcher, isBathchingQuery, response, result, successfullyReceivedData, successfullyPassedErrorPolicy, headers_1, status_1, errors, rest, data, errorResult;
        return __generator(this, function(_c) {
            switch(_c.label){
                case 0:
                    fetcher = method.toUpperCase() === "POST" ? post : get;
                    isBathchingQuery = Array.isArray(query);
                    return [
                        4 /*yield*/ ,
                        fetcher({
                            url: url,
                            query: query,
                            variables: variables,
                            operationName: operationName,
                            headers: headers,
                            fetch: fetch,
                            fetchOptions: fetchOptions
                        })
                    ];
                case 1:
                    response = _c.sent();
                    return [
                        4 /*yield*/ ,
                        getResult(response, fetchOptions.jsonSerializer)
                    ];
                case 2:
                    result = _c.sent();
                    successfullyReceivedData = isBathchingQuery && Array.isArray(result) ? !result.some(function(_a) {
                        var data = _a.data;
                        return !data;
                    }) : !!result.data;
                    successfullyPassedErrorPolicy = !result.errors || fetchOptions.errorPolicy === "all" || fetchOptions.errorPolicy === "ignore";
                    if (response.ok && successfullyPassedErrorPolicy && successfullyReceivedData) {
                        headers_1 = response.headers, status_1 = response.status;
                        errors = result.errors, rest = __rest(result, [
                            "errors"
                        ]);
                        data = fetchOptions.errorPolicy === "ignore" ? rest : result;
                        return [
                            2 /*return*/ ,
                            __assign(__assign({}, isBathchingQuery ? {
                                data: data
                            } : data), {
                                headers: headers_1,
                                status: status_1
                            })
                        ];
                    } else {
                        errorResult = typeof result === "string" ? {
                            error: result
                        } : result;
                        throw new types_1.ClientError(__assign(__assign({}, errorResult), {
                            status: response.status,
                            headers: response.headers
                        }), {
                            query: query,
                            variables: variables
                        });
                    }
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
function rawRequest(urlOrOptions, query, variables, requestHeaders) {
    return __awaiter(this, void 0, void 0, function() {
        var requestOptions, client;
        return __generator(this, function(_a) {
            requestOptions = parseArgs_1.parseRawRequestExtendedArgs(urlOrOptions, query, variables, requestHeaders);
            client = new GraphQLClient(requestOptions.url);
            return [
                2 /*return*/ ,
                client.rawRequest(__assign({}, requestOptions))
            ];
        });
    });
}
exports.rawRequest = rawRequest;
function request(urlOrOptions, document, variables, requestHeaders) {
    return __awaiter(this, void 0, void 0, function() {
        var requestOptions, client;
        return __generator(this, function(_a) {
            requestOptions = parseArgs_1.parseRequestExtendedArgs(urlOrOptions, document, variables, requestHeaders);
            client = new GraphQLClient(requestOptions.url);
            return [
                2 /*return*/ ,
                client.request(__assign({}, requestOptions))
            ];
        });
    });
}
exports.request = request;
function batchRequests(urlOrOptions, documents, requestHeaders) {
    return __awaiter(this, void 0, void 0, function() {
        var requestOptions, client;
        return __generator(this, function(_a) {
            requestOptions = parseArgs_1.parseBatchRequestsExtendedArgs(urlOrOptions, documents, requestHeaders);
            client = new GraphQLClient(requestOptions.url);
            return [
                2 /*return*/ ,
                client.batchRequests(__assign({}, requestOptions))
            ];
        });
    });
}
exports.batchRequests = batchRequests;
exports["default"] = request;
/**
 * todo
 */ function getResult(response, jsonSerializer) {
    if (jsonSerializer === void 0) {
        jsonSerializer = defaultJsonSerializer_1.defaultJsonSerializer;
    }
    return __awaiter(this, void 0, void 0, function() {
        var contentType, _a, _b;
        return __generator(this, function(_c) {
            switch(_c.label){
                case 0:
                    response.headers.forEach(function(value, key) {
                        if (key.toLowerCase() === "content-type") {
                            contentType = value;
                        }
                    });
                    if (!(contentType && contentType.toLowerCase().startsWith("application/json"))) return [
                        3 /*break*/ ,
                        2
                    ];
                    _b = (_a = jsonSerializer).parse;
                    return [
                        4 /*yield*/ ,
                        response.text()
                    ];
                case 1:
                    return [
                        2 /*return*/ ,
                        _b.apply(_a, [
                            _c.sent()
                        ])
                    ];
                case 2:
                    return [
                        2 /*return*/ ,
                        response.text()
                    ];
            }
        });
    });
}
/**
 * helpers
 */ function extractOperationName(document) {
    var _a;
    var operationName = undefined;
    var operationDefinitions = document.definitions.filter(function(definition) {
        return definition.kind === "OperationDefinition";
    });
    if (operationDefinitions.length === 1) {
        operationName = (_a = operationDefinitions[0].name) === null || _a === void 0 ? void 0 : _a.value;
    }
    return operationName;
}
function resolveRequestDocument(document) {
    if (typeof document === "string") {
        var operationName_1 = undefined;
        try {
            var parsedDocument = parser_1.parse(document);
            operationName_1 = extractOperationName(parsedDocument);
        } catch (err) {
        // Failed parsing the document, the operationName will be undefined
        }
        return {
            query: document,
            operationName: operationName_1
        };
    }
    var operationName = extractOperationName(document);
    return {
        query: printer_1.print(document),
        operationName: operationName
    };
}
exports.resolveRequestDocument = resolveRequestDocument;
function callOrIdentity(value) {
    return typeof value === "function" ? value() : value;
}
/**
 * Convenience passthrough template tag to get the benefits of tooling for the gql template tag. This does not actually parse the input into a GraphQL DocumentNode like graphql-tag package does. It just returns the string with any variables given interpolated. Can save you a bit of performance and having to install another package.
 *
 * @example
 *
 * import { gql } from 'graphql-request'
 *
 * await request('https://foo.bar/graphql', gql`...`)
 *
 * @remarks
 *
 * Several tools in the Node GraphQL ecosystem are hardcoded to specially treat any template tag named "gql". For example see this prettier issue: https://github.com/prettier/prettier/issues/4360. Using this template tag has no runtime effect beyond variable interpolation.
 */ function gql(chunks) {
    var variables = [];
    for(var _i = 1; _i < arguments.length; _i++){
        variables[_i - 1] = arguments[_i];
    }
    return chunks.reduce(function(accumulator, chunk, index) {
        return "" + accumulator + chunk + (index in variables ? variables[index] : "");
    }, "");
}
exports.gql = gql;
/**
 * Convert Headers instance into regular object
 */ function HeadersInstanceToPlainObject(headers) {
    var o = {};
    headers.forEach(function(v, k) {
        o[k] = v;
    });
    return o;
}
var graphql_ws_1 = __webpack_require__(2662);
Object.defineProperty(exports, "GraphQLWebSocketClient", ({
    enumerable: true,
    get: function() {
        return graphql_ws_1.GraphQLWebSocketClient;
    }
})); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 1833:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.parseBatchRequestsExtendedArgs = exports.parseRawRequestExtendedArgs = exports.parseRequestExtendedArgs = exports.parseBatchRequestArgs = exports.parseRawRequestArgs = exports.parseRequestArgs = void 0;
function parseRequestArgs(documentOrOptions, variables, requestHeaders) {
    return documentOrOptions.document ? documentOrOptions : {
        document: documentOrOptions,
        variables: variables,
        requestHeaders: requestHeaders,
        signal: undefined
    };
}
exports.parseRequestArgs = parseRequestArgs;
function parseRawRequestArgs(queryOrOptions, variables, requestHeaders) {
    return queryOrOptions.query ? queryOrOptions : {
        query: queryOrOptions,
        variables: variables,
        requestHeaders: requestHeaders,
        signal: undefined
    };
}
exports.parseRawRequestArgs = parseRawRequestArgs;
function parseBatchRequestArgs(documentsOrOptions, requestHeaders) {
    return documentsOrOptions.documents ? documentsOrOptions : {
        documents: documentsOrOptions,
        requestHeaders: requestHeaders,
        signal: undefined
    };
}
exports.parseBatchRequestArgs = parseBatchRequestArgs;
function parseRequestExtendedArgs(urlOrOptions, document, variables, requestHeaders) {
    return urlOrOptions.document ? urlOrOptions : {
        url: urlOrOptions,
        document: document,
        variables: variables,
        requestHeaders: requestHeaders,
        signal: undefined
    };
}
exports.parseRequestExtendedArgs = parseRequestExtendedArgs;
function parseRawRequestExtendedArgs(urlOrOptions, query, variables, requestHeaders) {
    return urlOrOptions.query ? urlOrOptions : {
        url: urlOrOptions,
        query: query,
        variables: variables,
        requestHeaders: requestHeaders,
        signal: undefined
    };
}
exports.parseRawRequestExtendedArgs = parseRawRequestExtendedArgs;
function parseBatchRequestsExtendedArgs(urlOrOptions, documents, requestHeaders) {
    return urlOrOptions.documents ? urlOrOptions : {
        url: urlOrOptions,
        documents: documents,
        requestHeaders: requestHeaders,
        signal: undefined
    };
}
exports.parseBatchRequestsExtendedArgs = parseBatchRequestsExtendedArgs; //# sourceMappingURL=parseArgs.js.map


/***/ }),

/***/ 9812:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ClientError = void 0;
var ClientError = /** @class */ function(_super) {
    __extends(ClientError, _super);
    function ClientError(response, request) {
        var _this = this;
        var message = ClientError.extractMessage(response) + ": " + JSON.stringify({
            response: response,
            request: request
        });
        _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, ClientError.prototype);
        _this.response = response;
        _this.request = request;
        // this is needed as Safari doesn't support .captureStackTrace
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(_this, ClientError);
        }
        return _this;
    }
    ClientError.extractMessage = function(response) {
        try {
            return response.errors[0].message;
        } catch (e) {
            return "GraphQL Error (Code: " + response.status + ")";
        }
    };
    return ClientError;
}(Error);
exports.ClientError = ClientError; //# sourceMappingURL=types.js.map


/***/ }),

/***/ 1690:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(6529);


/***/ }),

/***/ 5946:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(4562);


/***/ }),

/***/ 1885:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ 
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (false) {}
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
     false && (0) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === "%%") {
            return;
        }
        index++;
        if (match === "%c") {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem("debug", namespaces);
        } else {
            exports.storage.removeItem("debug");
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem("debug");
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __webpack_require__(7398)(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
    }
};


/***/ }),

/***/ 7398:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ 
function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __webpack_require__(8265);
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") {
                // Anything else let's inspect with %O
                args.unshift("%O");
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === "%%") {
                    return "%";
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === "function") {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, "enabled", {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === "function") {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) {
                continue;
            }
            namespaces = split[i].replace(/\*/g, ".*?");
            if (namespaces[0] === "-") {
                createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
            } else {
                createDebug.names.push(new RegExp("^" + namespaces + "$"));
            }
        }
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace)=>"-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        if (name[name.length - 1] === "*") {
            return true;
        }
        let i;
        let len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) {
                return false;
            }
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/ function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;


/***/ }),

/***/ 4744:
/***/ ((module) => {

"use strict";

module.exports = function ReactNativeFile(_ref) {
    var uri = _ref.uri, name = _ref.name, type = _ref.type;
    this.uri = uri;
    this.name = name;
    this.type = type;
};


/***/ }),

/***/ 863:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defaultIsExtractableFile = __webpack_require__(5133);
module.exports = function extractFiles(value, path, isExtractableFile) {
    if (path === void 0) {
        path = "";
    }
    if (isExtractableFile === void 0) {
        isExtractableFile = defaultIsExtractableFile;
    }
    var clone;
    var files = new Map();
    function addFile(paths, file) {
        var storedPaths = files.get(file);
        if (storedPaths) storedPaths.push.apply(storedPaths, paths);
        else files.set(file, paths);
    }
    if (isExtractableFile(value)) {
        clone = null;
        addFile([
            path
        ], value);
    } else {
        var prefix = path ? path + "." : "";
        if (typeof FileList !== "undefined" && value instanceof FileList) clone = Array.prototype.map.call(value, function(file, i) {
            addFile([
                "" + prefix + i
            ], file);
            return null;
        });
        else if (Array.isArray(value)) clone = value.map(function(child, i) {
            var result = extractFiles(child, "" + prefix + i, isExtractableFile);
            result.files.forEach(addFile);
            return result.clone;
        });
        else if (value && value.constructor === Object) {
            clone = {};
            for(var i in value){
                var result = extractFiles(value[i], "" + prefix + i, isExtractableFile);
                result.files.forEach(addFile);
                clone[i] = result.clone;
            }
        } else clone = value;
    }
    return {
        clone: clone,
        files: files
    };
};


/***/ }),

/***/ 926:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.ReactNativeFile = __webpack_require__(4744);
exports.extractFiles = __webpack_require__(863);
exports.isExtractableFile = __webpack_require__(5133);


/***/ }),

/***/ 5133:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ReactNativeFile = __webpack_require__(4744);
module.exports = function isExtractableFile(value) {
    return typeof File !== "undefined" && value instanceof File || typeof Blob !== "undefined" && value instanceof Blob || value instanceof ReactNativeFile;
};


/***/ }),

/***/ 2130:
/***/ ((module) => {

"use strict";

function Cache() {
    var _cache = Object.create(null);
    var _hitCount = 0;
    var _missCount = 0;
    var _size = 0;
    var _debug = false;
    this.put = function(key, value, time, timeoutCallback) {
        if (_debug) {
            console.log("caching: %s = %j (@%s)", key, value, time);
        }
        if (typeof time !== "undefined" && (typeof time !== "number" || isNaN(time) || time <= 0)) {
            throw new Error("Cache timeout must be a positive number");
        } else if (typeof timeoutCallback !== "undefined" && typeof timeoutCallback !== "function") {
            throw new Error("Cache timeout callback must be a function");
        }
        var oldRecord = _cache[key];
        if (oldRecord) {
            clearTimeout(oldRecord.timeout);
        } else {
            _size++;
        }
        var record = {
            value: value,
            expire: time + Date.now()
        };
        if (!isNaN(record.expire)) {
            record.timeout = setTimeout((function() {
                _del(key);
                if (timeoutCallback) {
                    timeoutCallback(key, value);
                }
            }).bind(this), time);
        }
        _cache[key] = record;
        return value;
    };
    this.del = function(key) {
        var canDelete = true;
        var oldRecord = _cache[key];
        if (oldRecord) {
            clearTimeout(oldRecord.timeout);
            if (!isNaN(oldRecord.expire) && oldRecord.expire < Date.now()) {
                canDelete = false;
            }
        } else {
            canDelete = false;
        }
        if (canDelete) {
            _del(key);
        }
        return canDelete;
    };
    function _del(key) {
        _size--;
        delete _cache[key];
    }
    this.clear = function() {
        for(var key in _cache){
            clearTimeout(_cache[key].timeout);
        }
        _size = 0;
        _cache = Object.create(null);
        if (_debug) {
            _hitCount = 0;
            _missCount = 0;
        }
    };
    this.get = function(key) {
        var data = _cache[key];
        if (typeof data != "undefined") {
            if (isNaN(data.expire) || data.expire >= Date.now()) {
                if (_debug) _hitCount++;
                return data.value;
            } else {
                // free some space
                if (_debug) _missCount++;
                _size--;
                delete _cache[key];
            }
        } else if (_debug) {
            _missCount++;
        }
        return null;
    };
    this.size = function() {
        return _size;
    };
    this.memsize = function() {
        var size = 0, key;
        for(key in _cache){
            size++;
        }
        return size;
    };
    this.debug = function(bool) {
        _debug = bool;
    };
    this.hits = function() {
        return _hitCount;
    };
    this.misses = function() {
        return _missCount;
    };
    this.keys = function() {
        return Object.keys(_cache);
    };
    this.exportJson = function() {
        var plainJsCache = {};
        // Discard the `timeout` property.
        // Note: JSON doesn't support `NaN`, so convert it to `'NaN'`.
        for(var key in _cache){
            var record = _cache[key];
            plainJsCache[key] = {
                value: record.value,
                expire: record.expire || "NaN"
            };
        }
        return JSON.stringify(plainJsCache);
    };
    this.importJson = function(jsonToImport, options) {
        var cacheToImport = JSON.parse(jsonToImport);
        var currTime = Date.now();
        var skipDuplicates = options && options.skipDuplicates;
        for(var key in cacheToImport){
            if (cacheToImport.hasOwnProperty(key)) {
                if (skipDuplicates) {
                    var existingRecord = _cache[key];
                    if (existingRecord) {
                        if (_debug) {
                            console.log("Skipping duplicate imported key '%s'", key);
                        }
                        continue;
                    }
                }
                var record = cacheToImport[key];
                // record.expire could be `'NaN'` if no expiry was set.
                // Try to subtract from it; a string minus a number is `NaN`, which is perfectly fine here.
                var remainingTime = record.expire - currTime;
                if (remainingTime <= 0) {
                    // Delete any record that might exist with the same key, since this key is expired.
                    this.del(key);
                    continue;
                }
                // Remaining time must now be either positive or `NaN`,
                // but `put` will throw an error if we try to give it `NaN`.
                remainingTime = remainingTime > 0 ? remainingTime : undefined;
                this.put(key, record.value, remainingTime);
            }
        }
        return this.size();
    };
}
module.exports = new Cache();
module.exports.Cache = Cache;


/***/ }),

/***/ 8265:
/***/ ((module) => {

"use strict";
/**
 * Helpers.
 */ 
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
        return parse(val);
    } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch(type){
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
            return n * y;
        case "weeks":
        case "week":
        case "w":
            return n * w;
        case "days":
        case "day":
        case "d":
            return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
            return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
            return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
            return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + "d";
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + "h";
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + "m";
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + "s";
    }
    return ms + "ms";
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
    }
    return ms + " ms";
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
}


/***/ }),

/***/ 5008:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var has = Object.prototype.hasOwnProperty, undef;
/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */ function decode(input) {
    try {
        return decodeURIComponent(input.replace(/\+/g, " "));
    } catch (e) {
        return null;
    }
}
/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */ function encode(input) {
    try {
        return encodeURIComponent(input);
    } catch (e) {
        return null;
    }
}
/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */ function querystring(query) {
    var parser = /([^=?#&]+)=?([^&]*)/g, result = {}, part;
    while(part = parser.exec(query)){
        var key = decode(part[1]), value = decode(part[2]);
        //
        // Prevent overriding of existing properties. This ensures that build-in
        // methods like `toString` or __proto__ are not overriden by malicious
        // querystrings.
        //
        // In the case if failed decoding, we want to omit the key/value pairs
        // from the result.
        //
        if (key === null || value === null || key in result) continue;
        result[key] = value;
    }
    return result;
}
/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */ function querystringify(obj, prefix) {
    prefix = prefix || "";
    var pairs = [], value, key;
    //
    // Optionally prefix with a '?' if needed
    //
    if ("string" !== typeof prefix) prefix = "?";
    for(key in obj){
        if (has.call(obj, key)) {
            value = obj[key];
            //
            // Edge cases where we actually want to encode the value to an empty
            // string instead of the stringified value.
            //
            if (!value && (value === null || value === undef || isNaN(value))) {
                value = "";
            }
            key = encode(key);
            value = encode(value);
            //
            // If we failed to encode the strings, we should bail out as we don't
            // want to add invalid strings to the query.
            //
            if (key === null || value === null) continue;
            pairs.push(key + "=" + value);
        }
    }
    return pairs.length ? prefix + pairs.join("&") : "";
}
//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ 8619:
/***/ ((module) => {

"use strict";

/**
 * RegexParser
 * Parses a string input.
 *
 * @name RegexParser
 * @function
 * @param {String} input The string input that should be parsed as regular
 * expression.
 * @return {RegExp} The parsed regular expression.
 */ var RegexParser = module.exports = function(input) {
    // Validate input
    if (typeof input !== "string") {
        throw new Error("Invalid input. Input must be a string");
    }
    // Parse input
    var m = input.match(/(\/?)(.+)\1([a-z]*)/i);
    // If there's no match, throw an error
    if (!m) {
        throw new Error("Invalid regular expression format.");
    }
    // Filter valid flags: 'g', 'i', 'm', 's', 'u', and 'y'
    var validFlags = Array.from(new Set(m[3])).filter(function(flag) {
        return "gimsuy".includes(flag);
    }).join("");
    // Create the regular expression
    return new RegExp(m[2], validFlags);
};


/***/ }),

/***/ 8947:
/***/ ((module) => {

"use strict";

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */ module.exports = function required(port, protocol) {
    protocol = protocol.split(":")[0];
    port = +port;
    if (!port) return false;
    switch(protocol){
        case "http":
        case "ws":
            return port !== 80;
        case "https":
        case "wss":
            return port !== 443;
        case "ftp":
            return port !== 21;
        case "gopher":
            return port !== 70;
        case "file":
            return false;
    }
    return port !== 0;
};


/***/ }),

/***/ 5911:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var required = __webpack_require__(8947), qs = __webpack_require__(5008), controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, CRHTLF = /[\n\r\t]/g, slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, port = /:\d+$/, protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, windowsDriveLetter = /^[a-zA-Z]:/;
/**
 * Remove control characters and whitespace from the beginning of a string.
 *
 * @param {Object|String} str String to trim.
 * @returns {String} A new string representing `str` stripped of control
 *     characters and whitespace from its beginning.
 * @public
 */ function trimLeft(str) {
    return (str ? str : "").toString().replace(controlOrWhitespace, "");
}
/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */ var rules = [
    [
        "#",
        "hash"
    ],
    [
        "?",
        "query"
    ],
    function sanitize(address, url) {
        return isSpecial(url.protocol) ? address.replace(/\\/g, "/") : address;
    },
    [
        "/",
        "pathname"
    ],
    [
        "@",
        "auth",
        1
    ],
    [
        NaN,
        "host",
        undefined,
        1,
        1
    ],
    [
        /:(\d*)$/,
        "port",
        undefined,
        1
    ],
    [
        NaN,
        "hostname",
        undefined,
        1,
        1
    ] // Set left over.
];
/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */ var ignore = {
    hash: 1,
    query: 1
};
/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */ function lolcation(loc) {
    var globalVar;
    if (false) {}
    else if (typeof __webpack_require__.g !== "undefined") globalVar = __webpack_require__.g;
    else if (typeof self !== "undefined") __webpack_require__.g = self;
    else __webpack_require__.g = {};
    var location = __webpack_require__.g.location || {};
    loc = loc || location;
    var finaldestination = {}, type = typeof loc, key;
    if ("blob:" === loc.protocol) {
        finaldestination = new Url(unescape(loc.pathname), {});
    } else if ("string" === type) {
        finaldestination = new Url(loc, {});
        for(key in ignore)delete finaldestination[key];
    } else if ("object" === type) {
        for(key in loc){
            if (key in ignore) continue;
            finaldestination[key] = loc[key];
        }
        if (finaldestination.slashes === undefined) {
            finaldestination.slashes = slashes.test(loc.href);
        }
    }
    return finaldestination;
}
/**
 * Check whether a protocol scheme is special.
 *
 * @param {String} The protocol scheme of the URL
 * @return {Boolean} `true` if the protocol scheme is special, else `false`
 * @private
 */ function isSpecial(scheme) {
    return scheme === "file:" || scheme === "ftp:" || scheme === "http:" || scheme === "https:" || scheme === "ws:" || scheme === "wss:";
}
/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */ /**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @param {Object} location
 * @return {ProtocolExtract} Extracted information.
 * @private
 */ function extractProtocol(address, location) {
    address = trimLeft(address);
    address = address.replace(CRHTLF, "");
    location = location || {};
    var match = protocolre.exec(address);
    var protocol = match[1] ? match[1].toLowerCase() : "";
    var forwardSlashes = !!match[2];
    var otherSlashes = !!match[3];
    var slashesCount = 0;
    var rest;
    if (forwardSlashes) {
        if (otherSlashes) {
            rest = match[2] + match[3] + match[4];
            slashesCount = match[2].length + match[3].length;
        } else {
            rest = match[2] + match[4];
            slashesCount = match[2].length;
        }
    } else {
        if (otherSlashes) {
            rest = match[3] + match[4];
            slashesCount = match[3].length;
        } else {
            rest = match[4];
        }
    }
    if (protocol === "file:") {
        if (slashesCount >= 2) {
            rest = rest.slice(2);
        }
    } else if (isSpecial(protocol)) {
        rest = match[4];
    } else if (protocol) {
        if (forwardSlashes) {
            rest = rest.slice(2);
        }
    } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
        rest = match[4];
    }
    return {
        protocol: protocol,
        slashes: forwardSlashes || isSpecial(protocol),
        slashesCount: slashesCount,
        rest: rest
    };
}
/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */ function resolve(relative, base) {
    if (relative === "") return base;
    var path = (base || "/").split("/").slice(0, -1).concat(relative.split("/")), i = path.length, last = path[i - 1], unshift = false, up = 0;
    while(i--){
        if (path[i] === ".") {
            path.splice(i, 1);
        } else if (path[i] === "..") {
            path.splice(i, 1);
            up++;
        } else if (up) {
            if (i === 0) unshift = true;
            path.splice(i, 1);
            up--;
        }
    }
    if (unshift) path.unshift("");
    if (last === "." || last === "..") path.push("");
    return path.join("/");
}
/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */ function Url(address, location, parser) {
    address = trimLeft(address);
    address = address.replace(CRHTLF, "");
    if (!(this instanceof Url)) {
        return new Url(address, location, parser);
    }
    var relative, extracted, parse, instruction, index, key, instructions = rules.slice(), type = typeof location, url = this, i = 0;
    //
    // The following if statements allows this module two have compatibility with
    // 2 different API:
    //
    // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
    //    where the boolean indicates that the query string should also be parsed.
    //
    // 2. The `URL` interface of the browser which accepts a URL, object as
    //    arguments. The supplied object will be used as default values / fall-back
    //    for relative paths.
    //
    if ("object" !== type && "string" !== type) {
        parser = location;
        location = null;
    }
    if (parser && "function" !== typeof parser) parser = qs.parse;
    location = lolcation(location);
    //
    // Extract protocol information before running the instructions.
    //
    extracted = extractProtocol(address || "", location);
    relative = !extracted.protocol && !extracted.slashes;
    url.slashes = extracted.slashes || relative && location.slashes;
    url.protocol = extracted.protocol || location.protocol || "";
    address = extracted.rest;
    //
    // When the authority component is absent the URL starts with a path
    // component.
    //
    if (extracted.protocol === "file:" && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
        instructions[3] = [
            /(.*)/,
            "pathname"
        ];
    }
    for(; i < instructions.length; i++){
        instruction = instructions[i];
        if (typeof instruction === "function") {
            address = instruction(address, url);
            continue;
        }
        parse = instruction[0];
        key = instruction[1];
        if (parse !== parse) {
            url[key] = address;
        } else if ("string" === typeof parse) {
            index = parse === "@" ? address.lastIndexOf(parse) : address.indexOf(parse);
            if (~index) {
                if ("number" === typeof instruction[2]) {
                    url[key] = address.slice(0, index);
                    address = address.slice(index + instruction[2]);
                } else {
                    url[key] = address.slice(index);
                    address = address.slice(0, index);
                }
            }
        } else if (index = parse.exec(address)) {
            url[key] = index[1];
            address = address.slice(0, index.index);
        }
        url[key] = url[key] || (relative && instruction[3] ? location[key] || "" : "");
        //
        // Hostname, host and protocol should be lowercased so they can be used to
        // create a proper `origin`.
        //
        if (instruction[4]) url[key] = url[key].toLowerCase();
    }
    //
    // Also parse the supplied query string in to an object. If we're supplied
    // with a custom parser as function use that instead of the default build-in
    // parser.
    //
    if (parser) url.query = parser(url.query);
    //
    // If the URL is relative, resolve the pathname against the base URL.
    //
    if (relative && location.slashes && url.pathname.charAt(0) !== "/" && (url.pathname !== "" || location.pathname !== "")) {
        url.pathname = resolve(url.pathname, location.pathname);
    }
    //
    // Default to a / for pathname if none exists. This normalizes the URL
    // to always have a /
    //
    if (url.pathname.charAt(0) !== "/" && isSpecial(url.protocol)) {
        url.pathname = "/" + url.pathname;
    }
    //
    // We should not add port numbers if they are already the default port number
    // for a given protocol. As the host also contains the port number we're going
    // override it with the hostname which contains no port number.
    //
    if (!required(url.port, url.protocol)) {
        url.host = url.hostname;
        url.port = "";
    }
    //
    // Parse down the `auth` for the username and password.
    //
    url.username = url.password = "";
    if (url.auth) {
        index = url.auth.indexOf(":");
        if (~index) {
            url.username = url.auth.slice(0, index);
            url.username = encodeURIComponent(decodeURIComponent(url.username));
            url.password = url.auth.slice(index + 1);
            url.password = encodeURIComponent(decodeURIComponent(url.password));
        } else {
            url.username = encodeURIComponent(decodeURIComponent(url.auth));
        }
        url.auth = url.password ? url.username + ":" + url.password : url.username;
    }
    url.origin = url.protocol !== "file:" && isSpecial(url.protocol) && url.host ? url.protocol + "//" + url.host : "null";
    //
    // The href is just the compiled result.
    //
    url.href = url.toString();
}
/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */ function set(part, value, fn) {
    var url = this;
    switch(part){
        case "query":
            if ("string" === typeof value && value.length) {
                value = (fn || qs.parse)(value);
            }
            url[part] = value;
            break;
        case "port":
            url[part] = value;
            if (!required(value, url.protocol)) {
                url.host = url.hostname;
                url[part] = "";
            } else if (value) {
                url.host = url.hostname + ":" + value;
            }
            break;
        case "hostname":
            url[part] = value;
            if (url.port) value += ":" + url.port;
            url.host = value;
            break;
        case "host":
            url[part] = value;
            if (port.test(value)) {
                value = value.split(":");
                url.port = value.pop();
                url.hostname = value.join(":");
            } else {
                url.hostname = value;
                url.port = "";
            }
            break;
        case "protocol":
            url.protocol = value.toLowerCase();
            url.slashes = !fn;
            break;
        case "pathname":
        case "hash":
            if (value) {
                var char = part === "pathname" ? "/" : "#";
                url[part] = value.charAt(0) !== char ? char + value : value;
            } else {
                url[part] = value;
            }
            break;
        case "username":
        case "password":
            url[part] = encodeURIComponent(value);
            break;
        case "auth":
            var index = value.indexOf(":");
            if (~index) {
                url.username = value.slice(0, index);
                url.username = encodeURIComponent(decodeURIComponent(url.username));
                url.password = value.slice(index + 1);
                url.password = encodeURIComponent(decodeURIComponent(url.password));
            } else {
                url.username = encodeURIComponent(decodeURIComponent(value));
            }
    }
    for(var i = 0; i < rules.length; i++){
        var ins = rules[i];
        if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
    }
    url.auth = url.password ? url.username + ":" + url.password : url.username;
    url.origin = url.protocol !== "file:" && isSpecial(url.protocol) && url.host ? url.protocol + "//" + url.host : "null";
    url.href = url.toString();
    return url;
}
/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */ function toString(stringify) {
    if (!stringify || "function" !== typeof stringify) stringify = qs.stringify;
    var query, url = this, host = url.host, protocol = url.protocol;
    if (protocol && protocol.charAt(protocol.length - 1) !== ":") protocol += ":";
    var result = protocol + (url.protocol && url.slashes || isSpecial(url.protocol) ? "//" : "");
    if (url.username) {
        result += url.username;
        if (url.password) result += ":" + url.password;
        result += "@";
    } else if (url.password) {
        result += ":" + url.password;
        result += "@";
    } else if (url.protocol !== "file:" && isSpecial(url.protocol) && !host && url.pathname !== "/") {
        //
        // Add back the empty userinfo, otherwise the original invalid URL
        // might be transformed into a valid one with `url.pathname` as host.
        //
        result += "@";
    }
    //
    // Trailing colon is removed from `url.host` when it is parsed. If it still
    // ends with a colon, then add back the trailing colon that was removed. This
    // prevents an invalid URL from being transformed into a valid one.
    //
    if (host[host.length - 1] === ":" || port.test(url.hostname) && !url.port) {
        host += ":";
    }
    result += host + url.pathname;
    query = "object" === typeof url.query ? stringify(url.query) : url.query;
    if (query) result += "?" !== query.charAt(0) ? "?" + query : query;
    if (url.hash) result += url.hash;
    return result;
}
Url.prototype = {
    set: set,
    toString: toString
};
//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;
module.exports = Url;


/***/ }),

/***/ 4271:
/***/ ((module) => {

"use strict";
/* eslint-disable */ // Do not edit this file, it is auto-generated at build time!
// See scripts/bootstrap.ts to modify the generation of this file.

const config = {};
config.sitecoreApiKey = process.env.SITECORE_API_KEY || "{1F320DE2-6517-4377-94E1-C4D5E66EC5EF}", config.sitecoreApiHost = process.env.SITECORE_API_HOST || "https://workshop.suglatam.com", config.sitecoreSiteName = process.env.SITECORE_SITE_NAME || "workshop-jss-app", config.graphQLEndpointPath = process.env.GRAPH_QL_ENDPOINT_PATH || "/sitecore/api/graph/edge", config.defaultLanguage = process.env.DEFAULT_LANGUAGE || "en", config.graphQLEndpoint = process.env.GRAPH_QL_ENDPOINT || "https://workshop.suglatam.com/sitecore/api/graph/edge", config.layoutServiceConfigurationName = process.env.LAYOUT_SERVICE_CONFIGURATION_NAME || "sxa-jss", config.publicUrl = "http://localhost:3000" || 0, module.exports = config;


/***/ }),

/***/ 194:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// © Sitecore Corporation A/S. All rights reserved. Sitecore® is a registered trademark of Sitecore Corporation A/S.

module.exports = __webpack_require__(6277);


/***/ }),

/***/ 2382:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ devAssert)
/* harmony export */ });
function devAssert(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) {
        throw new Error(message);
    }
}


/***/ }),

/***/ 1232:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ inspect)
/* harmony export */ });
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */ function inspect(value) {
    return formatValue(value, []);
}
function formatValue(value, seenValues) {
    switch(typeof value){
        case "string":
            return JSON.stringify(value);
        case "function":
            return value.name ? `[function ${value.name}]` : "[function]";
        case "object":
            return formatObjectValue(value, seenValues);
        default:
            return String(value);
    }
}
function formatObjectValue(value, previouslySeenValues) {
    if (value === null) {
        return "null";
    }
    if (previouslySeenValues.includes(value)) {
        return "[Circular]";
    }
    const seenValues = [
        ...previouslySeenValues,
        value
    ];
    if (isJSONable(value)) {
        const jsonValue = value.toJSON(); // check for infinite recursion
        if (jsonValue !== value) {
            return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
        }
    } else if (Array.isArray(value)) {
        return formatArray(value, seenValues);
    }
    return formatObject(value, seenValues);
}
function isJSONable(value) {
    return typeof value.toJSON === "function";
}
function formatObject(object, seenValues) {
    const entries = Object.entries(object);
    if (entries.length === 0) {
        return "{}";
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return "[" + getObjectTag(object) + "]";
    }
    const properties = entries.map(([key, value])=>key + ": " + formatValue(value, seenValues));
    return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
    if (array.length === 0) {
        return "[]";
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return "[Array]";
    }
    const len = Math.min(MAX_ARRAY_LENGTH, array.length);
    const remaining = array.length - len;
    const items = [];
    for(let i = 0; i < len; ++i){
        items.push(formatValue(array[i], seenValues));
    }
    if (remaining === 1) {
        items.push("... 1 more item");
    } else if (remaining > 1) {
        items.push(`... ${remaining} more items`);
    }
    return "[" + items.join(", ") + "]";
}
function getObjectTag(object) {
    const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
    if (tag === "Object" && typeof object.constructor === "function") {
        const name = object.constructor.name;
        if (typeof name === "string" && name !== "") {
            return name;
        }
    }
    return tag;
}


/***/ }),

/***/ 8894:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UG: () => (/* binding */ isNode),
/* harmony export */   WU: () => (/* binding */ Token),
/* harmony export */   Ye: () => (/* binding */ Location),
/* harmony export */   h8: () => (/* binding */ QueryDocumentKeys),
/* harmony export */   ku: () => (/* binding */ OperationTypeNode)
/* harmony export */ });
/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */ class Location {
    /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The Token at which this Node begins.
   */ /**
   * The Token at which this Node ends.
   */ /**
   * The Source document the AST represents.
   */ constructor(startToken, endToken, source){
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
    }
    get [Symbol.toStringTag]() {
        return "Location";
    }
    toJSON() {
        return {
            start: this.start,
            end: this.end
        };
    }
}
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */ class Token {
    /**
   * The kind of Token.
   */ /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The 1-indexed line number on which this Token appears.
   */ /**
   * The 1-indexed column number at which this Token begins.
   */ /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */ /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */ constructor(kind, start, end, line, column, value){
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    get [Symbol.toStringTag]() {
        return "Token";
    }
    toJSON() {
        return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
        };
    }
}
/**
 * The list of all possible AST node types.
 */ /**
 * @internal
 */ const QueryDocumentKeys = {
    Name: [],
    Document: [
        "definitions"
    ],
    OperationDefinition: [
        "name",
        "variableDefinitions",
        "directives",
        "selectionSet"
    ],
    VariableDefinition: [
        "variable",
        "type",
        "defaultValue",
        "directives"
    ],
    Variable: [
        "name"
    ],
    SelectionSet: [
        "selections"
    ],
    Field: [
        "alias",
        "name",
        "arguments",
        "directives",
        "selectionSet"
    ],
    Argument: [
        "name",
        "value"
    ],
    FragmentSpread: [
        "name",
        "directives"
    ],
    InlineFragment: [
        "typeCondition",
        "directives",
        "selectionSet"
    ],
    FragmentDefinition: [
        "name",
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet"
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: [
        "values"
    ],
    ObjectValue: [
        "fields"
    ],
    ObjectField: [
        "name",
        "value"
    ],
    Directive: [
        "name",
        "arguments"
    ],
    NamedType: [
        "name"
    ],
    ListType: [
        "type"
    ],
    NonNullType: [
        "type"
    ],
    SchemaDefinition: [
        "description",
        "directives",
        "operationTypes"
    ],
    OperationTypeDefinition: [
        "type"
    ],
    ScalarTypeDefinition: [
        "description",
        "name",
        "directives"
    ],
    ObjectTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    FieldDefinition: [
        "description",
        "name",
        "arguments",
        "type",
        "directives"
    ],
    InputValueDefinition: [
        "description",
        "name",
        "type",
        "defaultValue",
        "directives"
    ],
    InterfaceTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    UnionTypeDefinition: [
        "description",
        "name",
        "directives",
        "types"
    ],
    EnumTypeDefinition: [
        "description",
        "name",
        "directives",
        "values"
    ],
    EnumValueDefinition: [
        "description",
        "name",
        "directives"
    ],
    InputObjectTypeDefinition: [
        "description",
        "name",
        "directives",
        "fields"
    ],
    DirectiveDefinition: [
        "description",
        "name",
        "arguments",
        "locations"
    ],
    SchemaExtension: [
        "directives",
        "operationTypes"
    ],
    ScalarTypeExtension: [
        "name",
        "directives"
    ],
    ObjectTypeExtension: [
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    InterfaceTypeExtension: [
        "name",
        "interfaces",
        "directives",
        "fields"
    ],
    UnionTypeExtension: [
        "name",
        "directives",
        "types"
    ],
    EnumTypeExtension: [
        "name",
        "directives",
        "values"
    ],
    InputObjectTypeExtension: [
        "name",
        "directives",
        "fields"
    ]
};
const kindValues = new Set(Object.keys(QueryDocumentKeys));
/**
 * @internal
 */ function isNode(maybeNode) {
    const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
    return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
/** Name */ var OperationTypeNode;
(function(OperationTypeNode) {
    OperationTypeNode["QUERY"] = "query";
    OperationTypeNode["MUTATION"] = "mutation";
    OperationTypeNode["SUBSCRIPTION"] = "subscription";
})(OperationTypeNode || (OperationTypeNode = {}));



/***/ }),

/***/ 2717:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LZ: () => (/* binding */ printBlockString),
/* harmony export */   wv: () => (/* binding */ dedentBlockStringLines)
/* harmony export */ });
/* unused harmony export isPrintableAsBlockString */
/* harmony import */ var _characterClasses_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1499);

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */ function dedentBlockStringLines(lines) {
    var _firstNonEmptyLine2;
    let commonIndent = Number.MAX_SAFE_INTEGER;
    let firstNonEmptyLine = null;
    let lastNonEmptyLine = -1;
    for(let i = 0; i < lines.length; ++i){
        var _firstNonEmptyLine;
        const line = lines[i];
        const indent = leadingWhitespace(line);
        if (indent === line.length) {
            continue; // skip empty lines
        }
        firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
        lastNonEmptyLine = i;
        if (i !== 0 && indent < commonIndent) {
            commonIndent = indent;
        }
    }
    return lines // Remove common indentation from all lines but first.
    .map((line, i)=>i === 0 ? line : line.slice(commonIndent)) // Remove leading and trailing blank lines.
    .slice((_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0, lastNonEmptyLine + 1);
}
function leadingWhitespace(str) {
    let i = 0;
    while(i < str.length && (0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isWhiteSpace */ .FD)(str.charCodeAt(i))){
        ++i;
    }
    return i;
}
/**
 * @internal
 */ function isPrintableAsBlockString(value) {
    if (value === "") {
        return true; // empty string is printable
    }
    let isEmptyLine = true;
    let hasIndent = false;
    let hasCommonIndent = true;
    let seenNonEmptyLine = false;
    for(let i = 0; i < value.length; ++i){
        switch(value.codePointAt(i)){
            case 0x0000:
            case 0x0001:
            case 0x0002:
            case 0x0003:
            case 0x0004:
            case 0x0005:
            case 0x0006:
            case 0x0007:
            case 0x0008:
            case 0x000b:
            case 0x000c:
            case 0x000e:
            case 0x000f:
                return false;
            // Has non-printable characters
            case 0x000d:
                //  \r
                return false;
            // Has \r or \r\n which will be replaced as \n
            case 10:
                //  \n
                if (isEmptyLine && !seenNonEmptyLine) {
                    return false; // Has leading new line
                }
                seenNonEmptyLine = true;
                isEmptyLine = true;
                hasIndent = false;
                break;
            case 9:
            case 32:
                //  <space>
                hasIndent || (hasIndent = isEmptyLine);
                break;
            default:
                hasCommonIndent && (hasCommonIndent = hasIndent);
                isEmptyLine = false;
        }
    }
    if (isEmptyLine) {
        return false; // Has trailing empty lines
    }
    if (hasCommonIndent && seenNonEmptyLine) {
        return false; // Has internal indent
    }
    return true;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */ function printBlockString(value, options) {
    const escapedValue = value.replace(/"""/g, '\\"""'); // Expand a block string's raw value into independent lines.
    const lines = escapedValue.split(/\r\n|[\n\r]/g);
    const isSingleLine = lines.length === 1; // If common indentation is found we can fix some of those cases by adding leading new line
    const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line)=>line.length === 0 || (0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isWhiteSpace */ .FD)(line.charCodeAt(0))); // Trailing triple quotes just looks confusing but doesn't force trailing new line
    const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""'); // Trailing quote (single or double) or slash forces trailing new line
    const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
    const hasTrailingSlash = value.endsWith("\\");
    const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
    const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
    (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
    let result = ""; // Format a multi-line block quote to account for leading space.
    const skipLeadingNewLine = isSingleLine && (0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isWhiteSpace */ .FD)(value.charCodeAt(0));
    if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
        result += "\n";
    }
    result += escapedValue;
    if (printAsMultipleLines || forceTrailingNewline) {
        result += "\n";
    }
    return '"""' + result + '"""';
}


/***/ }),

/***/ 1499:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FD: () => (/* binding */ isWhiteSpace),
/* harmony export */   HQ: () => (/* binding */ isNameContinue),
/* harmony export */   LQ: () => (/* binding */ isNameStart),
/* harmony export */   X1: () => (/* binding */ isDigit)
/* harmony export */ });
/* unused harmony export isLetter */
/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */ function isWhiteSpace(code) {
    return code === 0x0009 || code === 0x0020;
}
/**
 * ```
 * Digit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 * ```
 * @internal
 */ function isDigit(code) {
    return code >= 0x0030 && code <= 0x0039;
}
/**
 * ```
 * Letter :: one of
 *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
 *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
 *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
 *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
 * ```
 * @internal
 */ function isLetter(code) {
    return code >= 0x0061 && code <= 0x007a || // A-Z
    code >= 0x0041 && code <= 0x005a // a-z
    ;
}
/**
 * ```
 * NameStart ::
 *   - Letter
 *   - `_`
 * ```
 * @internal
 */ function isNameStart(code) {
    return isLetter(code) || code === 0x005f;
}
/**
 * ```
 * NameContinue ::
 *   - Letter
 *   - Digit
 *   - `_`
 * ```
 * @internal
 */ function isNameContinue(code) {
    return isLetter(code) || isDigit(code) || code === 0x005f;
}


/***/ }),

/***/ 3281:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ Kind)
/* harmony export */ });
/**
 * The set of allowed kind values for AST nodes.
 */ var Kind;
(function(Kind) {
    Kind["NAME"] = "Name";
    Kind["DOCUMENT"] = "Document";
    Kind["OPERATION_DEFINITION"] = "OperationDefinition";
    Kind["VARIABLE_DEFINITION"] = "VariableDefinition";
    Kind["SELECTION_SET"] = "SelectionSet";
    Kind["FIELD"] = "Field";
    Kind["ARGUMENT"] = "Argument";
    Kind["FRAGMENT_SPREAD"] = "FragmentSpread";
    Kind["INLINE_FRAGMENT"] = "InlineFragment";
    Kind["FRAGMENT_DEFINITION"] = "FragmentDefinition";
    Kind["VARIABLE"] = "Variable";
    Kind["INT"] = "IntValue";
    Kind["FLOAT"] = "FloatValue";
    Kind["STRING"] = "StringValue";
    Kind["BOOLEAN"] = "BooleanValue";
    Kind["NULL"] = "NullValue";
    Kind["ENUM"] = "EnumValue";
    Kind["LIST"] = "ListValue";
    Kind["OBJECT"] = "ObjectValue";
    Kind["OBJECT_FIELD"] = "ObjectField";
    Kind["DIRECTIVE"] = "Directive";
    Kind["NAMED_TYPE"] = "NamedType";
    Kind["LIST_TYPE"] = "ListType";
    Kind["NON_NULL_TYPE"] = "NonNullType";
    Kind["SCHEMA_DEFINITION"] = "SchemaDefinition";
    Kind["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
    Kind["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
    Kind["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
    Kind["FIELD_DEFINITION"] = "FieldDefinition";
    Kind["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
    Kind["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
    Kind["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
    Kind["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
    Kind["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
    Kind["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
    Kind["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
    Kind["SCHEMA_EXTENSION"] = "SchemaExtension";
    Kind["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
    Kind["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
    Kind["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
    Kind["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
    Kind["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
    Kind["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
})(Kind || (Kind = {}));
 /**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */ 


/***/ }),

/***/ 2301:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Parser: () => (/* binding */ Parser),
  parse: () => (/* binding */ parse),
  parseConstValue: () => (/* binding */ parseConstValue),
  parseType: () => (/* binding */ parseType),
  parseValue: () => (/* binding */ parseValue)
});

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/jsutils/isObjectLike.mjs
/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */ function isObjectLike(value) {
    return typeof value == "object" && value !== null;
}

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/jsutils/invariant.mjs
function invariant(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) {
        throw new Error(message != null ? message : "Unexpected invariant triggered.");
    }
}

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/location.mjs

const LineRegExp = /\r\n|[\n\r]/g;
/**
 * Represents a location in a Source.
 */ /**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */ function getLocation(source, position) {
    let lastLineStart = 0;
    let line = 1;
    for (const match of source.body.matchAll(LineRegExp)){
        typeof match.index === "number" || invariant(false);
        if (match.index >= position) {
            break;
        }
        lastLineStart = match.index + match[0].length;
        line += 1;
    }
    return {
        line,
        column: position + 1 - lastLineStart
    };
}

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/printLocation.mjs

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */ function printLocation(location) {
    return printSourceLocation(location.source, getLocation(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */ function printSourceLocation(source, sourceLocation) {
    const firstLineColumnOffset = source.locationOffset.column - 1;
    const body = "".padStart(firstLineColumnOffset) + source.body;
    const lineIndex = sourceLocation.line - 1;
    const lineOffset = source.locationOffset.line - 1;
    const lineNum = sourceLocation.line + lineOffset;
    const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
    const columnNum = sourceLocation.column + columnOffset;
    const locationStr = `${source.name}:${lineNum}:${columnNum}\n`;
    const lines = body.split(/\r\n|[\n\r]/g);
    const locationLine = lines[lineIndex]; // Special case for minified documents
    if (locationLine.length > 120) {
        const subLineIndex = Math.floor(columnNum / 80);
        const subLineColumnNum = columnNum % 80;
        const subLines = [];
        for(let i = 0; i < locationLine.length; i += 80){
            subLines.push(locationLine.slice(i, i + 80));
        }
        return locationStr + printPrefixedLines([
            [
                `${lineNum} |`,
                subLines[0]
            ],
            ...subLines.slice(1, subLineIndex + 1).map((subLine)=>[
                    "|",
                    subLine
                ]),
            [
                "|",
                "^".padStart(subLineColumnNum)
            ],
            [
                "|",
                subLines[subLineIndex + 1]
            ]
        ]);
    }
    return locationStr + printPrefixedLines([
        // Lines specified like this: ["prefix", "string"],
        [
            `${lineNum - 1} |`,
            lines[lineIndex - 1]
        ],
        [
            `${lineNum} |`,
            locationLine
        ],
        [
            "|",
            "^".padStart(columnNum)
        ],
        [
            `${lineNum + 1} |`,
            lines[lineIndex + 1]
        ]
    ]);
}
function printPrefixedLines(lines) {
    const existingLines = lines.filter(([_, line])=>line !== undefined);
    const padLen = Math.max(...existingLines.map(([prefix])=>prefix.length));
    return existingLines.map(([prefix, line])=>prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
}

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/error/GraphQLError.mjs



function toNormalizedOptions(args) {
    const firstArg = args[0];
    if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
        return {
            nodes: firstArg,
            source: args[1],
            positions: args[2],
            path: args[3],
            originalError: args[4],
            extensions: args[5]
        };
    }
    return firstArg;
}
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */ class GraphQLError extends Error {
    /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */ /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */ /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */ /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */ /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */ /**
   * The original error thrown from a field resolver during execution.
   */ /**
   * Extension fields to add to the formatted error.
   */ /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */ constructor(message, ...rawArgs){
        var _this$nodes, _nodeLocations$, _ref;
        const { nodes, source, positions, path, originalError, extensions } = toNormalizedOptions(rawArgs);
        super(message);
        this.name = "GraphQLError";
        this.path = path !== null && path !== void 0 ? path : undefined;
        this.originalError = originalError !== null && originalError !== void 0 ? originalError : undefined; // Compute list of blame nodes.
        this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [
            nodes
        ] : undefined);
        const nodeLocations = undefinedIfEmpty((_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node)=>node.loc).filter((loc)=>loc != null)); // Compute locations in the source for the given nodes/positions.
        this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
        this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc)=>loc.start);
        this.locations = positions && source ? positions.map((pos)=>getLocation(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc)=>getLocation(loc.source, loc.start));
        const originalExtensions = isObjectLike(originalError === null || originalError === void 0 ? void 0 : originalError.extensions) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : undefined;
        this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : Object.create(null); // Only properties prescribed by the spec should be enumerable.
        // Keep the rest as non-enumerable.
        Object.defineProperties(this, {
            message: {
                writable: true,
                enumerable: true
            },
            name: {
                enumerable: false
            },
            nodes: {
                enumerable: false
            },
            source: {
                enumerable: false
            },
            positions: {
                enumerable: false
            },
            originalError: {
                enumerable: false
            }
        }); // Include (non-enumerable) stack trace.
        /* c8 ignore start */ // FIXME: https://github.com/graphql/graphql-js/issues/2317
        if (originalError !== null && originalError !== void 0 && originalError.stack) {
            Object.defineProperty(this, "stack", {
                value: originalError.stack,
                writable: true,
                configurable: true
            });
        } else if (Error.captureStackTrace) {
            Error.captureStackTrace(this, GraphQLError);
        } else {
            Object.defineProperty(this, "stack", {
                value: Error().stack,
                writable: true,
                configurable: true
            });
        }
    /* c8 ignore stop */ }
    get [Symbol.toStringTag]() {
        return "GraphQLError";
    }
    toString() {
        let output = this.message;
        if (this.nodes) {
            for (const node of this.nodes){
                if (node.loc) {
                    output += "\n\n" + printLocation(node.loc);
                }
            }
        } else if (this.source && this.locations) {
            for (const location of this.locations){
                output += "\n\n" + printSourceLocation(this.source, location);
            }
        }
        return output;
    }
    toJSON() {
        const formattedError = {
            message: this.message
        };
        if (this.locations != null) {
            formattedError.locations = this.locations;
        }
        if (this.path != null) {
            formattedError.path = this.path;
        }
        if (this.extensions != null && Object.keys(this.extensions).length > 0) {
            formattedError.extensions = this.extensions;
        }
        return formattedError;
    }
}
function undefinedIfEmpty(array) {
    return array === undefined || array.length === 0 ? undefined : array;
}
/**
 * See: https://spec.graphql.org/draft/#sec-Errors
 */ /**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 *
 * @deprecated Please use `error.toString` instead. Will be removed in v17
 */ function printError(error) {
    return error.toString();
}
/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 *
 * @deprecated Please use `error.toJSON` instead. Will be removed in v17
 */ function formatError(error) {
    return error.toJSON();
}

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/error/syntaxError.mjs

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */ function syntaxError(source, position, description) {
    return new GraphQLError(`Syntax Error: ${description}`, {
        source,
        positions: [
            position
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/ast.mjs
var ast = __webpack_require__(8894);
;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/directiveLocation.mjs
/**
 * The set of allowed directive location values.
 */ var DirectiveLocation;
(function(DirectiveLocation) {
    DirectiveLocation["QUERY"] = "QUERY";
    DirectiveLocation["MUTATION"] = "MUTATION";
    DirectiveLocation["SUBSCRIPTION"] = "SUBSCRIPTION";
    DirectiveLocation["FIELD"] = "FIELD";
    DirectiveLocation["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
    DirectiveLocation["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
    DirectiveLocation["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
    DirectiveLocation["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
    DirectiveLocation["SCHEMA"] = "SCHEMA";
    DirectiveLocation["SCALAR"] = "SCALAR";
    DirectiveLocation["OBJECT"] = "OBJECT";
    DirectiveLocation["FIELD_DEFINITION"] = "FIELD_DEFINITION";
    DirectiveLocation["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
    DirectiveLocation["INTERFACE"] = "INTERFACE";
    DirectiveLocation["UNION"] = "UNION";
    DirectiveLocation["ENUM"] = "ENUM";
    DirectiveLocation["ENUM_VALUE"] = "ENUM_VALUE";
    DirectiveLocation["INPUT_OBJECT"] = "INPUT_OBJECT";
    DirectiveLocation["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
})(DirectiveLocation || (DirectiveLocation = {}));
 /**
 * The enum type representing the directive location values.
 *
 * @deprecated Please use `DirectiveLocation`. Will be remove in v17.
 */ 

// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/kinds.mjs
var kinds = __webpack_require__(3281);
// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/blockString.mjs
var blockString = __webpack_require__(2717);
// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/characterClasses.mjs
var characterClasses = __webpack_require__(1499);
;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/tokenKind.mjs
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */ var TokenKind;
(function(TokenKind) {
    TokenKind["SOF"] = "<SOF>";
    TokenKind["EOF"] = "<EOF>";
    TokenKind["BANG"] = "!";
    TokenKind["DOLLAR"] = "$";
    TokenKind["AMP"] = "&";
    TokenKind["PAREN_L"] = "(";
    TokenKind["PAREN_R"] = ")";
    TokenKind["SPREAD"] = "...";
    TokenKind["COLON"] = ":";
    TokenKind["EQUALS"] = "=";
    TokenKind["AT"] = "@";
    TokenKind["BRACKET_L"] = "[";
    TokenKind["BRACKET_R"] = "]";
    TokenKind["BRACE_L"] = "{";
    TokenKind["PIPE"] = "|";
    TokenKind["BRACE_R"] = "}";
    TokenKind["NAME"] = "Name";
    TokenKind["INT"] = "Int";
    TokenKind["FLOAT"] = "Float";
    TokenKind["STRING"] = "String";
    TokenKind["BLOCK_STRING"] = "BlockString";
    TokenKind["COMMENT"] = "Comment";
})(TokenKind || (TokenKind = {}));
 /**
 * The enum type representing the token kinds values.
 *
 * @deprecated Please use `TokenKind`. Will be remove in v17.
 */ 

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/lexer.mjs





/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */ class Lexer {
    /**
   * The previously focused non-ignored token.
   */ /**
   * The currently focused non-ignored token.
   */ /**
   * The (1-indexed) line containing the current token.
   */ /**
   * The character offset at which the current line begins.
   */ constructor(source){
        const startOfFileToken = new ast/* Token */.WU(TokenKind.SOF, 0, 0, 0, 0);
        this.source = source;
        this.lastToken = startOfFileToken;
        this.token = startOfFileToken;
        this.line = 1;
        this.lineStart = 0;
    }
    get [Symbol.toStringTag]() {
        return "Lexer";
    }
    /**
   * Advances the token stream to the next non-ignored token.
   */ advance() {
        this.lastToken = this.token;
        const token = this.token = this.lookahead();
        return token;
    }
    /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */ lookahead() {
        let token = this.token;
        if (token.kind !== TokenKind.EOF) {
            do {
                if (token.next) {
                    token = token.next;
                } else {
                    // Read the next token and form a link in the token linked-list.
                    const nextToken = readNextToken(this, token.end); // @ts-expect-error next is only mutable during parsing.
                    token.next = nextToken; // @ts-expect-error prev is only mutable during parsing.
                    nextToken.prev = token;
                    token = nextToken;
                }
            }while (token.kind === TokenKind.COMMENT);
        }
        return token;
    }
}
/**
 * @internal
 */ function isPunctuatorTokenKind(kind) {
    return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
/**
 * A Unicode scalar value is any Unicode code point except surrogate code
 * points. In other words, the inclusive ranges of values 0x0000 to 0xD7FF and
 * 0xE000 to 0x10FFFF.
 *
 * SourceCharacter ::
 *   - "Any Unicode scalar value"
 */ function isUnicodeScalarValue(code) {
    return code >= 0x0000 && code <= 0xd7ff || code >= 0xe000 && code <= 0x10ffff;
}
/**
 * The GraphQL specification defines source text as a sequence of unicode scalar
 * values (which Unicode defines to exclude surrogate code points). However
 * JavaScript defines strings as a sequence of UTF-16 code units which may
 * include surrogates. A surrogate pair is a valid source character as it
 * encodes a supplementary code point (above U+FFFF), but unpaired surrogate
 * code points are not valid source characters.
 */ function isSupplementaryCodePoint(body, location) {
    return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
    return code >= 0xd800 && code <= 0xdbff;
}
function isTrailingSurrogate(code) {
    return code >= 0xdc00 && code <= 0xdfff;
}
/**
 * Prints the code point (or end of file reference) at a given location in a
 * source for use in error messages.
 *
 * Printable ASCII is printed quoted, while other points are printed in Unicode
 * code point form (ie. U+1234).
 */ function printCodePointAt(lexer, location) {
    const code = lexer.source.body.codePointAt(location);
    if (code === undefined) {
        return TokenKind.EOF;
    } else if (code >= 0x0020 && code <= 0x007e) {
        // Printable ASCII
        const char = String.fromCodePoint(code);
        return char === '"' ? "'\"'" : `"${char}"`;
    } // Unicode code point
    return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
}
/**
 * Create a token with line and column location information.
 */ function createToken(lexer, kind, start, end, value) {
    const line = lexer.line;
    const col = 1 + start - lexer.lineStart;
    return new ast/* Token */.WU(kind, start, end, line, col, value);
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */ function readNextToken(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start;
    while(position < bodyLength){
        const code = body.charCodeAt(position); // SourceCharacter
        switch(code){
            // Ignored ::
            //   - UnicodeBOM
            //   - WhiteSpace
            //   - LineTerminator
            //   - Comment
            //   - Comma
            //
            // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
            //
            // WhiteSpace ::
            //   - "Horizontal Tab (U+0009)"
            //   - "Space (U+0020)"
            //
            // Comma :: ,
            case 0xfeff:
            case 0x0009:
            case 0x0020:
            case 0x002c:
                // ,
                ++position;
                continue;
            // LineTerminator ::
            //   - "New Line (U+000A)"
            //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
            //   - "Carriage Return (U+000D)" "New Line (U+000A)"
            case 0x000a:
                // \n
                ++position;
                ++lexer.line;
                lexer.lineStart = position;
                continue;
            case 0x000d:
                // \r
                if (body.charCodeAt(position + 1) === 0x000a) {
                    position += 2;
                } else {
                    ++position;
                }
                ++lexer.line;
                lexer.lineStart = position;
                continue;
            // Comment
            case 0x0023:
                // #
                return readComment(lexer, position);
            // Token ::
            //   - Punctuator
            //   - Name
            //   - IntValue
            //   - FloatValue
            //   - StringValue
            //
            // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }
            case 0x0021:
                // !
                return createToken(lexer, TokenKind.BANG, position, position + 1);
            case 0x0024:
                // $
                return createToken(lexer, TokenKind.DOLLAR, position, position + 1);
            case 0x0026:
                // &
                return createToken(lexer, TokenKind.AMP, position, position + 1);
            case 0x0028:
                // (
                return createToken(lexer, TokenKind.PAREN_L, position, position + 1);
            case 0x0029:
                // )
                return createToken(lexer, TokenKind.PAREN_R, position, position + 1);
            case 0x002e:
                // .
                if (body.charCodeAt(position + 1) === 0x002e && body.charCodeAt(position + 2) === 0x002e) {
                    return createToken(lexer, TokenKind.SPREAD, position, position + 3);
                }
                break;
            case 0x003a:
                // :
                return createToken(lexer, TokenKind.COLON, position, position + 1);
            case 0x003d:
                // =
                return createToken(lexer, TokenKind.EQUALS, position, position + 1);
            case 0x0040:
                // @
                return createToken(lexer, TokenKind.AT, position, position + 1);
            case 0x005b:
                // [
                return createToken(lexer, TokenKind.BRACKET_L, position, position + 1);
            case 0x005d:
                // ]
                return createToken(lexer, TokenKind.BRACKET_R, position, position + 1);
            case 0x007b:
                // {
                return createToken(lexer, TokenKind.BRACE_L, position, position + 1);
            case 0x007c:
                // |
                return createToken(lexer, TokenKind.PIPE, position, position + 1);
            case 0x007d:
                // }
                return createToken(lexer, TokenKind.BRACE_R, position, position + 1);
            // StringValue
            case 0x0022:
                // "
                if (body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022) {
                    return readBlockString(lexer, position);
                }
                return readString(lexer, position);
        } // IntValue | FloatValue (Digit | -)
        if ((0,characterClasses/* isDigit */.X1)(code) || code === 0x002d) {
            return readNumber(lexer, position, code);
        } // Name
        if ((0,characterClasses/* isNameStart */.LQ)(code)) {
            return readName(lexer, position);
        }
        throw syntaxError(lexer.source, position, code === 0x0027 ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`);
    }
    return createToken(lexer, TokenKind.EOF, bodyLength, bodyLength);
}
/**
 * Reads a comment token from the source file.
 *
 * ```
 * Comment :: # CommentChar* [lookahead != CommentChar]
 *
 * CommentChar :: SourceCharacter but not LineTerminator
 * ```
 */ function readComment(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    while(position < bodyLength){
        const code = body.charCodeAt(position); // LineTerminator (\n | \r)
        if (code === 0x000a || code === 0x000d) {
            break;
        } // SourceCharacter
        if (isUnicodeScalarValue(code)) {
            ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
            position += 2;
        } else {
            break;
        }
    }
    return createToken(lexer, TokenKind.COMMENT, start, position, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a FloatValue or an IntValue
 * depending on whether a FractionalPart or ExponentPart is encountered.
 *
 * ```
 * IntValue :: IntegerPart [lookahead != {Digit, `.`, NameStart}]
 *
 * IntegerPart ::
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit Digit*
 *
 * NegativeSign :: -
 *
 * NonZeroDigit :: Digit but not `0`
 *
 * FloatValue ::
 *   - IntegerPart FractionalPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart FractionalPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *
 * FractionalPart :: . Digit+
 *
 * ExponentPart :: ExponentIndicator Sign? Digit+
 *
 * ExponentIndicator :: one of `e` `E`
 *
 * Sign :: one of + -
 * ```
 */ function readNumber(lexer, start, firstCode) {
    const body = lexer.source.body;
    let position = start;
    let code = firstCode;
    let isFloat = false; // NegativeSign (-)
    if (code === 0x002d) {
        code = body.charCodeAt(++position);
    } // Zero (0)
    if (code === 0x0030) {
        code = body.charCodeAt(++position);
        if ((0,characterClasses/* isDigit */.X1)(code)) {
            throw syntaxError(lexer.source, position, `Invalid number, unexpected digit after 0: ${printCodePointAt(lexer, position)}.`);
        }
    } else {
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // Full stop (.)
    if (code === 0x002e) {
        isFloat = true;
        code = body.charCodeAt(++position);
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // E e
    if (code === 0x0045 || code === 0x0065) {
        isFloat = true;
        code = body.charCodeAt(++position); // + -
        if (code === 0x002b || code === 0x002d) {
            code = body.charCodeAt(++position);
        }
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // Numbers cannot be followed by . or NameStart
    if (code === 0x002e || (0,characterClasses/* isNameStart */.LQ)(code)) {
        throw syntaxError(lexer.source, position, `Invalid number, expected digit but got: ${printCodePointAt(lexer, position)}.`);
    }
    return createToken(lexer, isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading one or more digits.
 */ function readDigits(lexer, start, firstCode) {
    if (!(0,characterClasses/* isDigit */.X1)(firstCode)) {
        throw syntaxError(lexer.source, start, `Invalid number, expected digit but got: ${printCodePointAt(lexer, start)}.`);
    }
    const body = lexer.source.body;
    let position = start + 1; // +1 to skip first firstCode
    while((0,characterClasses/* isDigit */.X1)(body.charCodeAt(position))){
        ++position;
    }
    return position;
}
/**
 * Reads a single-quote string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `""` [lookahead != `"`]
 *   - `"` StringCharacter+ `"`
 *
 * StringCharacter ::
 *   - SourceCharacter but not `"` or `\` or LineTerminator
 *   - `\u` EscapedUnicode
 *   - `\` EscapedCharacter
 *
 * EscapedUnicode ::
 *   - `{` HexDigit+ `}`
 *   - HexDigit HexDigit HexDigit HexDigit
 *
 * EscapedCharacter :: one of `"` `\` `/` `b` `f` `n` `r` `t`
 * ```
 */ function readString(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    let chunkStart = position;
    let value = "";
    while(position < bodyLength){
        const code = body.charCodeAt(position); // Closing Quote (")
        if (code === 0x0022) {
            value += body.slice(chunkStart, position);
            return createToken(lexer, TokenKind.STRING, start, position + 1, value);
        } // Escape Sequence (\)
        if (code === 0x005c) {
            value += body.slice(chunkStart, position);
            const escape = body.charCodeAt(position + 1) === 0x0075 // u
             ? body.charCodeAt(position + 2) === 0x007b // {
             ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
            value += escape.value;
            position += escape.size;
            chunkStart = position;
            continue;
        } // LineTerminator (\n | \r)
        if (code === 0x000a || code === 0x000d) {
            break;
        } // SourceCharacter
        if (isUnicodeScalarValue(code)) {
            ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
            position += 2;
        } else {
            throw syntaxError(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
        }
    }
    throw syntaxError(lexer.source, position, "Unterminated string.");
} // The string value and lexed size of an escape sequence.
function readEscapedUnicodeVariableWidth(lexer, position) {
    const body = lexer.source.body;
    let point = 0;
    let size = 3; // Cannot be larger than 12 chars (\u{00000000}).
    while(size < 12){
        const code = body.charCodeAt(position + size++); // Closing Brace (})
        if (code === 0x007d) {
            // Must be at least 5 chars (\u{0}) and encode a Unicode scalar value.
            if (size < 5 || !isUnicodeScalarValue(point)) {
                break;
            }
            return {
                value: String.fromCodePoint(point),
                size
            };
        } // Append this hex digit to the code point.
        point = point << 4 | readHexDigit(code);
        if (point < 0) {
            break;
        }
    }
    throw syntaxError(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + size)}".`);
}
function readEscapedUnicodeFixedWidth(lexer, position) {
    const body = lexer.source.body;
    const code = read16BitHexCode(body, position + 2);
    if (isUnicodeScalarValue(code)) {
        return {
            value: String.fromCodePoint(code),
            size: 6
        };
    } // GraphQL allows JSON-style surrogate pair escape sequences, but only when
    // a valid pair is formed.
    if (isLeadingSurrogate(code)) {
        // \u
        if (body.charCodeAt(position + 6) === 0x005c && body.charCodeAt(position + 7) === 0x0075) {
            const trailingCode = read16BitHexCode(body, position + 8);
            if (isTrailingSurrogate(trailingCode)) {
                // JavaScript defines strings as a sequence of UTF-16 code units and
                // encodes Unicode code points above U+FFFF using a surrogate pair of
                // code units. Since this is a surrogate pair escape sequence, just
                // include both codes into the JavaScript string value. Had JavaScript
                // not been internally based on UTF-16, then this surrogate pair would
                // be decoded to retrieve the supplementary code point.
                return {
                    value: String.fromCodePoint(code, trailingCode),
                    size: 12
                };
            }
        }
    }
    throw syntaxError(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`);
}
/**
 * Reads four hexadecimal characters and returns the positive integer that 16bit
 * hexadecimal string represents. For example, "000f" will return 15, and "dead"
 * will return 57005.
 *
 * Returns a negative number if any char was not a valid hexadecimal digit.
 */ function read16BitHexCode(body, position) {
    // readHexDigit() returns -1 on error. ORing a negative value with any other
    // value always produces a negative value.
    return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
/**
 * Reads a hexadecimal character and returns its positive integer value (0-15).
 *
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 if the provided character code was not a valid hexadecimal digit.
 *
 * HexDigit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 *   - `A` `B` `C` `D` `E` `F`
 *   - `a` `b` `c` `d` `e` `f`
 */ function readHexDigit(code) {
    return code >= 0x0030 && code <= 0x0039 // 0-9
     ? code - 0x0030 : code >= 0x0041 && code <= 0x0046 // A-F
     ? code - 0x0037 : code >= 0x0061 && code <= 0x0066 // a-f
     ? code - 0x0057 : -1;
}
/**
 * | Escaped Character | Code Point | Character Name               |
 * | ----------------- | ---------- | ---------------------------- |
 * | `"`               | U+0022     | double quote                 |
 * | `\`               | U+005C     | reverse solidus (back slash) |
 * | `/`               | U+002F     | solidus (forward slash)      |
 * | `b`               | U+0008     | backspace                    |
 * | `f`               | U+000C     | form feed                    |
 * | `n`               | U+000A     | line feed (new line)         |
 * | `r`               | U+000D     | carriage return              |
 * | `t`               | U+0009     | horizontal tab               |
 */ function readEscapedCharacter(lexer, position) {
    const body = lexer.source.body;
    const code = body.charCodeAt(position + 1);
    switch(code){
        case 0x0022:
            // "
            return {
                value: '"',
                size: 2
            };
        case 0x005c:
            // \
            return {
                value: "\\",
                size: 2
            };
        case 0x002f:
            // /
            return {
                value: "/",
                size: 2
            };
        case 0x0062:
            // b
            return {
                value: "\b",
                size: 2
            };
        case 0x0066:
            // f
            return {
                value: "\f",
                size: 2
            };
        case 0x006e:
            // n
            return {
                value: "\n",
                size: 2
            };
        case 0x0072:
            // r
            return {
                value: "\r",
                size: 2
            };
        case 0x0074:
            // t
            return {
                value: "	",
                size: 2
            };
    }
    throw syntaxError(lexer.source, position, `Invalid character escape sequence: "${body.slice(position, position + 2)}".`);
}
/**
 * Reads a block string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `"""` BlockStringCharacter* `"""`
 *
 * BlockStringCharacter ::
 *   - SourceCharacter but not `"""` or `\"""`
 *   - `\"""`
 * ```
 */ function readBlockString(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let lineStart = lexer.lineStart;
    let position = start + 3;
    let chunkStart = position;
    let currentLine = "";
    const blockLines = [];
    while(position < bodyLength){
        const code = body.charCodeAt(position); // Closing Triple-Quote (""")
        if (code === 0x0022 && body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022) {
            currentLine += body.slice(chunkStart, position);
            blockLines.push(currentLine);
            const token = createToken(lexer, TokenKind.BLOCK_STRING, start, position + 3, (0,blockString/* dedentBlockStringLines */.wv)(blockLines).join("\n"));
            lexer.line += blockLines.length - 1;
            lexer.lineStart = lineStart;
            return token;
        } // Escaped Triple-Quote (\""")
        if (code === 0x005c && body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022 && body.charCodeAt(position + 3) === 0x0022) {
            currentLine += body.slice(chunkStart, position);
            chunkStart = position + 1; // skip only slash
            position += 4;
            continue;
        } // LineTerminator
        if (code === 0x000a || code === 0x000d) {
            currentLine += body.slice(chunkStart, position);
            blockLines.push(currentLine);
            if (code === 0x000d && body.charCodeAt(position + 1) === 0x000a) {
                position += 2;
            } else {
                ++position;
            }
            currentLine = "";
            chunkStart = position;
            lineStart = position;
            continue;
        } // SourceCharacter
        if (isUnicodeScalarValue(code)) {
            ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
            position += 2;
        } else {
            throw syntaxError(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
        }
    }
    throw syntaxError(lexer.source, position, "Unterminated string.");
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * ```
 * Name ::
 *   - NameStart NameContinue* [lookahead != NameContinue]
 * ```
 */ function readName(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    while(position < bodyLength){
        const code = body.charCodeAt(position);
        if ((0,characterClasses/* isNameContinue */.HQ)(code)) {
            ++position;
        } else {
            break;
        }
    }
    return createToken(lexer, TokenKind.NAME, start, position, body.slice(start, position));
}

// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/jsutils/devAssert.mjs
var devAssert = __webpack_require__(2382);
// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/jsutils/inspect.mjs
var inspect = __webpack_require__(1232);
;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/jsutils/instanceOf.mjs

/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 * See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
 * See: https://webpack.js.org/guides/production/
 */ const instanceOf = /* c8 ignore next 6 */ // FIXME: https://github.com/graphql/graphql-js/issues/2317
globalThis.process && globalThis.process.env.NODE_ENV === "production" ? function instanceOf(value, constructor) {
    return value instanceof constructor;
} : function instanceOf(value, constructor) {
    if (value instanceof constructor) {
        return true;
    }
    if (typeof value === "object" && value !== null) {
        var _value$constructor;
        // Prefer Symbol.toStringTag since it is immune to minification.
        const className = constructor.prototype[Symbol.toStringTag];
        const valueClassName = Symbol.toStringTag in value // @ts-expect-error TS bug see, https://github.com/microsoft/TypeScript/issues/38009
         ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;
        if (className === valueClassName) {
            const stringifiedValue = (0,inspect/* inspect */.X)(value);
            throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
    }
    return false;
};

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/source.mjs



/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */ class Source {
    constructor(body, name = "GraphQL request", locationOffset = {
        line: 1,
        column: 1
    }){
        typeof body === "string" || (0,devAssert/* devAssert */.a)(false, `Body must be a string. Received: ${(0,inspect/* inspect */.X)(body)}.`);
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        this.locationOffset.line > 0 || (0,devAssert/* devAssert */.a)(false, "line in locationOffset is 1-indexed and must be positive.");
        this.locationOffset.column > 0 || (0,devAssert/* devAssert */.a)(false, "column in locationOffset is 1-indexed and must be positive.");
    }
    get [Symbol.toStringTag]() {
        return "Source";
    }
}
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */ function isSource(source) {
    return instanceOf(source, Source);
}

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/parser.mjs







/**
 * Configuration options to control parser behavior
 */ /**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */ function parse(source, options) {
    const parser = new Parser(source, options);
    return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */ function parseValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(TokenKind.SOF);
    const value = parser.parseValueLiteral(false);
    parser.expectToken(TokenKind.EOF);
    return value;
}
/**
 * Similar to parseValue(), but raises a parse error if it encounters a
 * variable. The return type will be a constant value.
 */ function parseConstValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(TokenKind.SOF);
    const value = parser.parseConstValueLiteral();
    parser.expectToken(TokenKind.EOF);
    return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */ function parseType(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(TokenKind.SOF);
    const type = parser.parseTypeReference();
    parser.expectToken(TokenKind.EOF);
    return type;
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */ class Parser {
    constructor(source, options = {}){
        const sourceObj = isSource(source) ? source : new Source(source);
        this._lexer = new Lexer(sourceObj);
        this._options = options;
        this._tokenCounter = 0;
    }
    /**
   * Converts a name lex token into a name parse node.
   */ parseName() {
        const token = this.expectToken(TokenKind.NAME);
        return this.node(token, {
            kind: kinds/* Kind */.h.NAME,
            value: token.value
        });
    }
    /**
   * Document : Definition+
   */ parseDocument() {
        return this.node(this._lexer.token, {
            kind: kinds/* Kind */.h.DOCUMENT,
            definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF)
        });
    }
    /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */ parseDefinition() {
        if (this.peek(TokenKind.BRACE_L)) {
            return this.parseOperationDefinition();
        } // Many definitions begin with a description and require a lookahead.
        const hasDescription = this.peekDescription();
        const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === TokenKind.NAME) {
            switch(keywordToken.value){
                case "schema":
                    return this.parseSchemaDefinition();
                case "scalar":
                    return this.parseScalarTypeDefinition();
                case "type":
                    return this.parseObjectTypeDefinition();
                case "interface":
                    return this.parseInterfaceTypeDefinition();
                case "union":
                    return this.parseUnionTypeDefinition();
                case "enum":
                    return this.parseEnumTypeDefinition();
                case "input":
                    return this.parseInputObjectTypeDefinition();
                case "directive":
                    return this.parseDirectiveDefinition();
            }
            if (hasDescription) {
                throw syntaxError(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
            }
            switch(keywordToken.value){
                case "query":
                case "mutation":
                case "subscription":
                    return this.parseOperationDefinition();
                case "fragment":
                    return this.parseFragmentDefinition();
                case "extend":
                    return this.parseTypeSystemExtension();
            }
        }
        throw this.unexpected(keywordToken);
    }
    /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */ parseOperationDefinition() {
        const start = this._lexer.token;
        if (this.peek(TokenKind.BRACE_L)) {
            return this.node(start, {
                kind: kinds/* Kind */.h.OPERATION_DEFINITION,
                operation: ast/* OperationTypeNode */.ku.QUERY,
                name: undefined,
                variableDefinitions: [],
                directives: [],
                selectionSet: this.parseSelectionSet()
            });
        }
        const operation = this.parseOperationType();
        let name;
        if (this.peek(TokenKind.NAME)) {
            name = this.parseName();
        }
        return this.node(start, {
            kind: kinds/* Kind */.h.OPERATION_DEFINITION,
            operation,
            name,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * OperationType : one of query mutation subscription
   */ parseOperationType() {
        const operationToken = this.expectToken(TokenKind.NAME);
        switch(operationToken.value){
            case "query":
                return ast/* OperationTypeNode */.ku.QUERY;
            case "mutation":
                return ast/* OperationTypeNode */.ku.MUTATION;
            case "subscription":
                return ast/* OperationTypeNode */.ku.SUBSCRIPTION;
        }
        throw this.unexpected(operationToken);
    }
    /**
   * VariableDefinitions : ( VariableDefinition+ )
   */ parseVariableDefinitions() {
        return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
    }
    /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */ parseVariableDefinition() {
        return this.node(this._lexer.token, {
            kind: kinds/* Kind */.h.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseConstValueLiteral() : undefined,
            directives: this.parseConstDirectives()
        });
    }
    /**
   * Variable : $ Name
   */ parseVariable() {
        const start = this._lexer.token;
        this.expectToken(TokenKind.DOLLAR);
        return this.node(start, {
            kind: kinds/* Kind */.h.VARIABLE,
            name: this.parseName()
        });
    }
    /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */ parseSelectionSet() {
        return this.node(this._lexer.token, {
            kind: kinds/* Kind */.h.SELECTION_SET,
            selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R)
        });
    }
    /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */ parseSelection() {
        return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
    }
    /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */ parseField() {
        const start = this._lexer.token;
        const nameOrAlias = this.parseName();
        let alias;
        let name;
        if (this.expectOptionalToken(TokenKind.COLON)) {
            alias = nameOrAlias;
            name = this.parseName();
        } else {
            name = nameOrAlias;
        }
        return this.node(start, {
            kind: kinds/* Kind */.h.FIELD,
            alias,
            name,
            arguments: this.parseArguments(false),
            directives: this.parseDirectives(false),
            selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined
        });
    }
    /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */ parseArguments(isConst) {
        const item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
    }
    /**
   * Argument[Const] : Name : Value[?Const]
   */ parseArgument(isConst = false) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        return this.node(start, {
            kind: kinds/* Kind */.h.ARGUMENT,
            name,
            value: this.parseValueLiteral(isConst)
        });
    }
    parseConstArgument() {
        return this.parseArgument(true);
    }
    /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */ parseFragment() {
        const start = this._lexer.token;
        this.expectToken(TokenKind.SPREAD);
        const hasTypeCondition = this.expectOptionalKeyword("on");
        if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
            return this.node(start, {
                kind: kinds/* Kind */.h.FRAGMENT_SPREAD,
                name: this.parseFragmentName(),
                directives: this.parseDirectives(false)
            });
        }
        return this.node(start, {
            kind: kinds/* Kind */.h.INLINE_FRAGMENT,
            typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */ parseFragmentDefinition() {
        const start = this._lexer.token;
        this.expectKeyword("fragment"); // Legacy support for defining variables within fragments changes
        // the grammar of FragmentDefinition:
        //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet
        if (this._options.allowLegacyFragmentVariables === true) {
            return this.node(start, {
                kind: kinds/* Kind */.h.FRAGMENT_DEFINITION,
                name: this.parseFragmentName(),
                variableDefinitions: this.parseVariableDefinitions(),
                typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
                directives: this.parseDirectives(false),
                selectionSet: this.parseSelectionSet()
            });
        }
        return this.node(start, {
            kind: kinds/* Kind */.h.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * FragmentName : Name but not `on`
   */ parseFragmentName() {
        if (this._lexer.token.value === "on") {
            throw this.unexpected();
        }
        return this.parseName();
    }
    /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */ parseValueLiteral(isConst) {
        const token = this._lexer.token;
        switch(token.kind){
            case TokenKind.BRACKET_L:
                return this.parseList(isConst);
            case TokenKind.BRACE_L:
                return this.parseObject(isConst);
            case TokenKind.INT:
                this.advanceLexer();
                return this.node(token, {
                    kind: kinds/* Kind */.h.INT,
                    value: token.value
                });
            case TokenKind.FLOAT:
                this.advanceLexer();
                return this.node(token, {
                    kind: kinds/* Kind */.h.FLOAT,
                    value: token.value
                });
            case TokenKind.STRING:
            case TokenKind.BLOCK_STRING:
                return this.parseStringLiteral();
            case TokenKind.NAME:
                this.advanceLexer();
                switch(token.value){
                    case "true":
                        return this.node(token, {
                            kind: kinds/* Kind */.h.BOOLEAN,
                            value: true
                        });
                    case "false":
                        return this.node(token, {
                            kind: kinds/* Kind */.h.BOOLEAN,
                            value: false
                        });
                    case "null":
                        return this.node(token, {
                            kind: kinds/* Kind */.h.NULL
                        });
                    default:
                        return this.node(token, {
                            kind: kinds/* Kind */.h.ENUM,
                            value: token.value
                        });
                }
            case TokenKind.DOLLAR:
                if (isConst) {
                    this.expectToken(TokenKind.DOLLAR);
                    if (this._lexer.token.kind === TokenKind.NAME) {
                        const varName = this._lexer.token.value;
                        throw syntaxError(this._lexer.source, token.start, `Unexpected variable "$${varName}" in constant value.`);
                    } else {
                        throw this.unexpected(token);
                    }
                }
                return this.parseVariable();
            default:
                throw this.unexpected();
        }
    }
    parseConstValueLiteral() {
        return this.parseValueLiteral(true);
    }
    parseStringLiteral() {
        const token = this._lexer.token;
        this.advanceLexer();
        return this.node(token, {
            kind: kinds/* Kind */.h.STRING,
            value: token.value,
            block: token.kind === TokenKind.BLOCK_STRING
        });
    }
    /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */ parseList(isConst) {
        const item = ()=>this.parseValueLiteral(isConst);
        return this.node(this._lexer.token, {
            kind: kinds/* Kind */.h.LIST,
            values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R)
        });
    }
    /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */ parseObject(isConst) {
        const item = ()=>this.parseObjectField(isConst);
        return this.node(this._lexer.token, {
            kind: kinds/* Kind */.h.OBJECT,
            fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R)
        });
    }
    /**
   * ObjectField[Const] : Name : Value[?Const]
   */ parseObjectField(isConst) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        return this.node(start, {
            kind: kinds/* Kind */.h.OBJECT_FIELD,
            name,
            value: this.parseValueLiteral(isConst)
        });
    }
    /**
   * Directives[Const] : Directive[?Const]+
   */ parseDirectives(isConst) {
        const directives = [];
        while(this.peek(TokenKind.AT)){
            directives.push(this.parseDirective(isConst));
        }
        return directives;
    }
    parseConstDirectives() {
        return this.parseDirectives(true);
    }
    /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */ parseDirective(isConst) {
        const start = this._lexer.token;
        this.expectToken(TokenKind.AT);
        return this.node(start, {
            kind: kinds/* Kind */.h.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(isConst)
        });
    }
    /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */ parseTypeReference() {
        const start = this._lexer.token;
        let type;
        if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
            const innerType = this.parseTypeReference();
            this.expectToken(TokenKind.BRACKET_R);
            type = this.node(start, {
                kind: kinds/* Kind */.h.LIST_TYPE,
                type: innerType
            });
        } else {
            type = this.parseNamedType();
        }
        if (this.expectOptionalToken(TokenKind.BANG)) {
            return this.node(start, {
                kind: kinds/* Kind */.h.NON_NULL_TYPE,
                type
            });
        }
        return type;
    }
    /**
   * NamedType : Name
   */ parseNamedType() {
        return this.node(this._lexer.token, {
            kind: kinds/* Kind */.h.NAMED_TYPE,
            name: this.parseName()
        });
    }
    peekDescription() {
        return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
    }
    /**
   * Description : StringValue
   */ parseDescription() {
        if (this.peekDescription()) {
            return this.parseStringLiteral();
        }
    }
    /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */ parseSchemaDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("schema");
        const directives = this.parseConstDirectives();
        const operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
        return this.node(start, {
            kind: kinds/* Kind */.h.SCHEMA_DEFINITION,
            description,
            directives,
            operationTypes
        });
    }
    /**
   * OperationTypeDefinition : OperationType : NamedType
   */ parseOperationTypeDefinition() {
        const start = this._lexer.token;
        const operation = this.parseOperationType();
        this.expectToken(TokenKind.COLON);
        const type = this.parseNamedType();
        return this.node(start, {
            kind: kinds/* Kind */.h.OPERATION_TYPE_DEFINITION,
            operation,
            type
        });
    }
    /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */ parseScalarTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("scalar");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: kinds/* Kind */.h.SCALAR_TYPE_DEFINITION,
            description,
            name,
            directives
        });
    }
    /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */ parseObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("type");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
            kind: kinds/* Kind */.h.OBJECT_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */ parseImplementsInterfaces() {
        return this.expectOptionalKeyword("implements") ? this.delimitedMany(TokenKind.AMP, this.parseNamedType) : [];
    }
    /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */ parseFieldsDefinition() {
        return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
    }
    /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */ parseFieldDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        this.expectToken(TokenKind.COLON);
        const type = this.parseTypeReference();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: kinds/* Kind */.h.FIELD_DEFINITION,
            description,
            name,
            arguments: args,
            type,
            directives
        });
    }
    /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */ parseArgumentDefs() {
        return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
    }
    /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */ parseInputValueDef() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        const type = this.parseTypeReference();
        let defaultValue;
        if (this.expectOptionalToken(TokenKind.EQUALS)) {
            defaultValue = this.parseConstValueLiteral();
        }
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: kinds/* Kind */.h.INPUT_VALUE_DEFINITION,
            description,
            name,
            type,
            defaultValue,
            directives
        });
    }
    /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */ parseInterfaceTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("interface");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
            kind: kinds/* Kind */.h.INTERFACE_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */ parseUnionTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("union");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        return this.node(start, {
            kind: kinds/* Kind */.h.UNION_TYPE_DEFINITION,
            description,
            name,
            directives,
            types
        });
    }
    /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */ parseUnionMemberTypes() {
        return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
    }
    /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */ parseEnumTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("enum");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        return this.node(start, {
            kind: kinds/* Kind */.h.ENUM_TYPE_DEFINITION,
            description,
            name,
            directives,
            values
        });
    }
    /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */ parseEnumValuesDefinition() {
        return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
    }
    /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */ parseEnumValueDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseEnumValueName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: kinds/* Kind */.h.ENUM_VALUE_DEFINITION,
            description,
            name,
            directives
        });
    }
    /**
   * EnumValue : Name but not `true`, `false` or `null`
   */ parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
            throw syntaxError(this._lexer.source, this._lexer.token.start, `${getTokenDesc(this._lexer.token)} is reserved and cannot be used for an enum value.`);
        }
        return this.parseName();
    }
    /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */ parseInputObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("input");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        return this.node(start, {
            kind: kinds/* Kind */.h.INPUT_OBJECT_TYPE_DEFINITION,
            description,
            name,
            directives,
            fields
        });
    }
    /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */ parseInputFieldsDefinition() {
        return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
    }
    /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */ parseTypeSystemExtension() {
        const keywordToken = this._lexer.lookahead();
        if (keywordToken.kind === TokenKind.NAME) {
            switch(keywordToken.value){
                case "schema":
                    return this.parseSchemaExtension();
                case "scalar":
                    return this.parseScalarTypeExtension();
                case "type":
                    return this.parseObjectTypeExtension();
                case "interface":
                    return this.parseInterfaceTypeExtension();
                case "union":
                    return this.parseUnionTypeExtension();
                case "enum":
                    return this.parseEnumTypeExtension();
                case "input":
                    return this.parseInputObjectTypeExtension();
            }
        }
        throw this.unexpected(keywordToken);
    }
    /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */ parseSchemaExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("schema");
        const directives = this.parseConstDirectives();
        const operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
        if (directives.length === 0 && operationTypes.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: kinds/* Kind */.h.SCHEMA_EXTENSION,
            directives,
            operationTypes
        });
    }
    /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */ parseScalarTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("scalar");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        if (directives.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: kinds/* Kind */.h.SCALAR_TYPE_EXTENSION,
            name,
            directives
        });
    }
    /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */ parseObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("type");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: kinds/* Kind */.h.OBJECT_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */ parseInterfaceTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("interface");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: kinds/* Kind */.h.INTERFACE_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */ parseUnionTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("union");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        if (directives.length === 0 && types.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: kinds/* Kind */.h.UNION_TYPE_EXTENSION,
            name,
            directives,
            types
        });
    }
    /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */ parseEnumTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("enum");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        if (directives.length === 0 && values.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: kinds/* Kind */.h.ENUM_TYPE_EXTENSION,
            name,
            directives,
            values
        });
    }
    /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */ parseInputObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("input");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: kinds/* Kind */.h.INPUT_OBJECT_TYPE_EXTENSION,
            name,
            directives,
            fields
        });
    }
    /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */ parseDirectiveDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("directive");
        this.expectToken(TokenKind.AT);
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        const repeatable = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        const locations = this.parseDirectiveLocations();
        return this.node(start, {
            kind: kinds/* Kind */.h.DIRECTIVE_DEFINITION,
            description,
            name,
            arguments: args,
            repeatable,
            locations
        });
    }
    /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */ parseDirectiveLocations() {
        return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
    }
    /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */ parseDirectiveLocation() {
        const start = this._lexer.token;
        const name = this.parseName();
        if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
            return name;
        }
        throw this.unexpected(start);
    }
    /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */ node(startToken, node) {
        if (this._options.noLocation !== true) {
            node.loc = new ast/* Location */.Ye(startToken, this._lexer.lastToken, this._lexer.source);
        }
        return node;
    }
    /**
   * Determines if the next token is of a given kind
   */ peek(kind) {
        return this._lexer.token.kind === kind;
    }
    /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */ expectToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
            this.advanceLexer();
            return token;
        }
        throw syntaxError(this._lexer.source, token.start, `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`);
    }
    /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */ expectOptionalToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
            this.advanceLexer();
            return true;
        }
        return false;
    }
    /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */ expectKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === TokenKind.NAME && token.value === value) {
            this.advanceLexer();
        } else {
            throw syntaxError(this._lexer.source, token.start, `Expected "${value}", found ${getTokenDesc(token)}.`);
        }
    }
    /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */ expectOptionalKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === TokenKind.NAME && token.value === value) {
            this.advanceLexer();
            return true;
        }
        return false;
    }
    /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */ unexpected(atToken) {
        const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
        return syntaxError(this._lexer.source, token.start, `Unexpected ${getTokenDesc(token)}.`);
    }
    /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        while(!this.expectOptionalToken(closeKind)){
            nodes.push(parseFn.call(this));
        }
        return nodes;
    }
    /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
            const nodes = [];
            do {
                nodes.push(parseFn.call(this));
            }while (!this.expectOptionalToken(closeKind));
            return nodes;
        }
        return [];
    }
    /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        do {
            nodes.push(parseFn.call(this));
        }while (!this.expectOptionalToken(closeKind));
        return nodes;
    }
    /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */ delimitedMany(delimiterKind, parseFn) {
        this.expectOptionalToken(delimiterKind);
        const nodes = [];
        do {
            nodes.push(parseFn.call(this));
        }while (this.expectOptionalToken(delimiterKind));
        return nodes;
    }
    advanceLexer() {
        const { maxTokens } = this._options;
        const token = this._lexer.advance();
        if (maxTokens !== undefined && token.kind !== TokenKind.EOF) {
            ++this._tokenCounter;
            if (this._tokenCounter > maxTokens) {
                throw syntaxError(this._lexer.source, token.start, `Document contains more that ${maxTokens} tokens. Parsing aborted.`);
            }
        }
    }
}
/**
 * A helper function to describe a token as a string for debugging.
 */ function getTokenDesc(token) {
    const value = token.value;
    return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */ function getTokenKindDesc(kind) {
    return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}


/***/ }),

/***/ 456:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  print: () => (/* binding */ print)
});

// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/blockString.mjs
var blockString = __webpack_require__(2717);
;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/printString.mjs
/**
 * Prints a string as a GraphQL StringValue literal. Replaces control characters
 * and excluded characters (" U+0022 and \\ U+005C) with escape sequences.
 */ function printString(str) {
    return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
} // eslint-disable-next-line no-control-regex
const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
    return escapeSequences[str.charCodeAt(0)];
} // prettier-ignore
const escapeSequences = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "\\t",
    "\\n",
    "\\u000B",
    "\\f",
    "\\r",
    "\\u000E",
    "\\u000F",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001A",
    "\\u001B",
    "\\u001C",
    "\\u001D",
    "\\u001E",
    "\\u001F",
    "",
    "",
    '\\"',
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\\\",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\u007F",
    "\\u0080",
    "\\u0081",
    "\\u0082",
    "\\u0083",
    "\\u0084",
    "\\u0085",
    "\\u0086",
    "\\u0087",
    "\\u0088",
    "\\u0089",
    "\\u008A",
    "\\u008B",
    "\\u008C",
    "\\u008D",
    "\\u008E",
    "\\u008F",
    "\\u0090",
    "\\u0091",
    "\\u0092",
    "\\u0093",
    "\\u0094",
    "\\u0095",
    "\\u0096",
    "\\u0097",
    "\\u0098",
    "\\u0099",
    "\\u009A",
    "\\u009B",
    "\\u009C",
    "\\u009D",
    "\\u009E",
    "\\u009F"
];

// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/jsutils/devAssert.mjs
var devAssert = __webpack_require__(2382);
// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/jsutils/inspect.mjs
var inspect = __webpack_require__(1232);
// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/ast.mjs
var ast = __webpack_require__(8894);
// EXTERNAL MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/kinds.mjs
var kinds = __webpack_require__(3281);
;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/visitor.mjs




/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */ const BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 * ```ts
 * const editedAST = visit(ast, {
 *   enter(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: skip visiting this node
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   },
 *   leave(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: no action
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   }
 * });
 * ```
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to three permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind(node) {
 *     // enter the "Kind" node
 *   }
 * })
 * ```
 *
 * 2) Named visitors that trigger upon entering and leaving a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind: {
 *     enter(node) {
 *       // enter the "Kind" node
 *     }
 *     leave(node) {
 *       // leave the "Kind" node
 *     }
 *   }
 * })
 * ```
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 * ```ts
 * visit(ast, {
 *   enter(node) {
 *     // enter any node
 *   },
 *   leave(node) {
 *     // leave any node
 *   }
 * })
 * ```
 */ function visit(root, visitor, visitorKeys = ast/* QueryDocumentKeys */.h8) {
    const enterLeaveMap = new Map();
    for (const kind of Object.values(kinds/* Kind */.h)){
        enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
    }
    /* eslint-disable no-undef-init */ let stack = undefined;
    let inArray = Array.isArray(root);
    let keys = [
        root
    ];
    let index = -1;
    let edits = [];
    let node = root;
    let key = undefined;
    let parent = undefined;
    const path = [];
    const ancestors = [];
    /* eslint-enable no-undef-init */ do {
        index++;
        const isLeaving = index === keys.length;
        const isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
            key = ancestors.length === 0 ? undefined : path[path.length - 1];
            node = parent;
            parent = ancestors.pop();
            if (isEdited) {
                if (inArray) {
                    node = node.slice();
                    let editOffset = 0;
                    for (const [editKey, editValue] of edits){
                        const arrayKey = editKey - editOffset;
                        if (editValue === null) {
                            node.splice(arrayKey, 1);
                            editOffset++;
                        } else {
                            node[arrayKey] = editValue;
                        }
                    }
                } else {
                    node = Object.defineProperties({}, Object.getOwnPropertyDescriptors(node));
                    for (const [editKey, editValue] of edits){
                        node[editKey] = editValue;
                    }
                }
            }
            index = stack.index;
            keys = stack.keys;
            edits = stack.edits;
            inArray = stack.inArray;
            stack = stack.prev;
        } else if (parent) {
            key = inArray ? index : keys[index];
            node = parent[key];
            if (node === null || node === undefined) {
                continue;
            }
            path.push(key);
        }
        let result;
        if (!Array.isArray(node)) {
            var _enterLeaveMap$get, _enterLeaveMap$get2;
            (0,ast/* isNode */.UG)(node) || (0,devAssert/* devAssert */.a)(false, `Invalid AST Node: ${(0,inspect/* inspect */.X)(node)}.`);
            const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
            result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
            if (result === BREAK) {
                break;
            }
            if (result === false) {
                if (!isLeaving) {
                    path.pop();
                    continue;
                }
            } else if (result !== undefined) {
                edits.push([
                    key,
                    result
                ]);
                if (!isLeaving) {
                    if ((0,ast/* isNode */.UG)(result)) {
                        node = result;
                    } else {
                        path.pop();
                        continue;
                    }
                }
            }
        }
        if (result === undefined && isEdited) {
            edits.push([
                key,
                node
            ]);
        }
        if (isLeaving) {
            path.pop();
        } else {
            var _node$kind;
            stack = {
                inArray,
                index,
                keys,
                edits,
                prev: stack
            };
            inArray = Array.isArray(node);
            keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
            index = -1;
            edits = [];
            if (parent) {
                ancestors.push(parent);
            }
            parent = node;
        }
    }while (stack !== undefined);
    if (edits.length !== 0) {
        // New root
        return edits[edits.length - 1][1];
    }
    return root;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */ function visitInParallel(visitors) {
    const skipping = new Array(visitors.length).fill(null);
    const mergedVisitor = Object.create(null);
    for (const kind of Object.values(Kind)){
        let hasVisitor = false;
        const enterList = new Array(visitors.length).fill(undefined);
        const leaveList = new Array(visitors.length).fill(undefined);
        for(let i = 0; i < visitors.length; ++i){
            const { enter, leave } = getEnterLeaveForKind(visitors[i], kind);
            hasVisitor || (hasVisitor = enter != null || leave != null);
            enterList[i] = enter;
            leaveList[i] = leave;
        }
        if (!hasVisitor) {
            continue;
        }
        const mergedEnterLeave = {
            enter (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++){
                    if (skipping[i] === null) {
                        var _enterList$i;
                        const result = (_enterList$i = enterList[i]) === null || _enterList$i === void 0 ? void 0 : _enterList$i.apply(visitors[i], args);
                        if (result === false) {
                            skipping[i] = node;
                        } else if (result === BREAK) {
                            skipping[i] = BREAK;
                        } else if (result !== undefined) {
                            return result;
                        }
                    }
                }
            },
            leave (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++){
                    if (skipping[i] === null) {
                        var _leaveList$i;
                        const result = (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0 ? void 0 : _leaveList$i.apply(visitors[i], args);
                        if (result === BREAK) {
                            skipping[i] = BREAK;
                        } else if (result !== undefined && result !== false) {
                            return result;
                        }
                    } else if (skipping[i] === node) {
                        skipping[i] = null;
                    }
                }
            }
        };
        mergedVisitor[kind] = mergedEnterLeave;
    }
    return mergedVisitor;
}
/**
 * Given a visitor instance and a node kind, return EnterLeaveVisitor for that kind.
 */ function getEnterLeaveForKind(visitor, kind) {
    const kindVisitor = visitor[kind];
    if (typeof kindVisitor === "object") {
        // { Kind: { enter() {}, leave() {} } }
        return kindVisitor;
    } else if (typeof kindVisitor === "function") {
        // { Kind() {} }
        return {
            enter: kindVisitor,
            leave: undefined
        };
    } // { enter() {}, leave() {} }
    return {
        enter: visitor.enter,
        leave: visitor.leave
    };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 *
 * @deprecated Please use `getEnterLeaveForKind` instead. Will be removed in v17
 */ /* c8 ignore next 8 */ function getVisitFn(visitor, kind, isLeaving) {
    const { enter, leave } = getEnterLeaveForKind(visitor, kind);
    return isLeaving ? leave : enter;
}

;// CONCATENATED MODULE: ./node_modules/@sitecore-jss/sitecore-jss/node_modules/graphql/language/printer.mjs



/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */ function print(ast) {
    return visit(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
    Name: {
        leave: (node)=>node.value
    },
    Variable: {
        leave: (node)=>"$" + node.name
    },
    // Document
    Document: {
        leave: (node)=>join(node.definitions, "\n\n")
    },
    OperationDefinition: {
        leave (node) {
            const varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
            const prefix = join([
                node.operation,
                join([
                    node.name,
                    varDefs
                ]),
                join(node.directives, " ")
            ], " "); // Anonymous queries with no directives or variable definitions can use
            // the query short form.
            return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
        }
    },
    VariableDefinition: {
        leave: ({ variable, type, defaultValue, directives })=>variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "))
    },
    SelectionSet: {
        leave: ({ selections })=>block(selections)
    },
    Field: {
        leave ({ alias, name, arguments: args, directives, selectionSet }) {
            const prefix = wrap("", alias, ": ") + name;
            let argsLine = prefix + wrap("(", join(args, ", "), ")");
            if (argsLine.length > MAX_LINE_LENGTH) {
                argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
            }
            return join([
                argsLine,
                join(directives, " "),
                selectionSet
            ], " ");
        }
    },
    Argument: {
        leave: ({ name, value })=>name + ": " + value
    },
    // Fragments
    FragmentSpread: {
        leave: ({ name, directives })=>"..." + name + wrap(" ", join(directives, " "))
    },
    InlineFragment: {
        leave: ({ typeCondition, directives, selectionSet })=>join([
                "...",
                wrap("on ", typeCondition),
                join(directives, " "),
                selectionSet
            ], " ")
    },
    FragmentDefinition: {
        leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet })=>// or removed in the future.
            `fragment ${name}${wrap("(", join(variableDefinitions, ", "), ")")} ` + `on ${typeCondition} ${wrap("", join(directives, " "), " ")}` + selectionSet
    },
    // Value
    IntValue: {
        leave: ({ value })=>value
    },
    FloatValue: {
        leave: ({ value })=>value
    },
    StringValue: {
        leave: ({ value, block: isBlockString })=>isBlockString ? (0,blockString/* printBlockString */.LZ)(value) : printString(value)
    },
    BooleanValue: {
        leave: ({ value })=>value ? "true" : "false"
    },
    NullValue: {
        leave: ()=>"null"
    },
    EnumValue: {
        leave: ({ value })=>value
    },
    ListValue: {
        leave: ({ values })=>"[" + join(values, ", ") + "]"
    },
    ObjectValue: {
        leave: ({ fields })=>"{" + join(fields, ", ") + "}"
    },
    ObjectField: {
        leave: ({ name, value })=>name + ": " + value
    },
    // Directive
    Directive: {
        leave: ({ name, arguments: args })=>"@" + name + wrap("(", join(args, ", "), ")")
    },
    // Type
    NamedType: {
        leave: ({ name })=>name
    },
    ListType: {
        leave: ({ type })=>"[" + type + "]"
    },
    NonNullType: {
        leave: ({ type })=>type + "!"
    },
    // Type System Definitions
    SchemaDefinition: {
        leave: ({ description, directives, operationTypes })=>wrap("", description, "\n") + join([
                "schema",
                join(directives, " "),
                block(operationTypes)
            ], " ")
    },
    OperationTypeDefinition: {
        leave: ({ operation, type })=>operation + ": " + type
    },
    ScalarTypeDefinition: {
        leave: ({ description, name, directives })=>wrap("", description, "\n") + join([
                "scalar",
                name,
                join(directives, " ")
            ], " ")
    },
    ObjectTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields })=>wrap("", description, "\n") + join([
                "type",
                name,
                wrap("implements ", join(interfaces, " & ")),
                join(directives, " "),
                block(fields)
            ], " ")
    },
    FieldDefinition: {
        leave: ({ description, name, arguments: args, type, directives })=>wrap("", description, "\n") + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "))
    },
    InputValueDefinition: {
        leave: ({ description, name, type, defaultValue, directives })=>wrap("", description, "\n") + join([
                name + ": " + type,
                wrap("= ", defaultValue),
                join(directives, " ")
            ], " ")
    },
    InterfaceTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields })=>wrap("", description, "\n") + join([
                "interface",
                name,
                wrap("implements ", join(interfaces, " & ")),
                join(directives, " "),
                block(fields)
            ], " ")
    },
    UnionTypeDefinition: {
        leave: ({ description, name, directives, types })=>wrap("", description, "\n") + join([
                "union",
                name,
                join(directives, " "),
                wrap("= ", join(types, " | "))
            ], " ")
    },
    EnumTypeDefinition: {
        leave: ({ description, name, directives, values })=>wrap("", description, "\n") + join([
                "enum",
                name,
                join(directives, " "),
                block(values)
            ], " ")
    },
    EnumValueDefinition: {
        leave: ({ description, name, directives })=>wrap("", description, "\n") + join([
                name,
                join(directives, " ")
            ], " ")
    },
    InputObjectTypeDefinition: {
        leave: ({ description, name, directives, fields })=>wrap("", description, "\n") + join([
                "input",
                name,
                join(directives, " "),
                block(fields)
            ], " ")
    },
    DirectiveDefinition: {
        leave: ({ description, name, arguments: args, repeatable, locations })=>wrap("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
    },
    SchemaExtension: {
        leave: ({ directives, operationTypes })=>join([
                "extend schema",
                join(directives, " "),
                block(operationTypes)
            ], " ")
    },
    ScalarTypeExtension: {
        leave: ({ name, directives })=>join([
                "extend scalar",
                name,
                join(directives, " ")
            ], " ")
    },
    ObjectTypeExtension: {
        leave: ({ name, interfaces, directives, fields })=>join([
                "extend type",
                name,
                wrap("implements ", join(interfaces, " & ")),
                join(directives, " "),
                block(fields)
            ], " ")
    },
    InterfaceTypeExtension: {
        leave: ({ name, interfaces, directives, fields })=>join([
                "extend interface",
                name,
                wrap("implements ", join(interfaces, " & ")),
                join(directives, " "),
                block(fields)
            ], " ")
    },
    UnionTypeExtension: {
        leave: ({ name, directives, types })=>join([
                "extend union",
                name,
                join(directives, " "),
                wrap("= ", join(types, " | "))
            ], " ")
    },
    EnumTypeExtension: {
        leave: ({ name, directives, values })=>join([
                "extend enum",
                name,
                join(directives, " "),
                block(values)
            ], " ")
    },
    InputObjectTypeExtension: {
        leave: ({ name, directives, fields })=>join([
                "extend input",
                name,
                join(directives, " "),
                block(fields)
            ], " ")
    }
};
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */ function join(maybeArray, separator = "") {
    var _maybeArray$filter$jo;
    return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x)=>x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
/**
 * Given array, print each item on its own line, wrapped in an indented `{ }` block.
 */ function block(array) {
    return wrap("{\n", indent(join(array, "\n")), "\n}");
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */ function wrap(start, maybeString, end = "") {
    return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
    return wrap("  ", str.replace(/\n/g, "\n  "));
}
function hasMultilineItems(maybeArray) {
    var _maybeArray$some;
    // FIXME: https://github.com/graphql/graphql-js/issues/2203
    /* c8 ignore next */ return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str)=>str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}


/***/ }),

/***/ 7329:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@sitecore-cloudsdk/core","version":"0.1.5","license":"Apache-2.0","main":"dist/cjs/src/index.js","module":"dist/esm/src/index.js","types":"dist/esm/src/index.d.ts","exports":{".":{"types":{"require":"./dist/cjs/src/index.d.ts","default":"./dist/esm/src/index.d.ts"},"import":"./dist/esm/src/index.js","require":"./dist/cjs/src/index.js"}},"dependencies":{"@sitecore-cloudsdk/utils":"^0.1.3"},"scripts":{"build":"npm run build:cjs && npm run build:es","build:cjs":"tsc -b tsconfig.cjs.json","build:es":"tsc -b ."},"files":["dist","README.md"]}');

/***/ }),

/***/ 3720:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@sitecore-cloudsdk/personalize","version":"0.1.5","license":"Apache-2.0","exports":{"./server":{"import":"./server.js","require":"./server.cjs","types":"./server.d.ts"},"./browser":{"import":"./browser.js","require":"./browser.cjs","types":"./browser.d.ts"}},"dependencies":{"@sitecore-cloudsdk/core":"^0.1.3","@sitecore-cloudsdk/utils":"^0.1.3"},"scripts":{"build":"npm run build:cjs && npm run build:es","build:cjs":"tsc -b tsconfig.cjs.json","build:es":"tsc -b ."},"files":["dist","README.md","browser.js","browser.cjs","browser.d.ts","server.cjs","server.js","server.d.ts"]}');

/***/ }),

/***/ 6034:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(399));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES)["middleware_src/middleware"] = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=middleware.js.map