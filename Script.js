const terminal = document.getElementById("terminal");

const lines = [
  "💖 SYSTEM BOOTING...",
  "📡 Connecting to HEART Signal...",
  "❤️ LOVE YOU...",
  "🥺 MISS YOU...",
  "🧠 CAN'T DELETE MEMORIES...",
  "🔒 FEELINGS LOCKED PERMANENTLY...",
  "🖤 NIGHT THOUGHTS LOADED...",
  "🚨 YOU STILL MATTER...",
  "",
  "⚙️ END OF TRANSMISSION.",
  "💀 Created by: MONSTER JACK",
  "😎 'Sabko lagta hai game hai... Par banaya maine.'"
];

let i = 0;

function typeLine() {
  if (i >= lines.length) return;

  const line = document.createElement("div");
  terminal.appendChild(line);

  let j = 0;
  const typing = setInterval(() => {
    if (j < lines[i].length) {
      line.textContent += lines[i][j];
      j++;
    } else {
      clearInterval(typing);
      i++;
      setTimeout(typeLine, 600);
    }
  }, 50);
}

typeLine();