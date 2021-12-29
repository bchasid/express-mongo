module.exports = mongoose => {
    const Worthy = mongoose.model(
      "worthy",
      mongoose.Schema(
        {
          fieldname: {type:String,unique:true},
          permissioned: []
        },
        { timestamps: true }
      )
    );
  
    return Worthy;
  };

  //module.exports = mongoose => {
  //  var schema = mongoose.Schema(
  //    {
  //      fieldname: String,
  //      permissioned: [],
    //    },
  //    { timestamps: true }
  // );
  //
  // schema.method("toJSON", function() {
  //    const { __v, _id, ...object } = this.toObject();
  //    object.id = _id;
  //    return object;
  //  });
  //
  //  const Worthy = mongoose.model("worthy", schema);
  //  return Worthy;
  //};