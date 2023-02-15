export class User {
  id: string;
  username: string;
  password: string;
  addressBook: [
    {
      name: string;
      address: string;
      phone: string;
    },
  ];
}
