import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SignatureService {
  private context: CanvasRenderingContext2D | null = null;
  private drawing = false;

  init(canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d');
    if (!this.context) return;

    canvas.addEventListener('pointerdown', this.startDraw.bind(this));
    canvas.addEventListener('pointermove', this.draw.bind(this));
    canvas.addEventListener('pointerup', this.endDraw.bind(this));
  }

  private startDraw(event: PointerEvent) {
    if (!this.context) return;
    this.context.beginPath();
    this.context.moveTo(event.offsetX, event.offsetY);
    this.drawing = true;
  }

  private draw(event: PointerEvent) {
    if (!this.context || !this.drawing) return;
    this.context.lineTo(event.offsetX, event.offsetY);
    this.context.stroke();
  }

  private endDraw() {
    this.drawing = false;
  }

  clear(canvas: HTMLCanvasElement) {
    this.context?.clearRect(0, 0, canvas.width, canvas.height);
  }

  getImage(canvas: HTMLCanvasElement): string {
    return canvas.toDataURL('image/png');
  }
}