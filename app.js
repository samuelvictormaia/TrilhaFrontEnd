// app.js - Local EAD Front-End (Samuel)
// Simple SPA-like app using vanilla JS, stores progress in localStorage
(function(){
  const STORAGE_KEY = "ead_frontend_progress_v1_samuel";

  // Modules and lessons data (original content written to teach)
  const modules = [
    {
      id: "m1",
      title: "Fundamentos Web",
      desc: "HTML básico, estrutura, navegador, DevTools e como a web funciona.",
      lessons: [
        { id:"m1l1", title:"Aula 1 — O que é a Web & HTML", content: `
<h3>O que é a Web</h3>
<p>A web é uma coleção de documentos e aplicações acessíveis via navegadores. O navegador pede recursos ao servidor via HTTP e renderiza HTML, aplica CSS e executa JavaScript.</p>
<h4>Exercício</h4>
<ol>
<li>Abra o DevTools no navegador (F12).</li>
<li>Crie um arquivo <code>index.html</code> simples com &lt;h1&gt;Olá Mundo&lt;/h1&gt; e abra no navegador.</li>
</ol>
`},
        { id:"m1l2", title:"Aula 2 — Tags essenciais e semântica", content: `
<p>Conheça as tags: <code>header</code>, <code>main</code>, <code>footer</code>, <code>section</code>, <code>article</code>, <code>nav</code>. Use semântica para acessibilidade e SEO.</p>
<h4>Exercício</h4>
<p>Estruture uma pequena página com header, nav, main com article e footer.</p>
`},
        { id:"m1l3", title:"Aula 3 — Ferramentas do desenvolvedor (DevTools)", content: `
<p>Inspecione elementos, altere estilos ao vivo, veja requests de rede, console e performance. Essas ferramentas vão acelerar seu debug.</p>
<h4>Exercício</h4>
<p>Abra DevTools, altere o texto de um elemento pelo console e observe o painel Network ao recarregar.</p>
`}
      ]
    },
    {
      id: "m2",
      title: "Layouts e CSS (Tailwind)",
      desc: "Construir layouts profissionais, responsividade, Flexbox, Grid e introdução ao Tailwind.",
      lessons: [
        { id:"m2l1", title:"Aula 1 — Box Model e Seletores", content:`
<p>Entenda box model: content, padding, border, margin. Seletores básicos e especificidade.</p>
<h4>Exercício</h4>
<p>Crie uma caixa com padding e margem e observe o comportamento.</p>
`},
        { id:"m2l2", title:"Aula 2 — Flexbox (prático)", content:`
<p>Flexbox resolve alinhamentos em uma dimensão. Pratique com <code>display:flex</code>, <code>justify-content</code> e <code>align-items</code>.</p>
<h4>Exercício</h4><p>Crie um header com logo à esquerda e menu à direita usando flex.</p>
`},
        { id:"m2l3", title:"Aula 3 — Grid (prático)", content:`
<p>Grid para layouts complexos em duas dimensões. Use <code>grid-template-columns</code> e <code>gap</code>.</p>
<h4>Exercício</h4><p>Refaça um layout de 3 colunas responsivo usando Grid.</p>
`},
        { id:"m2l4", title:"Aula 4 — Tailwind (conceitos e utilitários)", content:`
<p>Tailwind é uma biblioteca utilitária. Em vez de escrever CSS para classes específicas, usamos utilitários prontos (e.g. <code>flex</code>, <code>p-4</code>, <code>bg-blue-500</code>).</p>
<h4>Exercício</h4><p>Crie um card simples usando classes utilitárias no HTML (ou mentalize se não estiver usando Tailwind ainda).</p>
`}
      ]
    },
    {
      id:"m3",
      title: "JavaScript Intensivo",
      desc: "Do básico ao avançado: ES6+, manipulação do DOM, fetch e async/await.",
      lessons: [
        { id:"m3l1", title:"Aula 1 — Fundamentos JS", content:`
<p>Variáveis (let/const), tipos, operadores e estruturas de controle (if, for, while).</p>
<h4>Exercício</h4><p>Escreva um script que percorra um array e mostre cada item no console.</p>
`},
        { id:"m3l2", title:"Aula 2 — Funções, escopo e closures", content:`
<p>Funções, escopo léxico, closures. Entender closure é chave para muitos padrões.</p>
<h4>Exercício</h4><p>Crie uma função que retorna outra função que mantém um contador interno.</p>
`},
        { id:"m3l3", title:"Aula 3 — DOM, eventos e delegação", content:`
<p>Manipular elementos com <code>querySelector</code>, adicionar listeners e entender delegação para performance.</p>
<h4>Exercício</h4><p>Implemente um to-do list simples usando DOM e eventos.</p>
`},
        { id:"m3l4", title:"Aula 4 — Fetch API e async/await", content:`
<p>Consuma APIs com fetch, trate erros e use async/await para fluxo linear.</p>
<h4>Exercício</h4><p>Consuma uma API pública (ex: https://pokeapi.co/) e liste dados no DOM.</p>
`},
        { id:"m3l5", title:"Aula 5 — Módulos e organização", content:`
<p>Divida o código em módulos (import/export) e mantenha código organizado para crescer projetos.</p>
<h4>Exercício</h4><p>Transforme funções utilitárias em um módulo e importe em um script principal.</p>
`}
      ]
    },
    {
      id:"m4",
      title:"React Prático",
      desc:"Componentes funcionais, hooks, router, patterns e deploy.",
      lessons:[
        { id:"m4l1", title:"Aula 1 — Conceitos e JSX", content:`
<p>React é uma biblioteca para construir interfaces. JSX parece HTML mas é JS. Componentes são funções que retornam UI.</p>
<h4>Exercício</h4><p>Crie um componente que recebe props e renderiza um cartão.</p>
`},
        { id:"m4l2", title:"Aula 2 — useState e useEffect", content:`
<p>useState para estado local; useEffect para efeitos colaterais como fetch de dados.</p>
<h4>Exercício</h4><p>Implemente um contador com incremento e armazenamento no localStorage.</p>
`},
        { id:"m4l3", title:"Aula 3 — Context e patterns", content:`
<p>Context API para estado global simples; patterns para organizar componentes.</p>
<h4>Exercício</h4><p>Crie um contexto para tema (light/dark) e use em componentes.</p>
`},
        { id:"m4l4", title:"Aula 4 — React Router (navegação)", content:`
<p>Navegação entre páginas com React Router; rotas, parâmetros e navegação programática.</p>
<h4>Exercício</h4><p>Crie rotas para Home, Curso e Perfil (conceitual).</p>
`},
        { id:"m4l5", title:"Aula 5 — Boas práticas e deploy", content:`
<p>Estrutura de pastas, limpeza de código, commits e deploy no Vercel.</p>
<h4>Exercício</h4><p>Prepare um README profissional e faça o deploy de uma página estática.</p>
`}
      ]
    },
    {
      id:"m5",
      title:"Web Services & APIs",
      desc:"REST, autenticação básica, CORS e mock APIs.",
      lessons:[
        { id:"m5l1", title:"Aula 1 — REST e verbos HTTP", content:`
<p>GET, POST, PUT, DELETE. Escolha certo o verbo e cuide de status codes.</p>
`},
        { id:"m5l2", title:"Aula 2 — Autenticação simples (conceito)", content:`
<p>Entenda JWT na prática: token, refresh e armazenamento seguro.</p>
`},
        { id:"m5l3", title:"Aula 3 — Mock APIs e testes locais", content:`
<p>Use JSON Server ou mocks para desenvolver sem backend pronto.</p>
`}
      ]
    },
    {
      id:"m6",
      title:"UX / UI Básico",
      desc:"Princípios de design, acessibilidade e prototipação.",
      lessons:[
        { id:"m6l1", title:"Aula 1 — Princípios e heurísticas", content:`
<p>Entenda usabilidade, fluxo de usuário e heurísticas de Nielsen.</p>
`},
        { id:"m6l2", title:"Aula 2 — Tipografia e cores", content:`
<p>Escolha de tipografia, contraste e escala visual para legibilidade.</p>
`},
        { id:"m6l3", title:"Aula 3 — Prototipar e testar", content:`
<p>Protótipo rápido e teste com usuários (mesmo que 1 pessoa).</p>
`}
      ]
    },
    {
      id:"m7",
      title:"Scrum & Engenharia",
      desc:"Práticas ágeis e organização de times.",
      lessons:[
        { id:"m7l1", title:"Aula 1 — O que é Scrum", content:`
<p>Conceitos básicos: sprints, backlog, papéis.</p>
`},
        { id:"m7l2", title:"Aula 2 — Cerimônias na prática", content:`
<p>Como organizar planning, daily, review e retrospectiva.</p>
`}
      ]
    },
    {
      id:"m8",
      title:"Testes & Boas Práticas",
      desc:"Introdução a testes, lint e qualidade de código.",
      lessons:[
        { id:"m8l1", title:"Aula 1 — Testes unitários (princípios)", content:`
<p>Por que testar? TDD básico e ferramentas como Jest.</p>
`},
        { id:"m8l2", title:"Aula 2 — Linting e formatação", content:`
<p>Configure ESLint e Prettier para manter padrão no time.</p>
`}
      ]
    },
    {
      id:"m9",
      title:"Portfólio & Deploy",
      desc:"Como montar portfólio, README e publicar seus projetos.",
      lessons:[
        { id:"m9l1", title:"Aula 1 — Estrutura do portfólio", content:`
<p>Escolha projetos que mostram skills: 2-3 projetos bem documentados.</p>
`},
        { id:"m9l2", title:"Aula 2 — Deploy simples", content:`
<p>Vercel e Netlify são ótimos para sites estáticos e apps React.</p>
`}
      ]
    },
    {
      id:"m10",
      title:"Inglês Técnico",
      desc:"Vocabulário e leitura de documentação.",
      lessons:[
        { id:"m10l1", title:"Aula 1 — Termos essenciais", content:`
<p>API, endpoint, deploy, CI, branch, merge — anota e pratique.</p>
`},
        { id:"m10l2", title:"Aula 2 — Leitura prática", content:`
<p>Leia a documentação de um método JS por dia e anote 3 termos novos.</p>
`}
      ]
    }
  ];

  // Utilities save/load progress
  function loadState(){
    try{
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    }catch(e){ return {}; }
  }
  function saveState(state){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

  // Initialize state
  const state = loadState();
  // ensure structure
  if(!state.completed) state.completed = {}; // keys lessonId:true
  if(!state.notes) state.notes = {}; // lessonId->note

  // DOM Elements
  const app = document.getElementById('app');
  function el(tag, attrs={}, children=[]){
    const e = document.createElement(tag);
    Object.entries(attrs).forEach(([k,v])=>{
      if(k==="class") e.className = v;
      else if(k==="html") e.innerHTML = v;
      else e.setAttribute(k,v);
    });
    (Array.isArray(children)?children:[children]).forEach(c=>{ if(typeof c === 'string') e.appendChild(document.createTextNode(c)); else if(c) e.appendChild(c); });
    return e;
  }

  // Compute progress per module and total
  function computeProgress(){
    let total = 0, done = 0;
    modules.forEach(m=>{
      m.lessons.forEach(l=>{ total++; if(state.completed[l.id]) done++; });
    });
    return Math.round((done/total)*100);
  }

  function moduleProgress(m){
    const total = m.lessons.length;
    const done = m.lessons.filter(l=>state.completed[l.id]).length;
    return Math.round((done/total)*100);
  }

  // Determine if lesson is unlocked (first lesson of module unlocked OR previous lesson completed OR module before complete)
  function isLessonUnlocked(moduleIndex, lessonIndex){
    // first lesson of first module always unlocked
    if(moduleIndex===0 && lessonIndex===0) return true;
    const lesson = modules[moduleIndex].lessons[lessonIndex];
    // if already completed, unlocked
    if(state.completed[lesson.id]) return true;
    // if it's first lesson of module -> check previous module complete
    if(lessonIndex===0){
      const prevModule = modules[moduleIndex-1];
      const prevDone = prevModule.lessons.every(l=>state.completed[l.id]);
      return prevDone;
    }
    // else check previous lesson in same module
    const prevLesson = modules[moduleIndex].lessons[lessonIndex-1];
    return !!state.completed[prevLesson.id];
  }

  function render(){
    app.innerHTML = "";
    const container = el('div',{class:'container'});
    // header
    const header = el('div',{class:'header'});
    const brand = el('div',{class:'brand'});
    const logo = el('div',{class:'logo'}, ['FE']);
    const titles = el('div',{});
    titles.appendChild(el('div',{class:'title'}, ['Trilha Front-End - Samuel']));
    titles.appendChild(el('div',{class:'subtitle'}, ['Local EAD • Progresso guiado']));
    brand.appendChild(logo); brand.appendChild(titles);
    header.appendChild(brand);
    const hright = el('div',{});
    hright.appendChild(el('div',{class:'stat'}, ['Progresso: '+ computeProgress() +'%']));
    header.appendChild(hright);
    container.appendChild(header);

    // grid
    const grid = el('div',{class:'grid'});

    // sidebar modules
    const sidebar = el('div',{class:'sidebar'});
    modules.forEach((m,mi)=>{
      const prog = moduleProgress(m);
      const item = el('div',{class:'module-item '+(prog===100?'':'') + (prog===0?'':'') + (prog<100 && prog>0 ? ' active' : '')}, [
        el('div',{}, [el('strong',{}, [m.title])]),
        el('div',{class:'stat'}, [m.desc]),
      ]);
      item.onclick = ()=> openModule(mi);
      sidebar.appendChild(item);
    });
    grid.appendChild(sidebar);

    // main area
    const main = el('div',{class:'main'});
    // controls
    const controls = el('div',{class:'controls'});
    const progressBar = el('div',{class:'progress'}, [el('i')]);
    progressBar.querySelector('i').style.width = computeProgress()+'%';
    controls.appendChild(progressBar);
    controls.appendChild(el('div',{class:'stat'}, [computeProgress()+'% concluído']));
    main.appendChild(controls);

    // initial module view: find first module with incomplete lesson or default first
    let startModuleIndex = 0;
    for(let i=0;i<modules.length;i++){
      const m = modules[i];
      if(moduleProgress(m) < 100){ startModuleIndex = i; break; }
    }
    // render module content
    const moduleSection = renderModule(startModuleIndex);
    main.appendChild(moduleSection);

    grid.appendChild(main);
    container.appendChild(grid);
    app.appendChild(container);
  }

  function renderModule(index){
    const m = modules[index];
    const wrapper = el('div',{});
    const header = el('div',{class:'module-header'});
    header.appendChild(el('div',{}, [el('h2',{}, [m.title]), el('div',{class:'stat'}, [m.desc])]));
    header.appendChild(el('div',{}, [el('div',{class:'stat'}, ['Módulo '+(index+1)+' • '+ moduleProgress(m)+'%'])]));
    wrapper.appendChild(header);

    // lessons list
    const lessonList = el('div',{class:'lesson-list'});
    m.lessons.forEach((l,li)=>{
      const unlocked = isLessonUnlocked(index, li);
      const lessonRow = el('div',{class:'lesson '+(unlocked? '':'locked')}, [
        el('div',{}, [el('div',{class:'title'}, [l.title]), el('div',{class:'meta'}, [ 'Tempo sugerido: 30–60 min' ])]),
        el('div',{}, [
          el('button',{class:'btn ghost'}, ['Abrir'], )
        ])
      ]);
      lessonRow.querySelector('button').onclick = ()=> openLesson(index, li);
      lessonList.appendChild(lessonRow);
    });
    wrapper.appendChild(lessonList);

    // area for lesson content (default first unlocked lesson)
    const firstUnlocked = m.lessons.findIndex((_,i)=> isLessonUnlocked(index,i));
    const lessonContentArea = el('div',{id:'lesson-area'});
    if(firstUnlocked>=0) lessonContentArea.appendChild(renderLesson(index, firstUnlocked));
    wrapper.appendChild(lessonContentArea);
    return wrapper;
  }

  function openModule(index){
    // re-render main with selected module
    const main = document.querySelector('.main');
    if(!main) return;
    main.innerHTML = "";
    const controls = el('div',{class:'controls'});
    const progressBar = el('div',{class:'progress'}, [el('i')]);
    progressBar.querySelector('i').style.width = computeProgress()+'%';
    controls.appendChild(progressBar);
    controls.appendChild(el('div',{class:'stat'}, [computeProgress()+'% concluído']));
    main.appendChild(controls);

    const moduleSection = renderModule(index);
    main.appendChild(moduleSection);
  }

  function renderLesson(moduleIndex, lessonIndex){
    const lesson = modules[moduleIndex].lessons[lessonIndex];
    const unlocked = isLessonUnlocked(moduleIndex, lessonIndex);
    const box = el('div',{class:'lesson-content'});
    box.appendChild(el('h3',{}, [lesson.title]));
    box.appendChild(el('div',{class:'meta'}, [modules[moduleIndex].title + " • " + modules[moduleIndex].desc]));
    box.appendChild(el('div',{class:'html', html: lesson.content}));

    // video placeholder (example)
    const videoWrap = el('div',{}, [el('p',{class:'stat'}, ['Vídeo / Material (adicione link na lição)'])]);
    box.appendChild(videoWrap);

    // notes textarea
    const noteArea = el('div',{class:'note-area'});
    noteArea.appendChild(el('label',{}, ['Notas rápidas:']));
    const ta = el('textarea',{placeholder:'Anotações da aula...'});
    ta.value = state.notes[lesson.id] || '';
    ta.onchange = ()=>{ state.notes[lesson.id] = ta.value; saveState(state); };
    noteArea.appendChild(ta);
    box.appendChild(noteArea);

    // actions
    const actions = el('div',{class:'lesson-actions'});
    const btnComplete = el('button',{class:'btn'}, [ state.completed[lesson.id] ? 'Concluído' : 'Marcar como concluído' ]);
    btnComplete.onclick = ()=>{
      state.completed[lesson.id] = true;
      saveState(state);
      // after completing, re-render module to unlock next lesson and update progress
      openModule(moduleIndex);
      // notify user
      alert('Aula marcada como concluída. Próxima aula liberada se existente.');
    };
    if(state.completed[lesson.id]) btnComplete.disabled = true;
    actions.appendChild(btnComplete);
    actions.appendChild(el('button',{class:'btn ghost'}, ['Voltar ao módulo']));
    box.appendChild(actions);

    return box;
  }

  function openLesson(moduleIndex, lessonIndex){
    const lessonArea = document.getElementById('lesson-area');
    if(!lessonArea){
      // find and open module to ensure area exists
      openModule(moduleIndex);
      setTimeout(()=> openLesson(moduleIndex, lessonIndex), 80);
      return;
    }
    // check unlocked
    if(!isLessonUnlocked(moduleIndex, lessonIndex)){
      alert('Esta aula está bloqueada. Conclua aulas anteriores para liberar.');
      return;
    }
    lessonArea.innerHTML = "";
    lessonArea.appendChild(renderLesson(moduleIndex, lessonIndex));
  }

  // initial render
  render();

  // expose some debug on window
  window.__EAD_state = state;
  window.__EAD_modules = modules;

})();