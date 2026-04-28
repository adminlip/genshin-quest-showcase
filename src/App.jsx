import { Activity, Bot, Compass, Map, Orbit, PanelsTopLeft, RadioTower, Swords, Workflow } from 'lucide-react'

const stats = [
  { value: 'MaaFramework', label: '底层自动化 SDK' },
  { value: 'BetterGI', label: '任务调度与路径执行' },
  { value: 'JSON Pathing', label: '主线流程数据化' },
  { value: 'ADB', label: '本地模拟器连接' },
]

const pipeline = [
  {
    icon: Map,
    title: '任务资源加载',
    body: 'Python Agent 启动后先初始化 MaaFramework，扫描 assets/resource 目录，确保路径、模板和任务资源已准备完毕。',
  },
  {
    icon: RadioTower,
    title: '设备接入',
    body: '通过 ADB 地址连接本地或远程设备，创建 Tasker 与 Context，把自动化执行链路接到实际游戏画面。',
  },
  {
    icon: Workflow,
    title: '流程编排',
    body: 'BetterGI 侧用 process.json + pathing JSON 管理每一幕主线，把对话、跑路、战斗、等待拆成独立步骤。',
  },
  {
    icon: Compass,
    title: '路径追踪',
    body: '地图追踪负责从一个关键点移动到下一个关键点，结合自动剧情、自动拾取和自动战斗，减少手工重复操作。',
  },
]

const modules = [
  ['Quest Agent', 'Python 主入口，负责初始化、连接设备、创建任务、轮询状态。'],
  ['main_quest.js', 'BetterGI 任务调度核心脚本，管理章节、选项白名单、黑名单和等待策略。'],
  ['process.json', '定义每个章节的动作流：对话、地图追踪、战斗、按键、分支。'],
  ['pathing/*.json', '把移动路径记录成结构化坐标，支持章节复用和分段调试。'],
  ['Notification Handler', '把任务失败、下一步任务、当前任务状态记录到日志里。'],
  ['Combat / Dialogue Config', '通过关键词优先级与白名单降低误选、误对话、误触发。'],
]

const logs = [
  'Initializing MaaFramework...',
  'Loading resources from assets/resource',
  'Resources loaded successfully',
  'Connecting to device: 127.0.0.1:5555',
  'Device connected successfully',
  'Starting quest automation: StartMainQuest',
  'Task: 自动任务 → 地图追踪',
  'Next: 对话',
  'Progress: 60 seconds elapsed',
  'Quest automation finished!',
]

