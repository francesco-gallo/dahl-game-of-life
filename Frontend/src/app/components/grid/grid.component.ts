import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { seed } from 'src/app/models/seeds';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public x: number;
  public y: number;
  public world: boolean[];

  public newX: number;
  public newY: number;

  public delay: number;
  private timer: NodeJS.Timeout;

  // expose enum to template
  public seed = seed;

  public items: MenuItem[];

  constructor(protected api: ApiService) {
    this.items = [
      {label: 'Empty', command: () => {this.generateSeed(seed.empty);}},
      {label: 'Oscillators', command: () => {this.generateSeed(seed.oscillators);}},
      {label: 'Pulsar', command: () => {this.generateSeed(seed.pulsar);}},
      {label: 'Spaceship', command: () => {this.generateSeed(seed.spaceships);}},
    ]
  }

  ngOnInit() {
    this.newX = this.x = environment.initialX;
    this.newY = this.y = environment.initialY;
    this.delay = 200;
    this.initGrid(this.x, this.y, seed.random);
  }

  public generateSeed(type: seed) {
    this.initGrid(this.newX, this.newY, type);
  }

  private initGrid(x: number, y: number, type: seed): void {
    clearInterval(this.timer);
    this.api.generate(x, y, type).subscribe(worldData => {
      this.newX = this.x = worldData.x;
      this.newY = this.y = worldData.y;
      this.world = worldData.world;
    }, error => {
      console.error(error)
    })
  }

  public start(): void {
    this.stop();
    // to be updated with the eventually changed delay
    this.timer = setInterval((self) => {
      self.stop();
      self.step();
      self.start();
    }, this.delay, this);
  }

  public step(): void {
    this.api.tick(this.x, this.y, this.world).subscribe(world => {
      this.world = world;
      if (this.world.every(val => val === false)) {
        this.stop();
      }
    }, error => {
      console.error(error);
    })
  }

  public stop(): void {
    clearInterval(this.timer);
    this.timer = null;
  }

  public cellClicked(index: number) {
    this.world[index] = !this.world[index];
  }

}
