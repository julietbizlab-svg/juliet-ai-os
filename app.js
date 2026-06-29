
const AI_TOOLS = [["ChatGPT", "總指揮／規劃／程式／文案", "https://chatgpt.com"], ["Claude", "長文件／PDF／文字潤飾", "https://claude.ai"], ["Gemini", "Google 生態／文件／試算表", "https://gemini.google.com"], ["Perplexity", "最新資料搜尋／來源查證", "https://www.perplexity.ai"], ["NotebookLM", "知識庫／文件問答", "https://notebooklm.google.com"], ["Canva", "社群圖／海報／簡報", "https://www.canva.com"], ["Gamma", "AI 簡報", "https://gamma.app"], ["Napkin AI", "流程圖／圖解", "https://www.napkin.ai"], ["Figma", "UI 設計／版面", "https://www.figma.com"], ["FigJam", "白板／流程討論", "https://www.figma.com/figjam/"], ["Excalidraw", "手繪感流程圖", "https://excalidraw.com"], ["Ideogram", "文字生圖／海報字", "https://ideogram.ai"], ["Recraft", "品牌視覺／向量風格", "https://www.recraft.ai"], ["Krea", "影像生成與強化", "https://www.krea.ai"], ["Leonardo AI", "生圖／設計素材", "https://leonardo.ai"], ["Adobe Firefly", "商用友善影像生成", "https://firefly.adobe.com"], ["Kling AI", "AI 影片生成", "https://klingai.com"], ["Hailuo AI", "AI 動畫影片", "https://hailuoai.video"], ["Pika", "AI 影片生成", "https://pika.art"], ["Runway", "AI 影片工具", "https://runwayml.com"], ["CapCut", "剪輯／字幕／短影音", "https://www.capcut.com"], ["Suno", "AI 音樂", "https://suno.com"], ["Udio", "AI 音樂", "https://www.udio.com"], ["ElevenLabs", "AI 配音", "https://elevenlabs.io"], ["TTSMaker", "免費文字轉語音", "https://ttsmaker.com"], ["Make", "自動化串接", "https://www.make.com"], ["n8n", "自動化流程", "https://n8n.io"], ["Zapier", "自動化串接", "https://zapier.com"], ["IFTTT", "簡易自動化", "https://ifttt.com"], ["Notion", "資料庫／任務管理", "https://www.notion.so"], ["Google Drive", "檔案倉庫", "https://drive.google.com"], ["Google Sheets", "表格資料庫", "https://docs.google.com/spreadsheets"], ["Google Docs", "文件撰寫", "https://docs.google.com/document"], ["Google Calendar", "行事曆", "https://calendar.google.com"], ["Gmail", "電子郵件", "https://mail.google.com"], ["LINE OA Manager", "LINE 官方帳號後台", "https://manager.line.biz"], ["GitHub", "程式碼與網頁發布", "https://github.com"], ["GitHub Pages 說明文件", "GitHub Pages 說明", "https://docs.github.com/pages"], ["Bolt.new", "AI 程式開發", "https://bolt.new"], ["Lovable", "AI 建站", "https://lovable.dev"], ["Firebase Studio", "AI 應用程式開發", "https://studio.firebase.google.com"], ["Cloudflare", "免費部署／Workers", "https://www.cloudflare.com"], ["Vercel", "前端部署", "https://vercel.com"], ["Netlify", "前端部署", "https://www.netlify.com"], ["Glide", "無程式應用程式", "https://www.glideapps.com"], ["Airtable", "資料庫表格", "https://airtable.com"], ["Tally", "免費表單", "https://tally.so"], ["Jotform", "表單工具", "https://www.jotform.com"], ["Typeform", "表單體驗", "https://www.typeform.com"], ["TinyWow", "PDF 小工具", "https://tinywow.com"], ["ILovePDF", "PDF 工具", "https://www.ilovepdf.com"], ["Remove.bg", "去背工具", "https://www.remove.bg"], ["Photopea", "免費線上修圖", "https://www.photopea.com"], ["Miro", "白板協作", "https://miro.com"], ["Trello", "看板管理", "https://trello.com"]];
const FEATURES = ["AI 任務判斷", "AI 工具推薦", "AI 收件匣分類", "歸檔位置判斷", "官方工具入口", "專案領域分流", "每日任務提示", "免費工具策略", "GitHub Pages 部署", "手機加入主畫面", "深色介面", "響應式版面", "工作流程卡片", "提示詞庫", "檢查清單", "Google Drive 架構", "Notion 資料庫規劃", "NotebookLM 知識庫規劃", "Make 自動化藍圖", "LINE OA 發布流程", "盆景補助流程", "高手揪派課表流程", "穿搭資料庫", "旅遊規劃流程", "文件整理流程", "PDF 摘要流程", "簡報生成流程", "海報設計流程", "影片生成流程", "配音流程", "音樂流程", "搜尋查證流程", "任務看板", "行事曆規劃", "模板中心", "成效報告", "備份提醒", "隱私提醒", "版本紀錄", "系統路線圖", "功能模組 041", "功能模組 042", "功能模組 043", "功能模組 044", "功能模組 045", "功能模組 046", "功能模組 047", "功能模組 048", "功能模組 049", "功能模組 050", "功能模組 051", "功能模組 052", "功能模組 053", "功能模組 054", "功能模組 055", "功能模組 056", "功能模組 057", "功能模組 058", "功能模組 059", "功能模組 060", "功能模組 061", "功能模組 062", "功能模組 063", "功能模組 064", "功能模組 065", "功能模組 066", "功能模組 067", "功能模組 068", "功能模組 069", "功能模組 070", "功能模組 071", "功能模組 072", "功能模組 073", "功能模組 074", "功能模組 075", "功能模組 076", "功能模組 077", "功能模組 078", "功能模組 079", "功能模組 080", "功能模組 081", "功能模組 082", "功能模組 083", "功能模組 084", "功能模組 085", "功能模組 086", "功能模組 087", "功能模組 088", "功能模組 089", "功能模組 090", "功能模組 091", "功能模組 092", "功能模組 093", "功能模組 094", "功能模組 095", "功能模組 096", "功能模組 097", "功能模組 098", "功能模組 099", "功能模組 100", "功能模組 101", "功能模組 102", "功能模組 103", "功能模組 104", "功能模組 105", "功能模組 106", "功能模組 107", "功能模組 108", "功能模組 109", "功能模組 110", "功能模組 111", "功能模組 112", "功能模組 113", "功能模組 114", "功能模組 115", "功能模組 116", "功能模組 117", "功能模組 118", "功能模組 119", "功能模組 120", "功能模組 121", "功能模組 122", "功能模組 123", "功能模組 124", "功能模組 125", "功能模組 126", "功能模組 127", "功能模組 128", "功能模組 129", "功能模組 130", "功能模組 131", "功能模組 132", "功能模組 133", "功能模組 134", "功能模組 135", "功能模組 136", "功能模組 137", "功能模組 138", "功能模組 139", "功能模組 140", "功能模組 141", "功能模組 142", "功能模組 143", "功能模組 144", "功能模組 145", "功能模組 146", "功能模組 147", "功能模組 148", "功能模組 149", "功能模組 150", "功能模組 151", "功能模組 152", "功能模組 153", "功能模組 154", "功能模組 155", "功能模組 156", "功能模組 157", "功能模組 158", "功能模組 159", "功能模組 160", "功能模組 161", "功能模組 162", "功能模組 163", "功能模組 164", "功能模組 165", "功能模組 166", "功能模組 167", "功能模組 168", "功能模組 169", "功能模組 170", "功能模組 171", "功能模組 172", "功能模組 173", "功能模組 174", "功能模組 175", "功能模組 176", "功能模組 177", "功能模組 178", "功能模組 179", "功能模組 180", "功能模組 181", "功能模組 182", "功能模組 183", "功能模組 184", "功能模組 185", "功能模組 186", "功能模組 187", "功能模組 188", "功能模組 189", "功能模組 190", "功能模組 191", "功能模組 192", "功能模組 193", "功能模組 194", "功能模組 195", "功能模組 196", "功能模組 197", "功能模組 198", "功能模組 199", "功能模組 200"];
const HISTORY_LINKS_KEY = "juliet_history_links_v1";
function updateClock(){
 const d=new Date();
 const date=document.querySelector("#dateText"); const time=document.querySelector("#timeText");
 if(date) date.textContent=d.toLocaleDateString("zh-TW",{year:"numeric",month:"long",day:"numeric",weekday:"long"});
 if(time) time.textContent=d.toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit"});
}
const RECOMMEND_RULES = [
 {name:"找舊資料", plan:"Google Docs → Notion → Google Drive → NotebookLM → ChatGPT", reason:"先從妳常用的 Docs、Notion 與雲端資料找舊紀錄，再交給 ChatGPT 整理成可用文件。", terms:[["之前的資料",120],["之前資料",110],["過去資料",105],["舊資料",105],["歷史資料",100],["歷史紀錄",95],["調閱",90],["查找",85],["找資料",85],["找之前",85],["之前",45],["過去",40],["舊",35],["資料",18]]},
 {name:"產生範本", plan:"ChatGPT → Google Docs → Google Drive", reason:"先產生可直接套用的文字範本，再存成文件與雲端檔案。", terms:[["會議紀錄範本",130],["會議記錄範本",130],["會議範本",115],["會議模板",115],["紀錄範本",105],["記錄範本",105],["範本",85],["模板",85],["表單",45],["會議",20]]},
 {name:"整理會議文件", plan:"Google Docs → ChatGPT → Google Drive", reason:"先建立或整理會議文件，再用 ChatGPT 協助摘要決議與待辦。", terms:[["會議紀錄",95],["會議記錄",95],["理監事會議",90],["會議",45],["紀錄",35],["記錄",35],["決議",30],["待辦",25]]},
 {name:"查最新補助與公文", plan:"Perplexity → ChatGPT → Claude → Google Drive", reason:"先查最新補助或公文規定，再寫計畫、整理附件與保存檔案。", terms:[["補助",100],["公文",70],["核銷",65],["研習",55],["申請",45],["最新",35],["公告",35],["附件",25],["盆景",18]]},
 {name:"高手揪派營運", plan:"ChatGPT → Canva → LINE OA", reason:"先產生課表、預約回覆或行銷文案，再做圖並發布到 LINE OA。", terms:[["高手",80],["揪派",80],["課表",75],["預約",70],["瑜伽",60],["有氧",60],["會員",45],["LINE",45],["行銷",35]]},
 {name:"穿搭形象", plan:"ChatGPT → Canva → Ideogram / Recraft", reason:"先判斷風格與搭配方向，再做視覺資料庫或形象素材。", terms:[["穿搭",90],["造型",75],["妝",55],["髮型",55],["包包",40],["鞋",35],["形象",35]]},
 {name:"旅遊規劃", plan:"Perplexity → ChatGPT → NotebookLM", reason:"先查最新資訊，再整理成專屬行程與資料庫。", terms:[["旅遊",90],["行程",75],["景點",65],["住宿",60],["交通",55],["機票",45]]},
 {name:"長文件整理", plan:"Claude → ChatGPT → Google Docs", reason:"長文、PDF、合約與報告先用 Claude 摘要，再用 ChatGPT 改成可用文件。", terms:[["PDF",90],["長文",80],["合約",75],["報告",65],["摘要",55],["文件",40]]},
 {name:"設計與海報", plan:"Canva → Recraft → Ideogram", reason:"視覺成品優先用設計工具處理，適合海報、社群圖與品牌素材。", terms:[["海報",90],["社群圖",80],["設計",65],["圖片",45],["品牌",35]]},
 {name:"簡報提案", plan:"Gamma → Canva → ChatGPT", reason:"先產生簡報架構，再美化版面與補文案。", terms:[["簡報",90],["投影片",85],["提案",65],["簡報檔",65]]},
 {name:"影片製作", plan:"Kling → Hailuo → CapCut", reason:"先生成影片畫面，再剪輯、加字幕與整理發布版本。", terms:[["影片",95],["短影音",90],["動畫",70],["字幕",45],["剪輯",45]]},
 {name:"音樂配樂", plan:"Suno → Udio", reason:"適合生成活動歌曲、背景音樂與短影音配樂。", terms:[["音樂",90],["歌曲",75],["配樂",75],["主題曲",60]]},
 {name:"配音旁白", plan:"ElevenLabs → TTSMaker", reason:"適合影片旁白、活動語音與文字轉語音。", terms:[["配音",90],["旁白",85],["語音",65],["文字轉語音",80]]},
 {name:"自動化歸檔", plan:"Make → Google Drive → Notion", reason:"適合把資料自動分類、寫入表格或同步到資料庫。", terms:[["自動化",90],["歸檔",80],["串接",75],["倉庫",50],["webhook",55],["資料庫",45]]},
 {name:"網站部署", plan:"ChatGPT → GitHub Pages → Bolt.new", reason:"適合免費建構、修改與部署網站。", terms:[["網站",90],["GitHub",80],["部署",70],["程式",55],["系統",35]]}
];
function recommend(text){
 const t=(text||"").trim(); if(!t) return "請先輸入任務。";
 const normalized=t.toLowerCase();
 const ranked=RECOMMEND_RULES.map(rule=>{
  const matched=[];
  const score=rule.terms.reduce((sum,[term,weight])=>{
   if(normalized.includes(String(term).toLowerCase())){
    matched.push(term);
    return sum+weight;
   }
   return sum;
  },0);
  return {...rule,score,matched};
 }).filter(rule=>rule.score>0).sort((a,b)=>b.score-a.score);
 const hit=ranked[0] || {name:"一般任務拆解", plan:"ChatGPT", reason:"先拆解任務，再決定是否轉去其他 AI。", score:0, matched:[]};
 const evidence=hit.matched.length ? `<br>判斷依據：${hit.name}（${hit.matched.slice(0,4).join("、")}）` : "";
 return `建議使用：${hit.plan}<br>原因：${hit.reason}${evidence}${historyLinksFor(t)}${toolLinksFor(hit.plan)}`;
}
const TOOL_LINKS = [
 ["Google Drive","https://drive.google.com"],
 ["Google Sheets","https://docs.google.com/spreadsheets"],
 ["Google Docs","https://docs.google.com/document"],
 ["LINE OA","https://manager.line.biz"],
 ["GitHub Pages","https://docs.github.com/pages"],
 ["NotebookLM","https://notebooklm.google.com"],
 ["Perplexity","https://www.perplexity.ai"],
 ["ChatGPT","https://chatgpt.com"],
 ["Claude","https://claude.ai"],
 ["Gemini","https://gemini.google.com"],
 ["Canva","https://www.canva.com"],
 ["Gamma","https://gamma.app"],
 ["Ideogram","https://ideogram.ai"],
 ["Recraft","https://www.recraft.ai"],
 ["Kling","https://klingai.com"],
 ["Hailuo","https://hailuoai.video"],
 ["CapCut","https://www.capcut.com"],
 ["Suno","https://suno.com"],
 ["Udio","https://www.udio.com"],
 ["ElevenLabs","https://elevenlabs.io"],
 ["Make","https://www.make.com"],
 ["Notion","https://www.notion.so"],
 ["Bolt.new","https://bolt.new"]
];
function toolLinksFor(plan){
 const links=[];
 TOOL_LINKS.forEach(([name,url])=>{
  if(plan.includes(name) && !links.some(item=>item.url===url)) links.push({name,url,order:plan.indexOf(name)});
 });
 if(!links.length) return "";
 links.sort((a,b)=>a.order-b.order);
 return `<div class="tool-links">${links.map(item=>`<a href="${item.url}" target="_blank" rel="noopener">開啟 ${item.name}</a>`).join("")}</div>`;
}
function loadHistoryLinks(){
 try{return JSON.parse(localStorage.getItem(HISTORY_LINKS_KEY) || "{}");}
 catch{return {};}
}
function saveHistoryLinks(links){
 localStorage.setItem(HISTORY_LINKS_KEY, JSON.stringify(links));
}
function safeUrl(url){
 const value=String(url || "").trim();
 return /^https?:\/\//.test(value) ? value : "";
}
function historyLinksFor(task){
 const q=encodeURIComponent(task || "");
 const saved=loadHistoryLinks();
 const links=[
  {name:"搜尋 Google Docs", url:`https://docs.google.com/document/u/0/?q=${q}`},
  {name:"搜尋 Google Drive", url:`https://drive.google.com/drive/search?q=${q}`},
  {name:"開啟 Notion", url:"https://www.notion.so"}
 ];
 const notion=safeUrl(saved.notionUrl);
 const drive=safeUrl(saved.driveUrl);
 if(notion) links.unshift({name:"我的 Notion 資料庫", url:notion});
 if(drive) links.unshift({name:"我的雲端資料夾", url:drive});
 return `<div class="history-links"><strong>建議先找自己的歷史資料</strong><p>先查看妳在 Notion、Google Docs 或雲端資料夾裡是否已有相關內容，再決定要不要請 AI 整理。</p><div class="tool-links">${links.map(item=>`<a href="${item.url}" target="_blank" rel="noopener">${item.name}</a>`).join("")}</div></div>`;
}
function classify(text){
 const t=(text||"").trim(); if(!t) return "請先貼上資料。";
 if(/補助|公文|核銷|研習|盆景/.test(t)) return "建議歸檔：🌳 高樹鄉盆景協會";
 if(/課表|預約|瑜伽|有氧|高手|LINE/.test(t)) return "建議歸檔：💪 高手揪派";
 if(/穿搭|妝|包|鞋|造型|髮/.test(t)) return "建議歸檔：👗 穿搭／形象設計";
 if(/旅遊|住宿|景點|交通|行程/.test(t)) return "建議歸檔：✈️ 旅遊規劃";
 if(/AI|GitHub|提示詞|自動化/.test(t)) return "建議歸檔：🧠 AI 學習";
 if(t.startsWith("http")) return "建議歸檔：🔖 待整理網址";
 return "建議歸檔：🏠 個人生活／待分類";
}
function boot(){
 updateClock(); setInterval(updateClock,1000);
 const rb=document.querySelector("#recommendBtn");
 if(rb) rb.addEventListener("click",()=>{const box=document.querySelector("#recommendResult"); box.innerHTML=recommend(document.querySelector("#taskInput").value); box.classList.remove("hidden");});
 document.querySelectorAll("[data-task]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelector("#taskInput").value=btn.dataset.task; if(rb) rb.click();}));
 const cb=document.querySelector("#classifyBtn");
 if(cb) cb.addEventListener("click",()=>{const box=document.querySelector("#classifyResult"); box.innerHTML=classify(document.querySelector("#inboxText").value); box.classList.remove("hidden");});
 bootHistoryLinks();
}
function bootHistoryLinks(){
 const saveBtn=document.querySelector("#saveHistoryLinksBtn");
 if(!saveBtn) return;
 const saved=loadHistoryLinks();
 const notionInput=document.querySelector("#historyNotionUrl");
 const driveInput=document.querySelector("#historyDriveUrl");
 notionInput.value=saved.notionUrl || "";
 driveInput.value=saved.driveUrl || "";
 updateHistorySettingsUi(saved);
 saveBtn.addEventListener("click",()=>{
  const links={notionUrl:notionInput.value.trim(),driveUrl:driveInput.value.trim()};
  saveHistoryLinks(links);
  updateHistorySettingsUi(links);
  const box=document.querySelector("#historySaveResult");
  box.textContent="已儲存，下一次判斷會顯示妳自己的資料連結。";
  box.classList.remove("hidden");
 });
}
function updateHistorySettingsUi(links){
 const notion=safeUrl(links.notionUrl);
 const drive=safeUrl(links.driveUrl);
 const notionStatus=document.querySelector("#historyNotionStatus");
 const driveStatus=document.querySelector("#historyDriveStatus");
 const notionOpen=document.querySelector("#openHistoryNotion");
 const driveOpen=document.querySelector("#openHistoryDrive");
 if(notionStatus) notionStatus.textContent=notion ? "已設定" : "尚未設定";
 if(driveStatus) driveStatus.textContent=drive ? "已設定" : "尚未設定";
 if(notionOpen) notionOpen.href=notion || "https://www.notion.so";
 if(driveOpen) driveOpen.href=drive || "https://drive.google.com";
}
document.addEventListener("DOMContentLoaded",()=>{
 boot();
 const sb=document.querySelector("#securityBtn");
 if(sb) sb.addEventListener("click",()=>{
   const box=document.querySelector("#securityResult");
   box.innerHTML=securityCheck(document.querySelector("#securityInput").value);
   box.classList.remove("hidden");
 });
});


function securityCheck(text){
 const t=(text||"").trim().toLowerCase();
 if(!t) return "請先貼上檔名、網址或來源描述。";
 const high=[".exe",".msi",".bat",".cmd",".scr",".js",".vbs",".apk",".dmg",".pkg",".docm",".xlsm",".pptm"];
 const medium=[".zip",".rar",".7z",".iso",".doc",".xls",".ppt"];
 const short=["bit.ly","tinyurl","reurl.cc","goo.gl","t.co"];
 if(high.some(x=>t.includes(x))) return "風險等級：高。<br>建議：不要直接開啟。先用 VirusTotal / Jotti 掃描；如果是陌生來源，直接刪除或隔離。";
 if(medium.some(x=>t.includes(x))) return "風險等級：中。<br>建議：先確認來源，再掃描。壓縮檔與舊版 Office 檔案尤其要小心。";
 if(short.some(x=>t.includes(x))) return "風險等級：中高。<br>建議：短網址先用 Google Safe Browsing 或 VirusTotal 檢查，不要直接登入或下載。";
 if(t.includes("陌生")||t.includes("不明")||t.includes("急")||t.includes("付款")||t.includes("登入")) return "風險等級：中高。<br>建議：先不要開啟或輸入帳密，檢查寄件者與網址。";
 if(t.includes(".pdf")||t.includes(".jpg")||t.includes(".png")||t.includes(".heic")) return "風險等級：低到中。<br>建議：仍要確認來源；陌生 PDF 先掃描，不要點內部連結。";
 return "風險等級：未明。<br>建議：先確認來源、檢查副檔名，再用 VirusTotal 掃描後才開啟。";
}


function searchMode(mode, q){
 const query=encodeURIComponent(q||"");
 const urls={
  latest:`https://www.perplexity.ai/search?q=${query}`,
  official:`https://www.google.com/search?q=${query}`,
  scholar:`https://scholar.google.com/scholar?q=${query}`,
  youtube:`https://www.youtube.com/results?search_query=${query}`,
  reddit:`https://www.google.com/search?q=site%3Areddit.com+${query}`,
  drive:`https://drive.google.com`
 };
 return urls[mode] || urls.official;
}
document.addEventListener("DOMContentLoaded",()=>{
 const searchBtn=document.querySelector("#searchBtn");
 if(searchBtn) searchBtn.addEventListener("click",()=>{
   const mode=document.querySelector("#searchMode").value;
   const q=document.querySelector("#searchInput").value;
   window.open(searchMode(mode,q),"_blank");
 });
});

const BONSAI_KEY = "juliet_bonsai_records_v1";
const BONSAI_SCHEMA = {
  category: "補助 / 活動 / 研習 / 公文 / 核銷 / 會員 / 其他",
  title: "資料標題",
  owner: "負責人",
  dueDate: "期限 YYYY-MM-DD",
  status: "待處理 / 進行中 / 待補件 / 已完成",
  amount: "金額",
  location: "Google Drive / Notion / 紙本資料夾",
  note: "備註與附件清單",
  createdAt: "建立時間"
};

function bonsaiLoad(){
 try{return JSON.parse(localStorage.getItem(BONSAI_KEY) || "[]");}
 catch{return [];}
}
function bonsaiSave(records){
 localStorage.setItem(BONSAI_KEY, JSON.stringify(records));
}
function bonsaiMoney(n){
 return Number(n || 0).toLocaleString("zh-TW");
}
function bonsaiEscape(text){
 return String(text || "").replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}
function bonsaiClassifyText(text){
 const t=(text||"").trim();
 let category="其他";
 if(/補助|申請|計畫|經費|審查/.test(t)) category="補助";
 else if(/活動|展覽|開幕|市集|成果/.test(t)) category="活動";
 else if(/研習|課程|講師|報名|上課/.test(t)) category="研習";
 else if(/公文|來函|函文|發文|收文/.test(t)) category="公文";
 else if(/核銷|收據|發票|憑證|付款/.test(t)) category="核銷";
 else if(/會員|理監事|名冊|會費/.test(t)) category="會員";
 let status=/缺|補件|退件/.test(t) ? "待補件" : (/完成|結案|已送出/.test(t) ? "已完成" : "待處理");
 const next={
  "補助":"建立申請資料夾，補齊計畫書、經費表與附件清單。",
  "活動":"確認日期、場地、宣傳圖與報名方式。",
  "研習":"整理講師、課程表、報名名單與簽到表。",
  "公文":"登錄收文日期，設定回覆期限與承辦人。",
  "核銷":"檢查收據、發票、成果照片與支出明細。",
  "會員":"更新名冊、聯絡方式、會費與出席紀錄。",
  "其他":"先歸入待分類，再補上負責人與存放位置。"
 }[category];
 return {category, status, next};
}
function bonsaiFiltered(records){
 const q=(document.querySelector("#bonsaiSearch")?.value||"").trim().toLowerCase();
 const cat=document.querySelector("#bonsaiFilterCategory")?.value||"";
 const status=document.querySelector("#bonsaiFilterStatus")?.value||"";
 return records.filter(r=>{
  const hay=[r.category,r.title,r.owner,r.status,r.location,r.note].join(" ").toLowerCase();
  return (!q || hay.includes(q)) && (!cat || r.category===cat) && (!status || r.status===status);
 });
}
function bonsaiRender(){
 const records=bonsaiLoad();
 const rows=bonsaiFiltered(records);
 const body=document.querySelector("#bonsaiTableBody");
 const empty=document.querySelector("#bonsaiEmpty");
 if(!body) return;
 const now=new Date();
 const soon=new Date(now.getFullYear(), now.getMonth(), now.getDate()+7);
 document.querySelector("#bonsaiTotal").textContent=records.length;
 document.querySelector("#bonsaiOpen").textContent=records.filter(r=>r.status!=="已完成").length;
 document.querySelector("#bonsaiDue").textContent=records.filter(r=>{
  if(!r.dueDate || r.status==="已完成") return false;
  const d=new Date(r.dueDate+"T00:00:00");
  return d>=new Date(now.getFullYear(), now.getMonth(), now.getDate()) && d<=soon;
 }).length;
 document.querySelector("#bonsaiGrantTotal").textContent=bonsaiMoney(records.filter(r=>r.category==="補助").reduce((sum,r)=>sum+Number(r.amount||0),0));
 empty.classList.toggle("hidden", rows.length>0);
 body.innerHTML=rows.map(r=>{
  const cls=r.status==="已完成" ? "status-done" : (r.status==="待補件" ? "status-wait" : "");
  return `<tr>
   <td>${bonsaiEscape(r.category)}</td>
   <td><div class="table-title">${bonsaiEscape(r.title)}</div><div class="table-note">${bonsaiEscape(r.note)}</div></td>
   <td>${bonsaiEscape(r.owner || "未指定")}</td>
   <td>${bonsaiEscape(r.dueDate || "未設定")}</td>
   <td><span class="status-pill ${cls}">${bonsaiEscape(r.status)}</span></td>
   <td>${bonsaiMoney(r.amount)}</td>
   <td><button class="secondary-btn" data-bonsai-done="${r.id}">完成</button> <button class="danger-btn" data-bonsai-delete="${r.id}">刪除</button></td>
  </tr>`;
 }).join("");
}
function bonsaiRecordFromForm(){
 return {
  id: String(Date.now()),
  category: document.querySelector("#bonsaiCategory").value,
  status: document.querySelector("#bonsaiStatus").value,
  title: document.querySelector("#bonsaiTitle").value.trim(),
  owner: document.querySelector("#bonsaiOwner").value.trim(),
  dueDate: document.querySelector("#bonsaiDueDate").value,
  amount: document.querySelector("#bonsaiAmount").value,
  location: document.querySelector("#bonsaiLocation").value.trim(),
  note: document.querySelector("#bonsaiNote").value.trim(),
  createdAt: new Date().toISOString()
 };
}
function bonsaiDownload(name, text, type){
 const blob=new Blob([text],{type});
 const url=URL.createObjectURL(blob);
 const a=document.createElement("a");
 a.href=url; a.download=name; a.click();
 URL.revokeObjectURL(url);
}
function bonsaiExportCsv(){
 const records=bonsaiLoad();
 const headers=["類別","標題","負責人","期限","狀態","金額","存放位置","備註","建立時間"];
 const lines=[headers, ...records.map(r=>[r.category,r.title,r.owner,r.dueDate,r.status,r.amount,r.location,r.note,r.createdAt])];
 const csv=lines.map(row=>row.map(v=>`"${String(v||"").replace(/"/g,'""')}"`).join(",")).join("\n");
 bonsaiDownload("bonsai-database.csv", "\ufeff"+csv, "text/csv;charset=utf-8");
}
function bonsaiExportJson(){
 bonsaiDownload("bonsai-database.json", JSON.stringify(bonsaiLoad(), null, 2), "application/json;charset=utf-8");
}
function bonsaiCopy(text){
 if(navigator.clipboard) return navigator.clipboard.writeText(text);
 const box=document.createElement("textarea");
 box.value=text; document.body.appendChild(box); box.select(); document.execCommand("copy"); box.remove();
 return Promise.resolve();
}
function bootBonsai(){
 if(!document.querySelector("#bonsaiForm")) return;
 const schemaBox=document.querySelector("#bonsaiSchema");
 schemaBox.textContent=JSON.stringify(BONSAI_SCHEMA, null, 2);
 document.querySelector("#bonsaiForm").addEventListener("submit", e=>{
  e.preventDefault();
  const record=bonsaiRecordFromForm();
  if(!record.title) return;
  const records=bonsaiLoad();
  records.unshift(record);
  bonsaiSave(records);
  e.target.reset();
  bonsaiRender();
 });
 document.querySelector("#bonsaiDemoBtn").addEventListener("click", ()=>{
  document.querySelector("#bonsaiCategory").value="補助";
  document.querySelector("#bonsaiStatus").value="進行中";
  document.querySelector("#bonsaiTitle").value="年度盆景研習補助申請";
  document.querySelector("#bonsaiOwner").value="總幹事";
  document.querySelector("#bonsaiAmount").value="50000";
  document.querySelector("#bonsaiLocation").value="Google Drive / 盆景協會 / 補助";
  document.querySelector("#bonsaiNote").value="需準備計畫書、課程表、講師資料、經費表與成果照片。";
 });
 document.querySelector("#bonsaiClassifyBtn").addEventListener("click", ()=>{
  const text=document.querySelector("#bonsaiInbox").value;
  const res=bonsaiClassifyText(text);
  const box=document.querySelector("#bonsaiAutomationResult");
  box.innerHTML=`建議類別：${res.category}<br>建議狀態：${res.status}<br>下一步：${res.next}`;
  box.classList.remove("hidden");
 });
 document.querySelector("#bonsaiCreateFromInboxBtn").addEventListener("click", ()=>{
  const text=document.querySelector("#bonsaiInbox").value.trim();
  if(!text) return;
  const res=bonsaiClassifyText(text);
  const records=bonsaiLoad();
  records.unshift({id:String(Date.now()),category:res.category,status:res.status,title:text.slice(0,32),owner:"",dueDate:"",amount:"",location:"待建立",note:`${text}\n下一步：${res.next}`,createdAt:new Date().toISOString()});
  bonsaiSave(records);
  document.querySelector("#bonsaiInbox").value="";
  document.querySelector("#bonsaiAutomationResult").classList.add("hidden");
  bonsaiRender();
 });
 ["#bonsaiSearch","#bonsaiFilterCategory","#bonsaiFilterStatus"].forEach(sel=>{
  document.querySelector(sel).addEventListener("input", bonsaiRender);
 });
 document.querySelector("#bonsaiTableBody").addEventListener("click", e=>{
  const done=e.target.closest("[data-bonsai-done]");
  const del=e.target.closest("[data-bonsai-delete]");
  if(done){
   const records=bonsaiLoad().map(r=>r.id===done.dataset.bonsaiDone ? {...r,status:"已完成"} : r);
   bonsaiSave(records); bonsaiRender();
  }
  if(del && confirm("確定刪除這筆資料？")){
   bonsaiSave(bonsaiLoad().filter(r=>r.id!==del.dataset.bonsaiDelete));
   bonsaiRender();
  }
 });
 document.querySelector("#bonsaiExportCsvBtn").addEventListener("click", bonsaiExportCsv);
 document.querySelector("#bonsaiExportJsonBtn").addEventListener("click", bonsaiExportJson);
 document.querySelector("#bonsaiCopySchemaBtn").addEventListener("click", ()=>{
  bonsaiCopy(JSON.stringify(BONSAI_SCHEMA, null, 2));
 });
 bonsaiRender();
}
document.addEventListener("DOMContentLoaded", bootBonsai);

const GOSU_KEY = "juliet_gosu_records_v1";
const GOSU_SCHEMA = {
  category: "課程 / 預約 / 會員 / 收款 / LINE OA / 行銷 / 其他",
  title: "資料標題",
  owner: "學員或負責人",
  date: "日期 YYYY-MM-DD",
  time: "時間 HH:mm",
  status: "待處理 / 已確認 / 待付款 / 已完成",
  amount: "金額",
  source: "LINE OA / IG / 現場 / 轉介紹",
  note: "備註與下一步",
  createdAt: "建立時間"
};

function gosuLoad(){
 try{return JSON.parse(localStorage.getItem(GOSU_KEY) || "[]");}
 catch{return [];}
}
function gosuSave(records){
 localStorage.setItem(GOSU_KEY, JSON.stringify(records));
}
function gosuClassifyText(text){
 const t=(text||"").trim();
 let category="其他";
 if(/課|瑜伽|有氧|教練|團課|私教|體驗/.test(t)) category="課程";
 if(/預約|報名|想約|時間|幾點/.test(t)) category="預約";
 if(/會員|續約|月卡|堂卡|資料|生日/.test(t)) category="會員";
 if(/付款|匯款|現金|刷卡|收款|欠款|費用/.test(t)) category="收款";
 if(/LINE|官方帳號|廣播|訊息|客服/.test(t)) category="LINE OA";
 if(/IG|貼文|限動|活動|文案|招生|宣傳/.test(t)) category="行銷";
 let status=/付款|欠款|未付|待匯/.test(t) ? "待付款" : (/確認|已約|已報名|完成/.test(t) ? "已確認" : "待處理");
 const next={
  "課程":"確認課程名稱、教練、日期時間與可報名名額。",
  "預約":"回覆可預約時段，確認姓名、電話與是否已付款。",
  "會員":"更新會員資料、方案、到期日與聯絡方式。",
  "收款":"核對金額與付款方式，完成後標記為已完成。",
  "LINE OA":"整理成可發送訊息，安排廣播或一對一回覆。",
  "行銷":"整理成貼文主題、CTA、圖片需求與發布日期。",
  "其他":"先放入待處理，再補上類別與負責人。"
 }[category];
 return {category, status, next};
}
function gosuFiltered(records){
 const q=(document.querySelector("#gosuSearch")?.value||"").trim().toLowerCase();
 const cat=document.querySelector("#gosuFilterCategory")?.value||"";
 const status=document.querySelector("#gosuFilterStatus")?.value||"";
 return records.filter(r=>{
  const hay=[r.category,r.title,r.owner,r.status,r.source,r.note].join(" ").toLowerCase();
  return (!q || hay.includes(q)) && (!cat || r.category===cat) && (!status || r.status===status);
 });
}
function gosuRender(){
 const records=gosuLoad();
 const rows=gosuFiltered(records);
 const body=document.querySelector("#gosuTableBody");
 const empty=document.querySelector("#gosuEmpty");
 if(!body) return;
 const now=new Date();
 const thisMonth=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}`;
 document.querySelector("#gosuTotal").textContent=records.length;
 document.querySelector("#gosuBookings").textContent=records.filter(r=>r.category==="預約" && r.status!=="已完成").length;
 document.querySelector("#gosuMembers").textContent=records.filter(r=>r.category==="會員").length;
 document.querySelector("#gosuRevenue").textContent=bonsaiMoney(records.filter(r=>r.category==="收款" && r.date && r.date.startsWith(thisMonth)).reduce((sum,r)=>sum+Number(r.amount||0),0));
 empty.classList.toggle("hidden", rows.length>0);
 body.innerHTML=rows.map(r=>{
  const cls=r.status==="已完成" || r.status==="已確認" ? "status-done" : (r.status==="待付款" ? "status-wait" : "");
  const dateTime=[r.date || "未設定", r.time || ""].join(" ").trim();
  return `<tr>
   <td>${bonsaiEscape(r.category)}</td>
   <td><div class="table-title">${bonsaiEscape(r.title)}</div><div class="table-note">${bonsaiEscape(r.note)}</div></td>
   <td>${bonsaiEscape(r.owner || "未指定")}<div class="table-note">${bonsaiEscape(r.source || "")}</div></td>
   <td>${bonsaiEscape(dateTime)}</td>
   <td><span class="status-pill ${cls}">${bonsaiEscape(r.status)}</span></td>
   <td>${bonsaiMoney(r.amount)}</td>
   <td><button class="secondary-btn" data-gosu-done="${r.id}">完成</button> <button class="danger-btn" data-gosu-delete="${r.id}">刪除</button></td>
  </tr>`;
 }).join("");
}
function gosuRecordFromForm(){
 return {
  id: String(Date.now()),
  category: document.querySelector("#gosuCategory").value,
  status: document.querySelector("#gosuStatus").value,
  title: document.querySelector("#gosuTitle").value.trim(),
  owner: document.querySelector("#gosuOwner").value.trim(),
  date: document.querySelector("#gosuDate").value,
  time: document.querySelector("#gosuTime").value,
  amount: document.querySelector("#gosuAmount").value,
  source: document.querySelector("#gosuSource").value.trim(),
  note: document.querySelector("#gosuNote").value.trim(),
  createdAt: new Date().toISOString()
 };
}
function gosuExportCsv(){
 const records=gosuLoad();
 const headers=["類別","標題","學員或負責人","日期","時間","狀態","金額","來源","備註","建立時間"];
 const lines=[headers, ...records.map(r=>[r.category,r.title,r.owner,r.date,r.time,r.status,r.amount,r.source,r.note,r.createdAt])];
 const csv=lines.map(row=>row.map(v=>`"${String(v||"").replace(/"/g,'""')}"`).join(",")).join("\n");
 bonsaiDownload("gosu-database.csv", "\ufeff"+csv, "text/csv;charset=utf-8");
}
function gosuExportJson(){
 bonsaiDownload("gosu-database.json", JSON.stringify(gosuLoad(), null, 2), "application/json;charset=utf-8");
}
function gosuSelectCourse(btn){
 const course=btn.dataset.bookCourse || "";
 const date=btn.dataset.bookDate || "";
 const time=btn.dataset.bookTime || "";
 document.querySelectorAll("[data-book-course]").forEach(item=>item.classList.remove("selected"));
 btn.classList.add("selected");
 document.querySelector("#gosuCategory").value="預約";
 document.querySelector("#gosuStatus").value="待處理";
 document.querySelector("#gosuTitle").value=`預約｜${course}`;
 document.querySelector("#gosuDate").value=date;
 document.querySelector("#gosuTime").value=time;
 document.querySelector("#gosuSource").value="網站課表";
 document.querySelector("#gosuNote").value=`客人從七月課程表點選預約：${course}，${date} ${time}。`;
 const notice=document.querySelector("#courseBookingNotice");
 if(notice){
  notice.textContent=`已選擇 ${date} ${time}｜${course}，請在下方填入學員姓名後儲存預約。`;
  notice.classList.remove("hidden");
 }
 document.querySelector("#gosuOwner").focus();
 document.querySelector("#gosuForm").scrollIntoView({behavior:"smooth", block:"center"});
}
function bootGosu(){
 if(!document.querySelector("#gosuForm")) return;
 document.querySelector("#gosuSchema").textContent=JSON.stringify(GOSU_SCHEMA, null, 2);
 document.querySelectorAll("[data-book-course]").forEach(btn=>{
  btn.addEventListener("click", ()=>gosuSelectCourse(btn));
 });
 document.querySelector("#gosuForm").addEventListener("submit", e=>{
  e.preventDefault();
  const record=gosuRecordFromForm();
  if(!record.title) return;
  const records=gosuLoad();
  records.unshift(record);
  gosuSave(records);
  e.target.reset();
  gosuRender();
 });
 document.querySelector("#gosuDemoBtn").addEventListener("click", ()=>{
  document.querySelector("#gosuCategory").value="預約";
  document.querySelector("#gosuStatus").value="待付款";
  document.querySelector("#gosuTitle").value="小美週三瑜伽體驗課";
  document.querySelector("#gosuOwner").value="小美";
  document.querySelector("#gosuTime").value="19:30";
  document.querySelector("#gosuAmount").value="300";
  document.querySelector("#gosuSource").value="IG";
  document.querySelector("#gosuNote").value="從 IG 詢問體驗課，需回覆付款方式與上課注意事項。";
 });
 document.querySelector("#gosuClassifyBtn").addEventListener("click", ()=>{
  const text=document.querySelector("#gosuInbox").value;
  const res=gosuClassifyText(text);
  const box=document.querySelector("#gosuAutomationResult");
  box.innerHTML=`建議類別：${res.category}<br>建議狀態：${res.status}<br>下一步：${res.next}`;
  box.classList.remove("hidden");
 });
 document.querySelector("#gosuCreateFromInboxBtn").addEventListener("click", ()=>{
  const text=document.querySelector("#gosuInbox").value.trim();
  if(!text) return;
  const res=gosuClassifyText(text);
  const records=gosuLoad();
  records.unshift({id:String(Date.now()),category:res.category,status:res.status,title:text.slice(0,32),owner:"",date:"",time:"",amount:"",source:"待確認",note:`${text}\n下一步：${res.next}`,createdAt:new Date().toISOString()});
  gosuSave(records);
  document.querySelector("#gosuInbox").value="";
  document.querySelector("#gosuAutomationResult").classList.add("hidden");
  gosuRender();
 });
 ["#gosuSearch","#gosuFilterCategory","#gosuFilterStatus"].forEach(sel=>{
  document.querySelector(sel).addEventListener("input", gosuRender);
 });
 document.querySelector("#gosuTableBody").addEventListener("click", e=>{
  const done=e.target.closest("[data-gosu-done]");
  const del=e.target.closest("[data-gosu-delete]");
  if(done){
   gosuSave(gosuLoad().map(r=>r.id===done.dataset.gosuDone ? {...r,status:"已完成"} : r));
   gosuRender();
  }
  if(del && confirm("確定刪除這筆資料？")){
   gosuSave(gosuLoad().filter(r=>r.id!==del.dataset.gosuDelete));
   gosuRender();
  }
 });
 document.querySelector("#gosuExportCsvBtn").addEventListener("click", gosuExportCsv);
 document.querySelector("#gosuExportJsonBtn").addEventListener("click", gosuExportJson);
 document.querySelector("#gosuCopySchemaBtn").addEventListener("click", ()=>{
  bonsaiCopy(JSON.stringify(GOSU_SCHEMA, null, 2));
 });
 gosuRender();
}
document.addEventListener("DOMContentLoaded", bootGosu);
