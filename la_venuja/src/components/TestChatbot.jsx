"use client"

import { useState } from "react"

export default function TestChatbot() {
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const testAPI = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: "Hello, can you help me?" }],
        }),
      })

      if (!res.ok) {
        const errorText = await res.text()
        setResponse(`Error: ${res.status} - ${errorText}`)
        return
      }

      const reader = res.body.getReader()
      let result = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        result += new TextDecoder().decode(value)
      }

      setResponse(result)
    } catch (error) {
      setResponse(`Network Error: ${error.message}`)
    }
    setLoading(false)
  }

  return (
    <div className="p-4 border rounded-lg bg-gray-50 m-4">
      <h3 className="font-bold mb-2">API Test</h3>
      <button
        onClick={testAPI}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        {loading ? "Testing..." : "Test Chat API"}
      </button>
      {response && (
        <div className="mt-4 p-2 bg-white border rounded">
          <pre className="text-sm whitespace-pre-wrap">{response}</pre>
        </div>
      )}
    </div>
  )
}
