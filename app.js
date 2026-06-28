
const AI_TOOLS = [["ChatGPT", "總指揮／規劃／程式／文案", "https://chatgpt.com"], ["Claude", "長文件／PDF／文字潤飾", "https://claude.ai"], ["Gemini", "Google 生態／文件／試算表", "https://gemini.google.com"], ["Perplexity", "最新資料搜尋／來源查證", "https://www.perplexity.ai"], ["NotebookLM", "知識庫／文件問答", "https://notebooklm.google.com"], ["Canva", "社群圖／海報／簡報", "https://www.canva.com"], ["Gamma", "AI 簡報", "https://gamma.app"], ["Napkin AI", "流程圖／圖解", "https://www.napkin.ai"], ["Figma", "UI 設計／版面", "https://www.figma.com"], ["FigJam", "白板／流程討論", "https://www.figma.com/figjam/"], ["Excalidraw", "手繪感流程圖", "https://excalidraw.com"], ["Ideogram", "文字生圖／海報字", "https://ideogram.ai"], ["Recraft", "品牌視覺／向量風格", "https://www.recraft.ai"], ["Krea", "影像生成與強化", "https://www.krea.ai"], ["Leonardo AI", "生圖／設計素材", "https://leonardo.ai"], ["Adobe Firefly", "商用友善影像生成", "https://firefly.adobe.com"], ["Kling AI", "AI 影片生成", "https://klingai.com"], ["Hailuo AI", "AI 動畫影片", "https://hailuoai.video"], ["Pika", "AI 影片生成", "https://pika.art"], ["Runway", "AI 影片工具", "https://runwayml.com"], ["CapCut", "剪輯／字幕／短影音", "https://www.capcut.com"], ["Suno", "AI 音樂", "https://suno.com"], ["Udio", "AI 音樂", "https://www.udio.com"], ["ElevenLabs", "AI 配音", "https://elevenlabs.io"], ["TTSMaker", "免費文字轉語音", "https://ttsmaker.com"], ["Make", "自動化串接", "https://www.make.com"], ["n8n", "自動化流程", "https://n8n.io"], ["Zapier", "自動化串接", "https://zapier.com"], ["IFTTT", "簡易自動化", "https://ifttt.com"], ["Notion", "資料庫／任務管理", "https://www.notion.so"], ["Google Drive", "檔案倉庫", "https://drive.google.com"], ["Google Sheets", "表格資料庫", "https://docs.google.com/spreadsheets"], ["Google Docs", "文件撰寫", "https://docs.google.com/document"], ["Google Calendar", "行事曆", "https://calendar.google.com"], ["Gmail", "電子郵件", "https://mail.google.com"], ["LINE OA Manager", "LINE 官方帳號後台", "https://manager.line.biz"], ["GitHub", "程式碼與網頁發布", "https://github.com"], ["GitHub Pages 說明文件", "GitHub Pages 說明", "https://docs.github.com/pages"], ["Bolt.new", "AI 程式開發", "https://bolt.new"], ["Lovable", "AI 建站", "https://lovable.dev"], ["Firebase Studio", "AI 應用程式開發", "https://studio.firebase.google.com"], ["Cloudflare", "免費部署／Workers", "https://www.cloudflare.com"], ["Vercel", "前端部署", "https://vercel.com"], ["Netlify", "前端部署", "https://www.netlify.com"], ["Glide", "無程式應用程式", "https://www.glideapps.com"], ["Airtable", "資料庫表格", "https://airtable.com"], ["Tally", "免費表單", "https://tally.so"], ["Jotform", "表單工具", "https://www.jotform.com"], ["Typeform", "表單體驗", "https://www.typeform.com"], ["TinyWow", "PDF 小工具", "https://tinywow.com"], ["ILovePDF", "PDF 工具", "https://www.ilovepdf.com"], ["Remove.bg", "去背工具", "https://www.remove.bg"], ["Photopea", "免費線上修圖", "https://www.photopea.com"], ["Miro", "白板協作", "https://miro.com"], ["Trello", "看板管理", "https://trello.com"]];
const FEATURES = ["AI 任務判斷", "AI 工具推薦", "AI 收件匣分類", "歸檔位置判斷", "官方工具入口", "專案領域分流", "每日任務提示", "免費工具策略", "GitHub Pages 部署", "手機加入主畫面", "深色介面", "響應式版面", "工作流程卡片", "提示詞庫", "檢查清單", "Google Drive 架構", "Notion 資料庫規劃", "NotebookLM 知識庫規劃", "Make 自動化藍圖", "LINE OA 發布流程", "盆景補助流程", "高手揪派課表流程", "穿搭資料庫", "旅遊規劃流程", "文件整理流程", "PDF 摘要流程", "簡報生成流程", "海報設計流程", "影片生成流程", "配音流程", "音樂流程", "搜尋查證流程", "任務看板", "行事曆規劃", "模板中心", "成效報告", "備份提醒", "隱私提醒", "版本紀錄", "系統路線圖", "功能模組 041", "功能模組 042", "功能模組 043", "功能模組 044", "功能模組 045", "功能模組 046", "功能模組 047", "功能模組 048", "功能模組 049", "功能模組 050", "功能模組 051", "功能模組 052", "功能模組 053", "功能模組 054", "功能模組 055", "功能模組 056", "功能模組 057", "功能模組 058", "功能模組 059", "功能模組 060", "功能模組 061", "功能模組 062", "功能模組 063", "功能模組 064", "功能模組 065", "功能模組 066", "功能模組 067", "功能模組 068", "功能模組 069", "功能模組 070", "功能模組 071", "功能模組 072", "功能模組 073", "功能模組 074", "功能模組 075", "功能模組 076", "功能模組 077", "功能模組 078", "功能模組 079", "功能模組 080", "功能模組 081", "功能模組 082", "功能模組 083", "功能模組 084", "功能模組 085", "功能模組 086", "功能模組 087", "功能模組 088", "功能模組 089", "功能模組 090", "功能模組 091", "功能模組 092", "功能模組 093", "功能模組 094", "功能模組 095", "功能模組 096", "功能模組 097", "功能模組 098", "功能模組 099", "功能模組 100", "功能模組 101", "功能模組 102", "功能模組 103", "功能模組 104", "功能模組 105", "功能模組 106", "功能模組 107", "功能模組 108", "功能模組 109", "功能模組 110", "功能模組 111", "功能模組 112", "功能模組 113", "功能模組 114", "功能模組 115", "功能模組 116", "功能模組 117", "功能模組 118", "功能模組 119", "功能模組 120", "功能模組 121", "功能模組 122", "功能模組 123", "功能模組 124", "功能模組 125", "功能模組 126", "功能模組 127", "功能模組 128", "功能模組 129", "功能模組 130", "功能模組 131", "功能模組 132", "功能模組 133", "功能模組 134", "功能模組 135", "功能模組 136", "功能模組 137", "功能模組 138", "功能模組 139", "功能模組 140", "功能模組 141", "功能模組 142", "功能模組 143", "功能模組 144", "功能模組 145", "功能模組 146", "功能模組 147", "功能模組 148", "功能模組 149", "功能模組 150", "功能模組 151", "功能模組 152", "功能模組 153", "功能模組 154", "功能模組 155", "功能模組 156", "功能模組 157", "功能模組 158", "功能模組 159", "功能模組 160", "功能模組 161", "功能模組 162", "功能模組 163", "功能模組 164", "功能模組 165", "功能模組 166", "功能模組 167", "功能模組 168", "功能模組 169", "功能模組 170", "功能模組 171", "功能模組 172", "功能模組 173", "功能模組 174", "功能模組 175", "功能模組 176", "功能模組 177", "功能模組 178", "功能模組 179", "功能模組 180", "功能模組 181", "功能模組 182", "功能模組 183", "功能模組 184", "功能模組 185", "功能模組 186", "功能模組 187", "功能模組 188", "功能模組 189", "功能模組 190", "功能模組 191", "功能模組 192", "功能模組 193", "功能模組 194", "功能模組 195", "功能模組 196", "功能模組 197", "功能模組 198", "功能模組 199", "功能模組 200"];
function updateClock(){
 const d=new Date();
 const date=document.querySelector("#dateText"); const time=document.querySelector("#timeText");
 if(date) date.textContent=d.toLocaleDateString("zh-TW",{year:"numeric",month:"long",day:"numeric",weekday:"long"});
 if(time) time.textContent=d.toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit"});
}
function recommend(text){
 const t=(text||"").trim(); if(!t) return "請先輸入任務。";
 const rules=[
  [["之前的資料","之前資料","過去資料","舊資料","歷史資料","歷史紀錄","調閱","查找","找資料","找之前"],"Google Drive → NotebookLM → ChatGPT → Google Docs","先從既有雲端資料與知識庫找舊紀錄，再交給 ChatGPT 整理成可用文件。"],
  [["會議紀錄範本","會議記錄範本","會議範本","會議模板","紀錄範本","記錄範本","表單"],"ChatGPT → Google Docs → Google Drive","先產生可直接套用的文字範本，再存成文件與雲端檔案。"],
  [["會議紀錄","會議記錄","會議","紀錄","記錄"],"Google Docs → ChatGPT → Google Drive","先建立或整理會議文件，再用 ChatGPT 協助摘要決議與待辦。"],
  [["盆景","補助","公文","核銷","研習"],"Perplexity → ChatGPT → Claude → Google Drive","先查最新補助，再寫計畫與整理附件。"],
  [["高手","課表","預約","瑜伽","有氧","LINE"],"ChatGPT → Canva → LINE OA","先產生課表與文案，再做圖發布。"],
  [["穿搭","造型","妝","髮型","包包","鞋"],"ChatGPT → Canva → Ideogram / Recraft","先判斷風格，再做視覺資料庫。"],
  [["旅遊","行程","景點","住宿","交通"],"Perplexity → ChatGPT → NotebookLM","先查最新資訊，再排專屬行程。"],
  [["PDF","長文","文件","合約","報告"],"Claude","最適合長文件整理與摘要。"],
  [["海報","社群圖","設計"],"Canva / Recraft / Ideogram","適合快速做視覺成品。"],
  [["簡報","投影片","提案"],"Gamma → Canva","先做架構，再美化版面。"],
  [["影片","短影音","動畫"],"Kling / Hailuo → CapCut","先生成畫面，再剪輯字幕。"],
  [["音樂","歌曲","配樂"],"Suno / Udio","適合生成配樂與活動歌曲。"],
  [["配音","旁白"],"ElevenLabs","適合影片旁白與語音。"],
  [["自動化","歸檔","串接","倉庫"],"Make → Google Drive → Notion","適合免費資料流與自動分類。"],
  [["網站","GitHub","程式","系統"],"ChatGPT → GitHub Pages / Bolt.new","適合免費建構個人 AI OS。"]
 ];
 const hit=rules.find(r=>r[0].some(k=>t.includes(k)));
 const plan=hit ? hit[1] : "ChatGPT";
 const reason=hit ? hit[2] : "先拆解任務，再決定是否轉去其他 AI。";
 return `建議使用：${plan}<br>原因：${reason}${toolLinksFor(plan)}`;
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
function bootGosu(){
 if(!document.querySelector("#gosuForm")) return;
 document.querySelector("#gosuSchema").textContent=JSON.stringify(GOSU_SCHEMA, null, 2);
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
