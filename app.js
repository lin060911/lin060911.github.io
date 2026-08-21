const DATA_VERSION = '3';

const ENGINE_FALLBACK = {
    baidu: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4h14v3l-5 2v3l5 2v3H5v-3l5-2V9L5 7z"/></svg>`,
    bing: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h4v4H8z" fill="#fff"/><path d="M12 8h4v4h-4z" fill="#fff" opacity=".7"/><path d="M8 12h4v4H8z" fill="#fff" opacity=".5"/><path d="M12 12h4v4h-4z" fill="#fff" opacity=".3"/></svg>`,
    sogou: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"/><path d="M9 9h2v6H9zM13 9h2v6h-2z" fill="#fff"/></svg>`,
    '360': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"/><path d="M10 8h4v2h-4zM9 11h6v2H9zM10 14h4v2h-4z" fill="#fff"/></svg>`,
};

const SEARCH_ENGINES = [
    { name: '百度', key: 'baidu', url: 'https://www.baidu.com/s?wd={query}', icon: 'https://www.baidu.com/favicon.ico', color: '#2932e1', fallbackKey: 'baidu' },
    { name: '必应', key: 'bing', url: 'https://www.bing.com/search?q={query}', icon: 'https://www.bing.com/favicon.ico', color: '#00897B', fallbackKey: 'bing' },
    { name: '搜狗', key: 'sogou', url: 'https://www.sogou.com/web?query={query}', icon: 'https://www.sogou.com/favicon.ico', color: '#ff6a00', fallbackKey: 'sogou' },
    { name: '360', key: '360', url: 'https://www.so.com/s?q={query}', icon: 'https://www.so.com/favicon.ico', color: '#12bc64', fallbackKey: '360' },
];

const PRESET_ICONS = [
    { icon: 'fas fa-globe', label: '地球' },
    { icon: 'fas fa-star', label: '星星' },
    { icon: 'fas fa-heart', label: '爱心' },
    { icon: 'fas fa-bookmark', label: '书签' },
    { icon: 'fas fa-flag', label: '旗帜' },
    { icon: 'fas fa-film', label: '电影' },
    { icon: 'fas fa-music', label: '音乐' },
    { icon: 'fas fa-play', label: '播放' },
    { icon: 'fas fa-video', label: '视频' },
    { icon: 'fas fa-camera', label: '相机' },
    { icon: 'fas fa-headphones', label: '耳机' },
    { icon: 'fas fa-tv', label: '电视' },
    { icon: 'fas fa-microphone', label: '麦克风' },
    { icon: 'fas fa-file-word', label: '文档' },
    { icon: 'fas fa-file-excel', label: '表格' },
    { icon: 'fas fa-file-powerpoint', label: '演示' },
    { icon: 'fas fa-cloud', label: '云盘' },
    { icon: 'fas fa-database', label: '数据库' },
    { icon: 'fas fa-calculator', label: '计算器' },
    { icon: 'fas fa-calendar', label: '日历' },
    { icon: 'fas fa-clock', label: '时钟' },
    { icon: 'fas fa-envelope', label: '邮件' },
    { icon: 'fas fa-print', label: '打印' },
    { icon: 'fas fa-scanner', label: '扫描' },
    { icon: 'fas fa-comments', label: '聊天' },
    { icon: 'fas fa-users', label: '群组' },
    { icon: 'fas fa-user', label: '用户' },
    { icon: 'fas fa-share-alt', label: '分享' },
    { icon: 'fas fa-bullhorn', label: '公告' },
    { icon: 'fas fa-shopping-cart', label: '购物车' },
    { icon: 'fas fa-store', label: '商店' },
    { icon: 'fas fa-tag', label: '标签' },
    { icon: 'fas fa-credit-card', label: '支付' },
    { icon: 'fas fa-book', label: '书籍' },
    { icon: 'fas fa-graduation-cap', label: '毕业帽' },
    { icon: 'fas fa-pencil-alt', label: '铅笔' },
    { icon: 'fas fa-school', label: '学校' },
    { icon: 'fas fa-code', label: '代码' },
    { icon: 'fas fa-terminal', label: '终端' },
    { icon: 'fas fa-bug', label: '调试' },
    { icon: 'fas fa-laptop-code', label: '编程' },
    { icon: 'fas fa-server', label: '服务器' },
    { icon: 'fas fa-github', label: 'GitHub' },
    { icon: 'fas fa-gamepad', label: '手柄' },
    { icon: 'fas fa-dice', label: '骰子' },
    { icon: 'fas fa-puzzle-piece', label: '拼图' },
    { icon: 'fas fa-trophy', label: '奖杯' },
    { icon: 'fas fa-palette', label: '调色板' },
    { icon: 'fas fa-pen-ruler', label: '设计' },
    { icon: 'fas fa-image', label: '图片' },
    { icon: 'fas fa-home', label: '首页' },
    { icon: 'fas fa-cog', label: '设置' },
    { icon: 'fas fa-bell', label: '通知' },
    { icon: 'fas fa-lock', label: '安全' },
    { icon: 'fas fa-key', label: '密钥' },
    { icon: 'fas fa-map', label: '地图' },
    { icon: 'fas fa-plane', label: '出行' },
    { icon: 'fas fa-utensils', label: '美食' },
    { icon: 'fas fa-dumbbell', label: '健身' },
    { icon: 'fas fa-medkit', label: '医疗' },
    { icon: 'fas fa-car', label: '汽车' },
    { icon: 'fas fa-tree', label: '自然' },
];

const PRESET_CATEGORIES = ['搜索引擎', '影音', 'AI', '社交', '社区', '购物', '学习', '工具', '开发', '游戏', '设计', '生活'];

