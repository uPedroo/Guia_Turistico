# 🌴 Loft Boiçucanga — Guia do Hóspede & Praias

Site interativo do **Loft Boiçucanga (São Sebastião - SP)** construído com **Astro + Tailwind CSS + GSAP**.

---

## 🚀 Como rodar o site no seu computador

Você só precisa do **Node.js** instalado (já está instalado neste computador).

### Passo a passo no terminal (PowerShell ou Terminal do VS Code):

1. Abra o terminal na pasta do projeto (`C:\Airbnb\casa1`):
   ```powershell
   cd C:\Airbnb\casa1
   ```

2. Inicie o servidor local de desenvolvimento:
   ```powershell
   npm run dev
   ```

3. Abra no navegador:
   - **No computador:** [http://localhost:4321](http://localhost:4321)
   - **No celular (conectado no mesmo Wi-Fi):** olhe no terminal a linha `Network` (ex.: `http://192.168.1.117:4321`) e digite esse endereço no navegador do celular.

4. **Para desligar o servidor:** aperte `Ctrl + C` no terminal.

> 💡 **Atalho rápido:** Você também pode dar **dois cliques** no arquivo `rodar_site.bat` dentro da pasta `C:\Airbnb\casa1` que ele abre o servidor automaticamente!

---

## ✏️ Como editar textos, Wi-Fi, regras e praias

Quase todo o conteúdo do site fica em **um único arquivo**:
- 📄 `src/data/conteudo.json`

Basta abrir o arquivo `src/data/conteudo.json`, alterar o texto desejado e salvar. O site atualiza sozinho na hora!

### Onde ficam as fotos:
- As fotos exibidas no site ficam na pasta: `public/fotos/`
- Para adicionar fotos novas de uma praia (ex.: Juquehy, Boiçucanga, Santiago, Toque-Toque), coloque os arquivos `.jpg` dentro de `public/fotos/` e adicione o caminho `"/fotos/nome-da-foto.jpg"` na lista `"photos"` daquela praia dentro de `src/data/conteudo.json`.
