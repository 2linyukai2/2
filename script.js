// 將 Skills 資料畫到畫面上 (更新為深色科技卡片)
    const sContainer = document.getElementById('skills-container');
    for (const [cat, items] of Object.entries(skillsData)) {
        sContainer.innerHTML += `
            <div class="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 class="text-xl font-semibold text-slate-200 mb-4 border-b border-slate-700 pb-2">${cat}</h3>
                <div class="flex flex-wrap gap-2">${items.map(s => `<span class="px-3 py-1 bg-slate-900 text-cyan-400 rounded-md text-sm border border-slate-700 shadow-inner">${s}</span>`).join('')}</div>
            </div>`;
    }

    // 將 Projects 資料畫到畫面上 (更新為發光卡片與漸層標籤)
    document.getElementById('projects-container').innerHTML = projectsData.map(p => `
        <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-500/50 transition-all flex flex-col h-full">
            <h3 class="text-xl font-bold text-white mb-2">${p.name}</h3>
            <p class="text-slate-400 mb-6 flex-grow">${p.desc}</p>
            <div class="flex flex-wrap gap-2 mb-6">${p.tech.map(t => `<span class="px-2 py-1 bg-cyan-950/50 text-cyan-400 border border-cyan-800/50 rounded text-xs font-medium">${t}</span>`).join('')}</div>
            <div class="pt-4 border-t border-slate-700"><a href="${p.link}" class="text-cyan-400 hover:text-cyan-300 hover:underline text-sm font-medium">Learn More →</a></div>
        </div>`).join('');

    // 將 Courses 資料畫到畫面上
    document.getElementById('courses-container').innerHTML = coursesData.map(c => `
        <div class="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700 flex flex-col md:flex-row gap-4 hover:bg-slate-800 transition-colors">
            <div class="md:w-1/4"><span class="px-3 py-1 bg-gradient-to-r from-slate-700 to-slate-800 text-cyan-400 border border-slate-600 text-xs font-bold rounded shadow-sm">${c.sem}</span></div>
            <div class="md:w-3/4"><h3 class="text-lg font-bold text-slate-200 mb-1">${c.name}</h3><p class="text-slate-400 text-sm">${c.desc}</p></div>
        </div>`).join('');