const originalWebsites = [
    { id:"baidu",name:"百度",url:"https://www.baidu.com",category:"搜索引擎",icon:"",image:"./images/baidu.png",color:"#ffffff",iconColor:"#ffffff",desc:"中文搜索引擎" },
    { id:"sogou",name:"搜狗",url:"https://www.sogou.com",category:"搜索引擎",icon:"",image:"./images/sg.png",color:"#ffffff",iconColor:"#ffffff",desc:"综合搜索引擎" },
    { id:"bilibili",name:"Bilibili",url:"https://www.bilibili.com",category:"影音",icon:"fa-brands fa-bilibili",image:"",color:"#FB7299",iconColor:"#ffffff",desc:"视频弹幕网站" },
    { id:"douyin",name:"抖音",url:"https://www.douyin.com",category:"影音",icon:"fa-brands fa-tiktok",image:"",color:"#000000",iconColor:"#ffffff",desc:"短视频平台" },
    { id:"qqmusic",name:"QQ音乐",url:"https://y.qq.com",category:"影音",icon:"",image:"./images/qqyy.png",color:"#ffffff",iconColor:"#ffffff",desc:"腾讯旗下音乐平台" },
    { id:"netease-music",name:"网易云音乐",url:"https://music.163.com",category:"影音",icon:"",image:"./images/wyy.png",color:"#ff4b4b",iconColor:"#ffffff",desc:"在线音乐平台" },
    { id:"kugou",name:"酷狗音乐",url:"https://www.kugou.com",category:"影音",icon:"",image:"./images/kgyy.png",color:"#3a8fff",iconColor:"#ffffff",desc:"在线音乐播放平台" },
    { id:"iqiyi",name:"爱奇艺",url:"https://www.iqiyi.com",category:"影音",icon:"",image:"./images/iqiyi.png",color:"#ffffff",iconColor:"#ffffff",desc:"综合视频平台" },
    { id:"tencent-video",name:"腾讯视频",url:"https://v.qq.com",category:"影音",icon:"",image:"./images/txsp.png",color:"#ffffff",iconColor:"#ffffff",desc:"腾讯旗下视频平台" },
    { id:"youku",name:"优酷",url:"https://youku.com",category:"影音",icon:"",image:"./images/yksp.png",color:"#ffffff",iconColor:"#ffffff",desc:"阿里旗下视频平台" },
    { id:"huya",name:"虎牙",url:"https://www.huya.com",category:"影音",icon:"",image:"./images/huya.png",color:"#ffffff",iconColor:"#ffffff",desc:"游戏直播平台" },
    { id:"deepseek",name:"deepseek",url:"https://www.deepseek.com/",category:"AI",icon:"",image:"./images/deepseek.png",color:"#ffffff",iconColor:"#ffffff",desc:"探索未至之境" },
    { id:"doubao",name:"豆包",url:"https://www.doubao.com/",category:"AI",icon:"",image:"./images/doubao.png",color:"#ffffff",iconColor:"#ffffff",desc:"字节旗下AI助手" },
    { id:"yuanbao",name:"元宝",url:"https://yuanbao.tencent.com",category:"AI",icon:"",image:"./images/yuanbao.png",color:"#ffffff",iconColor:"#ffffff",desc:"腾讯旗下AI助手" },
    { id:"kimi",name:"kimi",url:"https://www.kimi.com",category:"AI",icon:"",image:"./images/kimi.png",color:"#000000",iconColor:"#ffffff",desc:"持续处理复杂任务" },
    { id:"wechat",name:"微信",url:"https://wx.qq.com",category:"社交",icon:"fa-brands fa-weixin",image:"",color:"#07C160",iconColor:"#ffffff",desc:"即时通讯应用" },
    { id:"weibo",name:"微博",url:"https://weibo.com",category:"社交",icon:"fa-brands fa-weibo",image:"",color:"#DF2029",iconColor:"#ffffff",desc:"社交媒体平台" },
    { id:"zhihu",name:"知乎",url:"https://www.zhihu.com",category:"社区",icon:"fa-brands fa-zhihu",image:"",color:"#0084FF",iconColor:"#ffffff",desc:"问答社区" },
    { id:"xiaohongshu",name:"小红书",url:"https://www.xiaohongshu.com",category:"社区",icon:"",image:"./images/xhs.png",color:"#FE2C55",iconColor:"#ffffff",desc:"生活方式社区" },
    { id:"taobao",name:"淘宝/天猫",url:"https://www.taobao.com",category:"购物",icon:"",image:"./images/taobao.png",color:"#fc7637",iconColor:"#ffffff",desc:"网络购物平台" },
    { id:"jd",name:"京东",url:"https://www.jd.com",category:"购物",icon:"",image:"./images/jd.png",color:"#ff2e2e",iconColor:"#ffffff",desc:"综合购物网站" },
    { id:"chaoxing",name:"超星学习通",url:"https://www.chaoxing.com",category:"学习",icon:"",image:"./images/xxt.png",color:"#ff3030",iconColor:"#ffffff",desc:"在线学习平台" },
    { id:"wps",name:"WPS Office",url:"https://www.wps.cn",category:"工具",icon:"fa-solid fa-file-word",image:"",color:"#2B52DF",iconColor:"#ffffff",desc:"办公文档在线协作" },
    { id:"baidu-pan",name:"百度网盘",url:"https://pan.baidu.com",category:"工具",icon:"",image:"./images/bdwp.png",color:"#ffffff",iconColor:"#ffffff",desc:"云存储与文件分享" },
    { id:"tencent-pan",name:"腾讯企业网盘",url:"https://pan.tencent.com",category:"工具",icon:"",image:"./images/txy.png",color:"#ffffff",iconColor:"#ffffff",desc:"腾讯云存储服务" },
    { id:"dingtalk",name:"钉钉",url:"https://www.dingtalk.com",category:"工具",icon:"",image:"./images/dd.png",color:"#ffffff",iconColor:"#ffffff",desc:"企业级通讯工具" },
    { id:"wechat-work",name:"企业微信",url:"https://work.weixin.qq.com",category:"工具",icon:"",image:"./images/qywx.png",color:"#ffffff",iconColor:"#ffffff",desc:"企业级办公沟通工具" },
    { id:"github",name:"GitHub",url:"https://github.com",category:"开发",icon:"fa-brands fa-github",image:"",color:"#333333",iconColor:"#ffffff",desc:"代码托管平台" },
    { id:"oschina",name:"开源中国",url:"https://www.oschina.net",category:"开发",icon:"fa-solid fa-code",image:"",color:"#F08047",iconColor:"#ffffff",desc:"中文开源社区" },
    { id:"steam",name:"steam",url:"https://store.steampowered.com/",category:"游戏",icon:"fa-brands fa-steam",image:"",color:"#062f9e",iconColor:"#ffffff",desc:"蒸汽平台" },
    { id:"4399",name:"4399",url:"https://www.4399.com/",category:"游戏",icon:"fa-solid fa-gamepad",image:"",color:"#6aa93f",iconColor:"#ffffff",desc:"在线休闲小游戏平台" },
    { id:"react-test",name:"反应测试中心",url:"https://lin060911.github.io/react/",category:"游戏",icon:"fa-solid fa-stopwatch",image:"",color:"#1e1e1e",iconColor:"#ffffff",desc:"反应速度测试" },
    { id:"1game",name:"来一把!",url:"https://lin060911.github.io/1game/",category:"游戏",icon:"",image:"./images/1game.png",color:"#4a69e5",iconColor:"#ffffff",desc:"简易双人battle小游戏" },
    { id:"color-master",name:"色彩大师",url:"https://lin060911.github.io/color/",category:"游戏",icon:"",image:"./images/color.png",color:"#e45369",iconColor:"#ffffff",desc:"色差辨别挑战" },
    { id:"demine",name:"反向扫雷",url:"https://lin060911.github.io/deMine/",category:"游戏",icon:"",image:"./images/bomb.png",color:"#6ae03f",iconColor:"#ffffff",desc:"逆向思维逻辑解密" },
    { id:"tsense",name:"时间感测试",url:"https://lin060911.github.io/tSense/",category:"游戏",icon:"fa-solid fa-clock",image:"",color:"#3f87e0",iconColor:"#ffffff",desc:"人体内在时钟校准" },
];

