"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_1 = require("../src/cpf");
test("Deve validar um cpf válido", function () {
    const isValid = (0, cpf_1.validate)("935.411.347-80");
    expect(isValid).toBeTruthy();
});
test("Deve validar um cpf inválido com todos os números iguais", function () {
    const isValid = (0, cpf_1.validate)("111.111.111-11");
    expect(isValid).toBeFalsy();
});
test("Deve validar um cpf inválido que seja nulo", function () {
    const isValid = (0, cpf_1.validate)(null);
    expect(isValid).toBeFalsy();
});
