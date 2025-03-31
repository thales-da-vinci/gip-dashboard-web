
async function fetchSites() {
  const res = await fetch(GIP_API_URL + "/sites", {
    headers: { "Authorization": "Bearer " + GIP_TOKEN }
  });
  const sites = await res.json();
  const container = document.getElementById("site-list");
  container.innerHTML = "";

  sites.forEach(site => {
    const card = document.createElement("div");
    card.className = "site-card";
    card.innerHTML = `
      <h3>${site.title}</h3>
      <p><strong>URL:</strong> ${site.url}</p>
      <p><strong>Status:</strong> ${site.status}</p>
      <button onclick="logDeploy(${site.id})">📤 Log Deploy</button>
    `;
    container.appendChild(card);
  });
}

async function logDeploy(siteId) {
  const acao = "deploy";
  const resposta = "Deploy registrado pelo painel externo";
  await fetch(GIP_API_URL + "/logs", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + GIP_TOKEN,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ site_id: siteId, acao, resposta })
  });
  alert("✅ Deploy logado!");
}

window.onload = fetchSites;
