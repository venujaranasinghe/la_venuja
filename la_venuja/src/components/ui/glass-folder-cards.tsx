"use client"

import * as React from "react"

export type ArtPreset = "aurora" | "ember" | "dusk" | "glacier" | "verdant"

export type ArtRecipe = {
  style: "marble" | "streak"
  colors: string[]
  scale?: number
  warp?: number
  angle?: number
  gloss?: number
  veins?: number
}

export type FolderArt = ArtPreset | ArtRecipe | "none"

export type FolderFile = {
  name: string
  meta?: string
  art?: ArtPreset | ArtRecipe
  image?: string
  href?: string
}

export type FolderMenuItem = {
  label: string
  onSelect?: () => void
  danger?: boolean
}

export type GlassFolderProps = {
  label?: string
  meta?: string
  tone?: "light" | "dark"
  art?: FolderArt
  seed?: number
  image?: string
  files?: FolderFile[]
  action?: "add" | "more" | "none"
  onAdd?: (files: FolderFile[]) => FolderFile | void
  onFilesChange?: (files: FolderFile[]) => void
  menu?: FolderMenuItem[]
  labelPlacement?: "bottom-left" | "top-left" | "top-right"
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  onFileSelect?: (file: FolderFile, index: number) => void
  width?: number
  appear?: boolean
  appearDelay?: number
  className?: string
  style?: React.CSSProperties
}

export const ART_PRESETS: Record<ArtPreset, ArtRecipe> = {
  aurora: {
    style: "streak",
    colors: ["#22395e", "#c2433f", "#e9c2b8", "#6f97c2", "#e5edf4"],
  },
  ember: {
    style: "marble",
    colors: ["#07090c", "#16252c", "#a3201a", "#ef4a2b", "#ff8a5c"],
  },
  dusk: {
    style: "marble",
    colors: ["#120c18", "#3e2850", "#8f6c9c", "#b3502f", "#eab08a"],
  },
  glacier: {
    style: "streak",
    colors: ["#0e1726", "#4a6b82", "#9fb4c7", "#d9e2ea", "#ffffff"],
  },
  verdant: {
    style: "marble",
    colors: ["#070b08", "#173024", "#4f7a5a", "#a7843a", "#e9cf87"],
  },
}

function getArtGradient(art: FolderArt): string {
  if (art === "none") return "none"
  const recipe = typeof art === "string" ? ART_PRESETS[art] ?? ART_PRESETS.aurora : art
  const c = recipe.colors
  if (recipe.style === "streak") {
    return `
      linear-gradient(135deg, ${c[0]} 0%, ${c[1]} 35%, ${c[2]} 65%, ${c[3] || c[1]} 100%),
      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 60%)
    `
  }
  return `
    radial-gradient(circle at 20% 25%, ${c[2]} 0%, transparent 55%),
    radial-gradient(circle at 85% 75%, ${c[3] || c[1]} 0%, transparent 60%),
    linear-gradient(145deg, ${c[0]} 0%, ${c[1]} 50%, ${c[c.length - 1]} 100%)
  `
}

export function rng(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function hashString(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619)
  return h >>> 0
}

export function fanSlot(index: number, count: number): number {
  return count <= 1 ? 0 : (index / (count - 1)) * 2 - 1
}

const W = 340
const H = 272
const HEADROOM = 54
const FRONT_TOP = 74
const FRONT_H = H - FRONT_TOP
const SHEET_W = 272
const SHEET_H = 184

const BACK_PATH =
  "M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z"

const MAX_VISIBLE = 4

const SAMPLE_FILES: FolderFile[] = [
  { name: "Cover — final", meta: "PNG · 4.8 MB", art: "ember" },
  { name: "Moodboard", meta: "24 images", art: "dusk" },
  { name: "Brief.pdf", meta: "PDF · 1.2 MB" },
]

