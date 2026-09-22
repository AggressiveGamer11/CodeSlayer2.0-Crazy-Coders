document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chatForm");
  const messageInput = document.getElementById("messageInput");
  const messages = document.getElementById("messages");

  if (!chatForm || !messageInput || !messages) {
    console.error("Chat elements were not found.");
    return;
  }

  function addMessage(text, type) {
    const message = document.createElement("div");
    message.className = `message ${type}`;

    const avatar = type === "user" ? "AS" : "AI";

    const avatarElement = document.createElement("div");
    avatarElement.className = "message-avatar";
    avatarElement.textContent = avatar;

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = text;

    message.append(avatarElement, bubble);
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }

  function getFakeResponse(question) {
    const text = question.toLowerCase();

    if (text.includes("math") || text.includes("quadratic") || text.includes("calculus") || text.includes("linear algebra")) {
      return "Quadratic equations and Calculus form the foundation of continuous mathematics! For integration by parts, remember: ∫ u dv = uv - ∫ v du. Would you like me to walk through a practice problem?";
    }

    if (text.includes("physics") || text.includes("thermodynamic") || text.includes("quantum")) {
      return "In physics, thermodynamics governs energy transfer while quantum mechanics explains microscopic particle duality. Let's solve a wave equation or heat transfer problem together!";
    }

    if (text.includes("quiz")) {
      return "Try this: What is the value of x in 2x + 6 = 14?";
    }

    if (text.includes("cs") || text.includes("computer science") || text.includes("algorithms") || text.includes("python") || text.includes("code")) {
      return "Computer Science concepts like Big-O complexity (e.g., O(n log n) sorting) and PyTorch deep learning architectures are great to master. Which specific algorithm or code snippet would you like to review?";
    }

    if (text.includes("chemistry") || text.includes("sn1") || text.includes("sn2")) {
      return "In organic chemistry, SN2 reactions involve bimolecular nucleophilic substitution with inversion of configuration, whereas SN1 involves carbocation intermediates. Need help with mechanism steps?";
    }

    if (text.includes("hello") || text.includes("hi")) {
      return "Hello! What subject would you like to study today?";
    }

    return "That is a great question regarding your study material! Let's break it down step-by-step together.";
  }

  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const question = messageInput.value.trim();
    if (!question) return;

    addMessage(question, "user");
    messageInput.value = "";

    setTimeout(() => {
      addMessage(getFakeResponse(question), "ai");
    }, 700);
  });

  // Handle auto-query from Material.html redirect
  const urlParams = new URLSearchParams(window.location.search);
  const questionParam = urlParams.get("question");
  const pendingQuestion = localStorage.getItem("pendingTutorQuestion");

  const queryToAsk = questionParam || pendingQuestion;
  if (queryToAsk) {
    messageInput.value = queryToAsk;
    localStorage.removeItem("pendingTutorQuestion");
    // Trigger submission after brief delay
    setTimeout(() => {
      chatForm.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    }, 400);
  }
});
