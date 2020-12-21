import { SetCookie } from './setCookie';
import { GetCookie } from './getCookie';

export function DeleteCookie(name: string): void {
    const tmp: string | null = GetCookie(name);
    if (tmp) {
        SetCookie(name, tmp, new Date(1));
    }
}
