// =================== CORE ACADEMY — Shared App JS ===================

// --- i18n ---
const I18N = {
  en: {
    appName:"CORE Academy", tagline:"Premium EdTech Platform",
    dashboard:"Dashboard", lessons:"Lessons", schedule:"Schedule", chat:"Chat",
    students:"Students", teachers:"Teachers", subscription:"Subscription",
    profile:"Profile", admin:"Admin Panel", settings:"Settings", logout:"Logout",
    learning:"LEARNING", community:"COMMUNITY", account:"ACCOUNT",
    search:"Search lessons, students, or messages...", upgrade:"Upgrade",
    welcome:"Welcome back", greet:"Here's what's happening at your academy today.",
    totalStudents:"Total Students", activeLessons:"Active Lessons",
    monthlyRevenue:"Monthly Revenue", completionRate:"Completion Rate",
    upcomingLessons:"Upcoming Lessons", todaySchedule:"Today's Schedule",
    recentActivity:"Recent Activity", topStudents:"Top Students",
    viewAll:"View all", joinLive:"Join Live", startLesson:"Start Lesson",
    free:"Free", pro:"Pro", premium:"Premium",
    signIn:"Sign In", signUp:"Sign Up", email:"Email", password:"Password",
    forgotPwd:"Forgot password?", noAccount:"Don't have an account?",
    haveAccount:"Already have an account?", createAccount:"Create Account",
    fullName:"Full Name", role:"Role", student:"Student", teacher:"Teacher",
    downloadApp:"Download App", iosApp:"iOS App", androidApp:"Android App",
    desktopApp:"Desktop App", availableOn:"Available on", scanQR:"Scan to download",
    online:"online", typing:"typing...", typeMessage:"Type a message...",
    channels:"Channels", contacts:"Contacts", groups:"Groups"
  },
  ru: {
    appName:"CORE Academy", tagline:"Премиум EdTech Платформа",
    dashboard:"Панель", lessons:"Уроки", schedule:"Расписание", chat:"Чат",
    students:"Студенты", teachers:"Преподаватели", subscription:"Подписка",
    profile:"Профиль", admin:"Админ-панель", settings:"Настройки", logout:"Выйти",
    learning:"ОБУЧЕНИЕ", community:"СООБЩЕСТВО", account:"АККАУНТ",
    search:"Поиск уроков, студентов или сообщений...", upgrade:"Улучшить",
    welcome:"С возвращением", greet:"Вот что происходит в вашей академии сегодня.",
    totalStudents:"Всего студентов", activeLessons:"Активных уроков",
    monthlyRevenue:"Доход за месяц", completionRate:"Завершенность",
    upcomingLessons:"Предстоящие уроки", todaySchedule:"Расписание на сегодня",
    recentActivity:"Недавняя активность", topStudents:"Лучшие студенты",
    viewAll:"Смотреть все", joinLive:"Подключиться", startLesson:"Начать урок",
    free:"Бесплатно", pro:"Про", premium:"Премиум",
    signIn:"Войти", signUp:"Регистрация", email:"Эл. почта", password:"Пароль",
    forgotPwd:"Забыли пароль?", noAccount:"Нет аккаунта?",
    haveAccount:"Уже есть аккаунт?", createAccount:"Создать аккаунт",
    fullName:"Полное имя", role:"Роль", student:"Студент", teacher:"Учитель",
    downloadApp:"Скачать приложение", iosApp:"iOS приложение", androidApp:"Android приложение",
    desktopApp:"Десктоп приложение", availableOn:"Доступно на", scanQR:"Сканируйте для загрузки",
    online:"в сети", typing:"печатает...", typeMessage:"Введите сообщение...",
    channels:"Каналы", contacts:"Контакты", groups:"Группы"
  },
  uz: {
    appName:"CORE Academy", tagline:"Premium EdTech Platforma",
    dashboard:"Boshqaruv paneli", lessons:"Darslar", schedule:"Jadval", chat:"Suhbat",
    students:"Talabalar", teachers:"O'qituvchilar", subscription:"Obuna",
    profile:"Profil", admin:"Admin panel", settings:"Sozlamalar", logout:"Chiqish",
    learning:"O'QITISH", community:"JAMOA", account:"HISOB",
    search:"Darslar, talabalar yoki xabarlarni qidirish...", upgrade:"Yangilash",
    welcome:"Xush kelibsiz", greet:"Bugun akademiyangizda nimalar bo'lyapti.",
    totalStudents:"Jami talabalar", activeLessons:"Faol darslar",
    monthlyRevenue:"Oylik daromad", completionRate:"Tugatish darajasi",
    upcomingLessons:"Yaqinlashayotgan darslar", todaySchedule:"Bugungi jadval",
    recentActivity:"So'nggi faollik", topStudents:"Eng yaxshi talabalar",
    viewAll:"Hammasini ko'rish", joinLive:"Jonli qo'shilish", startLesson:"Darsni boshlash",
    free:"Bepul", pro:"Pro", premium:"Premium",
    signIn:"Kirish", signUp:"Ro'yxatdan o'tish", email:"Email", password:"Parol",
    forgotPwd:"Parolni unutdingizmi?", noAccount:"Hisobingiz yo'qmi?",
    haveAccount:"Hisobingiz bormi?", createAccount:"Hisob yaratish",
    fullName:"To'liq ism", role:"Rol", student:"Talaba", teacher:"O'qituvchi",
    downloadApp:"Ilovani yuklab oling", iosApp:"iOS ilovasi", androidApp:"Android ilovasi",
    desktopApp:"Desktop ilovasi", availableOn:"Mavjud", scanQR:"Yuklab olish uchun skan qiling",
    online:"onlayn", typing:"yozmoqda...", typeMessage:"Xabar yozing...",
    channels:"Kanallar", contacts:"Kontaktlar", groups:"Guruhlar"
  },
  ko: {
    appName:"CORE Academy", tagline:"프리미엄 에듀테크 플랫폼",
    dashboard:"대시보드", lessons:"수업", schedule:"일정", chat:"채팅",
    students:"학생", teachers:"교사", subscription:"구독",
    profile:"프로필", admin:"관리자", settings:"설정", logout:"로그아웃",
    learning:"학습", community:"커뮤니티", account:"계정",
    search:"수업, 학생, 메시지 검색...", upgrade:"업그레이드",
    welcome:"다시 오신 것을 환영합니다", greet:"오늘 아카데미의 활동입니다.",
    totalStudents:"전체 학생", activeLessons:"활성 수업",
    monthlyRevenue:"월 수익", completionRate:"완료율",
    upcomingLessons:"예정된 수업", todaySchedule:"오늘 일정",
    recentActivity:"최근 활동", topStudents:"우수 학생",
    viewAll:"모두 보기", joinLive:"라이브 참가", startLesson:"수업 시작",
    free:"무료", pro:"프로", premium:"프리미엄",
    signIn:"로그인", signUp:"가입", email:"이메일", password:"비밀번호",
    forgotPwd:"비밀번호를 잊으셨나요?", noAccount:"계정이 없으신가요?",
    haveAccount:"계정이 있으신가요?", createAccount:"계정 만들기",
    fullName:"성명", role:"역할", student:"학생", teacher:"교사",
    downloadApp:"앱 다운로드", iosApp:"iOS 앱", androidApp:"Android 앱",
    desktopApp:"데스크톱 앱", availableOn:"사용 가능", scanQR:"QR 스캔하여 다운로드",
    online:"온라인", typing:"입력 중...", typeMessage:"메시지 입력...",
    channels:"채널", contacts:"연락처", groups:"그룹"
  }
};