const originalIds = new Set(originalWebsites.map(s => s.id));

// DOM 引用
const websitesGrid = document.getElementById('websitesGrid');
const categoryTabs = document.getElementById('categoryTabs');
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const themeToggle = document.getElementById('themeToggle');
const addSiteBtn = document.getElementById('addSiteBtn');
const siteNameInput = document.getElementById('siteName');
const siteUrlInput = document.getElementById('siteUrl');
const siteCategorySelect = document.getElementById('siteCategorySelect');
const siteCategoryInput = document.getElementById('siteCategoryInput');
const siteDescInput = document.getElementById('siteDesc');
const contextMenu = document.getElementById('contextMenu');
const pinSite = document.getElementById('pinSite');
const deleteSite = document.getElementById('deleteSite');
const editSite = document.getElementById('editSite');
const toast = document.getElementById('toast');
const clearSearchBtn = document.getElementById('clearSearch');
const resetBtn = document.getElementById('resetBtn');
const customHeader = document.getElementById('customHeader');
const customBody = document.getElementById('customBody');
const iconPickerTrigger = document.getElementById('iconPickerTrigger');
const iconPickerPanel = document.getElementById('iconPickerPanel');
const iconGrid = document.getElementById('iconGrid');
const selectedIconPreview = document.getElementById('selectedIconPreview');
const selectedIconName = document.getElementById('selectedIconName');
const iconLivePreview = document.getElementById('iconLivePreview');
const previewDesc = document.getElementById('previewDesc');
const engineDropdown = document.getElementById('engineDropdown');
const engineTrigger = document.getElementById('engineTrigger');
const engineTriggerIcon = document.getElementById('engineTriggerIcon');
const engineTriggerName = document.getElementById('engineTriggerName');
const engineMenu = document.getElementById('engineMenu');

// 全局状态
let currentCategory = '全部';
let currentEngine = SEARCH_ENGINES[0];
let selectedIcon = null;
let selectedIconColor = '#ffffff';
let selectedBgColor = '#4a6de5';
let editingSiteId = null;
let suggestionIndex = -1;
let currentSite = null;

/* ========== 数据迁移 & 持久化 ========== */
function migrateData() {
    const savedVersion = localStorage.getItem('dataVersion');
    let rawCustom = JSON.parse(localStorage.getItem('customWebsites')) || [];
    let rawPinned = JSON.parse(localStorage.getItem('pinnedSites')) || [];
    let rawDeleted = JSON.parse(localStorage.getItem('deletedSites')) || [];

    rawCustom = rawCustom.map(site => {
        if (!site.id) {
            site.id = 'custom_' + btoa(unescape(encodeURIComponent(site.name + site.url))).replace(/[^a-zA-Z0-9]/g,'').slice(0,16) + '_' + Date.now();
        }
        if (!site.icon && !site.image) site.icon = 'fas fa-star';
        if (!site.color) site.color = '#4a6de5';
        if (!site.iconColor) site.iconColor = '#ffffff';
        if (!site.desc) site.desc = '自定义网站';
        return site;
    });

    let deletedIds = [];
    if (rawDeleted.length > 0) {
        if (typeof rawDeleted[0] === 'string') {
            deletedIds = rawDeleted;
        } else {
            rawDeleted.forEach(d => {
                const found = originalWebsites.find(s => s.name === d.name && s.url === d.url);
                if (found) deletedIds.push(found.id);
            });
        }
    }
    if (savedVersion !== DATA_VERSION) {
        deletedIds = deletedIds.filter(id => !originalIds.has(id));
    }

    localStorage.setItem('customWebsites', JSON.stringify(rawCustom));
    localStorage.setItem('pinnedSites', JSON.stringify(rawPinned));
    localStorage.setItem('deletedSites', JSON.stringify(deletedIds));
    localStorage.setItem('dataVersion', DATA_VERSION);

    return { customWebsites: rawCustom, pinnedSites: rawPinned, deletedIds };
}

