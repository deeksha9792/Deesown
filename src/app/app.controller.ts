import { Controller, Get } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Controller()
export class AppController {
  constructor(private configService: ConfigService) {}
  @Get()
  getHello(): string {
    return "Hello World!";
  }

  @Get("about") // GET http://localhost:3000/about
  getAbout(): string {
    return "About Page!";
  }
}
