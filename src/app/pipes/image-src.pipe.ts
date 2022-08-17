import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'imageSrc',
})
export class ImageSrcPipe implements PipeTransform {
    public transform(id: string, type: string): string {
        return `https://images.igdb.com/igdb/image/upload/t_${type}/${id}.jpg`;
    }
}
