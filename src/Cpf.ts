export default class Cpf {
    readonly value : string;
    private FIRTS_DIGIT_FACTOR = 10;
    private SECONF_DIGIT_FACTOR = 11;

    constructor(value : string) {
        if(!this.validate(value)) throw new Error("CPF Inválido");
        this.value = value;
    }

    validate (rawCpf : string | null | undefined) {
        if (!rawCpf) return false;
        const cpf = this.cleanCpf(rawCpf);
        if (this.isInvalidLengthCpf(cpf)) return false;
        if (this.isIdenticalDigits(cpf)) return false;  
        const calculatedCheckDigit1  = this.calculateCheckDigit(cpf, this.FIRTS_DIGIT_FACTOR);
        const calculatedCheckDigit2  = this.calculateCheckDigit(cpf, this.SECONF_DIGIT_FACTOR);
        let ckeckDigit = this.extractCheckDigits(cpf);  
        const calculatedCheckDigit = `${calculatedCheckDigit1}${calculatedCheckDigit2}`;  
        return ckeckDigit == calculatedCheckDigit;
    }
    
    private cleanCpf (cpf : string) {
        return cpf.replace(/\D/g, ''); 
    }
    
    private isInvalidLengthCpf(cpf : string) {
        return cpf.length !== 11;
    }
    
    private isIdenticalDigits(cpf : string){
        const [firstDigit] = cpf;
        return [...cpf].every(digit => digit === firstDigit);
    }
    
    private calculateCheckDigit(cpf : string, factor : number){
        const total = [...cpf].reduce((total, digit) => {
            if (factor > 1) total += parseInt(digit) * factor--;
            return total;
        }, 0);
        
        const rest = total%11;
        return (rest < 2) ? 0 : 11 - rest;
    }
    
    private extractCheckDigits(cpf : string) {
        return cpf.slice(-2);
    }
};