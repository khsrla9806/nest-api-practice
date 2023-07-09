import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    @Get() // AppController 같은 경우는 주로 이런 용도로 사용이 된다.
    home() {
        return "영화 API 서비스에 오신걸 환영합니다.";
    }
}