export default function App() {
  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="hud-panel hud-outline relative overflow-hidden rounded-[28px] px-6 py-8 sm:px-10 sm:py-10">
          <div className="scan-line" />
          <div className="hex-grid absolute inset-0 opacity-40" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.25fr_0.9fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/5 px-3 py-1 text-xs text-emerald-200/90">
                <Orbit size={14} /> MaaFramework · BetterGI · Pathing JSON
              </div>
              <h1 className="hud-title text-5xl font-black tracking-tight sm:text-7xl">原神主线自动化</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                这个项目不是简单脚本连点器，而是把 <span className="text-emerald-300">设备连接、资源加载、任务调度、路径追踪、自动对话、自动战斗</span>
                串成一条完整执行链。Python Agent 负责 MaaFramework 接入，BetterGI 负责章节流程和路径执行。
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-emerald-200/10 bg-white/5 px-4 py-4">
                    <div className="text-lg font-bold text-emerald-200">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <div className="hud-panel rounded-[24px] p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.28em] text-slate-500">Quest Console</span>
                  <Activity size={16} className="text-emerald-300" />
                </div>
                <div className="space-y-2 font-mono text-xs text-emerald-100/90">
                  {logs.map((line) => (
                    <div key={line} className="rounded-xl border border-emerald-200/10 bg-black/20 px-3 py-2">{line}</div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="hud-panel rounded-[24px] p-5 text-center">
                  <div className="mx-auto mb-3 grid h-24 w-24 place-items-center rounded-full bg-[radial-gradient(circle,rgba(125,226,177,0.24),transparent_68%)]">
                    <div className="metric-ring grid h-16 w-16 place-items-center rounded-full p-[3px]">
                      <div className="grid h-full w-full place-items-center rounded-full bg-[#07110f] text-lg font-bold text-emerald-200">301</div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-400">`main.py` 总行数</div>
                </div>
                <div className="hud-panel rounded-[24px] p-5 text-center">
                  <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-3xl border border-emerald-200/10 bg-white/5">
                    <PanelsTopLeft className="text-emerald-300" size={34} />
                  </div>
                  <div className="text-lg font-semibold text-emerald-100">JSON Flow</div>
                  <div className="text-sm text-slate-400">流程与路径分离</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="grid gap-6">
            <div className="hud-panel rounded-[28px] p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <Bot className="text-emerald-300" />
                <div>
                  <h2 className="text-2xl font-bold text-white">系统链路</h2>
                  <p className="text-sm text-slate-400">从资源初始化到章节执行的完整自动化结构</p>
                </div>
              </div>
              <div className="grid gap-4">
                {pipeline.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-[22px] border border-emerald-200/10 bg-white/5 p-5">
                      <div className="mb-2 flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-300/10 text-emerald-300">
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Step {index + 1}</div>
                          <div className="text-lg font-semibold text-white">{item.title}</div>
                        </div>
                      </div>
                      <p className="text-sm leading-6 text-slate-300">{item.body}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="hud-panel rounded-[28px] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <Swords className="text-emerald-300" />
                <div>
                  <h2 className="text-2xl font-bold text-white">模块拆解</h2>
                  <p className="text-sm text-slate-400">不是单文件脚本，而是多层协作的自动化体系</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {modules.map(([title, desc]) => (
                  <div key={title} className="rounded-[22px] border border-emerald-200/10 bg-black/15 p-5">
                    <div className="font-mono text-sm text-emerald-200">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-6">
            <div className="hud-panel rounded-[28px] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <Workflow className="text-emerald-300" />
                <div>
                  <h2 className="text-2xl font-bold text-white">任务定义方式</h2>
                  <p className="text-sm text-slate-400">通过结构化 JSON 描述章节步骤，而不是把所有逻辑硬编码</p>
                </div>
              </div>
              <div className="rounded-[24px] border border-emerald-200/10 bg-[#091311] p-5 font-mono text-xs leading-6 text-emerald-100/90">
                <div>{'{'}</div>
                <div className="pl-4">"type": "地图追踪",</div>
                <div className="pl-4">"data": "pathing/蒙德/序章第一幕/tracking_to_knights_hq.json",</div>
                <div className="pl-4">"next": "对话"</div>
                <div>{'}'}</div>
                <div className="mt-4 text-slate-500">// 对话 / 战斗 / 传送 / 分支条件 都可以继续拆成独立节点</div>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3 rounded-2xl border border-emerald-200/10 bg-white/5 p-4">
                  <span className="text-emerald-300">01</span>
                  <span>章节流程与路径文件分离，后续补章节时只需要增加新的 JSON 资源。</span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-emerald-200/10 bg-white/5 p-4">
                  <span className="text-emerald-300">02</span>
                  <span>对话黑白名单和等待参数都放在配置层，调优成本低，不需要反复改主执行器。</span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-emerald-200/10 bg-white/5 p-4">
                  <span className="text-emerald-300">03</span>
                  <span>Python 入口负责稳定性，BetterGI 脚本负责行为，便于调试和扩展。</span>
                </div>
              </div>
            </div>

            <div className="hud-panel rounded-[28px] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <Compass className="text-emerald-300" />
                <div>
                  <h2 className="text-2xl font-bold text-white">为什么技术含量高</h2>
                  <p className="text-sm text-slate-400">核心价值在于“工程化自动化”，不是单点脚本技巧</p>
                </div>
              </div>
              <div className="space-y-4 text-sm leading-7 text-slate-300">
                <p>它把图像识别自动化框架、任务调度、路径资源、状态轮询和章节结构化配置结合到一起，能支撑更长链路的游戏主线流程。</p>
                <p>相比单纯录制宏，这种设计更像“任务执行平台”：主入口控制生命周期，资源层负责识别素材，脚本层负责章节逻辑，路径层负责移动细节。</p>
                <p>后续扩展到新的国家、新的幕，主要新增的是资源和流程，而不是推翻主程序重写。</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
