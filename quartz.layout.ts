import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer(),
}

// Hacemos la función más robusta para evitar problemas de espacios o guiones
const isAntologia = (page: any) => {
  const slug = page.fileData.slug?.toLowerCase() ?? ""
  return slug.includes("terminal")
}

// 1. LAYOUT DE CONTENIDO (Para los cuentos individuales: la-mujer.md)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index" && !isAntologia(page),
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(), // Lo regresé, si no lo quieres en cuentos, mételo en un ConditionalRender
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) => !isAntologia(page),
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.ConditionalRender({
      component: Component.Explorer({
        title: "Explorador",
        filterFn: (node) => {
          return (
            node.displayName.toLowerCase() !== "tags" &&
            node.displayName.toLowerCase() !== "libros" &&
            node.displayName.toLowerCase() !== "conceptos" &&
            node.displayName !== "Conceptos"
          )
        },
      }),
      condition: (page) => !isAntologia(page),
    }),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.Graph(),
      condition: (page) => !isAntologia(page),
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: (page) => !isAntologia(page),
    }),
  ],
}

// 2. LAYOUT DE LISTAS (Para el index.md de la carpeta La terminal)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => !isAntologia(page),
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
      ],
    }),
    // AQUÍ FALTABA OCULTAR EL EXPLORADOR EN LA VISTA DE CARPETA
    Component.ConditionalRender({
      component: Component.Explorer(),
      condition: (page) => !isAntologia(page),
    }),
  ],
  right: [],
}
