export enum AddressType {
  HOME = 'HOME',
  OFFICE = 'OFFICE',
  POSDTAL_ADDRESS = 'POSTAL_ADDRESS',
}

export interface Address {
  city: string;
  street: string;
  postalCode: string;
  type: AddressType;
}

export enum PhoneType {
  MOBILE = 'MOBILE',
  OFFICE = 'OFFICE',
  HOME = 'HOME',
}

export interface PhoneNumber {
  phoneNumber: string;
  phoneType: PhoneType;
}

export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  // addresses: Address[];
  phones: PhoneNumber[];
  id?: string;
}
