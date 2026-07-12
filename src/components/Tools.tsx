import figma from '../assets/tools/figma.png'
import webflow from '../assets/tools/webflow.png'
import adobeCC from '../assets/tools/adobe-cc.png'
import uxPilot from '../assets/tools/uxpilot.jpg'
import maze from '../assets/tools/maze.png'
import miro from '../assets/tools/miro.svg'
import notebookLM from '../assets/tools/notebooklm.png'
import notion from '../assets/tools/notion.png'
import slack from '../assets/tools/slack.png'
import jira from '../assets/tools/jira.png'
import linear from '../assets/tools/linear.jpg'
import confluence from '../assets/tools/confluence.svg'
import trello from '../assets/tools/trello.png'
import asana from '../assets/tools/asana.jpg'
import monday from '../assets/tools/monday.jpg'
import googleWorkspace from '../assets/tools/google-workspace.svg'
import claudeCode from '../assets/tools/claude-code.png'
import github from '../assets/tools/github.png'

const tools = [
  { name: 'Figma', icon: figma },
  { name: 'Webflow', icon: webflow },
  { name: 'Adobe Creative Cloud', icon: adobeCC },
  { name: 'UX Pilot', icon: uxPilot, rounded: true },
  { name: 'Maze', icon: maze },
  { name: 'Miro', icon: miro },
  { name: 'NotebookLM', icon: notebookLM, rounded: true },
  { name: 'Notion', icon: notion },
  { name: 'Slack', icon: slack, padded: true },
  { name: 'Jira', icon: jira, circle: true },
  { name: 'Linear', icon: linear, rounded: true },
  { name: 'Confluence', icon: confluence },
  { name: 'Trello', icon: trello, rounded: true },
  { name: 'Asana', icon: asana, rounded: true },
  { name: 'Monday.com', icon: monday, rounded: true },
  { name: 'Google Workspace', icon: googleWorkspace, padded: true },
  { name: 'Claude Code', icon: claudeCode },
  { name: 'GitHub', icon: github, padded: true },
]

export default function Tools() {
  return (
    <section className="relative flex flex-col items-center p-8 md:py-16 md:px-[var(--nav-edge-w)]">
      <div className="relative flex w-full max-w-[1440px] flex-col items-center gap-8">
        <h2 className="font-syne text-2xl leading-9 text-[#fdfbf6] md:text-[30px]">
          Mes Outils
        </h2>
        <div className="flex max-w-[996px] flex-wrap items-start justify-center gap-x-3 gap-y-6 px-4 md:px-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex h-[101px] w-[100px] flex-col items-center gap-2"
            >
              <div
                className={`flex h-[57px] w-[58px] items-center justify-center shadow-sm ${
                  tool.circle ? 'rounded-full' : 'rounded-xl'
                } ${tool.padded ? 'border-[0.2px] border-[rgba(0,0,0,0.15)] bg-white p-2' : ''}`}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className={`size-full object-cover ${
                    tool.rounded ? 'rounded-xl' : ''
                  } ${tool.circle ? 'rounded-full' : ''} ${
                    tool.padded ? 'object-contain' : ''
                  }`}
                />
              </div>
              <p className="text-center text-sm leading-5 text-[rgba(253,251,246,0.8)]">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
