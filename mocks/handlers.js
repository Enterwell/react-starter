import { rest } from 'msw';

const handlers = [
  rest.get('/pokemons', (req, res, ctx) => {
    console.log(req);


    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick'
      })
    );
  }),
  rest.get('/pokemons/1', (req, res, ctx) => {
    console.log(req);

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick'
      })
    );
  })
];

export default handlers;
