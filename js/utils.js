const nomesImagens = [
  "bacalhau.png",
  "frango.png",
  "bitoque.png",
  "cozido.png",
  "lasanha.png",
];

// Base URL raw do GitHub onde as imagens estao hospedadas
const baseGitHubRaw = "https://raw.githubusercontent.com/trmuitosoft1/Pratos/main/Imagens/";
function mostrarLogin() {
    document.getElementById('titulo').style.display = 'none';
    document.getElementById('btnMenu').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.querySelector(".formulario").style.display = 'none';
    document.getElementById('prato').style.display = 'none';
        
  }
function ajustarUrlsImagens(pratos) {
  return pratos.map(p => {
    if (!p.imagem || p.imagem.trim() === "") {
      const nomeImagem = nomesImagens.find(imgName => {
        const nomePratoSemExt = imgName.replace(/\.[^/.]+$/, "").toLowerCase();
        return p.nome.toLowerCase().includes(nomePratoSemExt);
      });
      if (nomeImagem) {
        return { ...p, imagem: baseGitHubRaw + nomeImagem };
      }
      return { ...p, imagem: "https://via.placeholder.com/100" };
    } else if (!p.imagem.startsWith("http")) {
      return { ...p, imagem: baseGitHubRaw + p.imagem };
    }
    return p;
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { ajustarUrlsImagens };
} else {
  window.ajustarUrlsImagens = ajustarUrlsImagens;
}
