const day02Data = {
  day: 2,
  tag: "Day 02 Focus: Ordering Drinks & Tone Sandhi Rules",
  title: "Day 02: カフェで注文する ＆ 声調変調・疑問文マスター",
  englishNote: "Expressing desires uses '我要...' (I want / I'd like...). Adding '吗 (ma)' at the end creates a yes/no question, equivalent to adding 'Is/Do...?' at the start in English!",
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
        <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：注文の動詞・変調ルール・文化背景</h3>
      </div>
      <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
        <div class="space-y-2 border-l-2 border-rose-500 pl-4">
          <h4 class="font-bold text-neutral-900 text-base">① 注文の基本：「我要...（〜をください）」</h4>
          <p class="text-neutral-600">「我要＋数量＋品名」で注文します。「我要一杯拿铁（ラテを1杯ください）」のように英語の "I want a cup of latte" と同じ語順です。</p>
        </div>
        <div class="space-y-2 border-l-2 border-amber-600 pl-4">
          <h4 class="font-bold text-neutral-900 text-base">② 数字コラム：「2」は「二 (èr)」ではなく「两 (liǎng)」を使う！</h4>
          <p class="text-neutral-600">「2つ」「2杯」と物を数える時は「二」ではなく「两 (liǎng)」を使います（例：两杯咖啡 = コーヒー2杯）。</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm hover-lift cursor-pointer">
          <div class="flex justify-between items-start mb-3">
            <span class="text-xs font-semibold px-2.5 py-1 bg-rose-50 text-rose-700 rounded-full">第二声 (2nd Tone)</span>
            <span class="text-3xl font-black text-neutral-900">á</span>
          </div>
          <h4 class="font-bold text-neutral-900 text-lg mb-1">下から上へ一気に駆け上がる (Rising)</h4>
          <button onclick="speak('麻')" class="mt-4 w-full bg-neutral-900 hover:bg-rose-600 text-white font-medium py-2.5 px-4 rounded-lg text-xs flex items-center justify-center space-x-2 transition shadow-sm cursor-pointer">
            <i data-lucide="play-circle" class="w-4 h-4"></i><span>音声を聞く: <strong>má</strong> (麻/しびれる)</span>
          </button>
        </div>
        <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm hover-lift cursor-pointer">
          <div class="flex justify-between items-start mb-3">
            <span class="text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-800 rounded-full">第三声 (3rd Tone)</span>
            <span class="text-3xl font-black text-neutral-900">ǎ</span>
          </div>
          <h4 class="font-bold text-neutral-900 text-lg mb-1">低い位置でぐっと沈み込む (Low)</h4>
          <button onclick="speak('馬')" class="mt-4 w-full bg-neutral-900 hover:bg-rose-600 text-white font-medium py-2.5 px-4 rounded-lg text-xs flex items-center justify-center space-x-2 transition shadow-sm cursor-pointer">
            <i data-lucide="play-circle" class="w-4 h-4"></i><span>音声を聞く: <strong>mǎ</strong> (馬/うま)</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="space-y-4">
      <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
        <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
        <h3 class="text-xl font-bold text-neutral-900">2. カフェでの注文会話フレーズ</h3>
      </div>
      <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
        <div onclick="speak('我要一杯拿铁。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
          <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
          <div>
            <span class="font-bold text-lg text-neutral-900 block">Wǒ yào yì bēi nátiě.</span>
            <p class="text-xl font-semibold text-rose-700 my-0.5">我要一杯拿铁。</p>
            <p class="text-xs text-neutral-500">カフェラテを1杯ください。</p>
          </div>
        </div>
        <div onclick="speak('热的还是冰的？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
          <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
          <div>
            <span class="font-bold text-lg text-neutral-900 block">Rè de háishi bīng de?</span>
            <p class="text-xl font-semibold text-rose-700 my-0.5">热的还是冰的？</p>
            <p class="text-xs text-neutral-500">ホットにしますか、それともアイスにしますか？</p>
          </div>
        </div>
      </div>
    </section>
  `
};
