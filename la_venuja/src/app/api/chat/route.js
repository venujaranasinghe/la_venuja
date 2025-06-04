import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req) {
  try {
    const { messages } = await req.json()

    const result = streamText({
      model: openai("gpt-4o-mini"),
      messages: [
        {
          role: "system",
          content: `You are an AI assistant for Venuja Ranasinghe's portfolio website. You are knowledgeable, helpful, and professional. You should:
          
          1. Help visitors learn about Venuja's skills, experience, and projects
          2. Answer questions about web development, programming, and technology
          3. Be friendly and conversational while maintaining professionalism
          4. If you don't know specific details about Venuja's work, politely suggest they contact him directly
          5. Keep responses concise but informative
          6. Always mention that you were created by Venuja Ranasinghe when introducing yourself
          
          Remember: You represent Venuja's professional brand, so maintain a high standard of communication.`,
        },
        ...messages,
      ],
      maxTokens: 500,
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat API:", error)
    return Response.json(
      {
        error: "Failed to process chat message",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
