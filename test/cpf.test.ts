import { validateCpf } from "../src/validatecpf"

test("Deve validar um cpf válido", function () {

    const isValid = validateCpf("935.411.347-80");
    expect(isValid).toBeTruthy();

})

const wrongSameDigitCpf = [
    "111.111.111-11",
    "222.222.222-22",
    "333.333.333-33"
];

test.each(wrongSameDigitCpf)("Deve validar um cpf inválido com todos os números iguais", function (cpf) {

    const isValid2 = validateCpf(cpf);
    expect(isValid2).toBeFalsy();

})

test("Deve validar um cpf inválido que seja nulo", function () {

    const isValid3 = validateCpf(null);
    expect(isValid3).toBeFalsy();

})

test("Deve validar um cpf válido sem pontos e traços", function () {

    const isValid4 = validateCpf("93541134780");
    expect(isValid4).toBeTruthy();

})

test("Deve validar um cpf com alguns pontos e traços", function () {

    const isValid5 = validateCpf("935.411347-80");
    expect(isValid5).toBeTruthy();

})