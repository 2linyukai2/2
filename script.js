// 你的個人資料
const skillsData = {
    "Programming": ["Python", "JavaScript", "R"],
    "AI & ML": ["Scikit-learn", "空間預測模型", "機器學習"],
    "Web Dev": ["HTML / CSS", "Tailwind CSS", "WebGIS"],
    "Tools": ["QGIS", "AutoCAD", "Git", "VBA"]
};

const projectsData = [
    { name: "雙和醫院 ESG 永續分析", desc: "綠建築指標評估與碳足跡盤查規劃。", tech: ["ESG", "資料分析"], link: "#" },
    { name: "QGIS 測量誤差自動化工具", desc: "使用 Python 簡化繁瑣的誤差平差計算。", tech: ["Python", "QGIS"], link: "#" },
    { name: "台灣鄉鎮生活機能比較", desc: "量化視覺化屏東與台東村落機能差異。", tech: ["GIS", "Open Data"], link: "#" }
];

const coursesData = [
    { name: "高精度測量學與誤差理論", sem: "2025 Fall", desc: "深入探討測量平差與高精度觀測數據處理。" },
    { name: "地理資訊系統 (GIS)", sem: "2025 Spring", desc: "運用 QGIS 進行空間數據處理與分析。" },
    { name: "土地法規與經濟學", sem: "2025 Fall", desc: "探討土地徵收、地價稅賦及核心經濟模型。" }
];

// 當網頁載入完成後執行的邏輯
document.addEventListener('DOMContentLoaded', () => {
    
    // 處理手機版選單
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    menu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => menu.classList.add('hidden')));

    // 處理防爬蟲 Email
    document.getElementById('email-link').addEventListener('click', (e) => {
        e.preventDefault();
        // 請將下方的 your.email 換成你的真實帳號
        window.location.href = `mailto:${'your.email'}@${'gmail.com'}`;
    });

    // 將 Skills 資料畫到畫面上
    const sContainer = document.getElementById('skills-container');
    for (const [cat, items] of Object.entries(skillsData)) {
        sContainer.innerHTML += `
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 class="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">${cat}</h3>
                <div class="flex flex-wrap gap-2">${items.map(s => `<span class="px-3 py-1 bg-slate-50 text-slate-600 rounded-md text-sm border border-slate-200">${s}</span>`).join('')}</div>
            </div>`;
    }

    // 將 Projects 資料畫到畫面上
    document.getElementById('projects-container').innerHTML = projectsData.map(p => `
        <div class="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-all flex flex-col h-full">
            <h3 class="text-xl font-bold text-slate-900 mb-2">${p.name}</h3>
            <p class="text-slate-600 mb-6 flex-grow">${p.desc}</p>
            <div class="flex flex-wrap gap-2 mb-6">${p.tech.map(t => `<span class="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium">${t}</span>`).join('')}</div>
            <div class="pt-4 border-t border-slate-200"><a href="${p.link}" class="text-blue-600 hover:underline text-sm font-medium">Learn More →</a></div>
        </div>`).join('');

    // 將 Courses 資料畫到畫面上
    document.getElementById('courses-container').innerHTML = coursesData.map(c => `
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4">
            <div class="md:w-1/4"><span class="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded">${c.sem}</span></div>
            <div class="md:w-3/4"><h3 class="text-lg font-bold text-slate-900 mb-1">${c.name}</h3><p class="text-slate-600 text-sm">${c.desc}</p></div>
        </div>`).join('');
});