const migrated = migrateData();
let customWebsites = migrated.customWebsites;
let pinnedSites = migrated.pinnedSites;
let deletedIds = migrated.deletedIds;

function saveCustom() { localStorage.setItem('customWebsites', JSON.stringify(customWebsites)); }
function savePinned() { localStorage.setItem('pinnedSites', JSON.stringify(pinnedSites)); }
function saveDeleted() { localStorage.setItem('deletedSites', JSON.stringify(deletedIds)); }

/* ========== Toast 提示 ========== */
let toastTimer;
function showToast(msg, type = 'info') {
    toast.className = `toast ${type}`;
    const iconMap = { success: 'fa-check-circle', error: 'fa-times-circle', info: 'fa-info-circle', warning: 'fa-exclamation-triangle' };
    toast.innerHTML = `<i class="fas ${iconMap[type] || iconMap.info}"></i> ${msg}`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ========== 搜索引擎 ========== */
function getEngineFallbackSVG(engine) {
    const svg = ENGINE_FALLBACK[engine.fallbackKey || engine.key];
    return svg || `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>`;
}

function renderEngineDropdown() {
    engineTriggerName.textContent = currentEngine.name;
    engineTriggerIcon.src = currentEngine.icon;
    engineTriggerIcon.alt = currentEngine.name;
    engineTriggerIcon.style.color = currentEngine.color || '#4a6de5';

    engineTriggerIcon.onerror = function() {
        const fb = getEngineFallbackSVG(currentEngine);
        const wrap = document.createElement('span');
        wrap.innerHTML = fb;
        const svgEl = wrap.firstElementChild;
        svgEl.style.width = '18px';
        svgEl.style.height = '18px';
        svgEl.style.color = currentEngine.color || '#4a6de5';
        svgEl.classList.add('engine-trigger-icon');
        this.replaceWith(svgEl);
    };

    engineMenu.innerHTML = '';
    SEARCH_ENGINES.forEach(engine => {
        const item = document.createElement('div');
        item.className = 'engine-menu-item' + (engine.key === currentEngine.key ? ' active' : '');
        const imgHTML = `<img src="${engine.icon}" alt="${engine.name}" style="width:16px;height:16px;border-radius:3px;object-fit:cover;flex-shrink:0;">`;
        item.innerHTML = `${imgHTML}<span style="flex:1;">${engine.name}</span><i class="fas fa-check engine-check"></i>`;
        const img = item.querySelector('img');
        img.addEventListener('error', function() {
            const fb = getEngineFallbackSVG(engine);
            const wrap = document.createElement('span');
            wrap.innerHTML = fb;
            const svgEl = wrap.firstElementChild;
            svgEl.style.width = '16px';
            svgEl.style.height = '16px';
            svgEl.style.color = engine.color || '#4a6de5';
            svgEl.style.flexShrink = '0';
            if (this.parentNode) this.parentNode.replaceChild(svgEl, this);
        });
        item.addEventListener('click', () => {
            const prevKey = currentEngine.key;
            currentEngine = engine;
            localStorage.setItem('searchEngine', engine.key);
            renderEngineDropdown();
            closeEngineMenu();
            if (prevKey !== engine.key) showToast(`已切换搜索引擎为「${engine.name}」`, 'info');
            searchInput.focus();
        });
        engineMenu.appendChild(item);
    });
}

function openEngineMenu() { engineMenu.classList.add('show'); engineTrigger.classList.add('open'); }
function closeEngineMenu() { engineMenu.classList.remove('show'); engineTrigger.classList.remove('open'); }
function toggleEngineMenu() { engineMenu.classList.contains('show') ? closeEngineMenu() : openEngineMenu(); }

function initSearchEngine() {
    const saved = localStorage.getItem('searchEngine');
    if (saved) {
        const found = SEARCH_ENGINES.find(e => e.key === saved);
        if (found) currentEngine = found;
    }
    renderEngineDropdown();
}

/* ========== 搜索建议 ========== */
function getSuggestions(query) {
    if (!query) return { sites: [], isUrl: false };
    const q = query.toLowerCase().trim();
    const allSites = getAvailableWebsites();
    const matched = allSites.filter(site =>
        site.name.toLowerCase().includes(q) ||
        site.desc.toLowerCase().includes(q) ||
        site.category.toLowerCase().includes(q) ||
        (site.url && site.url.toLowerCase().includes(q))
    ).slice(0, 6);
    const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/.*)?$/i;
    return { sites: matched, isUrl: urlPattern.test(query.trim()) };
}

