import {Sort} from '../enums/sort.enum';
import {SortInfo} from '../interfaces/SortInfo.interface';

export const SORT: SortInfo[] = [
    {sort: Sort.TOP_SELLER, title: 'پرفروش‌ترین'},
    {sort: Sort.MOST_POPULAR, title: 'محبوب‌ترین'},
    {sort: Sort.MOST_RELEVANT, title: 'مرتبط‌ترین'},
    {sort: Sort.NEWEST, title: 'جدید‌ترین'},
    {sort: Sort.OLDEST, title: 'قدیمی‌ترین'},
];
