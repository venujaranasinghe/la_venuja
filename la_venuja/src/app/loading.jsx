"use client"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="text-center">
        {/* Modern spinner */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-neutral-800 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <div className="text-white font-medium mb-2">Loading</div>
        <div className="text-neutral-400 text-sm">Please wait...</div>
      </div>
    </div>
  )
}
