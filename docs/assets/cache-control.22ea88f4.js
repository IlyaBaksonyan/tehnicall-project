const o=defineEventHandler(e=>{{const a=e.node.req.url.match(/(.+)\.(jpg|jpeg|gif|png|ico|svg|css|js|mjs)/)?60*60*12*30:60*60;appendHeader(e,"Cache-Control",`max-age=${a} s-maxage=${a}`)}});export{o as default};
