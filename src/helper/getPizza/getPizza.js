const getPizza = async () => {
  try {
    const pizza = await fetch('https://59b6v76zci.execute-api.us-west-2.amazonaws.com/nr/example');
    const jsonPizza = await pizza.json();

    return jsonPizza;
  } catch (error) {
    // console.log(error);
  }
};

export default getPizza;