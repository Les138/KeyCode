const TablasMultiplicar = () => {
    for (let numero = 0; numero <= 10; numero++) {
        console.log(`Tabla del ${numero}:`);
        for (let multiplicador = 0; multiplicador <= 10; multiplicador++) {
            let resultado = numero * multiplicador;
            console.log(`${numero} * ${multiplicador} = ${resultado}`);
        }
        console.log('---------------------------');
    }
};

TablasMultiplicar();