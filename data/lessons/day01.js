const day01Data = {
  day: 1,
  tag: "Day 01 Focus: Café Conversation & Fundamental Tones",
  title: "Day 01: カフェで自己紹介 ＆ 声調・文法基盤マスター",
  englishNote: "Chinese syntax is strictly S + V + O, matching English structure. '我是...' equals 'I am...'. Seamlessly bridge your English grammar intuition into Chinese from Day 1.",
  htmlContent: `
    <!-- Speed Controller -->
    <div class="bg-white border border-neutral-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
      <div class="flex items-center space-x-2 text-neutral-800">
        <i data-lucide="volume-2" class="w-5 h-5 shrink-0 text-rose-600"></i>
        <span class="text-sm font-semibold">発音スピード調整（Audio Speed Controller）:</span>
      </div>
      <div class="flex items-center space-x-2">
        <button onclick="setSpeed(0.75)" id="speed-075" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-900 bg-neutral-900 text-white font-medium transition cursor-pointer">0.75x (Slow)</button>
        <button onclick="setSpeed(1.0)" id="speed-100" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-900 font-medium transition cursor-pointer">1.0x (Normal)</button>
      </div>
    </div>

    <!-- Section 1 -->
    <section class="space-y-6">
      <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
        <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
        <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：文法構造・歴史と文化の背景</h3>
      </div>
      <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
        <div class="space-y-2 border-l-2 border-rose-500 pl-4">
          <h4 class="font-bold text-neutral-900 text-base">① 語順の魔法：英語（SVO）の直感がそのまま活きる</h4>
          <p class="text-neutral-600">中国語は英語と同じ [ S + V + O ] です。「我是日本人（Wǒ shì Rìběnrén）」はそのまま英語の「I am Japanese」と対応します。</p>
        </div>
        <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
          <h4 class="font-bold text-neutral-900 text-base">② 文化と会話ルール：「你呢？（あなたは？）」の親近感</h4>
          <p class="text-neutral-600">「你呢？（Nǐ ne?）」は英語の「How about you?」と同じで、素早く会話のボールを打ち返す重要なフレーズです。</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm hover-lift cursor-pointer">
          <div class="flex justify-between items-start mb-3">
            <span class="text-xs font-semibold px-2.5 py-1 bg-rose-50 text-rose-700 rounded-full">第一声 (1st Tone)</span>
            <span class="text-3xl font-black text-neutral-900">ā</span>
          </div>
          <h4 class="font-bold text-neutral-900 text-lg mb-1">高音で平らにキープ (High & Flat)</h4>
          <button onclick="speak('媽')" class="mt-4 w-full bg-neutral-900 hover:bg-rose-600 text-white font-medium py-2.5 px-4 rounded-lg text-xs flex items-center justify-center space-x-2 transition shadow-sm cursor-pointer">
            <i data-lucide="play-circle" class="w-4 h-4"></i><span>音声を聞く: <strong>mā</strong> (媽/お母さん)</span>
          </button>
        </div>
        <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm hover-lift cursor-pointer">
          <div class="flex justify-between items-start mb-3">
            <span class="text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-800 rounded-full">第四声 (4th Tone)</span>
            <span class="text-3xl font-black text-neutral-900">à</span>
          </div>
          <h4 class="font-bold text-neutral-900 text-lg mb-1">上から下に一気に急降下 (Falling)</h4>
          <button onclick="speak('罵')" class="mt-4 w-full bg-neutral-900 hover:bg-rose-600 text-white font-medium py-2.5 px-4 rounded-lg text-xs flex items-center justify-center space-x-2 transition shadow-sm cursor-pointer">
            <i data-lucide="play-circle" class="w-4 h-4"></i><span>音声を聞く: <strong>mà</strong> (罵/ののしる)</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="space-y-4">
      <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
        <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
        <h3 class="text-xl font-bold text-neutral-900">2. カフェでの実践会話フレーズ</h3>
      </div>
      <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
        <div onclick="speak('你好！我叫 Take。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
          <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
          <div>
            <span class="font-bold text-lg text-neutral-900 block">Nǐ hǎo! Wǒ jiào Take.</span>
            <p class="text-xl font-semibold text-rose-700 my-0.5">你好！我叫 Take。</p>
            <p class="text-xs text-neutral-500">こんにちは！Takeと申します。</p>
          </div>
        </div>
        <div onclick="speak('我是日本人。你呢？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
          <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
          <div>
            <span class="font-bold text-lg text-neutral-900 block">Wǒ shì Rìběnrén. Nǐ ne?</span>
            <p class="text-xl font-semibold text-rose-700 my-0.5">我是日本人。你呢？</p>
            <p class="text-xs text-neutral-500">私は日本人です。あなたは？</p>
          </div>
        </div>
      </div>
    </section>
  `
};
