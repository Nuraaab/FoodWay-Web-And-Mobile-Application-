
const Food = require('../models/Food')
const Build =require('../models/Build')
const {builds ,foods}  = require('../server/data')
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require('graphql');


const BuildType = new GraphQLObjectType({
  name: 'Build',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLString },
    buildImage: { type: GraphQLString },
    food: {
      type: FoodType,
      resolve(parent, args) {
      // return Food.findById(parent.foodId);
        return foods.find(food=> food.id===parent.foodId);
      },
    },
  }),
});

// Client Type
const FoodType = new GraphQLObjectType({
  name: 'Food',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    price: { type: GraphQLString },
    build: {
      type: BuildType,
      resolve(parent, args) {
        // return Build.findById(parent.id);
        
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // builds: {
    //   type: new GraphQLList(BuildType),
    //   resolve(parent, args) {
    //     return Build.find();
    //   },
    // },
    build: {
      type: BuildType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return builds.find(build=>build.id===args.id);
        // return Build.findById(args.id);
      },
    },
    foods: {
      type: new GraphQLList(FoodType),
      resolve(parent, args) {
        return foods;
        // return Food.find();
      },
    },

    food: {
      type: FoodType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return foods.find(food =>food.id === args.id);
        // return Food.findById(args.id);
      },
    },
  },
});
// const mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     // Add a food
//     addFood: {
//       type: FoodType,
//       args: {
//         name: { type: GraphQLNonNull(GraphQLString) },
//         image: { type: GraphQLNonNull(GraphQLString) },
//         price: { type: GraphQLNonNull(GraphQLString) },
//       },
//       resolve(parent, args) {
//         const food = new Food({
//           name: args.name,
//           image: args.image,
//           price: args.price,
//         });

//         return food.save();
//       },
//     },
    
//     // Add a build

//     // addBuild: {
//     //   type: BuildType,
//     //   args: {
//     //     name: { type: GraphQLNonNull(GraphQLString) },
//     //     price: { type: GraphQLNonNull(GraphQLString) },
//     //     buildImage: { type: GraphQLNonNull(GraphQLString) },
//     //     foodId: { type: GraphQLNonNull(GraphQLID) },
//     //   },
//     //   resolve(parent, args) {
//     //     const build = new Build({
//     //       name: args.name,
//     //       price: args.price,
//     //       buildImage: args.buildImage,
//     //       foodId: args.foodId,
//     //     });

//     //     return build.save();
//     //   },
//     // },
    

//     // deleteBuild: {
//     //   type: BuildType,
//     //   args: {
//     //     id: { type: GraphQLNonNull(GraphQLID) },
//     //   },
//     //   resolve(parent, args) {
//     //     return Build.findByIdAndRemove(args.id);
//     //   },
//     // },



//     // Update a project
//     // updateBuild: {
//     //   type: BuildType,
//     //   args: {
//     //     id: { type: GraphQLNonNull(GraphQLID) },
//     //     name: { type: GraphQLString },
//     //     price: { type: GraphQLString },
//     //     buildImage:{type:GraphQLString},
//     //   },
//     //   resolve(parent, args) {
//     //     return Build.findByIdAndUpdate(
//     //       args.id,
//     //       {
//     //         $set: {
//     //           name: args.name,
//     //           price: args.price,
//     //           buildImage: args.buildImage,
//     //         },
//     //       },
//     //       { new: true }
//     //     );
//     //   },
//     // },
//   },
// });

module.exports = new GraphQLSchema({
    query: RootQuery,
   
  });