function renderSuggestions(query) {
    const { sites, isUrl } = getSuggestions(query);
    if (!query.trim()) { searchSuggestions.classList.remove('show'); suggestionIndex = -1; return; }

    let html = '';
    if (sites.length > 0) {
        html += '<div class="suggestion-group-title"><i class="fas fa-bookmark"></i> 匹配网站</div>';
        sites.forEach((site) => {
            const iconStyle = `background:${site.color || '#4a6de5'};color:${site.iconColor || '#ffffff'}`;
            html += `<button class="suggestion-item" data-type="site" data-url="${site.url}">
                <div class="sug-icon" style="${iconStyle}">${site.image ? `<img src="${site.image}" alt="">` : (site.icon ? `<i class="${site.icon}"></i>` : `<i class="fas fa-globe"></i>`)}</div>
                <div class="sug-text"><div class="sug-name">${site.name}</div><div class="sug-url">${site.desc} · ${site.category}</div></div>
                <span class="sug-action"><i class="fas fa-arrow-right"></i></span></button>`;
        });
    }
    html += '<div class="suggestion-group-title"><i class="fas fa-search"></i> 搜索</div>';
    const engStyle = `background:${currentEngine.color || '#4a6de5'};color:#ffffff`;
    html += `<button class="suggestion-item" data-type="search-engine">
        <div class="sug-icon" style="${engStyle}"><img src="${currentEngine.icon}" alt="" style="width:16px;height:16px;border-radius:3px;" onerror="this.replaceWith(Object.assign(document.createElement('i'),{className:'fas fa-search'}))"></div>
        <div class="sug-text"><div class="sug-name">用 ${currentEngine.name} 搜索 "${query}"</div></div>
        <span class="sug-action search-action">搜索</span></button>`;
    if (isUrl) {
        let url = query.trim();
        if (!url.startsWith('http://') && !url.startsWith('https://')) url = 'https://' + url;
        html += `<button class="suggestion-item" data-type="url" data-url="${url}">
            <div class="sug-icon" style="background:#48bb78;color:#fff"><i class="fas fa-external-link-alt"></i></div>
            <div class="sug-text"><div class="sug-name">访问 ${url}</div></div>
            <span class="sug-action"><i class="fas fa-arrow-right"></i></span></button>`;
    }
    searchSuggestions.innerHTML = html;
    searchSuggestions.classList.add('show');
    suggestionIndex = -1;

    searchSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
            const type = item.dataset.type;
            if (type === 'site' || type === 'url') { window.open(item.dataset.url, '_blank'); }
            else if (type === 'search-engine') { window.open(currentEngine.url.replace('{query}', encodeURIComponent(searchInput.value.trim())), '_blank'); }
            searchSuggestions.classList.remove('show');
        });
    });
}

function highlightSuggestion(direction) {
    const items = searchSuggestions.querySelectorAll('.suggestion-item');
    if (!items.length) return;
    items.forEach(i => i.classList.remove('highlighted'));
    suggestionIndex += direction;
    if (suggestionIndex < 0) suggestionIndex = items.length - 1;
    if (suggestionIndex >= items.length) suggestionIndex = 0;
    items[suggestionIndex].classList.add('highlighted');
    items[suggestionIndex].scrollIntoView({ block: 'nearest' });
}

function activateSuggestion() {
    const items = searchSuggestions.querySelectorAll('.suggestion-item');
    if (suggestionIndex >= 0 && suggestionIndex < items.length) {
        items[suggestionIndex].click();
    } else {
        const q = searchInput.value.trim();
        if (!q) return;
        const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/.*)?$/i;
        if (urlPattern.test(q)) {
            let fullUrl = q.startsWith('http') ? q : 'https://' + q;
            window.open(fullUrl, '_blank');
        } else {
            window.open(currentEngine.url.replace('{query}', encodeURIComponent(q)), '_blank');
        }
    }
    searchSuggestions.classList.remove('show');
    searchInput.value = '';
}

/* ========== 分类下拉 + 输入框（简单方案） ========== */
function getAvailableCategories() {
    const set = new Set();
    getAvailableWebsites().forEach(site => set.add(site.category));
    PRESET_CATEGORIES.forEach(cat => set.add(cat));
    return Array.from(set).sort((a, b) => {
        const aIdx = PRESET_CATEGORIES.indexOf(a);
        const bIdx = PRESET_CATEGORIES.indexOf(b);
        if (aIdx === -1 && bIdx === -1) return a.localeCompare(b, 'zh-CN');
        if (aIdx === -1) return 1;
        if (bIdx === -1) return -1;
        return aIdx - bIdx;
    });
}

function populateCategorySelect(selectedValue) {
    const currentVal = selectedValue || siteCategorySelect.value || '';
    const cats = getAvailableCategories();

    // 如果当前值不在列表中，先保存它
    let extraVal = '';
    if (currentVal && !cats.includes(currentVal)) {
        extraVal = currentVal;
    }

    siteCategorySelect.innerHTML = '';

    // 默认空选项
    const emptyOpt = document.createElement('option');
    emptyOpt.value = '';
    emptyOpt.textContent = '— 选择分类 —';
    siteCategorySelect.appendChild(emptyOpt);

    cats.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        siteCategorySelect.appendChild(opt);
    });

    // 如果有额外值（自定义输入的分类），也加入
    if (extraVal) {
        const opt = document.createElement('option');
        opt.value = extraVal;
        opt.textContent = extraVal;
        siteCategorySelect.appendChild(opt);
    }

    // 恢复选中值
    if (currentVal) {
        siteCategorySelect.value = currentVal;
    }
}

