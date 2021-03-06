// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

    const register = (string) => {
        const fullName = string.split(' ');
        return { 
            nomeCompleto: string, 
            email:`${fullName[0].toLowerCase()}_${fullName[0].toLowerCase()}@trybe.com`, 
        } 
    }

    const newEmployees = (func) => {
        const employees = {
          id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
          id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
          id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
        }
        return employees;
      };
const teste = newEmployees(register)
console.log(teste)