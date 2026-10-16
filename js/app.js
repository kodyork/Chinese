let currentSpeed = 0.75;
let currentLessonData = null;

// 音声再生スピードの設定
function setSpeed(speed) {
  currentSpeed = speed;
  const btn075 = document.getElementById('speed-075');
  const btn100 = document.getElementById('speed-100');

  if (speed === 0.75) {
    btn075.className = "px-3 py-1 text-xs rounded-lg bg-rose-600 text-white font-medium transition";
    btn100.className = "px-3 py-1 text-xs rounded-lg bg-rose-100 text-rose-700 hover:bg-rose-200 font-medium transition";
  } else {
    btn075.className = "px-3 py-1 text-xs rounded-lg bg-rose-100 text-rose-700 hover:bg-rose-200 font-medium transition";
    btn100.className = "px-3 py-1 text-xs rounded-lg bg-rose-600 text-white font-medium transition";
  }
}

// Web Speech API（中国語音声読み上げ）
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

// JSONデータの読み込み＆画面構築
async function loadLesson(dayNumber) {
  try {
    const response = await fetch(`./data/lessons/day0${dayNumber}.json`);
    if (!response.ok) throw new Error("Lesson data not found");
    
    currentLessonData = await response.json();
    renderLesson(currentLessonData);
  } catch (error) {
    console.error("Error loading lesson:", error);
  }
}

// 画面への描画処理
function renderLesson(data) {
  document.getElementById('lesson-day').innerText = `Day 0${data.day} / ${data.level}`;
  document.getElementById('lesson-title').innerText = data.title;
  document.getElementById('english-note').innerText = data.englishNote;

  // 1. 発音カードの生成
  const phoneticsContainer = document.getElementById('phonetics-container');
  phoneticsContainer.innerHTML = data.phonetics.map(p => `
    <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-rose-300 transition">
      <div class="flex justify-between items-start mb-2">
        <span class="text-xs font-bold px-2 py-0.5 bg-rose-100 text-rose-700 rounded">${p.tone}</span>
        <span class="text-2xl font-black text-rose-500">${p.symbol}</span>
      </div>
      <h4 class="font-bold text-slate-800 text-lg mb-1">${p.title}</h4>
      <p class="text-xs text-slate-500 mb-4">${p.desc}</p>
      <button onclick="speak('${p.sample}')" class="w-full bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-700 font-medium py-2 px-3 rounded-lg text-sm flex items-center justify-center space-x-2 transition border border-slate-200">
        <i data-lucide="play-circle" class="w-4 h-4"></i>
        <span>音声を聞く: <strong>${p.sample}</strong> (${p.meaning})</span>
      </button>
    </div>
  `).join('');

  // 2. 会話ダイアログの生成
  const dialoguesContainer = document.getElementById('dialogues-container');
  dialoguesContainer.innerHTML = data.dialogues.map((d, index) => `
    <div class="p-4 ${index !== data.dialogues.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-50/50 transition flex items-start space-x-3">
      <button onclick="speak('${d.cn}')" class="mt-1 bg-rose-50 hover:bg-rose-100 text-rose-600 p-2 rounded-full shrink-0 transition">
        <i data-lucide="volume-2" class="w-4 h-4"></i>
      </button>
      <div class="flex-1">
        <div class="flex items-baseline space-x-2">
          <span class="font-bold text-lg text-slate-900">${d.pinyin}</span>
        </div>
        <p class="text-xl font-semibold text-rose-600 my-0.5">${d.cn}</p>
        <p class="text-xs text-slate-500">${d.ja}</p>
      </div>
    </div>
  `).join('');

  // 3. クイズの生成
  const quizzesContainer = document.getElementById('quizzes-container');
  quizzesContainer.innerHTML = data.quizzes.map((q, idx) => {
    if (q.type === 'choice') {
      return `
        <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">Q${idx + 1}. 選択問題</span>
          </div>
          <p class="font-medium text-slate-800">${q.question}</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3" id="q${idx}-options">
            ${q.options.map((opt, optIdx) => `
              <button onclick="checkChoice(${idx},${optIdx}, this)" class="option-btn border-2 border-slate-200 rounded-lg p-3 text-left hover:border-rose-400 transition">
                <div class="font-bold text-slate-700">${opt}</div>
              </button>
            `).join('')}
          </div>
          <div id="q${idx}-feedback" class="hidden text-sm p-3 rounded-lg"></div>
        </div>
      `;
    } else {
      return `
        <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">Q${idx + 1}. 穴埋め問題</span>
          </div>
          <p class="font-medium text-slate-800">${q.question}</p>
          <div class="bg-slate-50 p-4 rounded-lg flex items-center space-x-2 text-lg">
            <input type="text" id="q${idx}-input" placeholder="入力..." class="border-2 border-slate-300 rounded-md px-3 py-1.5 text-base focus:outline-none focus:border-rose-500 w-36">
            <span class="font-bold text-slate-700">${q.suffix}</span>
          </div>
          <button onclick="checkInput(${idx})" class="bg-rose-500 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-sm transition">
            答え合わせをする
          </button>
          <div id="q${idx}-feedback" class="hidden text-sm p-3 rounded-lg"></div>
        </div>
      `;
    }
  }).join('');

  // アイコンの再初期化
  if (window.lucide) lucide.createIcons();
}

// クイズ判定：選択式
function checkChoice(quizIdx, optionIdx, element) {
  const qData = currentLessonData.quizzes[quizIdx];
  const feedback = document.getElementById(`q${quizIdx}-feedback`);
  feedback.classList.remove('hidden', 'bg-green-50', 'text-green-800', 'bg-rose-50', 'text-rose-800');

  if (optionIdx === qData.answer) {
    feedback.classList.add('bg-green-50', 'text-green-800');
    feedback.innerHTML = `正解です！ ${qData.explanation}`;
  } else {
    feedback.classList.add('bg-rose-50', 'text-rose-800');
    feedback.innerHTML = `残念！もう一度考えてみましょう。`;
  }
}

// クイズ判定：入力式
function checkInput(quizIdx) {
  const qData = currentLessonData.quizzes[quizIdx];
  const inputVal = document.getElementById(`q${quizIdx}-input`).value.trim().toLowerCase();
  const feedback = document.getElementById(`q${quizIdx}-feedback`);
  feedback.classList.remove('hidden', 'bg-green-50', 'text-green-800', 'bg-rose-50', 'text-rose-800');

  if (qData.answers.includes(inputVal)) {
    feedback.classList.add('bg-green-50', 'text-green-800');
    feedback.innerHTML = `正解です！`;
  } else {
    feedback.classList.add('bg-rose-50', 'text-rose-800');
    feedback.innerHTML = qData.hint;
  }
}

// ページ初期化
window.addEventListener('DOMContentLoaded', () => {
  loadLesson(1);
});
