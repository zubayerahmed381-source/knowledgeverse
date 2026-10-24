(() => {
    const words = [
      {word:'Curiosity',bn:'কৌতূহল',example:'Curiosity helps us discover new things.'},
      {word:'Discover',bn:'আবিষ্কার করা / খুঁজে বের করা',example:'Scientists discover new facts through research.'},
      {word:'Evidence',bn:'প্রমাণ',example:'Good decisions should be based on evidence.'},
      {word:'Explore',bn:'অনুসন্ধান করা / ঘুরে দেখা',example:'We explore the universe to understand it better.'},
      {word:'Reliable',bn:'নির্ভরযোগ্য',example:'Always check information from reliable sources.'},
      {word:'Improve',bn:'উন্নতি করা',example:'Practice every day to improve your English.'},
      {word:'Knowledge',bn:'জ্ঞান',example:'Knowledge grows when we keep asking questions.'},
      {word:'Achieve',bn:'অর্জন করা',example:'You can achieve your goals with steady effort.'},
      {word:'Opportunity',bn:'সুযোগ',example:'Studying abroad can create new opportunities.'},
      {word:'Confident',bn:'আত্মবিশ্বাসী',example:'Practice speaking to become more confident.'},
      {word:'Communicate',bn:'যোগাযোগ করা',example:'We communicate with people every day.'},
      {word:'Develop',bn:'উন্নয়ন করা / গড়ে তোলা',example:'I want to develop my English skills.'},
      {word:'Challenge',bn:'চ্যালেঞ্জ / কঠিন কাজ',example:'Every challenge is a chance to learn.'},
      {word:'Curious',bn:'কৌতূহলী',example:'Curious students ask useful questions.'},
      {word:'Essential',bn:'অত্যাবশ্যক',example:'Good communication is essential at university.'},
      {word:'Benefit',bn:'উপকার / সুবিধা',example:'Reading has many benefits.'},
      {word:'Consider',bn:'বিবেচনা করা',example:'Please consider all the options.'},
      {word:'Explain',bn:'ব্যাখ্যা করা',example:'Could you explain this idea simply?'},
      {word:'Suggest',bn:'পরামর্শ দেওয়া',example:'Can you suggest a good book?'},
      {word:'Require',bn:'প্রয়োজন হওয়া',example:'This course requires regular practice.'},
      {word:'Prepare',bn:'প্রস্তুতি নেওয়া',example:'I prepare for my exams every evening.'},
      {word:'Achievable',bn:'অর্জন করা সম্ভব এমন',example:'Set small, achievable goals.'},
      {word:'Accurate',bn:'সঠিক / নির্ভুল',example:'Make sure your answer is accurate.'},
      {word:'Analyze',bn:'বিশ্লেষণ করা',example:'Students analyze data in this project.'},
      {word:'Approach',bn:'পদ্ধতি / এগিয়ে যাওয়া',example:'We need a better approach to this problem.'},
      {word:'Benefit',bn:'সুবিধা / উপকার',example:'Daily reading can benefit your vocabulary.'},
      {word:'Collaborate',bn:'একসঙ্গে কাজ করা',example:'We collaborate on group assignments.'},
      {word:'Compare',bn:'তুলনা করা',example:'Compare the two answers carefully.'},
      {word:'Concentrate',bn:'মনোযোগ দেওয়া',example:'I concentrate better in a quiet room.'},
      {word:'Consistent',bn:'নিয়মিত / ধারাবাহিক',example:'Consistent practice brings progress.'},
      {word:'Create',bn:'তৈরি করা',example:'We create websites using code.'},
      {word:'Decision',bn:'সিদ্ধান্ত',example:'Think carefully before making a decision.'},
      {word:'Describe',bn:'বর্ণনা করা',example:'Describe your project in simple English.'},
      {word:'Determine',bn:'নির্ধারণ করা',example:'The test will determine your level.'},
      {word:'Effective',bn:'কার্যকর',example:'Short daily lessons are effective.'},
      {word:'Encourage',bn:'উৎসাহ দেওয়া',example:'Teachers encourage students to ask questions.'},
      {word:'Environment',bn:'পরিবেশ',example:'A calm environment helps me study.'},
      {word:'Establish',bn:'প্রতিষ্ঠা করা',example:'We establish good habits through repetition.'},
      {word:'Evaluate',bn:'মূল্যায়ন করা',example:'Evaluate your progress each week.'},
      {word:'Experience',bn:'অভিজ্ঞতা',example:'Work experience can improve your skills.'},
      {word:'Focus',bn:'মনোযোগ / মনোযোগ দেওয়া',example:'Focus on one task at a time.'},
      {word:'Goal',bn:'লক্ষ্য',example:'My goal is to speak English fluently.'},
      {word:'Identify',bn:'শনাক্ত করা / চিহ্নিত করা',example:'Identify the main idea of the paragraph.'},
      {word:'Independent',bn:'স্বাধীন / স্বনির্ভর',example:'University students learn to work independently.'},
      {word:'Influence',bn:'প্রভাব / প্রভাবিত করা',example:'Friends can influence our choices.'},
      {word:'Maintain',bn:'বজায় রাখা',example:'Maintain a regular study routine.'},
      {word:'Method',bn:'পদ্ধতি',example:'This method makes learning easier.'},
      {word:'Necessary',bn:'প্রয়োজনীয়',example:'A passport is necessary for international travel.'},
      {word:'Participate',bn:'অংশগ্রহণ করা',example:'I participate in class discussions.'},
      {word:'Patient',bn:'ধৈর্যশীল',example:'Be patient while learning a new skill.'},
      {word:'Practical',bn:'ব্যবহারিক',example:'Practical examples make lessons clearer.'},
      {word:'Progress',bn:'অগ্রগতি',example:'I can see progress in my speaking.'},
      {word:'Purpose',bn:'উদ্দেশ্য',example:'The purpose of this task is to practise writing.'},
      {word:'Research',bn:'গবেষণা',example:'Researchers collect evidence before drawing conclusions.'},
      {word:'Resource',bn:'উপকরণ / তথ্যের উৎস',example:'Use trusted resources for your assignment.'},
      {word:'Responsible',bn:'দায়িত্বশীল',example:'Be responsible for your own learning.'},
      {word:'Solution',bn:'সমাধান',example:'Let us find a solution together.'},
      {word:'Specific',bn:'নির্দিষ্ট',example:'Please give one specific example.'},
      {word:'Strategy',bn:'কৌশল',example:'A good strategy saves study time.'},
      {word:'Succeed',bn:'সফল হওয়া',example:'You can succeed through effort and practice.'},
      {word:'Support',bn:'সহায়তা / সমর্থন',example:'My friends support me during exams.'},
      {word:'Understand',bn:'বোঝা',example:'I understand the topic much better now.'},
      {word:'Useful',bn:'উপকারী',example:'This phrase is useful in daily conversation.'},
      {word:'Value',bn:'মূল্য / গুরুত্ব দেওয়া',example:'I value the time I spend learning.'},
      {word:'Achieve',bn:'অর্জন করা',example:'Hard work helps us achieve our goals.'},
      {word:'Adapt',bn:'মানিয়ে নেওয়া',example:'It takes time to adapt to a new country.'},
      {word:'Affordable',bn:'সাশ্রয়ী',example:'Students look for affordable accommodation.'},
      {word:'Application',bn:'আবেদন / অ্যাপ্লিকেশন',example:'I submitted my university application.'},
      {word:'Assignment',bn:'অ্যাসাইনমেন্ট / নির্ধারিত কাজ',example:'I finished my assignment before the deadline.'},
      {word:'Deadline',bn:'শেষ সময়সীমা',example:'The deadline for this project is Friday.'},
      {word:'Fluent',bn:'সাবলীল',example:'I practise daily to become fluent in English.'},
      {word:'Improve',bn:'উন্নতি করা',example:'Listening daily can improve your pronunciation.'},
      {word:'Motivate',bn:'অনুপ্রাণিত করা',example:'Small wins motivate me to keep going.'},
      {word:'Polite',bn:'ভদ্র',example:'It is polite to say thank you.'},
      {word:'Recommend',bn:'সুপারিশ করা',example:'Could you recommend a useful website?'},
      {word:'Schedule',bn:'সময়সূচি',example:'I follow a simple study schedule.'},
      {word:'Submit',bn:'জমা দেওয়া',example:'Please submit your report on time.'},
      {word:'Tuition',bn:'শিক্ষাদান / টিউশন',example:'I give tuition to help students learn.'},
      {word:'Volunteer',bn:'স্বেচ্ছাসেবক / স্বেচ্ছায় কাজ করা',example:'I volunteer to help at university events.'},
      {word:'Willing',bn:'ইচ্ছুক',example:'I am willing to learn from my mistakes.'},
      {word:'Deadline',bn:'জমা দেওয়ার শেষ সময়',example:'Do not wait until the deadline to start.'},
      {word:'Reliable',bn:'বিশ্বস্ত / নির্ভরযোগ্য',example:'Use reliable sources in academic writing.'},
      {word:'Opportunity',bn:'সুযোগ',example:'This internship is a great opportunity.'},
      {word:'Achievement',bn:'সাফল্য / অর্জন',example:'Graduation was an important achievement.'},
      {word:'Appreciate',bn:'কৃতজ্ঞ থাকা / মূল্যায়ন করা',example:'I appreciate your help.'},
      {word:'Arrange',bn:'ব্যবস্থা করা / সাজানো',example:'We arranged a meeting with our teacher.'},
      {word:'Attend',bn:'উপস্থিত থাকা',example:'I attend English class every week.'},
      {word:'Avoid',bn:'এড়িয়ে চলা',example:'Avoid translating every sentence word for word.'},
      {word:'Brief',bn:'সংক্ষিপ্ত',example:'Please give a brief introduction.'},
      {word:'Complicated',bn:'জটিল',example:'The topic looks complicated but is easy to learn.'},
      {word:'Discuss',bn:'আলোচনা করা',example:'We discuss ideas in the classroom.'},
      {word:'Effort',bn:'চেষ্টা / পরিশ্রম',example:'Your effort will help you improve.'},
      {word:'Familiar',bn:'পরিচিত',example:'I am familiar with basic computer terms.'},
      {word:'Formal',bn:'আনুষ্ঠানিক',example:'Use formal language in an application.'},
      {word:'Gradually',bn:'ধীরে ধীরে',example:'My confidence is gradually increasing.'},
      {word:'Mention',bn:'উল্লেখ করা',example:'Mention your skills in the interview.'},
      {word:'Perform',bn:'সম্পাদন করা / পারফর্ম করা',example:'I will perform better with more practice.'},
      {word:'Precise',bn:'সুনির্দিষ্ট / নির্ভুল',example:'Give a precise answer to the question.'},
      {word:'Respond',bn:'উত্তর দেওয়া / সাড়া দেওয়া',example:'Please respond to the email politely.'},
      {word:'Review',bn:'পুনরালোচনা করা',example:'Review new words before going to sleep.'},
      {word:'Strength',bn:'শক্তি / দক্ষতা',example:'Communication is one of her strengths.'},
      {word:'Transfer',bn:'স্থানান্তর করা',example:'You can transfer your notes to a new device.'},
      {word:'Typical',bn:'সাধারণত দেখা যায় এমন',example:'This is a typical question in an interview.'}
    ];
    const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
    const byId = id => document.getElementById(id);
    const titleFor = id => { const article = window.KV_DATA.articles.find(item => item.id === id); return article ? (document.documentElement.lang === 'bn' ? article.title.bn : article.title.en) : id; };
    let wordIndex = Math.floor(Date.now() / 86400000) % words.length;
    const vocabSearch = document.getElementById('vocabSearch');
    const vocabList = document.getElementById('vocabLibraryList');
    const vocabCount = document.getElementById('vocabCount');
    function renderVocabularyList(query='') {
      if (!vocabList) return;
      const q = query.trim().toLowerCase();
      const filtered = words.filter(item => item.word.toLowerCase().includes(q) || item.bn.toLowerCase().includes(q) || item.example.toLowerCase().includes(q));
      vocabCount.textContent = filtered.length + ' / ' + words.length + ' words';
      vocabList.innerHTML = filtered.length ? filtered.map(item => `<article class="article-card"><div class="card-body"><div class="card-meta"><span class="card-category">ENGLISH WORD</span><span>📘</span></div><h3>${item.word}</h3><p style="min-height:0;color:var(--accent2);font-size:13px">বাংলা অর্থ: ${item.bn}</p><p style="min-height:0">Example: ${item.example}</p></div></article>`).join('') : '<div class="empty-state"><strong>No words found</strong>Try another English word or Bangla meaning.</div>';
    }
    if (vocabSearch) vocabSearch.addEventListener('input', () => renderVocabularyList(vocabSearch.value));
    document.getElementById('clearVocabSearch')?.addEventListener('click', () => { vocabSearch.value=''; renderVocabularyList(); vocabSearch.focus(); });
    renderVocabularyList();
    function renderWord() { const item = words[wordIndex]; byId('vocabWord').textContent = item.word; byId('vocabMeaning').textContent = item.bn; byId('vocabExample').textContent = 'Example: ' + item.example; }
    function renderDashboard() {
      const history = read('kv-history', []), bookmarks = read('kv-bookmarks', []), best = read('kv-best-quiz', 0);
      byId('dashReadCount').textContent = new Set(history).size;
      byId('dashSavedCount').textContent = bookmarks.length;
      byId('dashBestScore').textContent = best ? best + ' / 5' : '—';
      const recent = byId('recentList'); recent.innerHTML = '';
      if (!history.length) { const empty = document.createElement('p'); empty.className = 'recent-empty'; empty.textContent = document.documentElement.lang === 'bn' ? 'একটি আর্টিকেল পড়লে সেটি এখানে দেখা যাবে।' : 'Read an article and it will appear here.'; recent.append(empty); return; }
      history.slice(0,3).forEach(id => { const article = window.KV_DATA.articles.find(item => item.id === id); if (!article) return; const button = document.createElement('button'); button.className = 'recent-item'; button.dataset.recentArticle = id; const icon = document.createElement('span'); icon.textContent = article.icon; const label = document.createElement('span'); label.textContent = titleFor(id); button.append(icon,label); recent.append(button); });
    }
    document.addEventListener('click', event => {
      if (event.target.closest('#nextVocab')) { wordIndex = (wordIndex + 1) % words.length; renderWord(); }
      if (event.target.closest('#dashboardHistory')) { byId('recentList').scrollIntoView({behavior:'smooth',block:'center'}); }
      if (event.target.closest('#dashboardBookmarks')) byId('showSaved').click();
      const recent = event.target.closest('[data-recent-article]'); if (recent) { const target = document.querySelector('[data-open-article="' + recent.dataset.recentArticle + '"]'); if (target) target.click(); else { const article = window.KV_DATA.articles.find(item => item.id === recent.dataset.recentArticle); if (article) { const search = byId('searchInput'); search.value = article.title.en; byId('searchForm').dispatchEvent(new Event('submit',{cancelable:true,bubbles:true})); setTimeout(() => { const button = document.querySelector('[data-open-article="' + article.id + '"]'); if (button) button.click(); }, 100); } } }
    });
    window.addEventListener('kv-dashboard-refresh', renderDashboard);
    window.addEventListener('storage', renderDashboard);
    const originalOpen = window.open; void originalOpen;
    const observer = new MutationObserver(() => { if (document.documentElement.lang) renderDashboard(); }); observer.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
    renderWord(); renderDashboard();
    const dashboardTranslations = {en:{dashEyebrow:'YOUR LEARNING SPACE',dashTitle:'Your curiosity, in progress.',dashCopy:'A small dashboard for your learning journey on this device.',dashHistory:'View reading history →',dashProgress:'YOUR PROGRESS',dashReadLabel:'unique articles read',dashBestQuiz:'Best quiz score:',dashSaved:'YOUR SAVED LIBRARY',dashSavedLabel:'articles saved for later',dashOpenSaved:'Open bookmarks →',dashRecent:'PICK UP WHERE YOU LEFT OFF',dashNoRecent:'Read an article and it will appear here.',dashVocab:'ENGLISH WORD OF THE DAY',dashNextWord:'Learn another word ↻'},bn:{dashEyebrow:'আপনার শেখার জগৎ',dashTitle:'আপনার শেখার অগ্রগতি',dashCopy:'এই ডিভাইসে আপনার শেখার যাত্রার ছোট্ট ড্যাশবোর্ড।',dashHistory:'পড়ার ইতিহাস দেখুন →',dashProgress:'আপনার অগ্রগতি',dashReadLabel:'টি আলাদা আর্টিকেল পড়েছেন',dashBestQuiz:'সেরা কুইজ স্কোর:',dashSaved:'আপনার সংরক্ষিত লাইব্রেরি',dashSavedLabel:'টি আর্টিকেল পরে পড়ার জন্য রাখা',dashOpenSaved:'বুকমার্ক খুলুন →',dashRecent:'যেখান থেকে পড়া থেমেছিল',dashNoRecent:'আর্টিকেল পড়লে সেটি এখানে দেখা যাবে।',dashVocab:'আজকের ইংরেজি শব্দ',dashNextWord:'আরেকটি শব্দ শিখুন ↻'}};
    function translateDashboard() { const lang = document.documentElement.lang === 'bn' ? 'bn' : 'en'; Object.entries(dashboardTranslations[lang]).forEach(([id,value]) => { const node = document.querySelector('[data-i18n="' + id + '"]'); if (node) node.textContent = value; }); const noRecent = byId('recentList').querySelector('.recent-empty'); if (noRecent) noRecent.textContent = dashboardTranslations[lang].dashNoRecent; }
    byId('languageToggle').addEventListener('click', () => setTimeout(translateDashboard,0)); translateDashboard();
    const quizDialog = byId('quizDialog');
    if (quizDialog) quizDialog.addEventListener('close', () => { const scoreNode = document.querySelector('#quizContent .detail-title'); const scoreText = byId('quizContent')?.innerText || ''; const match = scoreText.match(/(\d+)\s*\/\s*5/); if (match) { const old = read('kv-best-quiz',0); localStorage.setItem('kv-best-quiz',JSON.stringify(Math.max(old,Number(match[1])))); renderDashboard(); } });
    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function(key,value) { originalSetItem.call(this,key,value); if (key === 'kv-history' || key === 'kv-bookmarks' || key === 'kv-best-quiz') renderDashboard(); };
  })();
