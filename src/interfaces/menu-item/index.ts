import { MenuInterface } from 'interfaces/menu';
import { GetQueryInterface } from 'interfaces';

export interface MenuItemInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  menu_id: string;
  created_at?: any;
  updated_at?: any;

  menu?: MenuInterface;
  _count?: {};
}

export interface MenuItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  menu_id?: string;
}
