import figma from '../assets/tools/figma.webp'
import webflow from '../assets/tools/webflow.webp'
import adobeCC from '../assets/tools/adobe-cc.webp'
import uxPilot from '../assets/tools/uxpilot.webp'
import maze from '../assets/tools/maze.webp'
import miro from '../assets/tools/miro.svg'
import notebookLM from '../assets/tools/notebooklm.webp'
import notion from '../assets/tools/notion.webp'
import slack from '../assets/tools/slack.webp'
import jira from '../assets/tools/jira.webp'
import linear from '../assets/tools/linear.webp'
import confluence from '../assets/tools/confluence.svg'
import trello from '../assets/tools/trello.webp'
import asana from '../assets/tools/asana.webp'
import monday from '../assets/tools/monday.webp'
import googleWorkspace from '../assets/tools/google-workspace.svg'
import claudeCode from '../assets/tools/claude-code.webp'
import github from '../assets/tools/github.svg'
import { H2, Micro1 } from './Typography'

/* Tools without a logo file yet render as a lettered tile in the brand's
   colours (`badge`). Swap for a real icon by giving them `icon` instead. */
type Tool = {
  name: string
  icon?: string
  badge?: { text: string; bg: string; fg: string }
  rounded?: boolean
  padded?: boolean
  circle?: boolean
}

const tools: Tool[] = [
  { name: 'Figma', icon: figma },
  { name: 'Webflow', icon: webflow },
  { name: 'Adobe Creative Cloud', icon: adobeCC },
  { name: 'Premiere Pro', badge: { text: 'Pr', bg: '#00005b', fg: '#9999ff' } },
  { name: 'After Effects', badge: { text: 'Ae', bg: '#00005b', fg: '#9999ff' } },
  { name: 'Lightroom', badge: { text: 'Lr', bg: '#001e36', fg: '#31a8ff' } },
  { name: 'CapCut', badge: { text: 'CC', bg: '#000000', fg: '#ffffff' } },
  { name: 'Canva', badge: { text: 'Ca', bg: 'linear-gradient(135deg, #00c4cc, #7d2ae8)', fg: '#ffffff' } },
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
  { name: 'GitHub', icon: github },
]

export default function Tools() {
  return (
    <section className="relative flex flex-col items-center gap-10 p-8 md:py-16 md:px-[var(--nav-edge-w)]">
      <div className="relative flex w-full max-w-[1440px] flex-col items-center gap-8">
        <H2>Mes Outils</H2>
        <div className="flex max-w-[996px] flex-wrap items-start justify-center gap-x-4 gap-y-6 px-4 md:px-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex h-[101px] w-[100px] flex-col items-center gap-2"
            >
              <div
                className={`flex h-[57px] w-[58px] items-center justify-center shadow-sm ${
                  tool.circle ? 'rounded-full' : 'rounded-xl'
                } ${tool.padded ? 'border-[0.2px] border-black-ink/15 bg-white p-2' : ''}`}
              >
                {tool.badge ? (
                  <span
                    aria-hidden
                    className="flex size-full items-center justify-center rounded-xl font-syne text-xl font-medium"
                    style={{ background: tool.badge.bg, color: tool.badge.fg }}
                  >
                    {tool.badge.text}
                  </span>
                ) : (
                <img loading="lazy" decoding="async"
                  src={tool.icon}
                  alt={tool.name}
                  className={`size-full object-cover ${
                    tool.rounded ? 'rounded-xl' : ''
                  } ${tool.circle ? 'rounded-full' : ''} ${
                    tool.padded ? 'object-contain' : ''
                  }`}
                />
                )}
              </div>
              <Micro1 className="text-center">{tool.name}</Micro1>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