function getLang(){ return localStorage.getItem('lang') || 'en'; }
function setLang(l){ localStorage.setItem('lang', l); applyI18n(); }
function t(k){ const l=getLang(); return (I18N[l]&&I18N[l][k])||I18N.en[k]||k; }
function applyI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    el.placeholder = t(el.dataset.i18nPh);
  });
  document.querySelectorAll('.lang-pick button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang===getLang());
  });
}

// --- SVG icons ---
const ICONS = {
  dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM6 21h13"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><path d="M21 12a8 8 0 1 1-3.5-6.6L21 4l-1 4.6A8 8 0 0 1 21 12z"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-7 7-7s7 3 7 7M17 11a4 4 0 1 0 0-8M22 21c0-3-2-5-5-5"/></svg>',
  teacher:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><path d="M22 10L12 4 2 10l10 6 10-6z"/><path d="M6 12v5a6 6 0 0 0 12 0v-5"/></svg>',
  crown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><path d="M3 18h18M3 6l4 4 5-6 5 6 4-4v12H3z"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 4.6 15 1.7 1.7 0 0 0 3.1 14H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8L4.2 7a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9c.4.2.7.6.9 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-sm"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><path d="M18 16v-5a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2zM10 21a2 2 0 0 0 4 0"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="#7ce5b1" stroke-width="2.5" class="ic-sm"><path d="m5 12 5 5L20 7"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="#ff9a9a" stroke-width="2.5" class="ic-sm"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor" class="ic-sm"><path d="M8 5v14l11-7z"/></svg>',
  video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4V8z"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  attach:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><path d="m21.4 11.1-9.5 9.5a6 6 0 1 1-8.4-8.4l9.5-9.5a4 4 0 1 1 5.6 5.6l-9.5 9.5a2 2 0 0 1-2.8-2.8l8.8-8.8"/></svg>',
  smile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>',
  send:'<svg viewBox="0 0 24 24" fill="currentColor" class="ic-md"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>',
  mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/></svg>',
  apple:'<svg viewBox="0 0 24 24" fill="currentColor" class="ic-md"><path d="M16.4 12.5c0-3 2.4-4.4 2.5-4.5-1.4-2-3.5-2.3-4.3-2.3-1.8-.2-3.5 1.1-4.4 1.1-.9 0-2.3-1-3.8-1-2 0-3.8 1.2-4.8 3-2 3.5-.5 8.7 1.5 11.5 1 1.4 2.1 2.9 3.6 2.9 1.5-.1 2-1 3.8-1 1.7 0 2.2 1 3.8.9 1.6 0 2.6-1.4 3.5-2.8 1.1-1.6 1.6-3.2 1.6-3.3-.1 0-3-1.2-3-4.5zM13.5 3.7c.8-1 1.4-2.4 1.2-3.7-1.2 0-2.6.8-3.4 1.8-.8.9-1.5 2.3-1.3 3.6 1.3.1 2.7-.7 3.5-1.7z"/></svg>',
  google:'<svg viewBox="0 0 24 24" fill="currentColor" class="ic-md"><path d="M3 20.5V3.5c0-.4.2-.8.6-1l13.1 9.5L3.6 21.5c-.4-.2-.6-.6-.6-1zM17.7 12.5l3.5 2c.4.2.6.6.6 1s-.2.8-.6 1l-3.5 2-3.4-3 3.4-3zM4.6 2.4 16 10l-2.6 2.3-9-7.8c.1-.1.2-.1.4-.1.3 0 .6.1.8.2zM16 14l-11.4 7.7c-.2.1-.5.2-.8.2-.1 0-.3 0-.4-.1l9-7.8L16 14z"/></svg>',
  desktop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  dollar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ic-md"><path d="M3 3v18h18M7 14l4-4 4 4 5-5"/></svg>',
};

