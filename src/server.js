import { createServer, Model, Response } from "miragejs";

createServer({
  models: {
    products: Model,
  },

  seeds(server) {
    server.create("product", {
      id: "1",
      name: "Lock & Dam #11™ ground",
      itemPrice: "$12/Bag",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "lockdamcoffee.jpeg",
      type: "coffee",
    });
    server.create("product", {
      id: "2",
      name: "Sample Pack - six ground coffee packs",
      itemPrice: "$20/Pack",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "samplecoffee.jpeg",
      type: "coffee",
    });
    server.create("product", {
      id: "3",
      name: "Mississippi Grogg® ground",
      itemPrice: "$12/Bag",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "mississippicoffee.jpeg",
      type: "coffee",
    });
    server.create("product", {
      id: "4",
      name: "Cow Tipper® ground",
      itemPrice: "$12/Bag",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "cowtippercoffee.jpeg",
      type: "coffee",
    });
    server.create("product", {
      id: "5",
      name: "Coffee Gift Basket",
      itemPrice: "$35/Basket",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "GiftBasketcoffee.jpeg",
      type: "coffee",
    });
    server.create("product", {
      id: "6",
      name: " Crumb Cake",
      itemPrice: "$27/Cake",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "crumbcake.jpeg",
      type: "food",
    });
    server.create("product", {
      id: "7",
      name: "All Butter Croissant ",
      itemPrice: "$4.50/Croissant",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "croissant.jpeg",
      type: "food",
    });
    server.create("product", {
      id: "8",
      name: " Ham and Gruyere Croissant",
      itemPrice: "$5.50/Croissant",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "hamgruyere.jpeg",
      type: "food",
    });
    server.create("product", {
      id: "9",
      name: " Pastry Cream Filled Cruffins",
      itemPrice: "$4.50/Pastry",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "cruffins.jpeg",
      type: "food",
    });
    server.create("product", {
      id: "10",
      name: "Banana Chocolate Chip Streusel Coffee Cake",
      itemPrice: "$4.50/Slice",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "cakebars.jpeg",
      type: "food",
    });
    server.create("product", {
      id: "11",
      name: " Ovalware RJ3 Cold Brew Maker",
      itemPrice: "$36/Per",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "ovalwarediy.jpeg",
      type: "diy",
    });
    server.create("product", {
      id: "12",
      name: " Osso Ceramics Pour Over",
      itemPrice: "$42/Per",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "ossopourover.jpeg",
      type: "diy",
    });
    server.create("product", {
      id: "13",
      name: "Hario V60 Paper Filter, 02 White 40ct Box",
      itemPrice: "$5/Box",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "filtersdiy.jpeg",
      type: "diy",
    });
    server.create("product", {
      id: "14",
      name: " KitchenAid® Artisan Stand Mixer, 5 Qt.",
      itemPrice: "$450/Per",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "kitchenaid.png",
      type: "diy",
    });
    server.create("product", {
      id: "15",
      name: " Sur La Table Platinum Pro Half Sheet Pans",
      itemPrice: "$60 For 2 Pans",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quasi a ullam quos aliquam natus ab ipsam nulla suscipit.",
      imageUrl: "pans.png",
      type: "diy",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/products", (schema, request) => {
      //   return new Response(400, {}, { error: "Error fetching data" });
      return schema.products.all();
    });

    this.get("/products/:id", (schema, request) => {
      const id = request.params.id;
      return schema.products.find(id);
    });

    this.get("/coffee", (schema, request) => {
      //   return new Response(400, {}, { error: "Error fetching data" });
      return schema.products.where({ type: "coffee" });
    });

    this.get("/coffee/:id", (schema, request) => {
      const id = request.params.id;
      return schema.products.find(id);
    });

    this.get("/fresh-bakes", (schema, request) => {
      //   return new Response(400, {}, { error: "Error fetching data" });
      return schema.products.where({ type: "food" });
    });

    this.get("/fresh-bakes/:id", (schema, request) => {
      const id = request.params.id;
      return schema.products.findBy({ id, type: "food" });
    });

    this.get("/diy", (schema, request) => {
      //   return new Response(400, {}, { error: "Error fetching data" });
      return schema.products.where({ type: "diy" });
    });

    this.get("/diy/:id", (schema, request) => {
      const id = request.params.id;
      return schema.products.findBy({ id, type: "diy" });
    });
  },
});
