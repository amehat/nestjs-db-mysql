import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTodoDto {
    @ApiModelProperty({
        required: true,
        type: 'string',
    })
    readonly title: string;

    @ApiModelProperty({
        required: false,
    })
    readonly description?: string;
}