// --- Sidebar HTML ---
function renderSidebar(active){
  const items = [
    {key:'learning', label:'learning', type:'label'},
    {key:'dashboard', icon:ICONS.dashboard, href:'dashboard.html'},
    {key:'lessons', icon:ICONS.book, href:'lessons.html'},
    {key:'schedule', icon:ICONS.calendar, href:'schedule.html'},
    {key:'community', label:'community', type:'label'},
    {key:'chat', icon:ICONS.chat, href:'chat.html', badge:'12'},
    {key:'students', icon:ICONS.users, href:'students.html'},
    {key:'teachers', icon:ICONS.teacher, href:'teachers.html'},
    {key:'account', label:'account', type:'label'},
    {key:'subscription', icon:ICONS.crown, href:'subscription.html'},
    {key:'profile', icon:ICONS.user, href:'profile.html'},
    {key:'admin', icon:ICONS.shield, href:'admin.html'},
    {key:'settings', icon:ICONS.settings, href:'settings.html'},
  ];
  let html = `
    <a class="brand" href="dashboard.html">
      <img src="../assets/logo.png" alt="logo"/>
      <div>
        <div class="name">CORE <span>Academy</span></div>
        <div class="sub" data-i18n="tagline">Premium EdTech</div>
      </div>
    </a>
    <div class="nav">`;
  items.forEach(it=>{
    if(it.type==='label'){
      html += `<div class="label" data-i18n="${it.label}">${it.label}</div>`;
    } else {
      html += `<a href="${it.href}" class="${active===it.key?'active':''}">
        <span class="ico">${it.icon}</span>
        <span data-i18n="${it.key}">${it.key}</span>
        ${it.badge?`<span class="badge">${it.badge}</span>`:''}
      </a>`;
    }
  });
  html += `<a href="login.html" style="margin-top:20px;border-top:1px solid var(--border);padding-top:18px">
    <span class="ico">${ICONS.logout}</span>
    <span data-i18n="logout">Logout</span>
  </a></div>`;
  return html;
}

