const day01Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 01 Focus: Greetings, Self-Introduction & Basic Tones</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 01: 初対面の自己紹介 ＆ 基本声調・SVO文法基盤
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-rose-300 font-semibold">For English Speakers:</strong>
              <span class="ml-1 text-neutral-300">
                Chinese word order strictly follows S + V + O structure, identical to English! "我是..." equals "I am...". Master the foundational tones and launch your speaking journey from Day 1.
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

        <!-- Section 1: Explanations -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：語順構造・声調・コミュニケーション文化</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-rose-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 語順の魔法：英語（SVO）の感覚をそのままスライド</h4>
              <p class="text-neutral-600">
                日本語は「私 は 日本人 です（SOV）」の語順ですが、中国語は英語と同じ <strong>[ S（主語） + V（動詞） + O（目的語） ]</strong> です。「我是日本人（Wǒ shì Rìběnrén）」は英語の「I am Japanese」と1対1で対応します。動詞「是 (shì)」には英語のような主語（I/you/he）による変化（am/is/are）がないため、英語よりもシンプルです。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② 文化と会話ルール：「你呢？（あなたは？）」の心地よい距離感</h4>
              <p class="text-neutral-600">
                初対面で自分の名前や国籍を伝えた後、相手に「你呢？（Nǐ ne? / あなたは？）」と返すのは会話の基本マナーです。中国語圏ではお互いにすばやく質問を打ち返すことで、初対面でもすぐに打ち解けるコミュニケーションを好みます。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-amber-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">③ 発音の基本：第一声（高く平ら）と第四声（一気に落とす）</h4>
              <p class="text-neutral-600">
                第一声（mā）はドレミファソの「ソ」の高さをまっすぐ平らにキープします。第四声（mà）はカラスの鳴き声や英語の「No!」のように、上から下へ一気に声を落として発音します。
              </p>
            </div>
          </div>

          <!-- Tones -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm hover-lift cursor-pointer">
              <div class="flex justify-between items-start mb-3">
                <span class="text-xs font-semibold px-2.5 py-1 bg-rose-50 text-rose-700 rounded-full border border-rose-100">第一声 (1st Tone)</span>
                <span class="text-3xl font-black text-neutral-900">ā</span>
              </div>
              <h4 class="font-bold text-neutral-900 text-lg mb-1">高音で平らにキープ (High & Flat)</h4>
              <p class="text-xs text-neutral-500 mb-5">音楽の「ソ」の高さを一定に保ちます。</p>
              <button onclick="speak('媽')" class="w-full bg-neutral-900 hover:bg-rose-600 text-white font-medium py-2.5 px-4 rounded-lg text-xs flex items-center justify-center space-x-2 transition shadow-sm cursor-pointer">
                <i data-lucide="play-circle" class="w-4 h-4"></i><span>音声を聞く: <strong>mā</strong> (媽/お母さん)</span>
              </button>
            </div>

            <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm hover-lift cursor-pointer">
              <div class="flex justify-between items-start mb-3">
                <span class="text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-800 rounded-full border border-neutral-200">第四声 (4th Tone)</span>
                <span class="text-3xl font-black text-neutral-900">à</span>
              </div>
              <h4 class="font-bold text-neutral-900 text-lg mb-1">上から下に一気に急降下 (Falling)</h4>
              <p class="text-xs text-neutral-500 mb-5">英語の「No!」のように短く強く。</p>
              <button onclick="speak('罵')" class="w-full bg-neutral-900 hover:bg-rose-600 text-white font-medium py-2.5 px-4 rounded-lg text-xs flex items-center justify-center space-x-2 transition shadow-sm cursor-pointer">
                <i data-lucide="play-circle" class="w-4 h-4"></i><span>音声を聞く: <strong>mà</strong> (罵/ののしる)</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-rose-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践会話：交流会での自己紹介（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('你好！我叫李明。')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Nǐ hǎo! Wǒ jiào Lǐ Míng.</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">你好！我叫李明。</p>
                <p class="text-xs text-neutral-500">（相手）こんにちは！私は李明（リ・ミン）と申します。</p>
              </div>
            </div>

            <div onclick="speak('很高兴认识你！')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Hěn gāoxìng rènshi nǐ!</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">很高兴认识你！</p>
                <p class="text-xs text-neutral-500">（あなた）お会いできてとても嬉しいです！(Nice to meet you!)</p>
              </div>
            </div>

            <div onclick="speak('我是日本人。你呢？')" class="p-5 hover:bg-rose-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">Wǒ shì Rìběnrén. Nǐ ne?</span>
                <p class="text-xl font-semibold text-rose-700 my-0.5">我是日本人。你呢？</p>
                <p class="text-xs text-neutral-500">（あなた）私は日本人です。あなたは？(I am Japanese. How about you?)</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes (10 Questions) -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-rose-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 01 実践クイズ（全10問）</h3>
            </div>
            <span class="text-xs text-rose-600 font-semibold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">10 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：語順</span>
            <p class="font-medium text-neutral-900">「私は日本人です」の正しい中国語の語順（SVO構造）を選びなさい。</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 1, '正解！ 英語と同じSVO構造（我 + 是 + 日本人）です。', '不正解！ 日本語の語順ではなく英語と同じSVO構造にします。', '我是日本人')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 我 日本人 是 (Wǒ Rìběnrén shì)</button>
              <button onclick="checkQuiz(1, 1, 1, '正解！ 英語と同じSVO構造（我 + 是 + 日本人）です。', '不正解！ 日本語の語順ではなく英語と同じSVO構造にします。', '我是日本人')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 我 是 日本人 (Wǒ shì Rìběnrén)</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 選択問題：声調</span>
            <p class="font-medium text-neutral-900">「是（shì）」の発音の特徴として正しいものはどれですか？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(2, 0, 0, '正解！ 第四声は上から下に力強く落とします。', '不正解！ 第一声ではなく第四声です。', '是')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 第四声：上から下に音を急降下させる</button>
              <button onclick="checkQuiz(2, 1, 0, '正解！ 第四声は上から下に力強く落とします。', '不正解！ 第一声ではなく第四声です。', '是')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 第一声：高い音を平らに伸ばす</button>
            </div>
            <div id="q2-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. 選択問題：挨拶の返答</span>
            <p class="font-medium text-neutral-900">「很高兴认识你！（はじめまして！）」と言われた自然な返答は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(3, 0, 0, '正解！ 我也很高兴...（私も〜）と返します。', '不正解！ 不客気は「どういたしまして」です。', '我也很高兴认识你')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 我也很高兴认识你！ (我也... = 私も)</button>
              <button onclick="checkQuiz(3, 1, 0, '正解！ 我也很高兴...（私も〜）と返します。', '不正解！ 不客気は「どういたしまして」です。', '我也很高兴认识你')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 不客气！ (不客気 = どういたしまして)</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 赤字穴押し -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 穴押し問題：「〜は？」の疑問助詞</span>
            <p class="font-medium text-neutral-900">「私は日本人です。あなたは？」の「〜は？」にあたる言葉は？（タップで赤字表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒ shì Rìběnrén. Nǐ</span>
              <span onclick="revealAnswer(4, 'ne (呢)', '你呢')" id="q4-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>?</span>
            </div>
          </div>

          <!-- Q5 赤字穴押し -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 穴押し問題：be動詞相当</span>
            <p class="font-medium text-neutral-900">「私は日本人です」の「〜です (am)」にあたる単語は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒ</span>
              <span onclick="revealAnswer(5, 'shì (是)', '是')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>Rìběnrén.</span>
            </div>
          </div>

          <!-- Q6 赤字穴押し -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q6. 穴押し問題：名前を名乗る動詞</span>
            <p class="font-medium text-neutral-900">「私は〜と申します」の「〜と呼ぶ/申す」にあたる単語は？</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>Wǒ</span>
              <span onclick="revealAnswer(6, 'jiào (叫)', '叫')" id="q6-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
              <span>Lǐ Míng.</span>
            </div>
          </div>

          <!-- Q7 Input -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q7. タイピングテスト：第一声</span>
            <p class="font-medium text-neutral-900">「お母さん」を意味する「mā」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q7-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(7, ['媽', '妈'], '媽')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q7-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q8 Input -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q8. タイピングテスト：第四声</span>
            <p class="font-medium text-neutral-900">「ののしる・叱る」を意味する「mà」の漢字を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q8-input" placeholder="漢字を入力..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-600 w-40 bg-white">
              <button onclick="checkInput(8, ['罵', '骂'], '罵')" class="bg-neutral-900 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q8-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q9 Choice -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q9. 文化クイズ：カフェ都市</span>
            <p class="font-medium text-neutral-900">世界で最も店舗数が多いカフェ激戦都市はどこでしょう？</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button onclick="checkQuiz(9, 0, 1, '正解！ 上海は8,000軒以上のカフェがある世界一のカフェ都市です。', '不正解！ 正解は上海です。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. ニューヨーク</button>
              <button onclick="checkQuiz(9, 1, 1, '正解！ 上海は8,000軒以上のカフェがある世界一のカフェ都市です。', '不正解！ 正解は上海です。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 上海 (Shanghai)</button>
              <button onclick="checkQuiz(9, 2, 1, '正解！ 上海は8,000軒以上のカフェがある世界一のカフェ都市です。', '不正解！ 正解は上海です。')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">C. パリ</button>
            </div>
            <div id="q9-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q10 Reveal -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q10. 総合復習：挨拶</span>
            <p class="font-medium text-neutral-900">「こんにちは！」を意味する基本フレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(10, 'Nǐ hǎo! (你好！)', '你好')" id="q10-slot" class="cursor-pointer border-b-2 border-dashed border-rose-500 px-3 py-0.5 text-rose-600 font-bold hover:bg-rose-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>

        </section>
      </main>
    `;
  }
};
