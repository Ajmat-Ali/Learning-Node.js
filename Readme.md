# NODE.JS ROADMAP (ONLY NODE, NO EXPRESS)

## PHASE 1: Node.js Foundation (VERY IMPORTANT)

| Day | Topic                 | What You Learn (Simple)              | Why It Matters (Job/Freelance) | Practice / Assignment             |
| --- | --------------------- | ------------------------------------ | ------------------------------ | --------------------------------- |
| 1   | What is Node.js       | JS running outside browser           | Interview basic + mindset      | Explain Node.js in your own words |
| 1   | Node vs Browser JS    | Why `window` not in Node             | Avoid confusion                | List differences                  |
| 1   | Installing Node & npm | Node, npm, npx                       | Every project uses this        | Install & verify versions         |
| 2   | Node REPL             | Try JS directly                      | Debugging skill                | Use REPL to test functions        |
| 2   | Global Objects        | `__dirname`, `__filename`, `process` | Daily backend usage            | Print paths & env                 |

## PHASE 2: Core Node.js Concepts (MOST IMPORTANT)

| Day | Topic              | What You Learn              | Why It Matters            | Practice / Assignment |
| --- | ------------------ | --------------------------- | ------------------------- | --------------------- |
| 3   | Modules (CommonJS) | `require`, `module.exports` | Used in every file        | Create 3 modules      |
| 3   | Built-in Modules   | `fs`, `path`, `os`          | Real backend work         | Import & test them    |
| 4   | File System (fs)   | Read/write files            | Freelance backend tasks   | Read & write files    |
| 4   | Sync vs Async      | Blocking vs non-blocking    | Interview favorite        | Convert sync → async  |
| 5   | Callbacks          | Async execution             | Legacy code understanding | Write async fs code   |

## PHASE 3: Asynchronous Node.js (🔥 INTERVIEW GOLD)

| Day | Topic              | What You Learn         | Why It Matters     | Practice / Assignment        |
| --- | ------------------ | ---------------------- | ------------------ | ---------------------------- |
| 6   | Event Loop         | How Node executes code | 90% interview Q    | Draw event loop flow         |
| 6   | Single Thread Myth | Why Node is fast       | Confidence booster | Explain to friend            |
| 7   | Promises           | Cleaner async code     | Modern backend     | Convert callbacks → promises |
| 7   | async/await        | Human-like code        | Daily usage        | Refactor old code            |
| 8   | Error Handling     | try/catch, errors      | Prevent crashes    | Handle all errors            |

## PHASE 4: Working With System & Data

| Day | Topic                 | What You Learn      | Why It Matters     | Practice / Assignment |
| --- | --------------------- | ------------------- | ------------------ | --------------------- |
| 9   | Path Module           | File paths handling | Cross-platform     | Build safe paths      |
| 9   | OS Module             | System info         | Monitoring tools   | Print CPU & memory    |
| 10  | Process               | env, argv           | Config & CLI tools | Build CLI input app   |
| 10  | Environment Variables | `.env` logic        | Security           | Load env values       |

## PHASE 5: Networking Basics (Node Power 💪)

| Day | Topic              | What You Learn                | Why It Matters      | Practice / Assignment |
| --- | ------------------ | ----------------------------- | ------------------- | --------------------- |
| 11  | HTTP Module        | Create server without Express | Strong fundamentals | Create basic server   |
| 11  | Request & Response | Headers, status               | Backend base        | Send JSON response    |
| 12  | URL & Query Params | Data from client              | API understanding   | Parse URL params      |

## PHASE 6: Streams, Buffers & Performance

| Day | Topic             | What You Learn      | Why It Matters    | Practice / Assignment |
| --- | ----------------- | ------------------- | ----------------- | --------------------- |
| 13  | Buffers           | Binary data         | File upload logic | Create buffer         |
| 13  | Streams           | Large data handling | Performance       | Stream large file     |
| 14  | Readable/Writable | Stream types        | Real servers      | File streaming        |

## PHASE 7: Real-World Node Skills

| Day | Topic          | What You Learn    | Why It Matters     | Practice / Assignment |
| --- | -------------- | ----------------- | ------------------ | --------------------- |
| 15  | npm Deep Dive  | packages, scripts | Freelance projects | Custom npm script     |
| 15  | package.json   | Dependencies      | Project setup      | Modify scripts        |
| 16  | Debugging Node | Debug mindset     | Save hours         | Debug broken code     |
| 16  | Logging        | Console vs logs   | Production apps    | Create logger         |

---

<br/>
<br/>
<br/>
<br/>

## <font color="yellow"> PRACTICE PROJECTS (NODE ONLY)</font>

| Project       | What You’ll Build       | Concepts Used        |
| ------------- | ----------------------- | -------------------- |
| CLI Tool      | Notes app in terminal   | fs, process, modules |
| File Manager  | Read/write/search files | fs, path             |
| HTTP Server   | Basic API server        | http module          |
| Logger System | Log user actions        | streams, fs          |
| Config Loader | env-based config        | process.env          |
