import { GEMINI_API_KEY } from "./constants";

import { GoogleGenAI, Type } from "@google/genai";

export const gemini = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const generateContent = async (query) => {
  return await gemini.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: query,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            movies: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
            },
          },
          propertyOrdering: ["movies"],
        },
      },
    },
  });
};