// --- Topbar HTML ---
function renderTopbar(){
  return `
    <div class="search">${ICONS.search}<input type="text" data-i18n-ph="search" placeholder="Search..."/></div>
    <div class="lang-pick">
      <button data-lang="en" onclick="setLang('en')">EN</button>
      <button data-lang="ru" onclick="setLang('ru')">RU</button>
      <button data-lang="uz" onclick="setLang('uz')">UZ</button>
      <button data-lang="ko" onclick="setLang('ko')">KO</button>
    </div>
    <button class="icon-btn" title="Notifications">${ICONS.bell}</button>
    <button class="icon-btn" onclick="openDownload()" title="Download App">${ICONS.download}</button>
    <a href="profile.html" class="avatar">SA</a>
  `;
}

// --- Floating Download Button + Modal ---
function renderFAB(){
  return `
  <button class="fab" onclick="openDownload()">
    ${ICONS.download}
    <span class="dot"></span>
    <span data-i18n="downloadApp">Download App</span>
  </button>
  <div class="modal-bg" id="dl-modal" onclick="if(event.target.id==='dl-modal')closeDownload()">
    <div class="modal">
      <h3 data-i18n="downloadApp">Download App</h3>
      <p data-i18n="availableOn">Available on iOS, Android & Desktop</p>
      <a href="#" class="dl-btn">
        <span class="lg">${ICONS.apple}</span>
        <div><div class="ttl" data-i18n="iosApp">iOS App</div><div class="sub">App Store · iOS 14+</div></div>
      </a>
      <a href="#" class="dl-btn">
        <span class="lg" style="color:#7CE5B1">${ICONS.google}</span>
        <div><div class="ttl" data-i18n="androidApp">Android App</div><div class="sub">Google Play · APK</div></div>
      </a>
      <a href="#" class="dl-btn">
        <span class="lg" style="color:#F2C063">${ICONS.desktop}</span>
        <div><div class="ttl" data-i18n="desktopApp">Desktop App</div><div class="sub">Windows · macOS · Linux</div></div>
      </a>
      <div style="display:flex;justify-content:center;margin-top:14px">
        <button class="btn btn-ghost btn-sm" onclick="closeDownload()">Close</button>
      </div>
    </div>
  </div>`;
}
function openDownload(){ document.getElementById('dl-modal').classList.add('open'); }
function closeDownload(){ document.getElementById('dl-modal').classList.remove('open'); }

// --- Mount shell ---
function mountShell(active){
  const app = document.querySelector('#app');
  if(!app) return;
  const inner = app.innerHTML;
  app.innerHTML = `
    <aside class="sidebar" id="sidebar"></aside>
    <main class="main">
      <div class="topbar" id="topbar"></div>
      <div class="content" id="content">${inner}</div>
    </main>
  `;
  document.getElementById('sidebar').innerHTML = renderSidebar(active);
  document.getElementById('topbar').innerHTML = renderTopbar();
  document.body.insertAdjacentHTML('beforeend', renderFAB());
  applyI18n();
}
