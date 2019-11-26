export class Card {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    company: string;

    constructor(fn: string, ln: string, c: string, e: string, p: string) {
        this.firstname = fn;
        this.lastname = ln;
        this.company = c;
        this.email = e;
        this.phone = p;
    }
}
