import {
    Coffee,
    Code,
    Terminal,
    Palette,
    FileText,
    ArrowRight,
    Leaf,
    Component,
    Braces,
    Database,
    GitBranch,
    ContainerIcon,
    Cloud,
    Settings,
    Globe,
    Smartphone,
    Server,
    Package,
  } from "lucide-react"
  import Container from "./Container"
  import FadeIn, { FadeInStagger } from "./FadeIn"
  
  const clients = [
    ["Spring", Leaf],
    ["Java", Coffee],
    ["Python", Terminal],
    ["C", Code],
    ["React", Component],
    ["Next.js", ArrowRight],
    ["HTML", FileText],
    ["CSS", Palette],
    ["JavaScript", Braces],
    ["TypeScript", Code],
    //["Node.js", Server],
    ["Git", GitBranch],
    //["Docker", ContainerIcon],
    ["MongoDB", Database],
    ["PostgreSQL", Database],
    //["AWS", Cloud],
    ["REST API", Globe],
    ["React Native", Smartphone],
    //["Express", Package],
    //["VS Code", Settings],
  ]
  
  const Clients = () => {
    return (
      <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
        <Container>
          <FadeIn className="flex items-center gap-x-8">
            <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
              Languages and Tools I work with
            </h2>
            <div className="h-px flex-auto bg-neutral-800" />
          </FadeIn>
          <FadeInStagger faster>
            <ul role="list" className="mt-10 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
              {clients.map(([client, IconComponent]) => (
                <li key={client}>
                  <FadeIn>
                    <div className="flex flex-col items-center gap-2 p-3">
                      <IconComponent className="h-10 w-10 text-white" strokeWidth={1.5} />
                      <span className="text-xs font-medium text-white/80 text-center">{client}</span>
                    </div>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>
        </Container>
      </div>
    )
  }
  
  export default Clients
  