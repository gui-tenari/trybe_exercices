const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  

  const customerInfo = (order) => {
    const info = Object.values(order);
    console.log(`Olá ${info[3].delivery.deliveryPerson}, entrega para: ${info[0]}, Telefone:${info[1]}  ${info[2].street}, ${info[2].number}, ${info[2].apartment}`);
  }
  ;
  customerInfo(order)
  
  const orderModifier = (order) => {
   
  
  }
  
  orderModifier(order);
