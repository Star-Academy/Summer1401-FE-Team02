import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'imageSource',
})
export class ImageSourcePipe implements PipeTransform {
    public transform(src: string | undefined): string | undefined {
        return src && 'https://images.igdb.com/igdb/image/upload/t_cover_big/' + src + '.jpg';
    }
}
