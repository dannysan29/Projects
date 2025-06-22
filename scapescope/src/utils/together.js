export async function fetchTogetherResponse(userMessage) {
    const response = await fetch("http://localhost:3001/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userMessage })
    });
  
    const data = await response.json();
    console.log("Proxy response:", data);
    return data.output || "Sorry, I couldn’t get a response.";
  }
  