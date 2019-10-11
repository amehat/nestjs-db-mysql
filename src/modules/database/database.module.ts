import { Module } from '@nestjs/common';
import { MysqlProviders } from './providers/mysql.providers';

@Module({
    providers: [...MysqlProviders],
    exports: [...MysqlProviders],
})
export class DatabaseModule { }
