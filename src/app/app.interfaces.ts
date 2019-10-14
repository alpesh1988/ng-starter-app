export interface NavigationItem {
  name: string;
  url: string;
  routerObj?: {
    primary: {
      url: any;
      params?: any;
    },
    detail: {
      url: any;
      params?: any;
    }
  };
  icon?: string;
}
