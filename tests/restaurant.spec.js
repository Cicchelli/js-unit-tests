const createMenu = require("../src/restaurant");

describe("10 - Implemente a função `createMenu`, bem como seus casos de teste", () => {
  it("Verifica se a função `createMenu` tem o comportamento esperado", () => {
    
    expect(typeof createMenu({ teste: "avalia" }).fetchMenu).toBe("function");

    expect(
      Object.keys(createMenu({ food: {}, drink: {} }).fetchMenu())
    ).toStrictEqual(["food", "drink"]);

    expect(createMenu({ Objeto: "aleatorio" }).fetchMenu()).toStrictEqual({
      Objeto: "aleatorio",
    });

    expect(createMenu({ Objeto: "aleatorio" }).consumption).toStrictEqual([]);

    const condicao = createMenu({ Objeto: "aleatorio" });
    condicao.order("coxinha");
    expect(condicao.consumption).toStrictEqual(["coxinha"]);

    condicao.order("refrigerante");
    condicao.order("bife");
    condicao.order("macarronada");
    expect(condicao.consumption).toStrictEqual([
      "coxinha",
      "refrigerante",
      "bife",
      "macarronada",
    ]);

    const condicao2 = createMenu({ Objeto: "aleatorio" });
    condicao2.order("coxinha");
    condicao2.order("agua");
    condicao2.order("coxinha");
    expect(condicao2.consumption).toStrictEqual(["coxinha", "agua", "coxinha"]);

    const condicao3 = createMenu({
      food: { coxinha: 3.9, sopa: 9.9 },
      drink: { agua: 3.9, cerveja: 6.9 },
    });
    condicao3.order("coxinha");
    condicao3.order("agua");
    condicao3.order("coxinha");
    expect(condicao3.pay()).toBeCloseTo(11.7);
  });
});
