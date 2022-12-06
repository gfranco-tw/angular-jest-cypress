export interface GeneratePassword{
    length: number,
    useLetters: boolean,
    useNumbers: boolean,
    useSymbols: boolean,
    password: string,
    minLength: number
}