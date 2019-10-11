import { createConnection } from 'typeorm';

export const MysqlProviders = [
  {
    provide: `DATABASE_CONNECTION`,
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3333,
        username: 'nestuser',
        password: 'nestpwd',
        database: 'nest',
        entities: ['dist/**/**.entity.js', 'src/**/**.entity.ts'],
        logging: true,
        synchronize: true,
        dropSchema: false,
      }),
    },
];
