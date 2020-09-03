export class CustomError extends Error {
    public constructor(message?: string) {
        super(message);
        this.name = CustomError.name;
    }
}