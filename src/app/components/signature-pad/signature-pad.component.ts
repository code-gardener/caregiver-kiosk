import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SignatureService } from '../../services/signature.service';

@Component({
  selector: 'app-signature-pad',
  standalone: true,
  template: `
    <canvas #canvas width="300" height="150" style="border:1px solid #ccc;"></canvas>
    <button (click)="clear()">Clear</button>
    <button (click)="save()">Save</button>
  `
})
export class SignaturePadComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(private signatureService: SignatureService) {}

  ngAfterViewInit() {
    this.signatureService.init(this.canvasRef.nativeElement);
  }

  clear() {
    this.signatureService.clear(this.canvasRef.nativeElement);
  }

  save() {
    const imageData = this.signatureService.getImage(this.canvasRef.nativeElement);
    console.log('Signature image:', imageData);
  }
}