function initCategoryCombo() {
    populateCategorySelect();

    // 下拉选择变化时 → 同步到输入框
    siteCategorySelect.addEventListener('change', () => {
        const val = siteCategorySelect.value;
        siteCategoryInput.value = val;
        if (val) showToast(`分类已选择「${val}」`, 'info');
    });

    // 输入框变化时 → 如果匹配已有分类则同步下拉
    siteCategoryInput.addEventListener('input', () => {
        const val = siteCategoryInput.value.trim();
        // 如果输入的值在选项里，选中它
        const opts = Array.from(siteCategorySelect.options).map(o => o.value);
        if (opts.includes(val)) {
            siteCategorySelect.value = val;
        } else {
            // 不在列表里，选中空
            siteCategorySelect.value = '';
        }
    });

    // 输入框回车时提示
    siteCategoryInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const val = siteCategoryInput.value.trim();
            if (val) {
                // 确保下拉列表包含这个值
                const opts = Array.from(siteCategorySelect.options).map(o => o.value);
                if (!opts.includes(val)) {
                    const opt = document.createElement('option');
                    opt.value = val;
                    opt.textContent = val;
                    siteCategorySelect.appendChild(opt);
                }
                siteCategorySelect.value = val;
                showToast(`将使用分类「${val}」`, 'info');
            }
            siteNameInput.focus();
            e.preventDefault();
        }
    });
}

// 获取最终分类值（优先输入框，其次下拉）
function getSelectedCategory() {
    const inputVal = siteCategoryInput.value.trim();
    if (inputVal) return inputVal;
    return siteCategorySelect.value.trim() || '其他';
}

/* ========== 图标选择器 ========== */
function updateLivePreview() {
    const iconClass = selectedIcon ? selectedIcon.icon : 'fas fa-icons';
    const iconHTML = `<i class="${iconClass}"></i>`;
    const previewStyle = `background:${selectedBgColor};color:${selectedIconColor}`;
    iconLivePreview.style.cssText = previewStyle;
    iconLivePreview.innerHTML = iconHTML;
    selectedIconPreview.style.cssText = previewStyle;
    selectedIconPreview.innerHTML = iconHTML;
    if (selectedIcon) {
        selectedIconName.textContent = selectedIcon.label;
        selectedIconName.classList.remove('placeholder');
        previewDesc.textContent = `${selectedIcon.label} · 图案${selectedIconColor} · 背景${selectedBgColor}`;
    } else {
        previewDesc.textContent = '未选择图案';
    }
}

function renderIconGrid() {
    iconGrid.innerHTML = '';
    PRESET_ICONS.forEach((preset) => {
        const el = document.createElement('div');
        el.className = 'icon-option';
        el.style.background = selectedBgColor;
        el.style.color = selectedIconColor;
        el.innerHTML = `<i class="${preset.icon}"></i>`;
        el.title = preset.label;
        el.addEventListener('click', () => {
            selectedIcon = preset;
            iconGrid.querySelectorAll('.icon-option').forEach(o => o.classList.remove('selected'));
            el.classList.add('selected');
            updateLivePreview();
        });
        iconGrid.appendChild(el);
    });
}

function initIconPicker() {
    renderIconGrid();
    updateLivePreview();
    iconPickerTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = iconPickerPanel.classList.toggle('show');
        iconPickerTrigger.classList.toggle('open', isOpen);
    });
    document.querySelectorAll('.color-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            const target = dot.dataset.target;
            const color = dot.dataset.color;
            if (target === 'icon') {
                selectedIconColor = color;
                document.querySelectorAll('#iconColorRow .color-dot').forEach(d => d.classList.remove('selected'));
            } else {
                selectedBgColor = color;
                document.querySelectorAll('#bgColorRow .color-dot').forEach(d => d.classList.remove('selected'));
            }
            dot.classList.add('selected');
            renderIconGrid();
            if (selectedIcon) {
                const idx = PRESET_ICONS.findIndex(p => p.icon === selectedIcon.icon);
                if (idx >= 0) iconGrid.children[idx].classList.add('selected');
            }
            updateLivePreview();
        });
    });
}

/* ========== 右键菜单 ========== */
document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.website-card')) {
        e.preventDefault();
        const card = e.target.closest('.website-card');
        const siteId = card.dataset.id;
        currentSite = getAvailableWebsites().find(site => site.id === siteId);
        if (currentSite) {
            const rect = card.getBoundingClientRect();
            contextMenu.style.top = `${Math.min(rect.bottom + window.scrollY + 4, window.scrollY + window.innerHeight - 140)}px`;
            contextMenu.style.left = `${Math.min(rect.left + window.scrollX, window.innerWidth - 180)}px`;
            contextMenu.classList.add('show');
            pinSite.innerHTML = pinnedSites.some(s => s.id === currentSite.id)
                ? '<i class="fas fa-thumbtack"></i> 取消置顶' : '<i class="fas fa-thumbtack"></i> 置顶网站';
            editSite.style.display = !originalIds.has(currentSite.id) ? '' : 'none';
        }
    } else {
        contextMenu.classList.remove('show');
        currentSite = null;
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.context-menu')) contextMenu.classList.remove('show');
    if (!e.target.closest('.icon-picker-container')) { iconPickerPanel.classList.remove('show'); iconPickerTrigger.classList.remove('open'); }
    if (!e.target.closest('.engine-dropdown')) closeEngineMenu();
    if (!e.target.closest('.search-bar')) searchSuggestions.classList.remove('show');
});

/* ========== 置顶 / 编辑 / 删除 ========== */
pinSite.addEventListener('click', () => {
    if (!currentSite) return;
    const isPinned = pinnedSites.some(s => s.id === currentSite.id);
    if (isPinned) {
        pinnedSites = pinnedSites.filter(s => s.id !== currentSite.id);
        showToast(`已取消置顶「${currentSite.name}」`, 'info');
    } else {
        pinnedSites.push(currentSite);
        showToast(`已置顶「${currentSite.name}」`, 'success');
    }
    savePinned();
    renderWebsites();
    contextMenu.classList.remove('show');
});

