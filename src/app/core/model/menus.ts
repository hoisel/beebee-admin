export interface Menu {
  header: MenuHeader[]
  items: MenuItem[]
}

export interface MenuItem {
  text: string
  href: string
  icon: string
  title?: string
  active?: boolean,
  subItems?: MenuItem
}

export interface MenuHeader {
  nomeEmpresa: string
  cnpj: string
  href?: string
}