export default function GlassFolder({
  label = "My Files",
  meta,
  tone = "light",
  art = "aurora",
  seed = 3,
  image,
  files: initialFiles = SAMPLE_FILES,
  action = "add",
  onAdd,
  onFilesChange,
  menu = [],
  labelPlacement = "bottom-left",
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  onFileSelect,
  width = 340,
  appear = true,
  appearDelay = 0,
  className,
  style,
}: GlassFolderProps) {
  const uid = React.useId().replace(/:/g, "")
  const rootRef = React.useRef<HTMLDivElement>(null)
  const rectRef = React.useRef<DOMRect | null>(null)
  const keyRef = React.useRef<HTMLButtonElement>(null)
  const menuRef = React.useRef<HTMLDivElement>(null)

  const [files, setFiles] = React.useState<FolderFile[]>(initialFiles)
  const ids = React.useRef<number[]>(initialFiles.map((_, i) => i))
  const nextId = React.useRef(initialFiles.length)

  const [openState, setOpenState] = React.useState(defaultOpen)
  const open = openProp ?? openState
  const setOpen = React.useCallback(
    (next: boolean) => {
      if (openProp === undefined) setOpenState(next)
      onOpenChange?.(next)
    },
    [openProp, onOpenChange],
  )
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [entered, setEntered] = React.useState(!appear)

  const k = width / W

  React.useEffect(() => {
    if (!appear) {
      setEntered(true)
      return
    }
    const t = window.setTimeout(() => setEntered(true), Math.min(appearDelay, 120))
    return () => window.clearTimeout(t)
  }, [appear, appearDelay])

  // High-performance pointer tracking: Cache bounding rect on enter, avoid layout reflows on move
  React.useEffect(() => {
    const el = rootRef.current
    if (!el) return
    let raf = 0
    let px = 0
    let py = 0

    const write = () => {
      raf = 0
      el.style.setProperty("--gf-px", px.toFixed(3))
      el.style.setProperty("--gf-py", py.toFixed(3))
    }

    const enter = () => {
      rectRef.current = el.getBoundingClientRect()
    }

    const move = (e: PointerEvent) => {
      if (e.pointerType === "touch") return
      if (!rectRef.current) rectRef.current = el.getBoundingClientRect()
      const r = rectRef.current
      px = ((e.clientX - r.left) / r.width) * 2 - 1
      py = ((e.clientY - r.top) / r.height) * 2 - 1
      if (!raf) raf = requestAnimationFrame(write)
    }

    const leave = () => {
      rectRef.current = null
      px = 0
      py = 0
      if (!raf) raf = requestAnimationFrame(write)
    }

    el.addEventListener("pointerenter", enter, { passive: true })
    el.addEventListener("pointermove", move, { passive: true })
    el.addEventListener("pointerleave", leave, { passive: true })

    return () => {
      el.removeEventListener("pointerenter", enter)
      el.removeEventListener("pointermove", move)
      el.removeEventListener("pointerleave", leave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // Close when clicking outside or pressing Escape
  React.useEffect(() => {
    if (!open && !menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (menuOpen) setMenuOpen(false)
        else setOpen(false)
      }
    }
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node
      if (menuOpen && !menuRef.current?.contains(t) && !keyRef.current?.contains(t)) {
        setMenuOpen(false)
      }
      if (open && !menuOpen && !rootRef.current?.contains(t)) {
        setOpen(false)
      }
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("pointerdown", onDown)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("pointerdown", onDown)
    }
  }, [open, menuOpen, setOpen])

  const addFile = () => {
    const made = onAdd?.(files)
    const file: FolderFile = made || { name: "Untitled " + (files.length + 1), meta: "Just now" }
    const next = [...files, file]
    const id = nextId.current++
    ids.current = [...ids.current, id]
    setFiles(next)
    onFilesChange?.(next)
  }

  const menuItems: FolderMenuItem[] = [
    { label: open ? "Close folder" : "Open folder", onSelect: () => setOpen(!open) },
    ...menu,
  ]

  const start = Math.max(0, files.length - MAX_VISIBLE)
  const visible = files.slice(start)
  const count = files.length
  const metaLine = meta ?? count + (count === 1 ? " item" : " items")

  return (
    <div
      ref={rootRef}
      className={"gf-root" + (className ? " " + className : "")}
      data-tone={tone}
      data-open={open || undefined}
      data-entered={entered || undefined}
      data-place={labelPlacement}
      style={{ width, height: (H + HEADROOM) * k, ...style }}
    >
      <style>{GF_CSS}</style>
      <div className="gf-stage" style={{ transform: `translateY(${HEADROOM * k}px) scale(${k})` }}>
        <div className="gf-tilt">
          {/* Ambient 3D Shadow */}
          <div className="gf-shadow" aria-hidden="true" />

          {/* Back Panel */}
          <div className="gf-back" style={{ clipPath: `path('${BACK_PATH}')` }} aria-hidden="true">
            {image ? (
              <img className="gf-art" src={image} alt="" draggable={false} />
            ) : art !== "none" ? (
              <div className="gf-art" style={{ background: getArtGradient(art) }} />
            ) : null}
            <div className="gf-back-sheen" />
          </div>
          <svg className="gf-rim gf-back-rim" viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
            <path d={BACK_PATH} />
          </svg>

          {/* Files: Behind glass when closed, elevated in front when opened */}
          <div className="gf-files" role="list" aria-label={label + " contents"}>
            {visible.map((file, v) => {
              const id = ids.current[start + v]
              const slot = fanSlot(v, visible.length)
              const jitter = rng(hashString(file.name) + id)
              const picture = !!(file.art || file.image)
              const inner = (
                <>
                  {picture ? (
                    file.image ? (
                      <img className="gf-sheet-art" src={file.image} alt="" draggable={false} />
                    ) : (
                      <div className="gf-sheet-art" style={{ background: getArtGradient(file.art as FolderArt) }} />
                    )
                  ) : (
                    <span className="gf-lines" aria-hidden="true">
                      <i style={{ width: "86%" }} />
                      <i style={{ width: "92%" }} />
                      <i style={{ width: "64%" }} />
                      <i style={{ width: "88%" }} />
                      <i style={{ width: "42%" }} />
                    </span>
                  )}
                  <span className="gf-sheet-head">
                    <span className="gf-sheet-name">{file.name}</span>
                    {file.meta ? <span className="gf-sheet-meta">{file.meta}</span> : null}
                  </span>
                </>
              )

              const commonProps = {
                className: "gf-sheet" + (picture ? " gf-sheet--art" : ""),
                style: {
                  "--gf-slot": slot,
                  "--gf-depth": visible.length - 1 - v,
                  "--gf-jx": `${((jitter() - 0.5) * 8).toFixed(2)}px`,
                  "--gf-jr": `${((jitter() - 0.5) * 2.5).toFixed(2)}deg`,
                  zIndex: v + 1,
                } as React.CSSProperties,
              }

              return (
                <div key={id} role="listitem" className="gf-sheet-slot">
                  {file.href ? (
                    <a
                      {...commonProps}
                      href={file.href}
                      onClick={(e) => {
                        if (file.href?.startsWith("http")) {
                          e.preventDefault()
                          window.open(file.href, "_blank", "noopener,noreferrer")
                        }
                        onFileSelect?.(file, start + v)
                      }}
                    >
                      {inner}
                    </a>
                  ) : (
                    <button {...commonProps} type="button" onClick={() => onFileSelect?.(file, start + v)}>
                      {inner}
                    </button>
                  )}
                </div>
              )
            })}
          </div>

          {/* Frosted Glass Front Panel */}
          <div className="gf-front">
            {/* Front tab detail */}
            <div className="gf-front-tab" />
            <div className="gf-tint" aria-hidden="true" />
            <div className="gf-spec" aria-hidden="true" />

            <button
              type="button"
              className="gf-hit"
              aria-expanded={open}
              aria-label={(open ? "Close " : "Open ") + label}
              onClick={() => {
                setMenuOpen(false)
                setOpen(!open)
              }}
            />

            <div className="gf-label">
              <span className="gf-title">{label}</span>
              <span className="gf-meta">{metaLine}</span>
            </div>
          </div>

          {/* Action Button: Add or More */}
          {action !== "none" ? (
            <button
              ref={keyRef}
              type="button"
              className={"gf-key gf-key--" + action}
              aria-label={action === "add" ? "Add a file" : "More options"}
              aria-expanded={action === "more" ? menuOpen : undefined}
              onClick={() => (action === "add" ? addFile() : setMenuOpen((m) => !m))}
            >
              {action === "add" ? (
                <svg className="gf-glyph gf-glyph--plus" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg className="gf-glyph gf-glyph--more" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="6" cy="12" r="2" fill="currentColor" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <circle cx="18" cy="12" r="2" fill="currentColor" />
                </svg>
              )}
            </button>
          ) : null}

          {/* Frosted Menu */}
          {action === "more" && (
            <div
              ref={menuRef}
              id={"gf-menu-" + uid}
              role="menu"
              className="gf-menu"
              data-open={menuOpen || undefined}
            >
              {menuItems.map((item, i) => (
                <button
                  key={item.label + i}
                  type="button"
                  role="menuitem"
                  className={"gf-menu-item" + (item.danger ? " gf-menu-item--danger" : "")}
                  onClick={() => {
                    setMenuOpen(false)
                    item.onSelect?.()
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const GF_CSS = `
.gf-root {
  --gf-px: 0;
  --gf-py: 0;
  --gf-hinge: 0deg;
  --gf-lift: 44px;
  --gf-spread: 0px;
  --gf-fan: 0deg;
  --gf-stack: 14px;
  --gf-ink: #18181b;
  --gf-ink-soft: rgba(24, 24, 27, 0.6);
  position: relative;
  display: inline-block;
  flex: none;
  font-family: inherit;
  -webkit-font-smoothing: antialiased;
  user-select: none;
}
.gf-root[data-tone="dark"] {
  --gf-ink: #fafafa;
  --gf-ink-soft: rgba(250, 250, 250, 0.6);
}
.gf-root:hover, .gf-root:focus-within {
  --gf-hinge: -10deg;
  --gf-lift: -30px;
  --gf-spread: 10px;
  --gf-fan: 1.5deg;
  --gf-stack: 8px;
}
.gf-root[data-open] {
  --gf-hinge: -24deg;
  --gf-lift: -92px;
  --gf-spread: 42px;
  --gf-fan: 5deg;
  --gf-stack: 28px;
}

.gf-stage {
  position: absolute;
  left: 0;
  top: 0;
  width: 340px;
  height: 272px;
  transform-origin: 0 0;
}

.gf-tilt {
  position: absolute;
  inset: 0;
  transform: perspective(1000px) rotateX(calc(var(--gf-py) * -3.5deg)) rotateY(calc(var(--gf-px) * 4.5deg)) translateZ(0);
  transition: transform 0.12s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
}
.gf-root:not(:hover) .gf-tilt {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.gf-shadow {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: -4px;
  height: 48px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.18);
  filter: blur(16px);
  transform: translate3d(calc(var(--gf-px) * -6px), 0, 0);
  transition: transform 0.3s ease-out;
  pointer-events: none;
}
.gf-root[data-tone="dark"] .gf-shadow {
  background: rgba(0, 0, 0, 0.45);
}

.gf-back {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #f2f2f4 0%, #dedfe3 100%);
  border-radius: 20px;
}
.gf-root[data-tone="dark"] .gf-back {
  background: linear-gradient(180deg, #27272a 0%, #141416 100%);
}
.gf-art {
  position: absolute;
  inset: -8px;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
  object-fit: cover;
  display: block;
  transform: translate3d(calc(var(--gf-px) * -4px), calc(var(--gf-py) * -3px), 0);
  transition: transform 0.3s ease-out;
}
.gf-back-sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 40%);
  pointer-events: none;
}

.gf-rim {
  position: absolute;
  inset: 0;
  width: 340px;
  height: 272px;
  pointer-events: none;
  fill: none;
}
.gf-back-rim path {
  stroke: rgba(255, 255, 255, 0.5);
  stroke-width: 1.5;
}
.gf-root[data-tone="dark"] .gf-back-rim path {
  stroke: rgba(255, 255, 255, 0.16);
}

/* ---- Files ---- */
.gf-files {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  /* Ensure files stay inside the pocket and never poke out the bottom of the folder */
  clip-path: inset(-600px -400px 14px -400px);
}
.gf-root[data-open] .gf-files {
  z-index: 22;
}

.gf-sheet-slot { display: contents; }
.gf-sheet {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  left: 34px;
  top: 96px;
  width: 272px;
  height: 184px;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  pointer-events: auto;
  background: linear-gradient(180deg, #ffffff 0%, #f6f6f7 100%);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 6px 16px -4px rgba(0, 0, 0, 0.14);
  transform-origin: 50% 100%;
  transform: translate3d(
    calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)),
    calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1),
    0
  ) rotate(calc(var(--gf-jr) + var(--gf-slot) * var(--gf-fan)));
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
  will-change: transform;
}
.gf-root[data-tone="dark"] .gf-sheet {
  background: linear-gradient(180deg, #2b2b30 0%, #1c1c20 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.55);
}
.gf-sheet--art {
  background: #18181b;
}

.gf-root[data-open] .gf-sheet:hover {
  transform: translate3d(
    calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)),
    calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1 - 16px),
    10px
  ) rotate(calc(var(--gf-slot) * var(--gf-fan) * 0.4)) scale(1.03);
  box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.25);
  z-index: 35 !important;
}
.gf-root[data-tone="dark"][data-open] .gf-sheet:hover {
  box-shadow: 0 18px 36px -8px rgba(0, 0, 0, 0.7);
}

.gf-sheet-art {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.gf-sheet--art::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.05) 45%, rgba(0, 0, 0, 0.6) 100%);
  pointer-events: none;
}

.gf-sheet-head {
  position: absolute;
  left: 12px;
  right: 12px;
  top: 10px;
  z-index: 2;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  white-space: nowrap;
}
.gf-sheet-name {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12.5px;
  font-weight: 600;
  color: #18181b;
}
.gf-sheet-meta {
  font-family: ui-monospace, monospace;
  font-size: 10px;
  color: rgba(24, 24, 27, 0.6);
}
.gf-root[data-tone="dark"] .gf-sheet-name,
.gf-sheet--art .gf-sheet-name {
  color: #ffffff;
}
.gf-root[data-tone="dark"] .gf-sheet-meta,
.gf-sheet--art .gf-sheet-meta {
  color: rgba(255, 255, 255, 0.7);
}

.gf-lines {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.gf-lines i {
  display: block;
  height: 5px;
  border-radius: 3px;
  background: rgba(24, 24, 27, 0.08);
}
.gf-lines i:first-child {
  height: 9px;
  margin-bottom: 4px;
  background: rgba(24, 24, 27, 0.15);
}
.gf-root[data-tone="dark"] .gf-lines i {
  background: rgba(255, 255, 255, 0.08);
}
.gf-root[data-tone="dark"] .gf-lines i:first-child {
  background: rgba(255, 255, 255, 0.18);
}

/* ---- Frosted Front Glass ---- */
.gf-front {
  position: absolute;
  left: 0;
  top: 74px;
  width: 340px;
  height: 198px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.65);
  -webkit-backdrop-filter: blur(14px) saturate(1.4);
  backdrop-filter: blur(14px) saturate(1.4);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 
    0 12px 30px -10px rgba(0, 0, 0, 0.14),
    inset 0 1px 1px rgba(255, 255, 255, 0.9);
  transform-origin: 50% 100%;
  transform: perspective(800px) rotateX(var(--gf-hinge)) translateZ(0);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
  z-index: 10;
  overflow: hidden;
}
.gf-root[data-tone="dark"] .gf-front {
  background: rgba(20, 20, 24, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 14px 34px -10px rgba(0, 0, 0, 0.55),
    inset 0 1px 1px rgba(255, 255, 255, 0.2);
}

.gf-front-tab {
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  height: 6px;
  background: rgba(255, 255, 255, 0.5);
  border-bottom-right-radius: 8px;
}
.gf-root[data-tone="dark"] .gf-front-tab {
  background: rgba(255, 255, 255, 0.12);
}

.gf-spec {
  position: absolute;
  inset: 0;
  background: radial-gradient(240px 180px at calc(50% + var(--gf-px) * 40%) calc(30% + var(--gf-py) * 35%), rgba(255, 255, 255, 0.4), transparent 70%);
  pointer-events: none;
}
.gf-root[data-tone="dark"] .gf-spec {
  opacity: 0.2;
}

.gf-hit {
  all: unset;
  position: absolute;
  inset: 0;
  z-index: 1;
  cursor: pointer;
}

.gf-label {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 3px;
  max-width: 220px;
  pointer-events: none;
  color: var(--gf-ink);
}
.gf-root[data-place="bottom-left"] .gf-label { left: 24px; bottom: 26px; }
.gf-root[data-place="top-left"] .gf-label { left: 24px; top: 26px; }
.gf-root[data-place="top-right"] .gf-label { right: 28px; top: 38px; align-items: flex-end; }
.gf-title {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.2;
}
.gf-meta {
  font-family: ui-monospace, monospace;
  font-size: 11.5px;
  color: var(--gf-ink-soft);
}

/* ---- Key Button ---- */
.gf-key {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  right: 18px;
  bottom: 18px;
  z-index: 25;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
  background: rgba(24, 24, 27, 0.9);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.gf-root[data-tone="dark"] .gf-key {
  background: rgba(255, 255, 255, 0.9);
  color: #18181b;
}
.gf-key:hover {
  transform: translateY(-2px) scale(1.04);
}
.gf-key:active {
  transform: translateY(0) scale(0.96);
}
.gf-glyph {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: currentColor;
}

/* ---- Menu ---- */
.gf-menu {
  position: absolute;
  right: 18px;
  bottom: 74px;
  z-index: 40;
  min-width: 180px;
  padding: 6px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.25);
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px) scale(0.95);
  transition: opacity 0.15s ease, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), visibility 0s 0.2s;
}
.gf-menu[data-open] {
  opacity: 1;
  visibility: visible;
  transform: none;
  transition-delay: 0s;
}
.gf-root[data-tone="dark"] .gf-menu {
  background: rgba(24, 24, 28, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.6);
}
.gf-menu-item {
  all: unset;
  box-sizing: border-box;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #18181b;
  cursor: pointer;
  transition: background 0.15s ease;
}
.gf-root[data-tone="dark"] .gf-menu-item { color: #f4f4f5; }
.gf-menu-item:hover { background: rgba(0, 0, 0, 0.06); }
.gf-root[data-tone="dark"] .gf-menu-item:hover { background: rgba(255, 255, 255, 0.08); }
.gf-menu-item--danger { color: #ef4444; }
.gf-root[data-tone="dark"] .gf-menu-item--danger { color: #f87171; }

@media (prefers-reduced-motion: reduce) {
  .gf-root *, .gf-root *::before, .gf-root *::after {
    transition: none !important;
    animation: none !important;
  }
}
`
