"use client"

export default function myImageLoader({ src, width, quality }) {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`
}