editSite.addEventListener('click', () => {
    if (!currentSite) return;
    siteNameInput.value = currentSite.name;
    siteUrlInput.value = currentSite.url;
    siteDescInput.value = currentSite.desc || '';

    const editCat = currentSite.category || '';
    siteCategoryInput.value = editCat;
    populateCategorySelect(editCat);

    if (currentSite.icon) {
        const found = PRESET_ICONS.find(p => p.icon === currentSite.icon);
        if (found) { selectedIcon = found; selectedIconName.textContent = found.label; selectedIconName.classList.remove('placeholder'); }
    }
    if (currentSite.iconColor) selectedIconColor = currentSite.iconColor;
    if (currentSite.color) selectedBgColor = currentSite.color;
    document.querySelectorAll('.color-dot').forEach(d => {
        const t = d.dataset.target, c = d.dataset.color;
        if (t === 'icon') d.classList.toggle('selected', c === selectedIconColor);
        if (t === 'bg') d.classList.toggle('selected', c === selectedBgColor);
    });
    renderIconGrid();
    if (selectedIcon) { const idx = PRESET_ICONS.findIndex(p => p.icon === selectedIcon.icon); if (idx >= 0) iconGrid.children[idx].classList.add('selected'); }
    updateLivePreview();
    editingSiteId = currentSite.id;
    addSiteBtn.innerHTML = '<i class="fas fa-save"></i> 保存修改';
    showToast('正在编辑，修改后点击保存', 'info');
    customBody.classList.remove('collapsed');
    customHeader.classList.remove('collapsed');
    document.querySelector('.custom-site').scrollIntoView({ behavior: 'smooth', block: 'center' });
    contextMenu.classList.remove('show');
});

deleteSite.addEventListener('click', () => {
    if (!currentSite) return;
    if (confirm(`确定要删除「${currentSite.name}」吗？`)) {
        if (!deletedIds.includes(currentSite.id)) { deletedIds.push(currentSite.id); saveDeleted(); }
        customWebsites = customWebsites.filter(s => s.id !== currentSite.id);
        saveCustom();
        pinnedSites = pinnedSites.filter(s => s.id !== currentSite.id);
        savePinned();
        renderCategoryTabs();
        renderWebsites();
        populateCategorySelect();
        contextMenu.classList.remove('show');
        showToast(`已删除「${currentSite.name}」`, 'success');
    }
});

/* ========== 数据获取 & 渲染 ========== */
function getAvailableWebsites() {
    return [...originalWebsites, ...customWebsites].filter(site => !deletedIds.includes(site.id));
}

function getAllCategoriesRaw() {
    const set = new Set();
    getAvailableWebsites().forEach(site => set.add(site.category));
    return Array.from(set);
}

function getAllCategories() { return ['全部', ...getAllCategoriesRaw()]; }

function renderCategoryTabs() {
    const categories = getAllCategories();
    categoryTabs.innerHTML = '';
    const allSites = getAvailableWebsites();
    categories.forEach(category => {
        const tab = document.createElement('div');
        tab.className = 'tab' + (category === currentCategory ? ' active' : '');
        tab.dataset.category = category;
        const count = category === '全部' ? allSites.length : allSites.filter(s => s.category === category).length;
        tab.innerHTML = `${category}<span class="tab-count">${count}</span>`;
        tab.addEventListener('click', () => {
            currentCategory = category;
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderWebsites();
            showToast(`已切换到「${category}」分类`, 'info');
        });
        categoryTabs.appendChild(tab);
    });
}

