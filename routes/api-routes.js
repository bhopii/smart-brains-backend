const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  const database = {
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        password: "123cookies",
        entries: 0,
        joined: new Date(),
      },
      {
        id: 2,
        name: "Abhishek kar",
        email: "bhopii@gmail.com",
        password: "bananas",
        entries: 0,
        joined: new Date(),
      },
    ],
  };

  const { users } = database;

  app.get("/api/users", (req, res) => {
    res.send(database.users);
  });

  app.post("/api/signin", (req, res) => {
    const { email, password } = req.body;
    //Check if user exist
    if (
      users.find((user) => user.email === email && user.password === password)
    ) {
      res.send({ status: "success" });
    } else {
      res.status(404).send({ status: "Incorrect Password or User Name" });
    }
  });

  app.post("/api/register", ({ body }, res) => {
    if (users.find((user) => user.email === body.email)) {
      res.send({ status: "Email already registered!!" });
    } else {
      const obj = { ...body, id: uuidv4(), entries: 0, joined: new Date() };
      database.users.push(obj);
      res.send({ status: "success" });
    }
  });

  app.get("/api/user/:id", (req, res) => {
    res.send({ status: "success" });
  });

  app.put("/api/image", (req, res) => {
    res.send({ status: "success" });
  });
};
