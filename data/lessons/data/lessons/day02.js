const day02Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 02 Focus: Ordering at Cafés, Tone Sandhi & Quantifiers</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 02: カフェでの実践注文 ＆ 第三声変調ルール・数量詞
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                To order, use "我要..." (I'd like / I want...). Use "还是 (háishi)" for "A or B" choices. Notice how numbers change when counting items ("两" instead of "二").
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <main class="max-w-4xl mx-auto px-4 py-10 space-y-12">

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

        <!-- Section 1: Detailed Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：注文動詞・変調の魔法・数量「2」のルール</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 注文の型：「我要＋数量＋商品」</h4>
              <p class="text-neutral-600">
                カフェでの注文は「我要 (Wǒ yào / 〜をください・〜が欲しい)」を使います。「我要一杯拿铁（yì bēi nátiě）」で「ラテを1杯ください」となります。英語の "I want a cup of latte" と全く同じ並びです。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 発音の重要ルール：第三声＋第三声の変調（Tone Sandhi）</h4>
              <p class="text-neutral-600">
                低い音である「第三声」が2つ連続すると、<strong>前の第三声は「第二声（上がる音）」に自動変化</strong>します。「你好 (Nǐ hǎo)」も本来は「低い＋低い」ですが、実際には「Ní hǎo（上がる＋低い）」となめらかに発音されます。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 文化的注意点：数字の「2」は「二 (èr)」ではなく「两 (liǎng)」！</h4>
              <p class="text-neutral-600">
                物を数える「2つ」「2杯」の時は、数字の「二 (èr)」ではなく必ず<strong>「两 (liǎng)」</strong>を使います。「コーヒー2杯」は「两杯咖啡 (Liǎng bēi kāfēi)」となります。
              </p>
            </div>
          </div>

          <!-- Tone Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm hover-lift cursor-pointer">
              <div class="flex justify-between items-start mb-3">
                <span class="text-xs font-semibold px-2.5 py-1 bg-rose-50 text-rose-700 rounded-full border border-rose-100">第二声 (2nd Tone)</span>
                <span class="text-3xl font-black text-neutral-900">á</span>
              </div>
              <h4 class="font-bold text-neutral-900 text-lg mb-1">下から上へ駆け上がる (Rising)</h4>
              <p class="text-xs text-neutral-500 mb-5">「えっ！？」と聞き返すように音を上げます。</p>
              <button onclick="speak('麻')" class="w-full bg-neutral-900 hover:bg-rose-600 text-white font-medium py-2.5 px-4 rounded-lg text-xs flex items-center justify-center space-x-2 transition shadow-sm cursor-pointer">
                <i data-lucide="play-circle" class="w-4 h-4"></i><span>音声を聞く: <strong>má</strong> (麻/しびれる)</span>
              </button>
            </div>

            <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm hover-lift cursor-pointer">
              <div class="flex justify-between items-start mb-3">
                <span class="text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-800 rounded-full border border-neutral-200">第三声 (3rd Tone)</span>
                <span class="text-3xl font-black text-neutral-900">ǎ</span>
              </div>
              <h4 class="font-bold text-neutral-900 text-lg mb-1">低い位置で沈み込む (Low/Dipping)</h4>
              <p class="text-xs text-neutral-500 mb-5">低い声で「あぁ...」と納得した時の低い音。</p>
              <button onclick="speak('馬')" class="w-full bg-neutral-900 hover:bg-rose-600 text-white font-medium py-2.5 px-4 rounded-lg text-xs flex items-center justify-center space-x-2 transition shadow-sm cursor-pointer">
                <i data-lucide="play-circle" class="w-4 h-4"></i><span>音声を聞く: <strong>mǎ</strong> (馬/うま)</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. カフェでの実践注文やり取り（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('你好！你想喝什么？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ hǎo! Nǐ xiǎng hē shénme?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你好！你想喝什么？</p>
                <p class="text-xs text-neutral-500">（店員）いらっしゃいませ、何をお飲みになりますか？</p>
              </div>
            </div>

            <div onclick="speak('你好，我要一杯拿铁。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ hǎo, wǒ yào yì bēi nátiě.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你好，我要一杯拿铁。</p>
                <p class="text-xs text-neutral-500">（あなた）こんにちは、カフェラテを1杯ください。</p>
              </div>
            </div>

            <div onclick="speak('热的还是冰的？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Rè de háishi bīng de?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">热的还是冰的？</p>
                <p class="text-xs text-neutral-500">（店員）ホットにしますか、それともアイスですか？</p>
              </div>
            </div>

            <div onclick="speak('冰的，谢谢！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Bīng de, xièxie!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">冰的，谢谢！</p>
                <p class="text-xs text-neutral-500">（あなた）アイスでお願いします、ありがとう！</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes (10 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 02 実践クイズ（全10問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">10 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：注文動詞</span>
            <p class="font-medium text-neutral-900">注文時に「〜をください / 〜が欲しい」を表す動詞はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '正解！ 要 (yào) は注文時の必須動詞です。', '不正解！ 是は「〜です」の意味です。', '我要咖啡')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 要 (yào)</button>
              <button onclick="checkQuiz(1, 1, 0, '正解！ 要 (yào) は注文時の必須動詞です。', '不正解！ 是は「〜です」の意味です。', '我要咖啡')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 是 (shì)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 選択問題：選択疑問</span>
            <p class="font-medium text-neutral-900">「ホットにしますか、それとも（or）アイスにしますか？」の「それとも」は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 还是 (háishi) で「AかそれともBか？」となります。', '不正解！ 和は「〜と（and）」の意味です。', '热的还是冰的')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 还是 (háishi)</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 还是 (háishi) で「AかそれともBか？」となります。', '不正解！ 和は「〜と（and）」の意味です。', '热的还是冰的')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 和 (hé)</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. 選択問題：数字ルール</span>
            <p class="font-medium text-neutral-900">「コーヒーを2杯ください」と言う時の正しい表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(3, 0, 0, '正解！ 物を数える時は「二」ではなく「两」を使います。', '不正解！ 数量には「二」ではなく「两」を使います。', '我要两杯咖啡')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 我要两杯咖啡 (Wǒ yào liǎng bēi kāfēi)</button>
              <button onclick="checkQuiz(3, 1, 0, '正解！ 物を数える時は「二」ではなく「两」を使います。', '不正解！ 数量には「二」ではなく「两」を使います。', '我要两杯咖啡')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 我要二杯咖啡 (Wǒ yào èr bēi kāfēi)</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 穴押し問題：カフェラテ</span>
            <p class="font-medium text-neutral-900">「カフェラテ（Latte）」を意味する中国語は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒ yào yì bēi</span>
              <span onclick="revealAnswer(4, 'nátiě (拿铁)', '拿铁')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>.</span>
            </div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 穴押し問題：アイス</span>
            <p class="font-medium text-neutral-900">「アイス（冷たいやつ）」を意味する表現は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, 'bīng de (冰的)', '冰的')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>, xièxie!</span>
            </div>
          </div>

          <!-- Q6 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. 穴押し問題：ホット</span>
            <p class="font-medium text-neutral-900">「ホット（温かいやつ）」を意味する表現は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(6, 'rè de (热的)', '热的')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>, xièxie!</span>
            </div>
          </div>

          <!-- Q7 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q7. タイピングテスト：ありがとう</span>
            <p class="font-medium text-neutral-900">「ありがとう（xièxie）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q7-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(7, ['谢谢', '謝謝'], '谢谢')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q7-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q8 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q8. タイピングテスト：コーヒー</span>
            <p class="font-medium text-neutral-900">「コーヒー（kāfēi）」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q8-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(8, ['咖啡'], '咖啡')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q8-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q9 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q9. 変調クイズ</span>
            <p class="font-medium text-neutral-900">「你好 (Nǐ hǎo)」のように第三声が2つ連続する時、トーンはどう変化する？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(9, 0, 0, '正解！ 前の第三声が第二声（上がる音）に変化します。', '不正解！ 変化するのは前の第三声です。', '你好')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 前の第三声が「第二声（上がる音）」に変わる</button>
              <button onclick="checkQuiz(9, 1, 0, '正解！ 前の第三声が第二声（上がる音）に変化します。', '不正解！ 変化するのは前の第三声です。', '你好')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 後ろの第三声が「第一声（高い音）」に変わる</button>
            </div>
            <div id="q9-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q10 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q10. 総合復習：接客質問</span>
            <p class="font-medium text-neutral-900">店員さんに「何が飲みたいですか？」と聞かれた時の中国語フレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(10, 'Nǐ xiǎng hē shénme? (你想喝什么？)', '你想喝什么')" id="q10-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

        </section>
      </main>
    `;
  }
};
