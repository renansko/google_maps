import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

// ?text=parana mg

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  findPlace(@Query('text') text: string) {
    return this.placesService.findPlace(text);
  }
}
