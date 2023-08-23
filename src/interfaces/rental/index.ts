import { UserInterface } from 'interfaces/user';
import { ToolInterface } from 'interfaces/tool';
import { OutletInterface } from 'interfaces/outlet';
import { GetQueryInterface } from 'interfaces';

export interface RentalInterface {
  id?: string;
  tool_id: string;
  outlet_id: string;
  user_id: string;
  rental_date?: any;
  return_date?: any;
  created_at?: any;
  updated_at?: any;
  user_user_rental_idTorental?: UserInterface[];
  tool?: ToolInterface;
  outlet?: OutletInterface;
  user_rental_user_idTouser?: UserInterface;
  _count?: {
    user_user_rental_idTorental?: number;
  };
}

export interface RentalGetQueryInterface extends GetQueryInterface {
  id?: string;
  tool_id?: string;
  outlet_id?: string;
  user_id?: string;
}
