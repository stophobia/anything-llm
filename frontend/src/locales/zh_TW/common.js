// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      title: "歡迎使用",
      getStarted: "開始使用",
    },
    llm: {
      title: "LLM 偏好",
      description:
        "AnythingLLM 可以與多家 LLM 提供商合作。這將是處理聊天的服務。",
    },
    userSetup: {
      title: "使用者設定",
      description: "配置您的使用者設定。",
      howManyUsers: "將有多少使用者使用此實例？",
      justMe: "只有我",
      myTeam: "我的團隊",
      instancePassword: "實例密碼",
      setPassword: "您想要設定密碼嗎？",
      passwordReq: "密碼必須至少包含 8 個字元。",
      passwordWarn: "保存此密碼很重要，因為沒有恢復方法。",
      adminUsername: "管理員帳號使用者名稱",
      adminUsernameReq:
        "使用者名稱必須至少為 6 個字元，並且只能包含小寫字母、數字、底線和連字號，不含空格。",
      adminPassword: "管理員帳號密碼",
      adminPasswordReq: "密碼必須至少包含 8 個字元。",
      teamHint:
        "預設情況下，您將是唯一的管理員。完成入職後，您可以創建和邀請其他人成為使用者或管理員。不要遺失您的密碼，因為只有管理員可以重置密碼。",
    },
    data: {
      title: "資料處理與隱私",
      description: "我們致力於在涉及您的個人資料時提供透明和控制。",
      settingsHint: "這些設定可以隨時在設定中重新配置。",
    },
    survey: {
      title: "歡迎使用 AnythingLLM",
      description: "幫助我們為您的需求打造 AnythingLLM。可選。",
      email: "您的電子郵件是什麼？",
      useCase: "您將如何使用 AnythingLLM？",
      useCaseWork: "用於工作",
      useCasePersonal: "用於個人使用",
      useCaseOther: "其他",
      comment: "您是如何聽說 AnythingLLM 的？",
      commentPlaceholder:
        "Reddit，Twitter，GitHub，YouTube 等 - 讓我們知道您是如何找到我們的！",
      skip: "跳過調查",
      thankYou: "感謝您的反饋！",
    },
    workspace: {
      title: "創建您的第一個工作區",
      description: "創建您的第一個工作區並開始使用 AnythingLLM。",
    },
  },
  common: {
    "workspaces-name": "工作區名稱",
    error: "錯誤",
    success: "成功",
    user: "使用者",
    selection: "模型選擇",
    saving: "儲存中...",
    save: "儲存修改",
    previous: "上一頁",
    next: "下一頁",
    optional: null,
    yes: null,
    no: null,
  },
  settings: {
    title: "系統設定",
    system: "一般設定",
    invites: "邀請管理",
    users: "使用者管理",
    workspaces: "工作區管理",
    "workspace-chats": "工作區對話紀錄",
    customization: "介面自訂",
    "api-keys": "開發者 API",
    llm: "大型語言模型 (LLM)",
    transcription: "語音轉錄",
    embedder: "向量嵌入器",
    "text-splitting": "文字分割與區塊化",
    "voice-speech": "語音與發音",
    "vector-database": "向量資料庫",
    embeds: "對話嵌入",
    "embed-chats": "對話嵌入紀錄",
    security: "安全性設定",
    "event-logs": "事件記錄",
    privacy: "隱私與資料",
    "ai-providers": "AI 服務提供者",
    "agent-skills": "智慧代理人技能",
    admin: "系統管理",
    tools: "工具",
    "experimental-features": "實驗性功能",
    contact: "聯絡支援",
    "browser-extension": "瀏覽器擴充功能",
    "system-prompt-variables": null,
    interface: null,
    branding: null,
  },
  login: {
    "multi-user": {
      welcome: "歡迎使用",
      "placeholder-username": "使用者名稱",
      "placeholder-password": "密碼",
      login: "登入",
      validating: "驗證中...",
      "forgot-pass": "忘記密碼",
      reset: "重設",
    },
    "sign-in": {
      start: "登入您的",
      end: "帳號。",
    },
    "password-reset": {
      title: "重設密碼",
      description: "請在下方提供必要資訊以重設您的密碼。",
      "recovery-codes": "復原碼",
      "recovery-code": "復原碼 {{index}}",
      "back-to-login": "返回登入頁面",
    },
  },
  welcomeMessage: {
    part1:
      "歡迎使用 AnythingLLM，AnythingLLM 是由 Mintplex Labs 開發的開源 AI 工具，它能將任何內容轉換成可供查詢和對話的訓練模型對話機器人。AnythingLLM 採用 BYOK（自備金鑰）軟體模式，除了您想使用的服務之外，本軟體不收取任何訂閱費、費用或其他費用。",
    part2:
      "AnythingLLM 是將 OpenAI、GPT-4、LangChain、PineconeDB、ChromaDB 和其他強大 AI 產品整合在一起的最簡單方法，它能透過簡潔的套件，輕鬆地將您的生產力提高 100 倍。",
    part3:
      "AnythingLLM 可以完全在您的本機電腦上執行，而且使用極少的資源，您甚至不會注意到它的存在！不需要 GPU。同時也支援雲端和企業內部部署。\nAI 工具生態系統日新月異，AnythingLLM 讓使用變得更加簡單。",
    githubIssue: "在 GitHub 上建立 issue ",
    user1: "我該如何開始？",
    part4:
      "很簡單。所有資料集都組織成我們稱之為「工作區」的儲存區。工作區是檔案、文件、圖片、PDF 和其他檔案的儲存區，這些檔案將會被轉換成 LLM 可以理解並在對話中使用的格式。\n\n您可以隨時新增和移除檔案。",
    createWorkspace: "建立您的第一個工作區",
    user2: "這像是 AI Dropbox 之類的嗎？那對話功能呢？它是一個對話機器人嗎？",
    part5:
      "AnythingLLM 不僅是一個更聰明的 Dropbox。\n\nAnythingLLM 提供兩種與您的資料互動的方式：\n\n<i>查詢：</i> 您的對話將會根據工作區中可存取的文件內容，傳回資料或推論。新增更多文件到工作區會讓它變得更聰明！\n\n<i>對話：</i> 您的文件加上持續進行中的對話紀錄，兩者會同時貢獻給 LLM 的知識庫。這非常適合用於附加即時的文字資訊，或是修正 LLM 可能產生的誤解。\n\n您可以在<i>對話過程中</i>隨時切換這兩種模式！",
    user3: "哇，這聽起來很棒，讓我馬上試試看！",
    part6: "祝您使用愉快！",
    starOnGitHub: "在 GitHub 上給我們星星",
    contact: "聯絡 Mintplex Labs",
  },
  "new-workspace": {
    title: "新增工作區",
    placeholder: "我的工作區",
  },
  "workspaces—settings": {
    general: "一般設定",
    chat: "對話設定",
    vector: "向量資料庫",
    members: "成員管理",
    agent: "智慧代理人設定",
  },
  general: {
    vector: {
      title: "向量計數",
      description: "向量資料庫中的向量總數。",
    },
    names: {
      description: "這只會修改您工作區的顯示名稱。",
    },
    message: {
      title: "建議對話訊息",
      description: "自訂要建議給工作區使用者的訊息。",
      add: "新增訊息",
      save: "儲存訊息",
      heading: "請向我說明",
      body: "AnythingLLM 的優點",
    },
    pfp: {
      title: "助理個人檔案圖片",
      description: "自訂此工作區助理的個人檔案圖片。",
      image: "工作區圖片",
      remove: "移除工作區圖片",
    },
    delete: {
      title: "刪除工作區",
      description: "刪除此工作區及其所有資料。這將會為所有使用者刪除該工作區。",
      delete: "刪除工作區",
      deleting: "正在刪除工作區...",
      "confirm-start": "您即將刪除整個",
      "confirm-end":
        "工作區。這將會移除向量資料庫中的所有向量嵌入。\n\n原始檔案將保持不變。此動作無法復原。",
    },
  },
  chat: {
    llm: {
      title: "工作區 LLM 提供者",
      description:
        "此工作區將使用的特定 LLM 提供者與模型。預設情況下，它會使用系統 LLM 提供者和設定。",
      search: "搜尋所有 LLM 提供者",
    },
    model: {
      title: "工作區對話模型",
      description:
        "此工作區將使用的特定對話模型。如果空白，將使用系統 LLM 偏好設定。",
      wait: "-- 等待模型中 --",
    },
    mode: {
      title: "對話模式",
      chat: {
        title: "對話",
        "desc-start": "將會利用 LLM 的一般知識",
        and: "和",
        "desc-end": "找到的文件內容來提供答案。",
      },
      query: {
        title: "查詢",
        "desc-start": "將",
        only: "僅",
        "desc-end": "在找到文件內容時提供答案。",
      },
    },
    history: {
      title: "對話紀錄",
      "desc-start": "先前對話訊息數量，將會包含在回應的短期記憶體中。",
      recommend: "建議 20。",
      "desc-end": "根據訊息大小，任何超過 45 的數值都可能會導致對話持續失敗。",
    },
    prompt: {
      title: "提示詞",
      description:
        "將在此工作區中使用的提示詞。定義 AI 產生回應的上下文和指示。您應該提供精心設計的提示詞，以便 AI 可以產生相關且準確的回應。",
    },
    refusal: {
      title: "查詢模式拒絕回應",
      "desc-start": "在",
      query: "查詢",
      "desc-end": "模式下，當找不到內容時，您可能需要傳回自訂的拒絕回應。",
    },
    temperature: {
      title: "LLM 溫度值",
      "desc-start": "此設定控制 LLM 回應的「創意度」。",
      "desc-end":
        "數值越高，創意度越高。對於某些模型，設定過高可能會導致不連貫的回應。",
      hint: "大多數 LLM 都有各種可接受的有效值範圍。請查詢您的 LLM 提供者以取得該資訊。",
    },
  },
  "vector-workspace": {
    identifier: "向量資料庫識別碼",
    snippets: {
      title: "最大內容片段數",
      description:
        "此設定控制每次對話或查詢時，將傳送至 LLM 的最大內容片段數量。",
      recommend: "建議值：4",
    },
    doc: {
      title: "文件相似度門檻",
      description:
        "來源被視為與對話相關所需的最低相似度。數值越高，來源與對話的相似度就必須越高。",
      zero: "無限制",
      low: "低 (相似度 ≥ .25)",
      medium: "中 (相似度 ≥ .50)",
      high: "高 (相似度 ≥ .75)",
    },
    reset: {
      reset: "重設向量資料庫",
      resetting: "清除向量中...",
      confirm:
        "您即將重設此工作區的向量資料庫。這將會移除目前所有已嵌入的向量。\n\n原始檔案將保持不變。此動作無法復原。",
      error: "無法重設工作區向量資料庫！",
      success: "工作區向量資料庫已重設！",
    },
  },
  agent: {
    "performance-warning":
      "不直接支援工具呼叫的 LLM 的效能，高度取決於模型的功能和精確度。某些功能可能受限或無法使用。",
    provider: {
      title: "工作區智慧代理人 LLM 提供者",
      description: "此工作區 @agent 智慧代理人將使用的特定 LLM 提供者與模型。",
    },
    mode: {
      chat: {
        title: "工作區智慧代理人對話模型",
        description: "此工作區 @agent 智慧代理人將使用的特定對話模型。",
      },
      title: "工作區智慧代理人模型",
      description: "此工作區 @agent 智慧代理人將使用的特定 LLM 模型。",
      wait: "-- 等待模型中 --",
    },
    skill: {
      title: "預設智慧代理人技能",
      description:
        "使用這些預先建置的技能來強化預設智慧代理人的自然能力。此設定適用於所有工作區。",
      rag: {
        title: "RAG 與長期記憶體",
        description:
          "允許智慧代理人利用您的本機文件來回答查詢，或要求智慧代理人「記住」內容片段，以利長期記憶體擷取。",
      },
      view: {
        title: "檢視與摘要文件",
        description: "允許智慧代理人列出並摘要目前已嵌入的工作區檔案內容。",
      },
      scrape: {
        title: "擷取網站",
        description: "允許智慧代理人瀏覽並擷取網站內容。",
      },
      generate: {
        title: "產生圖表",
        description:
          "讓預設智慧代理人能夠根據提供的資料或對話中給定的資料來產生各種圖表。",
      },
      save: {
        title: "產生並儲存檔案到瀏覽器",
        description:
          "讓預設智慧代理人能夠產生並寫入檔案，這些檔案會儲存並可以從您的瀏覽器下載。",
      },
      web: {
        title: "即時網路搜尋與瀏覽",
        "desc-start":
          "讓您的智慧代理人能夠透過連線到網路搜尋 (SERP) 提供者來搜尋網路以回答您的問題。",
        "desc-end":
          "在設定完成之前，智慧代理人工作階段期間的網路搜尋將無法運作。",
      },
    },
  },
  recorded: {
    title: "工作區對話紀錄",
    description: "這些是所有已記錄的對話和訊息，依建立日期排序。",
    export: "匯出",
    table: {
      id: "編號",
      by: "傳送者",
      workspace: "工作區",
      prompt: "提示詞",
      response: "回應",
      at: "傳送時間",
    },
  },
  api: {
    title: "API 金鑰",
    description:
      "API 金鑰允許持有者以程式化方式存取和管理此 AnythingLLM 系統。",
    link: "閱讀 API 文件",
    generate: "產生新的 API 金鑰",
    table: {
      key: "API 金鑰",
      by: "建立者",
      created: "建立時間",
    },
  },
  llm: {
    title: "LLM 偏好設定",
    description:
      "這些是您偏好的 LLM 對話與嵌入提供者的憑證和設定。確保這些金鑰是最新且正確的，否則 AnythingLLM 將無法正常運作。",
    provider: "LLM 提供者",
  },
  transcription: {
    title: "語音轉錄模型偏好設定",
    description:
      "這些是您偏好的語音轉錄模型提供者的憑證和設定。確保這些金鑰是最新且正確的，否則媒體檔案和音訊將無法轉錄。",
    provider: "語音轉錄提供者",
    "warn-start":
      "在記憶體或處理器資源有限的電腦上使用本機 Whisper 模型，處理媒體檔案時可能會造成 AnythingLLM 停頓。",
    "warn-recommend": "我們建議至少 2GB 的記憶體，並且上傳小於 10MB 的檔案。",
    "warn-end": "內建模型將會在第一次使用時自動下載。",
  },
  embedding: {
    title: "向量嵌入偏好設定",
    "desc-start":
      "當使用原生不支援嵌入引擎的 LLM 時，您可能需要額外指定用於嵌入文字的憑證。",
    "desc-end":
      "嵌入是將文字轉換成向量的過程。這些憑證是用於將您的檔案和提示詞轉換成 AnythingLLM 可以處理的格式。",
    provider: {
      title: "向量嵌入提供者",
      description: "使用 AnythingLLM 的原生嵌入引擎時，不需要任何設定。",
    },
  },
  text: {
    title: "文字分割與區塊化偏好設定",
    "desc-start":
      "有時您可能需要修改新文件在插入向量資料庫之前的預設分割和區塊化方式。",
    "desc-end":
      "只有在了解文字分割的運作方式及其副作用的情況下，才應該修改此設定。",
    "warn-start": "此處的修改只會套用至",
    "warn-center": "新嵌入的文件",
    "warn-end": "，而不會套用至現有文件。",
    size: {
      title: "文字區塊大小",
      description: "這是單一向量中可包含的最大字元長度。",
      recommend: "嵌入模型的最大長度為",
    },
    overlap: {
      title: "文字區塊重疊",
      description: "這是區塊化過程中，兩個相鄰文字區塊之間的最大字元重疊數。",
    },
  },
  vector: {
    title: "向量資料庫",
    description:
      "這些是您的 AnythingLLM 系統運作方式的憑證和設定。確保這些金鑰是最新且正確的，這點非常重要。",
    provider: {
      title: "向量資料庫提供者",
      description: "使用 LanceDB 不需要任何設定。",
    },
  },
  embeddable: {
    title: "可嵌入對話小工具",
    description:
      "可嵌入對話小工具是與單一工作區連結的公開對話介面。這讓您可以建置工作區，然後發布到全世界。",
    create: "建立嵌入",
    table: {
      workspace: "工作區",
      chats: "已傳送對話",
      Active: "已啟用網域",
    },
  },
  "embed-chats": {
    title: "嵌入對話",
    export: "匯出",
    description: "這些是來自您已發布的任何嵌入內容的所有已記錄對話和訊息。",
    table: {
      embed: "嵌入",
      sender: "傳送者",
      message: "訊息",
      response: "回應",
      at: "傳送時間",
    },
  },
  multi: {
    title: "多使用者模式",
    description: "透過啟用多使用者模式來設定您的系統，以支援您的團隊。",
    enable: {
      "is-enable": "多使用者模式已啟用",
      enable: "啟用多使用者模式",
      description:
        "預設情況下，您將是唯一的管理員。身為管理員，您需要為所有新使用者或管理員建立帳號。請勿遺失您的密碼，因為只有管理員使用者可以重設密碼。",
      username: "管理員帳號使用者名稱",
      password: "管理員帳號密碼",
    },
    password: {
      title: "密碼保護",
      description:
        "使用密碼保護您的 AnythingLLM 系統。如果您忘記這個密碼，將沒有復原方法，因此請務必儲存此密碼。",
    },
    instance: {
      title: "系統密碼保護",
      description:
        "預設情況下，您將是唯一的管理員。身為管理員，您需要為所有新使用者或管理員建立帳號。請勿遺失您的密碼，因為只有管理員使用者可以重設密碼。",
      password: "系統密碼",
    },
  },
  event: {
    title: "事件記錄",
    description: "檢視此系統上發生的所有動作和事件，以進行監控。",
    clear: "清除事件記錄",
    table: {
      type: "事件類型",
      user: "使用者",
      occurred: "發生時間",
    },
  },
  privacy: {
    title: "隱私與資料處理",
    description:
      "這是您針對已連線的第三方供應商和 AnythingLLM 如何處理您的資料的設定。",
    llm: "LLM 選擇",
    embedding: "向量嵌入偏好設定",
    vector: "向量資料庫",
    anonymous: "已啟用匿名統計資訊",
  },
  connectors: {
    "search-placeholder": null,
    "no-connectors": null,
    github: {
      name: null,
      description: null,
      URL: null,
      URL_explained: null,
      token: null,
      optional: null,
      token_explained: null,
      token_explained_start: null,
      token_explained_link1: null,
      token_explained_middle: null,
      token_explained_link2: null,
      token_explained_end: null,
      ignores: null,
      git_ignore: null,
      task_explained: null,
      branch: null,
      branch_loading: null,
      branch_explained: null,
      token_information: null,
      token_personal: null,
    },
    gitlab: {
      name: null,
      description: null,
      URL: null,
      URL_explained: null,
      token: null,
      optional: null,
      token_explained: null,
      token_description: null,
      token_explained_start: null,
      token_explained_link1: null,
      token_explained_middle: null,
      token_explained_link2: null,
      token_explained_end: null,
      fetch_issues: null,
      ignores: null,
      git_ignore: null,
      task_explained: null,
      branch: null,
      branch_loading: null,
      branch_explained: null,
      token_information: null,
      token_personal: null,
    },
    youtube: {
      name: null,
      description: null,
      URL: null,
      URL_explained_start: null,
      URL_explained_link: null,
      URL_explained_end: null,
      task_explained: null,
      language: null,
      language_explained: null,
      loading_languages: null,
    },
    "website-depth": {
      name: null,
      description: null,
      URL: null,
      URL_explained: null,
      depth: null,
      depth_explained: null,
      max_pages: null,
      max_pages_explained: null,
      task_explained: null,
    },
    confluence: {
      name: null,
      description: null,
      deployment_type: null,
      deployment_type_explained: null,
      base_url: null,
      base_url_explained: null,
      space_key: null,
      space_key_explained: null,
      username: null,
      username_explained: null,
      auth_type: null,
      auth_type_explained: null,
      auth_type_username: null,
      auth_type_personal: null,
      token: null,
      token_explained_start: null,
      token_explained_link: null,
      token_desc: null,
      pat_token: null,
      pat_token_explained: null,
      task_explained: null,
    },
    manage: {
      documents: null,
      "data-connectors": null,
      "desktop-only": null,
      dismiss: null,
      editing: null,
    },
    directory: {
      "my-documents": null,
      "new-folder": null,
      "search-document": null,
      "no-documents": null,
      "move-workspace": null,
      name: null,
      "delete-confirmation": null,
      "removing-message": null,
      "move-success": null,
      date: null,
      type: null,
      no_docs: null,
      select_all: null,
      deselect_all: null,
      remove_selected: null,
      costs: null,
      save_embed: null,
    },
    upload: {
      "processor-offline": null,
      "processor-offline-desc": null,
      "click-upload": null,
      "file-types": null,
      "or-submit-link": null,
      "placeholder-link": null,
      fetching: null,
      "fetch-website": null,
      "privacy-notice": null,
    },
    pinning: {
      what_pinning: null,
      pin_explained_block1: null,
      pin_explained_block2: null,
      pin_explained_block3: null,
      accept: null,
    },
    watching: {
      what_watching: null,
      watch_explained_block1: null,
      watch_explained_block2: null,
      watch_explained_block3_start: null,
      watch_explained_block3_link: null,
      watch_explained_block3_end: null,
      accept: null,
    },
  },
  chat_window: {
    welcome: null,
    get_started: null,
    get_started_default: null,
    upload: null,
    or: null,
    send_chat: null,
    send_message: null,
    attach_file: null,
    slash: null,
    agents: null,
    text_size: null,
    microphone: null,
    send: null,
  },
  profile_settings: {
    edit_account: null,
    profile_picture: null,
    remove_profile_picture: null,
    username: null,
    username_description: null,
    new_password: null,
    passwort_description: null,
    cancel: null,
    update_account: null,
    theme: null,
    language: null,
  },
  customization: {
    interface: {
      title: null,
      description: null,
    },
    branding: {
      title: null,
      description: null,
    },
    items: {
      theme: {
        title: null,
        description: null,
      },
      "show-scrollbar": {
        title: null,
        description: null,
      },
      "support-email": {
        title: null,
        description: null,
      },
      "app-name": {
        title: null,
        description: null,
      },
      "chat-message-alignment": {
        title: null,
        description: null,
      },
      "display-language": {
        title: null,
        description: null,
      },
      logo: {
        title: null,
        description: null,
        add: null,
        recommended: null,
        remove: null,
        replace: null,
      },
      "welcome-messages": {
        title: null,
        description: null,
        new: null,
        system: null,
        user: null,
        message: null,
        assistant: null,
        "double-click": null,
        save: null,
      },
      "browser-appearance": {
        title: null,
        description: null,
        tab: {
          title: null,
          description: null,
        },
        favicon: {
          title: null,
          description: null,
        },
      },
      "sidebar-footer": {
        title: null,
        description: null,
        icon: null,
        link: null,
      },
    },
  },
  "main-page": {
    noWorkspaceError: "請先建立工作空間才能開始對話。",
    checklist: {
      title: "開始使用",
      tasksLeft: "個任務未完成",
      completed: "你已經走在成為AnythingLLM專家的路上！",
      dismiss: "關閉",
      tasks: {
        create_workspace: {
          title: "建立工作空間",
          description: "建立你的第一個工作空間來開始使用",
          action: "建立",
        },
        send_chat: {
          title: "發送對話",
          description: "開始與你的AI助理對話",
          action: "對話",
        },
        embed_document: {
          title: "嵌入文件",
          description: "將你的第一個文件添加到工作空間",
          action: "嵌入",
        },
        setup_system_prompt: {
          title: "設置系統提示",
          description: "設定你的AI助理的行為模式",
          action: "設置",
        },
        define_slash_command: {
          title: "定義斜線命令",
          description: "為你的助理創建自定義命令",
          action: "定義",
        },
        visit_community: {
          title: "訪問社群中心",
          description: "探索社群資源和模板",
          action: "瀏覽",
        },
      },
    },
    quickLinks: {
      title: "快速連結",
      sendChat: "發送對話",
      embedDocument: "嵌入文件",
      createWorkspace: "建立工作空間",
    },
    exploreMore: {
      title: "探索更多功能",
      features: {
        customAgents: {
          title: "自定義AI代理",
          description: "無需編碼即可建立強大的AI代理和自動化流程。",
          primaryAction: "使用@代理進行對話",
          secondaryAction: "建立代理流程",
        },
        slashCommands: {
          title: "斜線命令",
          description: "節省時間並使用自定義斜線命令注入提示。",
          primaryAction: "創建斜線命令",
          secondaryAction: "在中心探索",
        },
        systemPrompts: {
          title: "系統提示",
          description: "修改系統提示以自定義工作空間的AI回覆。",
          primaryAction: "修改系統提示",
          secondaryAction: "管理提示變數",
        },
      },
    },
    announcements: {
      title: "更新與公告",
    },
    resources: {
      title: "資源",
      links: {
        docs: "文檔",
        star: "在Github上加星標",
      },
    },
  },
};

export default TRANSLATIONS;
