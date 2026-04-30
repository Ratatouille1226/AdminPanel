export interface StoreSettings {
  id: number;
  name: string;
  description?: string;
  phone?: string;
  email?: string;
  address?: string;
}

export type StoreForm = {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: string;
};