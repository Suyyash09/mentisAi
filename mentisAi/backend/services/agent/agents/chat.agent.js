import { getModel } from "../config/llmModels.js";

export const chatAgent = async (state) => {
  try {
    const llm = await getModel("chat");
    const systemPrompt = "you are mentisAi, an inteligent AI assistant";
    const response = await llm.invoke([
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: state.prompt,
      },
    ]);

    return {
      ...state,
      aiResponse: response.content,
    };
  } catch (error) {
    console.log(error);
    return {
      ...state,
      aiResponse: error?.data?.message || "failed to generate chat",
    };
  }
};
