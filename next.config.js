/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_BASE_URL: "https://63270a7aba4a9c47532f8ff3.mockapi.io/api/v1/",
    REACT_APP_API_URL: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
    REACT_APP_API_KEY:
      "pk.eyJ1IjoidmFsZW50aW5vczIxNSIsImEiOiJjbDhuYzN5N3gwZXJiM29vYW5vdzJndzNtIn0.sXTtaj_m9upSxo6msqBwRA",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.dominos.ua",
      },
    ],
  },
};

module.exports = nextConfig;
