export interface IMenus {
  headers: Array<IHeaderMenu>
  menus: Array<IMenu>
}

export interface IMenu {
  text: string
  href: string
  icon: string
  title?: string
  active?: boolean
}

export interface IHeaderMenu {
  nomeEmpresa: string
  cnpj: string
  href?: string
}
