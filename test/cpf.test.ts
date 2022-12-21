import { validate } from "../src/cpf"

test("Deve validar um cpf válido", function () {

    const isValid = validate("935.411.347-80");
    expect(isValid).toBeTruthy();

})

const wrongSameDigitCpf = [
    "111.111.111-11",
    "222.222.222-22",
    "333.333.333-33"
];

test.each(wrongSameDigitCpf)("Deve validar um cpf inválido com todos os números iguais", function (cpf) {

    const isValid = validate(cpf);
    expect(isValid).toBeFalsy();

})

test("Deve validar um cpf inválido que seja nulo", function () {

    const isValid = validate(null);
    expect(isValid).toBeFalsy();

})

test("Deve validar um cpf válido sem pontos e traços", function () {

    const isValid = validate("93541134780");
    expect(isValid).toBeTruthy();

})

test("Deve validar um cpf com alguns pontos e traços", function () {

    const isValid = validate("935.411347-80");
    expect(isValid).toBeTruthy();

})