function renderWebsites() {
    websitesGrid.innerHTML = '';
    let allWebsites = getAvailableWebsites();
    const [pinned, normal] = allWebsites.reduce((acc, site) => {
        pinnedSites.some(s => s.id === site.id) ? acc[0].push(site) : acc[1].push(site);
        return acc;
    }, [[], []]);
    allWebsites = [...pinned, ...normal];
    if (currentCategory !== '全部') allWebsites = allWebsites.filter(site => site.category === currentCategory);
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        allWebsites = allWebsites.filter(site =>
            site.name.toLowerCase().includes(searchTerm) ||
            site.desc.toLowerCase().includes(searchTerm) ||
            site.category.toLowerCase().includes(searchTerm));
    }
    if (allWebsites.length === 0) {
        websitesGrid.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><h3>未找到匹配的网站</h3><p>尝试修改搜索关键词或选择其他分类</p></div>`;
        return;
    }
    allWebsites.forEach(site => {
        const card = document.createElement('a');
        card.className = 'website-card' + (pinnedSites.some(s => s.id === site.id) ? ' pinned' : '');
        card.dataset.id = site.id;
        card.href = site.url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        const iconColor = site.iconColor || '#ffffff';
        const bgColor = site.color || '#4a6de5';
        let iconHtml = site.image ? `<img src="${site.image}" alt="${site.name}">` : (site.icon ? `<i class="${site.icon}"></i>` : `<i class="fas fa-globe"></i>`);
        const pinnedBadge = pinnedSites.some(s => s.id === site.id) ? '<i class="fas fa-thumbtack pinned-badge"></i>' : '';
        card.innerHTML = `${pinnedBadge}<div class="website-icon" style="background-color:${bgColor};color:${iconColor}">${iconHtml}</div><div class="website-name">${site.name}</div><div class="website-desc">${site.desc || ''}</div>`;
        websitesGrid.appendChild(card);
    });
}

/* ========== 添加/编辑表单 ========== */
function resetAddForm() {
    siteNameInput.value = '';
    siteUrlInput.value = '';
    siteDescInput.value = '';
    siteCategoryInput.value = '';
    populateCategorySelect('');
    selectedIcon = null;
    selectedIconColor = '#ffffff';
    selectedBgColor = '#4a6de5';
    document.querySelectorAll('.color-dot').forEach(d => {
        const t = d.dataset.target, c = d.dataset.color;
        if (t === 'icon') d.classList.toggle('selected', c === '#ffffff');
        if (t === 'bg') d.classList.toggle('selected', c === '#4a6de5');
    });
    renderIconGrid();
    updateLivePreview();
    selectedIconName.textContent = '点击选择预设图标';
    selectedIconName.classList.add('placeholder');
    editingSiteId = null;
    addSiteBtn.innerHTML = '<i class="fas fa-plus"></i> 添加网站';
}

function addOrEditCustomSite() {
    const name = siteNameInput.value.trim();
    const url = siteUrlInput.value.trim();
    const category = getSelectedCategory();
    const desc = siteDescInput.value.trim() || '自定义网站';

    if (!name || !url) { showToast('请输入网站名称和网址', 'error'); return; }
    let fullUrl = url.startsWith('http://') || url.startsWith('https://') ? url : 'https://' + url;
    try { new URL(fullUrl); } catch(e) { showToast('请输入有效的网址', 'error'); return; }

    if (editingSiteId) {
        const idx = customWebsites.findIndex(s => s.id === editingSiteId);
        if (idx !== -1) {
            customWebsites[idx] = { ...customWebsites[idx], name, url: fullUrl, category, desc,
                icon: selectedIcon ? selectedIcon.icon : customWebsites[idx].icon,
                iconColor: selectedIconColor, color: selectedBgColor };
            saveCustom();
            showToast(`已更新「${name}」`, 'success');
        }
        renderCategoryTabs(); renderWebsites(); populateCategorySelect(); resetAddForm();
    } else {
        const customId = 'custom_' + btoa(unescape(encodeURIComponent(name + fullUrl))).replace(/[^a-zA-Z0-9]/g,'').slice(0,20) + '_' + Date.now();
        const newSite = { id: customId, name, url: fullUrl, category, desc,
            icon: selectedIcon ? selectedIcon.icon : 'fas fa-star',
            iconColor: selectedIconColor, color: selectedBgColor, image: '' };
        if (getAvailableWebsites().some(s => s.name === name && s.url === fullUrl)) { showToast('该网站已存在！', 'error'); return; }
        deletedIds = deletedIds.filter(id => id !== customId); saveDeleted();
        customWebsites.push(newSite); saveCustom();
        showToast(`已添加「${name}」到「${category}」`, 'success');
        renderCategoryTabs(); renderWebsites(); populateCategorySelect(); resetAddForm();
        if (category !== currentCategory && category !== '全部') { currentCategory = category; renderCategoryTabs(); renderWebsites(); }
    }
}

/* ========== 主题切换 ========== */
function initTheme() { setTheme(localStorage.getItem('theme') || 'light', true); }

function setTheme(mode, silent = false) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-lightbulb"></i>';
        if (!silent) showToast('已切换到深色模式', 'info');
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        if (!silent) showToast('已切换到浅色模式', 'info');
    }
    localStorage.setItem('theme', mode);
}

function toggleTheme() { setTheme(document.body.classList.contains('dark-mode') ? 'light' : 'dark'); }

/* ========== 折叠面板 ========== */
function initCollapsiblePanel() {
    if (localStorage.getItem('panelCollapsed') === 'true') {
        customBody.classList.add('collapsed');
        customHeader.classList.add('collapsed');
    }
    customHeader.addEventListener('click', (e) => {
        if (e.target !== customHeader && !e.target.closest('h3')) return;
        customBody.classList.toggle('collapsed');
        customHeader.classList.toggle('collapsed');
        localStorage.setItem('panelCollapsed', customBody.classList.contains('collapsed'));
    });
}

/* ========== 重置数据 ========== */
function resetAllData() {
    if (!confirm('确定要重置所有数据吗？这将恢复默认网站列表，删除所有自定义网站。')) return;
    localStorage.removeItem('customWebsites');
    localStorage.removeItem('pinnedSites');
    localStorage.removeItem('deletedSites');
    localStorage.removeItem('dataVersion');
    showToast('数据已重置，页面即将刷新...', 'warning');
    setTimeout(() => location.reload(), 1200);
}

/* ========== 初始化 ========== */
function init() {
    initTheme();
    initSearchEngine();
    initIconPicker();
    initCollapsiblePanel();
    initCategoryCombo();
    renderCategoryTabs();
    renderWebsites();

    engineTrigger.addEventListener('click', (e) => { e.stopPropagation(); toggleEngineMenu(); });

    let searchDebounce;
    const searchBarEl = document.getElementById('searchBar');
    searchInput.addEventListener('input', () => {
        clearTimeout(searchDebounce);
        searchDebounce = setTimeout(() => renderSuggestions(searchInput.value), 120);
    });
    searchInput.addEventListener('focus', () => {
        searchBarEl.classList.add('focused');
        if (searchInput.value.trim()) renderSuggestions(searchInput.value);
    });
    searchInput.addEventListener('blur', () => searchBarEl.classList.remove('focused'));
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); activateSuggestion(); }
        else if (e.key === 'ArrowDown') { e.preventDefault(); highlightSuggestion(1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); highlightSuggestion(-1); }
        else if (e.key === 'Escape') { searchSuggestions.classList.remove('show'); closeEngineMenu(); }
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchSuggestions.classList.remove('show');
        renderWebsites();
        searchInput.focus();
    });

    themeToggle.addEventListener('click', toggleTheme);
    addSiteBtn.addEventListener('click', addOrEditCustomSite);
    resetBtn.addEventListener('click', resetAllData);

    document.addEventListener('scroll', () => {
        searchSuggestions.classList.remove('show');
        closeEngineMenu();
    }, true);
}

document.addEventListener('DOMContentLoaded', init);
