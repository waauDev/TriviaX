import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async headers() {
    return[
      {source:"/api/(.*)",
        headers:[
          {
            key:"Access-Control-Allow-Origin",
            value:"*",
          },
          {
            key:"Access-Control-Allow-Methods",
            value:"GET,POST, PUT, DELETE, OPTIONS",
          },
          {
            key:"Access-Control-Allow-Headers",
            value:"Content-type, Authorization",
          },
          {
            key:"Content-Range",
            value:"bytes : 0-9/*",
          },
          
          
        ]
      }
    ]
  },
  typescript: {
    ignoreBuildErrors: true, // ← ⚠️ fuerza el build aunque haya errores TS
  },

};


export default nextConfig;
