export interface NavigationItem {
  id: string;
  label: string;
  sectionId: string;
}

export const navigationItems: NavigationItem[] = [
  { id: "catalog", label: "Каталог", sectionId: "catalog" },
  { id: "about", label: "О компании", sectionId: "about" },
  { id: "contacts", label: "Контакты", sectionId: "contacts" },
  { id: "download", label: "Скачать каталог", sectionId: "catalog" },
];

