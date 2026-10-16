let currentSpeed = 0.75;
let currentLessonData = null;

function setSpeed(speed) {
  currentSpeed = speed;
  const btn075 = document.getElementById('speed-075');
  const btn100 = document.getElementById('speed-100');

  if (speed === 0.75) {
    btn075.className = "px-3 py-1 text-xs rounded border border-black bg-black text-white font-medium transition cursor-pointer";
    btn100.className = "px-3 py-1 text-xs rounded border border-neutral-300 bg-white text-neutral-700 hover:border-black font-medium transition cursor-pointer";
  } else {
    btn075.className = "px-3 py-1 text-xs rounded border border-neutral-300 bg-white text-neutral-700 hover:border-black font-medium transition cursor-pointer";
    btn100.className = "px-3 py-1 text-xs rounded border border-black bg-black text-white font-medium transition cursor-pointer";
  }
}

function speak(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = currentSpeed;
    window.speechSynthesis.speak(utterance);
  } else {
    alert("お使いのブラウザは音声再生に対応していません。");
  }
}

async function loadLesson(dayNumber) {
  try {
    // GitHub Pagesのサブディレクトリ（/Chinese/）に対応するため絶対・相対パスを調整
    const basePath = window.location.pathname.includes('/Chinese/') ? '/Chinese' : '';
    const response = await fetch(`${basePath}/data/lessons/day0${dayNumber}.json`);
    if (!response.ok) throw new Error("Lesson data not found");
    
    currentLessonData = await response.json();
    renderLesson(currentLessonData);
  } catch (error) {
    console.error("Error loading lesson:", error);
    document.getElementById('lesson-title').innerText = "データの読み込みに失敗しました。";
  }
}

function renderLesson(data) {
  document.getElementById('lesson-day').innerText = `Day 0${data.day} / ${data.level}`;
  document.getElementById('lesson-title').innerText = data.title;
  document.getElementById('english-note').innerText = data.englishNote;

  // 1. Phonetics
  const phoneticsContainer = document.getElementById('phonetics-container');
  phoneticsContainer.innerHTML = data.phonetics.map(p => `
    <div class="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-black transition cursor-pointer group">
      <div class="flex justify-between items-start mb-3">
        <span class="text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-800 rounded-full font-serif">${p.tone}</span>
        <span class="text-3xl font-black text-black font-serif">${p.symbol}</span>
      </div>
      <h4 class="font-bold text-black text-lg mb-1 font-serif">${p.title}</h4>
      <p class="text-xs text-neutral-600 mb-5 font-serif">${p.desc}</p>
      <button onclick="speak('${p.sample}')" class="w-full bg-neutral-900 hover:bg-black text-white font-medium py-2.5 px-4 rounded-lg text-xs flex items-center justify-center space-x-2 transition shadow-sm cursor-pointer">
        <i data-lucide="play-circle" class="w-4 h-4"></i>
        <span>音声を聞く: <strong class="font-serif">${p.sample}</strong> (${p.meaning})</span>
      </button>
    </div>
  `).join('');

  // 2. Dialogues
  const dialoguesContainer = document.getElementById('dialogues-container');
  dialoguesContainer.innerHTML = data.dialogues.map((d, index) => `
    <div onclick="speak('${d.cn}')" class="p-5 ${index !== data.dialogues.length - 1 ? 'border-b border-neutral-100' : ''} hover:bg-neutral-50 transition cursor-pointer flex items-start space-x-4 group">
      <div class="mt-1 bg-neutral-100 group-hover:bg-black group-hover:text-white text-neutral-800 p-2.5 rounded-full shrink-0 transition">
        <i data-lucide="volume-2" class="w-4 h-4"></i>
      </div>
      <div class="flex-1">
        <div class="flex items-baseline space-x-2">
          <span class="font-bold text-lg text-neutral-900 font-serif">${d.pinyin}</span>
        </div>
        <p class="text-xl font-semibold text-black my-1 font-serif">${d.cn}</p>
        <p class="text-xs text-neutral-500 font-serif">${d.ja}</p>
      </div>
    </div>
  `).join('');

  // 3. Quizzes
  const quizzesContainer = document.getElementById('quizzes-container');
  quizzesContainer.innerHTML = data.quizzes.map((q, idx) => {
    if (q.type === 'choice') {
      return `
        <div class="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-xs font-bold text-black bg-neutral-100 px-3 py-1 rounded-full font-serif">Q${idx + 1}. 選択問題</span>
          </div>
          <p class="font-medium text-black font-serif">${q.question}</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3" id="q${idx}-options">
            ${q.options.map((opt, optIdx) => `
              <button onclick="checkChoice(${idx},${optIdx}, this)" class="option-btn border border-neutral-300 rounded-xl p-4 text-left hover:border-black hover:shadow transition cursor-pointer bg-white">
                <div class="font-bold text-black font-serif">${opt}</div>
              </button>
            `).join('')}
          </div>
          <div id="q${idx}-feedback" class="hidden text-sm p-4 rounded-xl font-serif"></div>
        </div>
      `;
    } else {
      return `
        <div class="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-xs font-bold text-black bg-neutral-100 px-3 py-1 rounded-full font-serif">Q${idx + 1}. 穴埋め問題</span>
          </div>
          <p class="font-medium text-black font-serif">${q.question}</p>
          <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-lg border border-neutral-200">
            <input type="text" id="q${idx}-input" placeholder="入力..." class="border border-neutral-400 rounded-lg px-3 py-2 text-base focus:outline-none focus:border-black w-40 font-serif bg-white">
            <span class="font-bold text-black font-serif">${q.suffix}</span>
          </div>
          <button onclick="checkInput(${idx})" class="bg-black hover:bg-neutral-800 text-white font-medium px-5 py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer">
            答え合わせをする
          </button>
          <div id="q${idx}-feedback" class="hidden text-sm p-4 rounded-xl font-serif"></div>
        </div>
      `;
    }
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function checkChoice(quizIdx, optionIdx, element) {
  const qData = currentLessonData.quizzes[quizIdx];
  const feedback = document.getElementById(`q${quizIdx}-feedback`);
  feedback.classList.remove('hidden', 'bg-neutral-100', 'text-black', 'bg-neutral-900', 'text-white');

  if (optionIdx === qData.answer) {
    feedback.classList.add('bg-black', 'text-white');
    feedback.innerHTML = `✓ 正解です！ ${qData.explanation}`;
  } else {
    feedback.classList.add('bg-neutral-100', 'text-black');
    feedback.innerHTML = `✕ 残念！もう一度考えてみましょう。`;
  }
}

function checkInput(quizIdx) {
  const qData = currentLessonData.quizzes[quizIdx];
  const inputVal = document.getElementById(`q${quizIdx}-input`).value.trim().toLowerCase();
  const feedback = document.getElementById(`q${quizIdx}-feedback`);
  feedback.classList.remove('hidden', 'bg-neutral-100', 'text-black', 'bg-black', 'text-white');

  if (qData.answers.includes(inputVal)) {
    feedback.classList.add('bg-black', 'text-white');
    feedback.innerHTML = `✓ 正解です！`;
  } else {
    feedback.classList.add('bg-neutral-100', 'text-black');
    feedback.innerHTML = qData.hint;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadLesson(1);
});
