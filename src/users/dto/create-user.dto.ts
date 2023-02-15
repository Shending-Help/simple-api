export class CreateUserDto {
  readonly username: string;
  readonly password: string;
  readonly addressBook: [
    {
      name: string;
      address: string;
      phone: string;
    },
  ];
}
