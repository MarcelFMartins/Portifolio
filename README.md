# Marcel Martins — Portfólio

Portfólio pessoal minimalista, com foco em projetos e experiências.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · GSAP + ScrollTrigger · Lenis

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Editar conteúdo

Todo o texto do site está em [`lib/data.ts`](lib/data.ts): perfil, projetos em destaque, arquivo de projetos,
experiências, formação e conhecimentos. Não é preciso mexer nos componentes para atualizar o portfólio.

## Estrutura

- `app/` — layout, página, estilos globais (`globals.css`, com os temas claro e escuro em `:root`), ícone, sitemap e robots.
- `components/` — uma seção por arquivo (`Hero`, `Manifesto`, `Work`, `Archive`, `Experience`, `Skills`, `Contact`) mais `Nav`, `ThemeToggle` e `SmoothScroll` (Lenis sincronizado com o ScrollTrigger).
- `public/` — logo e arquivo de verificação do Google Search Console.

## Animações

- **Hero** e **Sobre** ficam presos na tela (pin) enquanto o conteúdo anima com o scroll.
- **Projetos** viram um trilho horizontal fixo em telas a partir de 900px de largura e 560px de altura; em telas menores, os cartões ficam empilhados.
- Tudo respeita `prefers-reduced-motion`.

## Deploy na Vercel

1. Suba o repositório para o GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório. A Vercel detecta o Next.js sozinha; não há variáveis de ambiente.
3. Em *Settings → Domains*, aponte `marcelmartins.site`.

O formulário de contato usa o [FormSubmit](https://formsubmit.co) e não precisa de back-end. No primeiro envio, o FormSubmit manda um e-mail de confirmação para ativar o endereço.
